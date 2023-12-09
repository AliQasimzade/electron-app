const Footer = (): JSX.Element => {
  return (
    <div className="footer py-4 d-flex flex-lg-column " id="kt_footer">
      <div className=" container-fluid  d-flex flex-column flex-md-row flex-stack">
        <div className="text-gray-900 order-2 order-md-1">
          <span className="text-gray-500 fw-semibold me-1">Created by</span>
          <a href="https://globalsoft.az/" target="_blank" className="text-muted text-hover-primary fw-semibold me-2 fs-6">GlobalSoft</a>
        </div> 
        <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
          <li className="menu-item"><a href="https://keenthemes.com/" target="_blank" className="menu-link px-2">About</a></li>
          <li className="menu-item"><a href="https://devs.keenthemes.com/" target="_blank" className="menu-link px-2">Support</a></li>
          <li className="menu-item"><a href="https://1.envato.market/EA4JP" target="_blank" className="menu-link px-2">Purchase</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
