import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import DashboardContent from "./DashboardContent";
const DashboardPage = (): JSX.Element => {
    return (
        <div>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <DashboardContent />
            <Outlet />
        </div>
    )
}

export default DashboardPage
