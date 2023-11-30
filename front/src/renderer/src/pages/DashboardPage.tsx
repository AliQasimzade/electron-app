import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const DashboardPage = (): JSX.Element => {
    return (
        <div>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            DashBoard Page
            <Link to="/login">Login Page</Link>
            <Outlet />
        </div>
    )
}

export default DashboardPage
