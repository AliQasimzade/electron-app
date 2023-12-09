import { useFormik } from "formik"
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { object, string } from "yup";
import clsx from "clsx";
import { api } from "@renderer/api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
interface ResetPasswordFields {
    email: string,
    currentPassword: string,
    newPassword: string
}


const resetPasswordSchema = object().shape({
    email: string().email("Wrong email format").min(6, 'Minimum 6 symbols').max(50, 'Maximum 50 symbols').required("Email is require"),
    currentPassword: string().min(6, 'Minimum 6 symbols').max(50, 'Maximum 50 symbols').required("Current password is require"),
    newPassword: string().min(6, 'Minimum 6 symbols').max(50, 'Maximum 50 symbols').required("New password is require")

})
const ResetPassword = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const [resetPasswordFields] = useState<ResetPasswordFields>({
        email: "",
        currentPassword: "",
        newPassword: ''
    })


    const formik = useFormik<ResetPasswordFields>({
        initialValues: {
            ...resetPasswordFields
        },
        validationSchema: resetPasswordSchema,

        onSubmit: async (values: ResetPasswordFields) => {
            try {
                const request = await api.post('reset-password', values);

                if (request.status === 200) {
                    toast.success(request.data?.message)
                    setLoading(false)
                    setTimeout(() => navigate('/login'), 2500)
                    
                } else {
                    throw new Error(request.data)
                }

            } catch (error: any) {
                setLoading(false)
                toast.error(error?.response?.data?.message)
            }
        }
    });

    const submitHandle = (e: any) => {
        e.preventDefault();
        setLoading(true);
        formik.handleSubmit()

    }
    return (
        <>
            <Helmet>
                <title>Reset Password</title>
            </Helmet>
            <div className="d-flex login_form col-6 align-items-center mx-auto">
                <div className="bg-body w-100 d-flex flex-column flex-center rounded-4 w-md-600px p-5">
                    <form className="d-flex flex-column gap-3 w-50 m-auto" onSubmit={submitHandle}>
                        <h2 className="w-100 text-center">Reset Password Page</h2>

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
                            <label htmlFor="currentpassword" className="required">Current password</label>
                            <input type="password"
                                {...formik.getFieldProps('currentPassword')}
                                name="currentPassword"
                                className={clsx('form-control form-control-solid mb-3 mb-lg-0',
                                    { 'is-invalid': formik.touched.currentPassword && formik.errors.currentPassword },
                                    {
                                        'is-valid': formik.touched.currentPassword && !formik.errors.currentPassword,
                                    })}
                                disabled={formik.isSubmitting}
                                placeholder="Current password"
                                id="currentpassword"
                            />
                            {
                                formik.touched.currentPassword && formik.errors.currentPassword && <div className="error_field">
                                    <span role="alert" className="text-danger">
                                        {formik.errors.currentPassword}
                                    </span>
                                </div>
                            }
                        </div>



                        <div className="field d-flex flex-column gap-2">
                            <label htmlFor="newpassword" className="required">New password</label>
                            <input type="password"
                                {...formik.getFieldProps('newPassword')}
                                name="newPassword"
                                className={clsx('form-control form-control-solid mb-3 mb-lg-0',
                                    { 'is-invalid': formik.touched.newPassword && formik.errors.newPassword },
                                    {
                                        'is-valid': formik.touched.newPassword && !formik.errors.newPassword,
                                    })}
                                disabled={formik.isSubmitting}
                                placeholder="New password"
                                id="newpassword"
                            />
                            {
                                formik.touched.newPassword && formik.errors.newPassword && <div className="error_field">
                                    <span role="alert" className="text-danger">
                                        {formik.errors.newPassword}
                                    </span>
                                </div>
                            }
                        </div>
                        <button type="submit" disabled={loading} className="btn btn-primary">{loading ? 'Please wait...' : 'Reset password'} </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default ResetPassword
