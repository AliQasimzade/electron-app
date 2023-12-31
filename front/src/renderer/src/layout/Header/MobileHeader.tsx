import Logo from '@renderer/assets/images/demo9.svg';

interface MobileHeaderType {
    sidebarMenuRef: React.MutableRefObject<HTMLElement | null>,
    setCheckClass: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileHeader = ({ sidebarMenuRef,setCheckClass }: MobileHeaderType) => {

    const handleShowSidebar = () => {
        sidebarMenuRef.current?.classList.add('drawer-on')
        setCheckClass(true)
    }
    return (
        <div className="header-mobile py-3">
            <div className="container d-flex flex-stack">
                <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                    <a href="/metronic8/demo9/../demo9/index.html">
                        <img alt="Logo" src={Logo} className="h-35px" />
                    </a>
                </div>
                <button onClick={handleShowSidebar} className="btn btn-icon btn-active-color-primary me-n4" id="kt_aside_toggle">
                    <i className="ki-duotone ki-abstract-14 fs-2x"><span className="path1" /><span className="path2" /></i></button>
            </div>
        </div>
    )
}

export default MobileHeader
