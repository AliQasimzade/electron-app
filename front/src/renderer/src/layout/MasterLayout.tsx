import Footer from "./Footer/Footer";
import Header from "./Header/Header"
import Sidebar from "./Sidebar/Sidebar"
import { Outlet } from "react-router-dom";

const MasterLayout = (): JSX.Element => {
    return (
        <div className="page d-flex flex-row flex-column-fluid">
            <div className="app-page flex-column flex-column-fluid">
                <Header />
                <div className="app-wrapper d-flex flex-row-fluid">
                    <Sidebar />
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default MasterLayout
