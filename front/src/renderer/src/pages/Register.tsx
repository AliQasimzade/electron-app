import { useFormik } from "formik";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import * as Yup from "yup";
import clsx from "clsx";
import { RiImageEditFill } from "react-icons/ri";
import { convertToBase64 } from "@renderer/helpers/convertToBase64";
import { api } from "@renderer/api/api";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

interface RegisterFields {
    name: string,
    surname: string,
    email: string,
    password: string,
    image?: string | null,
    phone?: string | null
}

const registerSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Minimum 3 symbols').max(50, 'Maximum 50 symbols').required("Name is require"),
    surname: Yup.string().min(4, 'Minimum 4 symbols').max(50, "Maximum 50 symbols").required("Surname is require"),
    email: Yup.string().email("Wrong email format").min(6, 'Minimum 6 symbols').max(50, 'Maximum 50 symbols').required("Email is require"),
    password: Yup.string().min(6, 'Minimum 6 symbols').max(50, 'Maximum 50 symbols').required("Password is require"),
    image: Yup.string(),
    phone: Yup.string()
})
const Register = (): JSX.Element => {

    const navigate = useNavigate();
    const [registerFields] = useState<RegisterFields>({
        name: "",
        surname: "",
        email: "",
        password: '',
        image: '',
        phone: ''
    });

    const [loading, setLoading] = useState<boolean>(false);

    const formik = useFormik<RegisterFields>({
        initialValues: {
            ...registerFields
        },
        validationSchema: registerSchema,
        onSubmit: async (values: RegisterFields): Promise<void> => {

            try {
                const request = await api.post('users', { ...values, image: values.image === '' ? null : values.image.split(',')[1], phone: values.phone === '' ? null : values.phone });

                if (request.status === 201) {
                    toast.success(request.data?.message);
                    setLoading(false);
                    setTimeout(() => {
                        navigate('/login')
                    }, 1200)

                } else {
                    throw new Error(request.data)
                }
            } catch (error: any) {
                setLoading(false);
                toast.error(error?.response?.data?.message);
                console.log(error);


            }

        }
    })

    const handleChangeImage = async e => {
        const image = await convertToBase64(e.target.files[0]);

        if (image) {
            formik.setFieldValue('image', image)
        }
    }


    const submitHandle = (e: any) => {
        e.preventDefault();
        setLoading(true);
        formik.handleSubmit()

    }
    return (
        <>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <div className="d-flex login_form col-6 align-items-center mx-auto">
                <div className="bg-body w-100 d-flex flex-column flex-center rounded-4 w-md-600px p-5">
                    <form className="d-flex flex-column gap-3 w-50 m-auto" onSubmit={submitHandle}>
                        <h2 className="w-100 text-center">Register Page</h2>
                        <div className="field d-flex flex-column ">
                            <label htmlFor="image" className="required mb-1">Image(optional)</label>
                            <div className="image_container rounded bg-secondary-subtle position-relative" style={{ width: "220px", height: "120px" }}>
                                {formik.values.image && <img src={formik.values.image} alt="user" className="w-100 h-100 position-absolute object-fit-fill" />}
                                <button className="position-absolute rounded end-0 bottom-0 btn btn-primary" style={{ width: '40px', height: '40px' }}>
                                    <RiImageEditFill />
                                    <input type="file" accept="image/*" onChange={handleChangeImage} id="image" placeholder="Image" className="form-control form-control-solid mb-3 opacity-0 mb-lg-0 top-0 start-0 position-absolute w-100 h-100"
                                        disabled={formik.isSubmitting}
                                    />
                                </button>
                            </div>

                        </div>

                        <div className="d-flex align-items-center w-100 justify-content-end gap-3">
                            <div className="field d-flex flex-column gap-2">
                                <label htmlFor="name" className="required">Name</label>
                                <input type="text" {...formik.getFieldProps('name')} name="name" id="name" placeholder="Name" className={clsx('form-control form-control-solid mb-3 mb-lg-0',
                                    { 'is-invalid': formik.touched.name && formik.errors.name },
                                    {
                                        'is-valid': formik.touched.name && !formik.errors.name,
                                    })}
                                    disabled={formik.isSubmitting}
                                />
                                {formik.touched.name && formik.errors.name && <div className="error_field">
                                    <span role="alert" className="text-danger">
                                        {formik.errors.name}
                                    </span>
                                </div>}
                            </div>

                            <div className="field d-flex flex-column gap-2">
                                <label htmlFor="surname" className="required">Surname</label>
                                <input type="text" {...formik.getFieldProps('surname')} name="surname" id="surname" placeholder="Surname" className={clsx('form-control form-control-solid mb-3 mb-lg-0',
                                    { 'is-invalid': formik.touched.surname && formik.errors.surname },
                                    {
                                        'is-valid': formik.touched.surname && !formik.errors.surname,
                                    })}
                                    disabled={formik.isSubmitting}
                                />
                                {formik.touched.surname && formik.errors.surname && <div className="error_field">
                                    <span role="alert" className="text-danger">
                                        {formik.errors.surname}
                                    </span>
                                </div>}
                            </div>

                        </div>
                        <div className="d-flex align-items-center w-100 justify-content-end gap-3">
                            <div className="field d-flex flex-column gap-2">
                                <label htmlFor="email" className="required">Email</label>
                                <input type="email" {...formik.getFieldProps('email')} name="email" id="email" placeholder="Email" className={clsx('form-control form-control-solid mb-3 mb-lg-0',
                                    { 'is-invalid': formik.touched.email && formik.errors.email },
                                    {
                                        'is-valid': formik.touched.email && !formik.errors.email,
                                    })}
                                    disabled={formik.isSubmitting}
                                />
                                {formik.touched.email && formik.errors.email && <div className="error_field">
                                    <span role="alert" className="text-danger">
                                        {formik.errors.email}
                                    </span>
                                </div>}
                            </div>


                            <div className="field d-flex flex-column gap-2">
                                <label htmlFor="password" className="required">Password</label>
                                <input type="password" {...formik.getFieldProps('password')} name="password" id="password" placeholder="Password" className={clsx('form-control form-control-solid mb-3 mb-lg-0',
                                    { 'is-invalid': formik.touched.password && formik.errors.password },
                                    {
                                        'is-valid': formik.touched.password && !formik.errors.password,
                                    })}
                                    disabled={formik.isSubmitting}
                                />
                                {formik.touched.password && formik.errors.password && <div className="error_field">
                                    <span role="alert" className="text-danger">
                                        {formik.errors.password}
                                    </span>
                                </div>}
                            </div>
                        </div>

                        <div className="field d-flex flex-column gap-2">
                            <label htmlFor="phone" className="required">Phone number(optional)</label>
                            <input type="number" {...formik.getFieldProps('phone')} name="phone" id="phone" placeholder="Phone" className="form-control form-control-solid mb-3 mb-lg-0"
                                disabled={formik.isSubmitting}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={loading}>{loading ? 'Please wait...' : 'Sign up'}</button>
                    </form>
                    <div className="already_account_container d-flex w-100 justify-content-center mt-2">
                        <p>
                            <span className="text-secondary">Already have an Account?</span>
                            <Link to='/login' className="text-primary text-decoration-none">Sign in</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
