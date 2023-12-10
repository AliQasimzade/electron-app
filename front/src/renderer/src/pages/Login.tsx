import { useFormik } from "formik"
import * as Yup from "yup";
import clsx from "clsx";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { api } from "@renderer/api/api";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { JWTResponse } from "@renderer/types.d";
import { useAppDispatch } from "@renderer/redux-store/store";
import { getUser } from "@renderer/redux-store/slices/userSlice";
interface LoginFields {
    email: string,
    password: string
}
const loginSchema = Yup.object().shape({
    email: Yup.string().email("Wrong email format").min(6, 'Minimum 6 symbols').max(50, "Maximum 50 symbols").required("Email is required"),
    password: Yup.string().min(6, "Minimum 6 symbols").max(50, "Maximum 50 symbols").required("Password is required")
})

const Login = (): JSX.Element => {

    const dispacth = useAppDispatch()
    const navigate = useNavigate()
    const [loginFields] = useState<LoginFields>({
        email: "",
        password: ""
    });

    const [userId, setUserId] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false);

    const getUserById = async (): Promise<any> => {

        try {
            const request = await api.get(`users/${userId}`);

            if (request.status === 200) {
                toast.success("User is successfully login")
                dispacth(getUser(request.data.user))
                setTimeout(() => navigate('/dashboard'), 1200)
                return request.data.user
            } else {
                throw new Error(request.data)
            }
        } catch (error: any) {
            toast.error(error?.response?.data?.message);
            return error.message
        }

    }

    const query: UseQueryResult<any, Error> = useQuery({ queryKey: ['userbyid'], queryFn: getUserById, enabled: false })

    const loginRequest = async (vals: LoginFields): Promise<any> => {
        try {
            const request = await api.post('login', vals);

            if (request.status === 200) {

                localStorage.setItem('token', request.data.token)
                setLoading(false);
                const token = request.data.token;
                const decoded: JWTResponse = jwtDecode(token);
                setUserId(decoded.id)
                setTimeout(() => query.refetch(), 1000)
                return decoded.id;
            } else {
                throw new Error(request.data)
            }
        } catch (error: any) {

            toast.error(error?.response?.data?.message);
            setLoading(false)
            return error.message
        }
    }
    const mutation: UseMutationResult<any, Error, LoginFields, unknown> = useMutation({
        mutationFn: loginRequest,

    })


    const formik = useFormik<LoginFields>({
        initialValues: {
            ...loginFields
        },
        validationSchema: loginSchema,
        onSubmit: async (values) => {
            try {
                await mutation.mutateAsync(values)
            } catch (error: any) {
                setLoading(false)
                console.log(error.message);

            }
        }

    })

    const submitHandle = (e: any) => {
        e.preventDefault();
        setLoading(true);
        formik.handleSubmit()

    }
    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>

            <div className="d-flex login_form col-6 align-items-center mx-auto">
                <div className="bg-body w-100 d-flex flex-column flex-center rounded-4 w-md-600px p-5 mx-auto">
                    <form className="d-flex flex-column gap-3 w-50 m-auto" onSubmit={submitHandle}>
                        <h2 className="w-100 text-center">Login Page</h2>
                        <div className="field d-flex flex-column gap-2">
                            <label htmlFor="email" className="required">Email</label>
                            <input type="email" {...formik.getFieldProps('email')} name="email" placeholder="Email" className={clsx('form-control form-control-solid mb-3 mb-lg-0',
                                { 'is-invalid': formik.touched.email && formik.errors.email },
                                {
                                    'is-valid': formik.touched.email && !formik.errors.email,
                                })}
                                disabled={formik.isSubmitting}
                                id="email"
                            />
                            {
                                formik.touched.email && formik.errors.email && <div className="error_field">
                                    <span role="alert" className="text-danger">
                                        {formik.errors.email}
                                    </span>
                                </div>
                            }
                        </div>
                        <div className="field d-flex flex-column gap-2">
                            <label htmlFor="password" className="required">Password</label>
                            <input type="password"
                                {...formik.getFieldProps('password')}
                                name="password"
                                className={clsx('form-control form-control-solid mb-3 mb-lg-0',
                                    { 'is-invalid': formik.touched.password && formik.errors.password },
                                    {
                                        'is-valid': formik.touched.password && !formik.errors.password,
                                    })}
                                disabled={formik.isSubmitting}
                                placeholder="Password"
                                id="password"
                            />
                            {
                                formik.touched.password && formik.errors.password && <div className="error_field">
                                    <span role="alert" className="text-danger">
                                        {formik.errors.password}
                                    </span>
                                </div>
                            }
                        </div>
                        <div className="forgot_password_container d-flex justify-content-end w-100">
                            <Link className="link-primary fw-semibold" to="/reset-password">Forgot Password ?</Link>
                        </div>
                        <button type="submit" disabled={loading} className="btn btn-primary">{loading ? "Please wait..." : "Login"}</button>
                    </form>
                    <div className="not_a_member_yet mt-2">
                        <p className="d-flex align-items-center flex-wrap w-100 justify-content-center">
                            <span className="text-gray-500">Not a member yet ? </span>
                            <Link className="link-primary fw-semibold" to="/register">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
