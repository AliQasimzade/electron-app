import { useFormik } from "formik"
import * as Yup from "yup";
import clsx from "clsx";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { api } from "@renderer/api/api";

interface LoginField {
    email: string,
    password: string
}
const loginSchema = Yup.object().shape({
    email: Yup.string().email("Wrong email format").min(6, 'Minimum 6 symbols').max(50, "Maximum 50 symbols").required("Email is required"),
    password: Yup.string().min(6, "Minimum 6 symbols").max(50, "Maximum 50 symbols").required("Password is required")
})

const Login = () => {

    const [loginFields] = useState<LoginField>({
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState<boolean>(false)

    const formik = useFormik<LoginField>({
        initialValues: {
            ...loginFields
        },
        validationSchema: loginSchema,
        onSubmit: async (values: LoginField): Promise<void> => {

            try {
                const request = await api.post('login', values);

                if (request.status === 201) {
                    console.log(request.data);
                    setLoading(false)

                } else {
                    setLoading(false)
                    throw new Error(request.data)
                }
            } catch (error: any) {
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

            <div className="login_form container d-flex align-items-center">
                <form className="d-flex flex-column gap-5 w-50 m-auto" onSubmit={submitHandle}>
                    <h2>Login Page</h2>
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
                    <button type="submit" disabled={loading} className="btn btn-primary">{loading ? "Please wait..." : "Login"}</button>
                </form>
            </div>
        </>
    )
}

export default Login
