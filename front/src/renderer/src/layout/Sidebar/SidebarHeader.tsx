import { Link } from "react-router-dom"
import Logo from "@renderer/assets/images/demo9.svg";

const SidebarHeader = (): JSX.Element => {

  return (
    <div >
      <Link to='/'>
        <img alt="Logo" src={Logo} className="h-40px" />
      </Link>
    </div>
  )
}

export default SidebarHeader
