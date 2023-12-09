import Footer from "./Footer/Footer";
import Header from "./Header/Header"
import MobileHeader from "./Header/MobileHeader";
import Sidebar from "./Sidebar/Sidebar"
import { Outlet } from "react-router-dom";

const MasterLayout = (): JSX.Element => {
    return (
        <div className="d-flex flex-column flex-root">
            <div className="page d-flex flex-row flex-column-fluid">
                <Sidebar />
                <div className="wrapper d-flex flex-column flex-row-fluid">
                    <MobileHeader />
                    <Header />
                    <Outlet />
                    <Footer />
                </div>

            </div>
        </div>
    )
}

export default MasterLayout
