import React from "react"
import SidebarMenuMain from "./SidebarMenuMain"

interface SidebarType {
    sidebarMenuRef: React.MutableRefObject<HTMLElement | null>
}

const Sidebar = ({ sidebarMenuRef }: SidebarType) => {
    return (
        <>

            <SidebarMenuMain sidebarMenuRef={sidebarMenuRef} />
        </>
    )
}

export default Sidebar
