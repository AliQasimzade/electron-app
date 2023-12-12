import React from 'react'
interface NotifyDropDownTypes {
    notifyDropRef: React.MutableRefObject<HTMLElement | null>,
    selectNotifyDropdown: boolean

}
const NotifyDropDown = ({ selectNotifyDropdown, notifyDropRef }: NotifyDropDownTypes) => {
    return (
        <div className="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px" style={selectNotifyDropdown ? { zIndex: '107', position: 'fixed', inset: '0px 0px auto auto', margin: '0', transform: 'translate3d(-279.5px, 107px, 0px)' } : {}} data-kt-menu="true" ref={(node) => (notifyDropRef.current = node)} id="kt_menu_notifications">
            {/*begin::Heading*/}
            <div className="d-flex flex-column bgi-no-repeat rounded-top" style={{ backgroundImage: 'url("assets/media/misc/menu-header-bg.jpg")' }}>
                {/*begin::Title*/}
                <h3 className="text-white fw-semibold px-9 mt-10 mb-6">
                    Notifications <span className="fs-8 opacity-75 ps-3">24 reports</span>
                </h3>
                {/*end::Title*/}
                {/*begin::Tabs*/}
                <ul className="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-semibold px-9" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_1" aria-selected="false" tabIndex={-1} role="tab">Alerts</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link text-white opacity-75 opacity-state-100 pb-4 active" data-bs-toggle="tab" href="#kt_topbar_notifications_2" aria-selected="true" role="tab">Updates</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_3" aria-selected="false" tabIndex={-1} role="tab">Logs</a>
                    </li>
                </ul>
                {/*end::Tabs*/}
            </div>
            {/*end::Heading*/}
            {/*begin::Tab content*/}
            <div className="tab-content">
                {/*begin::Tab panel*/}
                <div className="tab-pane fade" id="kt_topbar_notifications_1" role="tabpanel">
                    {/*begin::Items*/}
                    <div className="scroll-y mh-325px my-5 px-8">
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                            {/*begin::Section*/}
                            <div className="d-flex align-items-center">
                                {/*begin::Symbol*/}
                                <div className="symbol symbol-35px me-4">
                                    <span className="symbol-label bg-light-primary">
                                        <i className="ki-duotone ki-abstract-28 fs-2 text-primary"><span className="path1" /><span className="path2" /></i>
                                    </span>
                                </div>
                                {/*end::Symbol*/}
                                {/*begin::Title*/}
                                <div className="mb-0 me-2">
                                    <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Alice</a>
                                    <div className="text-gray-500 fs-7">Phase 1 development</div>
                                </div>
                                {/*end::Title*/}
                            </div>
                            {/*end::Section*/}
                            {/*begin::Label*/}
                            <span className="badge badge-light fs-8">1 hr</span>
                            {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                            {/*begin::Section*/}
                            <div className="d-flex align-items-center">
                                {/*begin::Symbol*/}
                                <div className="symbol symbol-35px me-4">
                                    <span className="symbol-label bg-light-danger">
                                        <i className="ki-duotone ki-information fs-2 text-danger"><span className="path1" /><span className="path2" /><span className="path3" /></i>
                                    </span>
                                </div>
                                {/*end::Symbol*/}
                                {/*begin::Title*/}
                                <div className="mb-0 me-2">
                                    <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">HR Confidential</a>
                                    <div className="text-gray-500 fs-7">Confidential staff documents</div>
                                </div>
                                {/*end::Title*/}
                            </div>
                            {/*end::Section*/}
                            {/*begin::Label*/}
                            <span className="badge badge-light fs-8">2 hrs</span>
                            {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                            {/*begin::Section*/}
                            <div className="d-flex align-items-center">
                                {/*begin::Symbol*/}
                                <div className="symbol symbol-35px me-4">
                                    <span className="symbol-label bg-light-warning">
                                        <i className="ki-duotone ki-briefcase fs-2 text-warning"><span className="path1" /><span className="path2" /></i>
                                    </span>
                                </div>
                                {/*end::Symbol*/}
                                {/*begin::Title*/}
                                <div className="mb-0 me-2">
                                    <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Company HR</a>
                                    <div className="text-gray-500 fs-7">Corporeate staff profiles</div>
                                </div>
                                {/*end::Title*/}
                            </div>
                            {/*end::Section*/}
                            {/*begin::Label*/}
                            <span className="badge badge-light fs-8">5 hrs</span>
                            {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                            {/*begin::Section*/}
                            <div className="d-flex align-items-center">
                                {/*begin::Symbol*/}
                                <div className="symbol symbol-35px me-4">
                                    <span className="symbol-label bg-light-success">
                                        <i className="ki-duotone ki-abstract-12 fs-2 text-success"><span className="path1" /><span className="path2" /></i>
                                    </span>
                                </div>
                                {/*end::Symbol*/}
                                {/*begin::Title*/}
                                <div className="mb-0 me-2">
                                    <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Redux</a>
                                    <div className="text-gray-500 fs-7">New frontend admin theme</div>
                                </div>
                                {/*end::Title*/}
                            </div>
                            {/*end::Section*/}
                            {/*begin::Label*/}
                            <span className="badge badge-light fs-8">2 days</span>
                            {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                            {/*begin::Section*/}
                            <div className="d-flex align-items-center">
                                {/*begin::Symbol*/}
                                <div className="symbol symbol-35px me-4">
                                    <span className="symbol-label bg-light-primary">
                                        <i className="ki-duotone ki-colors-square fs-2 text-primary"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></i>
                                    </span>
                                </div>
                                {/*end::Symbol*/}
                                {/*begin::Title*/}
                                <div className="mb-0 me-2">
                                    <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Breafing</a>
                                    <div className="text-gray-500 fs-7">Product launch status update</div>
                                </div>
                                {/*end::Title*/}
                            </div>
                            {/*end::Section*/}
                            {/*begin::Label*/}
                            <span className="badge badge-light fs-8">21 Jan</span>
                            {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                            {/*begin::Section*/}
                            <div className="d-flex align-items-center">
                                {/*begin::Symbol*/}
                                <div className="symbol symbol-35px me-4">
                                    <span className="symbol-label bg-light-info">
                                        <i className="ki-duotone ki-picture
 fs-2 text-info" />
                                    </span>
                                </div>
                                {/*end::Symbol*/}
                                {/*begin::Title*/}
                                <div className="mb-0 me-2">
                                    <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Banner Assets</a>
                                    <div className="text-gray-500 fs-7">Collection of banner images</div>
                                </div>
                                {/*end::Title*/}
                            </div>
                            {/*end::Section*/}
                            {/*begin::Label*/}
                            <span className="badge badge-light fs-8">21 Jan</span>
                            {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                            {/*begin::Section*/}
                            <div className="d-flex align-items-center">
                                {/*begin::Symbol*/}
                                <div className="symbol symbol-35px me-4">
                                    <span className="symbol-label bg-light-warning">
                                        <i className="ki-duotone ki-color-swatch fs-2 text-warning"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /><span className="path7" /><span className="path8" /><span className="path9" /><span className="path10" /><span className="path11" /><span className="path12" /><span className="path13" /><span className="path14" /><span className="path15" /><span className="path16" /><span className="path17" /><span className="path18" /><span className="path19" /><span className="path20" /><span className="path21" /></i>
                                    </span>
                                </div>
                                {/*end::Symbol*/}
                                {/*begin::Title*/}
                                <div className="mb-0 me-2">
                                    <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Icon Assets</a>
                                    <div className="text-gray-500 fs-7">Collection of SVG icons</div>
                                </div>
                                {/*end::Title*/}
                            </div>
                            {/*end::Section*/}
                            {/*begin::Label*/}
                            <span className="badge badge-light fs-8">20 March</span>
                            {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                    </div>
                    {/*end::Items*/}
                    {/*begin::View more*/}
                    <div className="py-3 text-center border-top">
                        <a href="pages/user-profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">
                            View All
                            <i className="ki-duotone ki-arrow-right fs-5"><span className="path1" /><span className="path2" /></i>              </a>
                    </div>
                    {/*end::View more*/}
                </div>
                {/*end::Tab panel*/}
                {/*begin::Tab panel*/}
                <div className="tab-pane fade show active" id="kt_topbar_notifications_2" role="tabpanel">
                    {/*begin::Wrapper*/}
                    <div className="d-flex flex-column px-9">
                        {/*begin::Section*/}
                        <div className="pt-10 pb-0">
                            {/*begin::Title*/}
                            <h3 className="text-gray-900 text-center fw-bold">
                                Get Pro Access
                            </h3>
                            {/*end::Title*/}
                            {/*begin::Text*/}
                            <div className="text-center text-gray-600 fw-semibold pt-1">
                                Outlines keep you honest. They stoping you from amazing poorly about drive
                            </div>
                            {/*end::Text*/}
                            {/*begin::Action*/}
                            <div className="text-center mt-5 mb-9">
                                <a href="#" className="btn btn-sm btn-primary px-6" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">Upgrade</a>
                            </div>
                            {/*end::Action*/}
                        </div>
                        {/*end::Section*/}
                        {/*begin::Illustration*/}
                        <div className="text-center px-4">
                            <img className="mw-100 mh-200px" alt="image" src="assets/media/illustrations/sigma-1/1.png" />
                        </div>
                        {/*end::Illustration*/}
                    </div>
                    {/*end::Wrapper*/}
                </div>
                {/*end::Tab panel*/}
                {/*begin::Tab panel*/}
                <div className="tab-pane fade" id="kt_topbar_notifications_3" role="tabpanel">
                    {/*begin::Items*/}
                    <div className="scroll-y mh-325px my-5 px-8">
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                            {/*begin::Section*/}
                            <div className="d-flex align-items-center me-2">
                                {/*begin::Code*/}
                                <span className="w-70px badge badge-light-success me-4">200 OK</span>
                                {/*end::Code*/}
                                {/*begin::Title*/}
                                <a href="#" className="text-gray-800 text-hover-primary fw-semibold">New order</a>
                                {/*end::Title*/}
                            </div>
                            {/*end::Section*/}
                            {/*begin::Label*/}
                            <span className="badge badge-light fs-8">Just now</span>
                            {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                            {/*begin::Section*/}
                            <div className="d-flex align-items-center me-2">
                                {/*begin::Code*/}
                                <span className="w-70px badge badge-light-danger me-4">500 ERR</span>
                                {/*end::Code*/}
                                {/*begin::Title*/}
                                <a href="#" className="text-gray-800 text-hover-primary fw-semibold">New customer</a>
                                {/*end::Title*/}
                            </div>
                            {/*end::Section*/}
                            {/*begin::Label*/}
                            <span className="badge badge-light fs-8">2 hrs</span>
                            {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                            {/*begin::Section*/}
                            <div className="d-flex align-items-center me-2">
                                {/*begin::Code*/}
                                <span className="w-70px badge badge-light-success me-4">200 OK</span>
                                {/*end::Code*/}
                                {/*begin::Title*/}
                                <a href="#" className="text-gray-800 text-hover-primary fw-semibold">Payment process</a>
                                {/*end::Title*/}
                            </div>
                            {/*end::Section*/}
                            {/*begin::Label*/}
                            <span className="badge badge-light fs-8">5 hrs</span>
                            {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                            {/*begin::Section*/}
                            <div className="d-flex align-items-center me-2">
                                {/*begin::Code*/}
                                <span className="w-70px badge badge-light-warning me-4">300 WRN</span>
                                {/*end::Code*/}
                                {/*begin::Title*/}
                                <a href="#" className="text-gray-800 text-hover-primary fw-semibold">Search query</a>
                                {/*end::Title*/}
                            </div>
                            {/*end::Section*/}
                            {/*begin::Label*/}
                            <span className="badge badge-light fs-8">2 days</span>
                            {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                            {/*begin::Section*/}
                            <div className="d-flex align-items-center me-2">
                                {/*begin::Code*/}
                                <span className="w-70px badge badge-light-success me-4">200 OK</span>
                                {/*end::Code*/}
                                {/*begin::Title*/}
                                <a href="#" className="text-gray-800 text-hover-primary fw-semibold">API connection</a>
                                {/*end::Title*/}
                            </div>
                            {/*end::Section*/}
                            {/*begin::Label*/}
                            <span className="badge badge-light fs-8">1 week</span>
                            {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                            {/*begin::Section*/}
                            <div className="d-flex align-items-center me-2">
                                {/*begin::Code*/}
                                <span className="w-70px badge badge-light-success me-4">200 OK</span>
                                {/*end::Code*/}
                                {/*begin::Title*/}
                                <a href="#" className="text-gray-800 text-hover-primary fw-semibold">Database restore</a>
                                {/*end::Title*/}
                            </div>
                            {/*end::Section*/}
                            {/*begin::Label*/}
                            <span className="badge badge-light fs-8">Mar 5</span>
                            {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                            {/*begin::Section*/}
                            <div className="d-flex align-items-center me-2">
                                {/*begin::Code*/}
                                <span className="w-70px badge badge-light-warning me-4">300 WRN</span>
                                {/*end::Code*/}
                                {/*begin::Title*/}
                                <a href="#" className="text-gray-800 text-hover-primary fw-semibold">System update</a>
                                {/*end::Title*/}
                            </div>
                            {/*end::Section*/}
                            {/*begin::Label*/}
                            <span className="badge badge-light fs-8">May 15</span>
                            {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                            {/*begin::Section*/}
                            <div className="d-flex align-items-center me-2">
                                {/*begin::Code*/}
                                <span className="w-70px badge badge-light-warning me-4">300 WRN</span>
                                {/*end::Code*/}
                                {/*begin::Title*/}
                                <a href="#" className="text-gray-800 text-hover-primary fw-semibold">Server OS update</a>
                                {/*end::Title*/}
                            </div>
                            {/*end::Section*/}
                            {/*begin::Label*/}
                            <span className="badge badge-light fs-8">Apr 3</span>
                            {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                            {/*begin::Section*/}
                            <div className="d-flex align-items-center me-2">
                                {/*begin::Code*/}
                                <span className="w-70px badge badge-light-warning me-4">300 WRN</span>
                                {/*end::Code*/}
                                {/*begin::Title*/}
                                <a href="#" className="text-gray-800 text-hover-primary fw-semibold">API rollback</a>
                                {/*end::Title*/}
                            </div>
                            {/*end::Section*/}
                            {/*begin::Label*/}
                            <span className="badge badge-light fs-8">Jun 30</span>
                            {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                            {/*begin::Section*/}
                            <div className="d-flex align-items-center me-2">
                                {/*begin::Code*/}
                                <span className="w-70px badge badge-light-danger me-4">500 ERR</span>
                                {/*end::Code*/}
                                {/*begin::Title*/}
                                <a href="#" className="text-gray-800 text-hover-primary fw-semibold">Refund process</a>
                                {/*end::Title*/}
                            </div>
                            {/*end::Section*/}
                            {/*begin::Label*/}
                            <span className="badge badge-light fs-8">Jul 10</span>
                            {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                            {/*begin::Section*/}
                            <div className="d-flex align-items-center me-2">
                                {/*begin::Code*/}
                                <span className="w-70px badge badge-light-danger me-4">500 ERR</span>
                                {/*end::Code*/}
                                {/*begin::Title*/}
                                <a href="#" className="text-gray-800 text-hover-primary fw-semibold">Withdrawal process</a>
                                {/*end::Title*/}
                            </div>
                            {/*end::Section*/}
                            {/*begin::Label*/}
                            <span className="badge badge-light fs-8">Sep 10</span>
                            {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                            {/*begin::Section*/}
                            <div className="d-flex align-items-center me-2">
                                {/*begin::Code*/}
                                <span className="w-70px badge badge-light-danger me-4">500 ERR</span>
                                {/*end::Code*/}
                                {/*begin::Title*/}
                                <a href="#" className="text-gray-800 text-hover-primary fw-semibold">Mail tasks</a>
                                {/*end::Title*/}
                            </div>
                            {/*end::Section*/}
                            {/*begin::Label*/}
                            <span className="badge badge-light fs-8">Dec 10</span>
                            {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                    </div>
                    {/*end::Items*/}
                    {/*begin::View more*/}
                    <div className="py-3 text-center border-top">
                        <a href="pages/user-profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">
                            View All
                            <i className="ki-duotone ki-arrow-right fs-5"><span className="path1" /><span className="path2" /></i>              </a>
                    </div>
                    {/*end::View more*/}
                </div>
                {/*end::Tab panel*/}
            </div>
            {/*end::Tab content*/}
        </div>
    )
}

export default NotifyDropDown
