import { lazy, Suspense } from "react"
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import { BrowserRouter as Router } from 'react-router-dom'
import Loader from "@renderer/layout/loading/Loader";
import App from "@renderer/App";
import ResetPassword from "@renderer/pages/ResetPassword";
const { BASE_URL } = import.meta.env
import { useAppSelctor } from "@renderer/redux-store/store";
import NotFound from "@renderer/pages/NotFound";
const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));


const Login = lazy(() => delay(1000).then(() => import('@renderer/pages/Login')));
const Register = lazy(() => delay(1000).then(() => import('@renderer/pages/Register')));

const AppRoutes = () => {

    const user = useAppSelctor((state: any) => state.persistedReducer.user.user)

    console.log(user);

    return (
        <Router basename={BASE_URL}>
            <Routes >
                <Route element={<App />}>
                    {
                        user ? <>
                            <Route path="/*" element={<PrivateRoutes />} />
                            <Route index element={<Navigate to="/dashboard" />} />
                        </> : <>
                            <Route path="login" element={<Login />} />
                            <Route index element={<Navigate to="/login" />} />

                        </>
                    }
                    <Route path="login" element={
                        <Suspense fallback={<Loader />}>
                            <Login />
                        </Suspense>
                    } />
                    <Route path="register" element={
                        <Suspense fallback={<Loader />}>
                            <Register />
                        </Suspense>
                    } />

                    <Route path="reset-password" element={
                        <ResetPassword />
                    } />
                    <Route path="error/404" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>

    )
}

export default AppRoutes
