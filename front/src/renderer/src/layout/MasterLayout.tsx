import { useEffect, useRef, useState } from 'react'
import Footer from "./Footer/Footer";
import Header from "./Header/Header"
import MobileHeader from "./Header/MobileHeader";
import Sidebar from "./Sidebar/Sidebar"
import { Outlet } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const MasterLayout = (): JSX.Element => {

  console.log(import.meta.env);
  

  
  const sidebarMenuRef = useRef<HTMLElement | null>(null);

  const [checkClass, setCheckClass] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {

      if (window.innerWidth <= 992) {
        sidebarMenuRef.current?.classList.add('drawer')
        sidebarMenuRef.current?.classList.add('drawer-start')
      } else {
        sidebarMenuRef.current?.classList.remove('drawer')
        sidebarMenuRef.current?.classList.remove('drawer-start')
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleHideSideBar = () => {
     sidebarMenuRef.current?.classList.remove('drawer-on')
     setCheckClass(false)
  }
  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <Sidebar sidebarMenuRef={sidebarMenuRef} />
        <div className="wrapper d-flex flex-column flex-row-fluid">
          <MobileHeader setCheckClass={setCheckClass} sidebarMenuRef={sidebarMenuRef} />
          <Header />
          <Outlet />
          <Footer />
        </div>

      </div>
      {checkClass && <div style={{ zIndex: '109' }} className="drawer-overlay d-flex justify-content-end">
        <button className='w-40px h-40px bg-danger rounded border-0 outline-0 m-2'>
          <IoClose onClick={handleHideSideBar} className='text-white fs-1' />
        </button>
      </div>}
    </div>
  )
}

export default MasterLayout
