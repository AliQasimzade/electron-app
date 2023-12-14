import WidgetsItems from './WidgetsItems'

const staticData = {
    UserProfile : <i className="ki-duotone ki-gift fs-2tx mb-5 ms-n1 text-gray-500"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></i>,
    Statements : <i className="ki-duotone ki-technology-2 fs-2tx mb-5 ms-n1 text-gray-500"><span className="path1"></span><span className="path2"></span></i>,
    Referals : <i className="ki-duotone ki-fingerprint-scanning fs-2tx mb-5 ms-n1 text-gray-500"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span></i>,
    HotPicks: <i className="ki-duotone ki-abstract-26 fs-2tx mb-5 ms-n1 text-gray-500"><span className="path1"></span><span className="path2"></span></i>,
    Latests: <i className="ki-duotone ki-basket fs-2tx mb-5 ms-n1 text-gray-500"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></i>,
    NewArrivals: <i className="ki-duotone ki-rocket fs-2tx mb-5 ms-n1 text-gray-500"><span className="path1"></span><span className="path2"></span></i>,
}

const Widgets = (): JSX.Element => {
    return (
        <div className="row mb-5 mb-xl-8 g-5 g-xl-8">
            <WidgetsItems titles="User Profile" icon={staticData.UserProfile} />
            <WidgetsItems titles="Statements" icon={staticData.Statements} />
            <WidgetsItems titles='Best Referrals' icon={staticData.Referals} />
            <WidgetsItems titles='Hot Picks' icon={staticData.HotPicks} />
            <WidgetsItems titles='Latest Trands' icon={staticData.Latests} />
            <WidgetsItems titles='New Arrivals' icon={staticData.NewArrivals} />
        </div>
    )
}

export default Widgets