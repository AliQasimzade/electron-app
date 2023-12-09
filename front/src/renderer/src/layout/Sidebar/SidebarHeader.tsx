import { Link } from "react-router-dom"
import Logo from "@renderer/assets/images/demo9.svg";

const SidebarHeader = (): JSX.Element => {

  return (
    <div className="aside-logo flex-column-auto pt-10 pt-lg-20" id="kt_aside_logo">
      <Link to="/">
        <img alt="Logo" src={Logo} className="h-40px" />
      </Link>
    </div>

  )
}

export default SidebarHeader
