import { lazy, Suspense } from "react"
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import { HashRouter } from 'react-router-dom'
import Loader from "@renderer/layout/loading/Loader";
import App from "@renderer/App";
import ResetPassword from "@renderer/pages/ResetPassword";
// import { useAppSelector } from "@renderer/redux-store/store";
import NotFound from "@renderer/pages/NotFound";
const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));


const Login = lazy(() => delay(1000).then(() => import('@renderer/pages/Login')));
const Register = lazy(() => delay(1000).then(() => import('@renderer/pages/Register')));

const AppRoutes = () => {

    // const user = useAppSelector((state: any) => state.persistedReducer.user.user)

    return (
        <HashRouter>
            <Routes >
                <Route element={<App />}>
                    {/* {
                        user ? <>
                            <Route path="/*" element={<PrivateRoutes />} />
                            <Route index element={<Navigate to="/dashboard" />} />
                        </> : <>
                            <Route path="login" element={<Login />} />
                            <Route index element={<Navigate to="/login" />} />

                        </>
                    } */}

                    <Route path="/*" element={<PrivateRoutes />} />
                    <Route index element={<Navigate to="/pos" />} />
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
        </HashRouter>

    )
}

export default AppRoutes
