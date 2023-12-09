import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from '@renderer/pages/DashboardPage';
import Loader from "@renderer/layout/loading/Loader";
import PosPage from "@renderer/pages/PosPage";

const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

const MasterLayout = lazy(() => delay(1000).then(() => import("@renderer/layout/MasterLayout")));

const PrivateRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<Suspense fallback={<Loader />}><MasterLayout /></Suspense>}>
        <Route path='dashboard' element={<DashboardPage />} />
        <Route path="pos" element={<PosPage />}/>
        <Route path="*" element={<Navigate to="error/404" />} />
      </Route>
    </Routes>
  )
}

export default PrivateRoutes
