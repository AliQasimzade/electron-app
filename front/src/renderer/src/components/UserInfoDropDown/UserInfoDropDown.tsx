import React from "react"
import { useAppSelector } from "@renderer/redux-store/store";
import { FaUserAlt } from "react-icons/fa";

interface UserInfoDropDownTypes {
    userDropRef: React.MutableRefObject<HTMLElement | null>,
    selectUserDropDown: boolean
}


const UserInfoDropDown = ({ userDropRef, selectUserDropDown }: UserInfoDropDownTypes): JSX.Element => {

    const user = useAppSelector(state => state.persistedReducer.user.user);

    console.log(user);

    return (
        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" ref={(node) => (userDropRef.current = node)} style={selectUserDropDown ? { zIndex: '107', position: 'fixed', inset: '0px 0px auto auto', margin: '0', transform: 'translate3d(-227.5px, 107px, 0px)' } : {}} data-kt-menu="true">
            {/*begin::Menu item*/}
            <div className="menu-item px-3">
                <div className="menu-content d-flex align-items-center px-3">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-50px me-5">
                        {user.image ? <img src={user.image} /> : <FaUserAlt className="fs-1" />
                        }
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Username*/}
                    <div className="d-flex flex-column">
                        <div className="fw-bold d-flex align-items-center fs-5">
                            {user?.name}
                            {/* <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span> */}
                        </div>
                        <a href={`mailto:${user.email}`} className="fw-semibold text-muted text-hover-primary fs-7">
                            {user.email}           </a>
                    </div>
                </div>
            </div>
            <div className="separator my-2" />
            {/*end::Menu separator*/}
            {/*begin::Menu item*/}
            <div className="menu-item px-5">
                <a href="account/overview.html" className="menu-link px-5">
                    My Profile
                </a>
            </div>
            {/*end::Menu item*/}
            {/*begin::Menu item*/}
            <div className="menu-item px-5">
                <a href="apps/projects/list.html" className="menu-link px-5">
                    <span className="menu-text">My Projects</span>
                    <span className="menu-badge">
                        <span className="badge badge-light-danger badge-circle fw-bold fs-7">3</span>
                    </span>
                </a>
            </div>
            {/*end::Menu item*/}
            {/*begin::Menu item*/}
            <div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-start" data-kt-menu-offset="-15px, 0">
                <a href="#" className="menu-link px-5">
                    <span className="menu-title">My Subscription</span>
                    <span className="menu-arrow" />
                </a>
                {/*begin::Menu sub*/}
                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                        <a href="account/referrals.html" className="menu-link px-5">
                            Referrals
                        </a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                        <a href="account/billing.html" className="menu-link px-5">
                            Billing
                        </a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                        <a href="account/statements.html" className="menu-link px-5">
                            Payments
                        </a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                        <a href="account/statements.html" className="menu-link d-flex flex-stack px-5">
                            Statements
                            <span className="ms-2 lh-0" data-bs-toggle="tooltip" aria-label="View your statements" data-bs-original-title="View your statements" data-kt-initialized={1}>
                                <i className="ki-duotone ki-information-5 fs-5"><span className="path1" /><span className="path2" /><span className="path3" /></i>                  </span>
                        </a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu separator*/}
                    <div className="separator my-2" />
                    {/*end::Menu separator*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                        <div className="menu-content px-3">
                            <label className="form-check form-switch form-check-custom form-check-solid">
                                <input className="form-check-input w-30px h-20px" type="checkbox" defaultValue={1} defaultChecked={true} name="notifications" />
                                <span className="form-check-label text-muted fs-7">
                                    Notifications
                                </span>
                            </label>
                        </div>
                    </div>
                    {/*end::Menu item*/}
                </div>
                {/*end::Menu sub*/}
            </div>
            {/*end::Menu item*/}
            {/*begin::Menu item*/}
            <div className="menu-item px-5">
                <a href="account/statements.html" className="menu-link px-5">
                    My Statements
                </a>
            </div>
            {/*end::Menu item*/}
            {/*begin::Menu separator*/}
            <div className="separator my-2" />
            {/*end::Menu separator*/}
            {/*begin::Menu item*/}
            <div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-start" data-kt-menu-offset="-15px, 0">
                <a href="#" className="menu-link px-5">
                    <span className="menu-title position-relative">
                        Language
                        <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
                            English <img className="w-15px h-15px rounded-1 ms-2" src="assets/media/flags/united-states.svg" alt="" />
                        </span>
                    </span>
                </a>
                {/*begin::Menu sub*/}
                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                        <a href="account/settings.html" className="menu-link d-flex px-5 active">
                            <span className="symbol symbol-20px me-4">
                                <img className="rounded-1" src="assets/media/flags/united-states.svg" alt="" />
                            </span>
                            English
                        </a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                        <a href="account/settings.html" className="menu-link d-flex px-5">
                            <span className="symbol symbol-20px me-4">
                                <img className="rounded-1" src="assets/media/flags/spain.svg" alt="" />
                            </span>
                            Spanish
                        </a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                        <a href="account/settings.html" className="menu-link d-flex px-5">
                            <span className="symbol symbol-20px me-4">
                                <img className="rounded-1" src="assets/media/flags/germany.svg" alt="" />
                            </span>
                            German
                        </a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                        <a href="account/settings.html" className="menu-link d-flex px-5">
                            <span className="symbol symbol-20px me-4">
                                <img className="rounded-1" src="assets/media/flags/japan.svg" alt="" />
                            </span>
                            Japanese
                        </a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                        <a href="account/settings.html" className="menu-link d-flex px-5">
                            <span className="symbol symbol-20px me-4">
                                <img className="rounded-1" src="assets/media/flags/france.svg" alt="" />
                            </span>
                            French
                        </a>
                    </div>
                    {/*end::Menu item*/}
                </div>
                {/*end::Menu sub*/}
            </div>
            {/*end::Menu item*/}
            {/*begin::Menu item*/}
            <div className="menu-item px-5 my-1">
                <a href="account/settings.html" className="menu-link px-5">
                    Account Settings
                </a>
            </div>
            {/*end::Menu item*/}
            {/*begin::Menu item*/}
            <div className="menu-item px-5">
                <a href="authentication/layouts/corporate/sign-in.html" className="menu-link px-5">
                    Sign Out
                </a>
            </div>
            {/*end::Menu item*/}
        </div>
    )
}

export default UserInfoDropDown
