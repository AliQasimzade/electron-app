import { lazy, Suspense } from "react"
import { Routes, Route, Navigate } from "react-router-dom";
import App from '@renderer/App';
import PrivateRoutes from "./PrivateRoutes";
import { BrowserRouter as Router } from 'react-router-dom'
import Loader from "@renderer/layout/loading/Loader";
const { BASE_URL } = import.meta.env

const Login = lazy(() => import('@renderer/pages/Login'));


const AppRoutes = () => {
    return (
        <Router basename={BASE_URL}>
            <Routes >
                <Route element={<App />}>
                    <Route path="/*" element={<PrivateRoutes />} />
                    <Route index element={<Navigate to="/dashboard" />} />
                    <Route path="login" element={
                        <Suspense fallback={<Loader />}>
                            <Login />
                        </Suspense>
                    } />

                </Route>
            </Routes>
        </Router>

    )
}

export default AppRoutes
