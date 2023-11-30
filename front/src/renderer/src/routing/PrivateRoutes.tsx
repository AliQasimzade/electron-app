import MasterLayout from '@renderer/layout/MasterLayout';
import { lazy, Suspense } from 'react'
import { Routes, Route } from "react-router-dom";
import Loader from '@renderer/layout/loading/Loader';

const DashboardPage = lazy(() => import("@renderer/pages/DashboardPage"))


const PrivateRoutes = ():JSX.Element => {
  return (
    <Routes>
        <Route element={<MasterLayout />}>
            <Route path='dashboard' element={
                <Suspense fallback={<Loader />}>
                    <DashboardPage />
                </Suspense>
            } />
    </Route>
</Routes>
  )
}

export default PrivateRoutes
