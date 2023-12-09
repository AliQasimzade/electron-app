import PageTtle from '@renderer/components/PageTitle/PageTtle';
import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Header = (): JSX.Element => {
    const { pathname } = useLocation()

    const [selectSearchDropdown, setSelectSearchDropdown] = useState<boolean>(false);
    const [selectNotifyDropdown, setSelectNotifyDropdown] = useState<boolean>(false)
    const [selectUserDropDown, setSelectUserDropDown] = useState<boolean>(false)
    const searchDropRef = useRef<HTMLElement | null>(null);
    const notifyDropRef = useRef<HTMLElement | null>(null);
    const userDropRef = useRef<HTMLElement | null>(null);


    const handleShowSearchDropDown = () => {

        if (notifyDropRef.current) {
            notifyDropRef.current.classList.remove('show')
            notifyDropRef.current?.removeAttribute('data-popper-placement')
            setSelectNotifyDropdown(false)
        }
        if (userDropRef.current) {
            userDropRef.current.classList.remove('show')
            userDropRef.current?.removeAttribute('data-popper-placement')
            setSelectUserDropDown(false)
        }
        if (selectSearchDropdown == false) {
            if (searchDropRef.current) {
                searchDropRef.current.classList.add('show')
                searchDropRef.current?.setAttribute('data-popper-placement', 'bottom-end')
                setSelectSearchDropdown(true)
            }
        } else {
            if (searchDropRef.current) {
                searchDropRef.current.classList.remove('show')
                searchDropRef.current?.removeAttribute('data-popper-placement')
                setSelectSearchDropdown(false)
            }
        }
    }

    const handleShowNotifyDrop = () => {
        if (searchDropRef.current) {
            searchDropRef.current.classList.remove('show')
            searchDropRef.current?.removeAttribute('data-popper-placement')
            setSelectSearchDropdown(false)
        }
        if (userDropRef.current) {
            userDropRef.current.classList.remove('show')
            userDropRef.current?.removeAttribute('data-popper-placement')
            setSelectUserDropDown(false)
        }
        if (selectNotifyDropdown == false) {
            if (notifyDropRef.current) {
                notifyDropRef.current.classList.add('show')
                notifyDropRef.current?.setAttribute('data-popper-placement', 'bottom-end')
                setSelectNotifyDropdown(true)
            }
        } else {
            if (notifyDropRef.current) {
                notifyDropRef.current.classList.remove('show')
                notifyDropRef.current?.removeAttribute('data-popper-placement')
                setSelectNotifyDropdown(false)
            }
        }
    }

    const handleShowUserDrop = () => {
        if (searchDropRef.current) {
            searchDropRef.current.classList.remove('show')
            searchDropRef.current?.removeAttribute('data-popper-placement')
            setSelectSearchDropdown(false)
        }
        if (notifyDropRef.current) {
            notifyDropRef.current.classList.remove('show')
            notifyDropRef.current?.removeAttribute('data-popper-placement')
            setSelectNotifyDropdown(false)
        }
        if (selectUserDropDown == false) {
            if (userDropRef.current) {
                userDropRef.current.classList.add('show')
                userDropRef.current?.setAttribute('data-popper-placement', 'bottom-end')
                setSelectUserDropDown(true)
            }
        } else {
            if (userDropRef.current) {
                userDropRef.current.classList.remove('show')
                userDropRef.current?.removeAttribute('data-popper-placement')
                setSelectUserDropDown(false)
            }
        }
    }
    return (
        <>
            <div id="kt_header" className="header py-6 py-lg-0" data-kt-sticky="true" data-kt-sticky-name="header" data-kt-sticky-offset="{lg: '300px'}">
                <div className="header-container  container-xxl ">
                    <div className="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-lg-20 py-3 py-lg-0 me-3">

                        <h1 className="d-flex flex-column text-gray-900 fw-bold my-1">
                            <PageTtle title={pathname.includes('dashboard') ? 'Dashboard' : pathname.includes('pos') ? 'POS System' : ''} />
                            <small className="text-gray-600 fs-6 fw-normal pt-2">Create a store with #YDR-124-346 code</small>
                        </h1>
                    </div>

                    <div className="d-flex align-items-center flex-wrap">
                        {/*begin::Search*/}
                        <div className="header-search py-3 py-lg-0 me-3">
                            {/*begin::Search*/}
                            <div id="kt_header_search" className="header-search d-flex align-items-center w-lg-250px" data-kt-search-keypress="true" data-kt-search-min-length={2} data-kt-search-enter="enter" data-kt-search-layout="menu" data-kt-search-responsive="false" data-kt-menu-trigger="auto" data-kt-menu-permanent="true" data-kt-menu-placement="bottom-end" data-kt-search="true">
                                {/*begin::Tablet and mobile search toggle*/}
                                <div data-kt-search-element="toggle" className="search-toggle-mobile d-flex d-lg-none align-items-center">
                                    <div className="d-flex ">
                                        <i className="ki-duotone ki-magnifier fs-1 "><span className="path1" /><span className="path2" /></i>                          </div>
                                </div>
                                {/*end::Tablet and mobile search toggle*/}
                                {/*begin::Form*/}
                                <form data-kt-search-element="form" className="w-100 position-relative" onClick={handleShowSearchDropDown} autoComplete="off">
                                    {/*begin::Hidden input(Added to disable form autocomplete)*/}
                                    <input type="hidden" />
                                    {/*end::Hidden input*/}
                                    {/*begin::Icon*/}
                                    <i className="ki-duotone ki-magnifier fs-2 search-icon position-absolute top-50 translate-middle-y ms-4"><span className="path1" /><span className="path2" /></i>    {/*end::Icon*/}
                                    {/*begin::Input*/}
                                    <input type="text" className="form-control custom-form-control ps-13" name="search" placeholder="Find Goods" data-kt-search-element="input" />
                                    {/*end::Input*/}
                                    {/*begin::Spinner*/}
                                    <span className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5" data-kt-search-element="spinner">
                                        <span className="spinner-border h-15px w-15px align-middle text-gray-500" />
                                    </span>
                                    {/*end::Spinner*/}
                                    {/*begin::Reset*/}
                                    <span className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-4" data-kt-search-element="clear">
                                        <i className="ki-duotone ki-cross fs-2 fs-lg-1 me-0"><span className="path1" /><span className="path2" /></i>  </span>
                                    {/*end::Reset*/}
                                </form>
                                {/*end::Form*/}
                                {/*begin::Menu*/}
                                <div data-kt-search-element="content" ref={(node) => (searchDropRef.current = node)} className="menu menu-sub menu-sub-dropdown py-7 px-7 overflow-hidden w-300px w-md-350px" style={selectSearchDropdown ? { zIndex: '107', position: 'fixed', inset: '0px 0px auto auto', margin: '0', transform: 'translate3d(-306px, 106.5px, 0px)' } : {}} data-kt-menu="true">
                                    {/*begin::Wrapper*/}
                                    <div data-kt-search-element="wrapper">
                                        {/*begin::Recently viewed*/}
                                        <div data-kt-search-element="results" className="d-none">
                                            {/*begin::Items*/}
                                            <div className="scroll-y mh-200px mh-lg-350px">
                                                {/*begin::Category title*/}
                                                <h3 className="fs-5 text-muted m-0  pb-5" data-kt-search-element="category-title">
                                                    Users          </h3>
                                                {/*end::Category title*/}
                                                {/*begin::Item*/}
                                                <a href="#" className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                                                    {/*begin::Symbol*/}
                                                    <div className="symbol symbol-40px me-4">
                                                        <img src="assets/media/avatars/300-6.jpg" alt="" />
                                                    </div>
                                                    {/*end::Symbol*/}
                                                    {/*begin::Title*/}
                                                    <div className="d-flex flex-column justify-content-start fw-semibold">
                                                        <span className="fs-6 fw-semibold">Karina Clark</span>
                                                        <span className="fs-7 fw-semibold text-muted">Marketing Manager</span>
                                                    </div>
                                                    {/*end::Title*/}
                                                </a>
                                                {/*end::Item*/}
                                                {/*begin::Item*/}
                                                <a href="#" className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                                                    {/*begin::Symbol*/}
                                                    <div className="symbol symbol-40px me-4">
                                                        <img src="assets/media/avatars/300-2.jpg" alt="" />
                                                    </div>
                                                    {/*end::Symbol*/}
                                                    {/*begin::Title*/}
                                                    <div className="d-flex flex-column justify-content-start fw-semibold">
                                                        <span className="fs-6 fw-semibold">Olivia Bold</span>
                                                        <span className="fs-7 fw-semibold text-muted">Software Engineer</span>
                                                    </div>
                                                    {/*end::Title*/}
                                                </a>
                                                {/*end::Item*/}
                                                {/*begin::Item*/}
                                                <a href="#" className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                                                    {/*begin::Symbol*/}
                                                    <div className="symbol symbol-40px me-4">
                                                        <img src="assets/media/avatars/300-9.jpg" alt="" />
                                                    </div>
                                                    {/*end::Symbol*/}
                                                    {/*begin::Title*/}
                                                    <div className="d-flex flex-column justify-content-start fw-semibold">
                                                        <span className="fs-6 fw-semibold">Ana Clark</span>
                                                        <span className="fs-7 fw-semibold text-muted">UI/UX Designer</span>
                                                    </div>
                                                    {/*end::Title*/}
                                                </a>
                                                {/*end::Item*/}
                                                {/*begin::Item*/}
                                                <a href="#" className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                                                    {/*begin::Symbol*/}
                                                    <div className="symbol symbol-40px me-4">
                                                        <img src="assets/media/avatars/300-14.jpg" alt="" />
                                                    </div>
                                                    {/*end::Symbol*/}
                                                    {/*begin::Title*/}
                                                    <div className="d-flex flex-column justify-content-start fw-semibold">
                                                        <span className="fs-6 fw-semibold">Nick Pitola</span>
                                                        <span className="fs-7 fw-semibold text-muted">Art Director</span>
                                                    </div>
                                                    {/*end::Title*/}
                                                </a>
                                                {/*end::Item*/}
                                                {/*begin::Item*/}
                                                <a href="#" className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                                                    {/*begin::Symbol*/}
                                                    <div className="symbol symbol-40px me-4">
                                                        <img src="assets/media/avatars/300-11.jpg" alt="" />
                                                    </div>
                                                    {/*end::Symbol*/}
                                                    {/*begin::Title*/}
                                                    <div className="d-flex flex-column justify-content-start fw-semibold">
                                                        <span className="fs-6 fw-semibold">Edward Kulnic</span>
                                                        <span className="fs-7 fw-semibold text-muted">System Administrator</span>
                                                    </div>
                                                    {/*end::Title*/}
                                                </a>
                                                {/*end::Item*/}
                                                {/*begin::Category title*/}
                                                <h3 className="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">
                                                    Customers          </h3>
                                                {/*end::Category title*/}
                                                {/*begin::Item*/}
                                                <a href="#" className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                                                    {/*begin::Symbol*/}
                                                    <div className="symbol symbol-40px me-4">
                                                        <span className="symbol-label bg-light">
                                                            <img className="w-20px h-20px" src="assets/media/svg/brand-logos/volicity-9.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol*/}
                                                    {/*begin::Title*/}
                                                    <div className="d-flex flex-column justify-content-start fw-semibold">
                                                        <span className="fs-6 fw-semibold">Company Rbranding</span>
                                                        <span className="fs-7 fw-semibold text-muted">UI Design</span>
                                                    </div>
                                                    {/*end::Title*/}
                                                </a>
                                                {/*end::Item*/}
                                                {/*begin::Item*/}
                                                <a href="#" className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                                                    {/*begin::Symbol*/}
                                                    <div className="symbol symbol-40px me-4">
                                                        <span className="symbol-label bg-light">
                                                            <img className="w-20px h-20px" src="assets/media/svg/brand-logos/tvit.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol*/}
                                                    {/*begin::Title*/}
                                                    <div className="d-flex flex-column justify-content-start fw-semibold">
                                                        <span className="fs-6 fw-semibold">Company Re-branding</span>
                                                        <span className="fs-7 fw-semibold text-muted">Web Development</span>
                                                    </div>
                                                    {/*end::Title*/}
                                                </a>
                                                {/*end::Item*/}
                                                {/*begin::Item*/}
                                                <a href="#" className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                                                    {/*begin::Symbol*/}
                                                    <div className="symbol symbol-40px me-4">
                                                        <span className="symbol-label bg-light">
                                                            <img className="w-20px h-20px" src="assets/media/svg/misc/infography.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol*/}
                                                    {/*begin::Title*/}
                                                    <div className="d-flex flex-column justify-content-start fw-semibold">
                                                        <span className="fs-6 fw-semibold">Business Analytics App</span>
                                                        <span className="fs-7 fw-semibold text-muted">Administration</span>
                                                    </div>
                                                    {/*end::Title*/}
                                                </a>
                                                {/*end::Item*/}
                                                {/*begin::Item*/}
                                                <a href="#" className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                                                    {/*begin::Symbol*/}
                                                    <div className="symbol symbol-40px me-4">
                                                        <span className="symbol-label bg-light">
                                                            <img className="w-20px h-20px" src="assets/media/svg/brand-logos/leaf.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol*/}
                                                    {/*begin::Title*/}
                                                    <div className="d-flex flex-column justify-content-start fw-semibold">
                                                        <span className="fs-6 fw-semibold">EcoLeaf App Launch</span>
                                                        <span className="fs-7 fw-semibold text-muted">Marketing</span>
                                                    </div>
                                                    {/*end::Title*/}
                                                </a>
                                                {/*end::Item*/}
                                                {/*begin::Item*/}
                                                <a href="#" className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                                                    {/*begin::Symbol*/}
                                                    <div className="symbol symbol-40px me-4">
                                                        <span className="symbol-label bg-light">
                                                            <img className="w-20px h-20px" src="assets/media/svg/brand-logos/tower.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol*/}
                                                    {/*begin::Title*/}
                                                    <div className="d-flex flex-column justify-content-start fw-semibold">
                                                        <span className="fs-6 fw-semibold">Tower Group Website</span>
                                                        <span className="fs-7 fw-semibold text-muted">Google Adwords</span>
                                                    </div>
                                                    {/*end::Title*/}
                                                </a>
                                                {/*end::Item*/}
                                                {/*begin::Category title*/}
                                                <h3 className="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">
                                                    Projects          </h3>
                                                {/*end::Category title*/}
                                                {/*begin::Item*/}
                                                <a href="#" className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                                                    {/*begin::Symbol*/}
                                                    <div className="symbol symbol-40px me-4">
                                                        <span className="symbol-label bg-light">
                                                            <i className="ki-duotone ki-notepad fs-2 text-primary"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /></i>
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol*/}
                                                    {/*begin::Title*/}
                                                    <div className="d-flex flex-column">
                                                        <span className="fs-6 fw-semibold">Si-Fi Project by AU Themes</span>
                                                        <span className="fs-7 fw-semibold text-muted">#45670</span>
                                                    </div>
                                                    {/*end::Title*/}
                                                </a>
                                                {/*end::Item*/}
                                                {/*begin::Item*/}
                                                <a href="#" className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                                                    {/*begin::Symbol*/}
                                                    <div className="symbol symbol-40px me-4">
                                                        <span className="symbol-label bg-light">
                                                            <i className="ki-duotone ki-frame fs-2 text-primary"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></i>
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol*/}
                                                    {/*begin::Title*/}
                                                    <div className="d-flex flex-column">
                                                        <span className="fs-6 fw-semibold">Shopix Mobile App Planning</span>
                                                        <span className="fs-7 fw-semibold text-muted">#45690</span>
                                                    </div>
                                                    {/*end::Title*/}
                                                </a>
                                                {/*end::Item*/}
                                                {/*begin::Item*/}
                                                <a href="#" className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                                                    {/*begin::Symbol*/}
                                                    <div className="symbol symbol-40px me-4">
                                                        <span className="symbol-label bg-light">
                                                            <i className="ki-duotone ki-message-text-2 fs-2 text-primary"><span className="path1" /><span className="path2" /><span className="path3" /></i>
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol*/}
                                                    {/*begin::Title*/}
                                                    <div className="d-flex flex-column">
                                                        <span className="fs-6 fw-semibold">Finance Monitoring SAAS Discussion</span>
                                                        <span className="fs-7 fw-semibold text-muted">#21090</span>
                                                    </div>
                                                    {/*end::Title*/}
                                                </a>
                                                {/*end::Item*/}
                                                {/*begin::Item*/}
                                                <a href="#" className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                                                    {/*begin::Symbol*/}
                                                    <div className="symbol symbol-40px me-4">
                                                        <span className="symbol-label bg-light">
                                                            <i className="ki-duotone ki-profile-circle fs-2 text-primary"><span className="path1" /><span className="path2" /><span className="path3" /></i>
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol*/}
                                                    {/*begin::Title*/}
                                                    <div className="d-flex flex-column">
                                                        <span className="fs-6 fw-semibold">Dashboard Analitics Launch</span>
                                                        <span className="fs-7 fw-semibold text-muted">#34560</span>
                                                    </div>
                                                    {/*end::Title*/}
                                                </a>
                                                {/*end::Item*/}
                                            </div>
                                            {/*end::Items*/}
                                        </div>
                                        {/*end::Recently viewed*/}
                                        {/*begin::Recently viewed*/}
                                        <div data-kt-search-element="main">
                                            {/*begin::Heading*/}
                                            <div className="d-flex flex-stack fw-semibold mb-4">
                                                {/*begin::Label*/}
                                                <span className="text-muted fs-6 me-2">Recently Searched:</span>
                                                {/*end::Label*/}
                                                {/*begin::Toolbar*/}
                                                <div className="d-flex" data-kt-search-element="toolbar">
                                                    {/*begin::Preferences toggle*/}
                                                    <div data-kt-search-element="preferences-show" className="btn btn-icon w-20px btn-sm btn-active-color-primary me-2" data-bs-toggle="tooltip" title="Show search preferences">
                                                        <i className="ki-duotone ki-setting-2 fs-2"><span className="path1" /><span className="path2" /></i>              </div>
                                                    {/*end::Preferences toggle*/}
                                                    {/*begin::Advanced search toggle*/}
                                                    <div data-kt-search-element="advanced-options-form-show" className="btn btn-icon w-20px btn-sm btn-active-color-primary me-n1" data-bs-toggle="tooltip" aria-label="Show more search options" data-bs-original-title="Show more search options" data-kt-initialized={1}>
                                                        <i className="ki-duotone ki-down fs-2" />              </div>
                                                    {/*end::Advanced search toggle*/}
                                                </div>
                                                {/*end::Toolbar*/}
                                            </div>
                                            {/*end::Heading*/}
                                            {/*begin::Items*/}
                                            <div className="scroll-y mh-200px mh-lg-325px">
                                                {/*begin::Item*/}
                                                <div className="d-flex align-items-center mb-5">
                                                    {/*begin::Symbol*/}
                                                    <div className="symbol symbol-40px me-4">
                                                        <span className="symbol-label bg-light">
                                                            <i className="ki-duotone ki-laptop fs-2 text-primary"><span className="path1" /><span className="path2" /></i>
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol*/}
                                                    {/*begin::Title*/}
                                                    <div className="d-flex flex-column">
                                                        <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">BoomApp by Keenthemes</a>
                                                        <span className="fs-7 text-muted fw-semibold">#45789</span>
                                                    </div>
                                                    {/*end::Title*/}
                                                </div>
                                                {/*end::Item*/}
                                                {/*begin::Item*/}
                                                <div className="d-flex align-items-center mb-5">
                                                    {/*begin::Symbol*/}
                                                    <div className="symbol symbol-40px me-4">
                                                        <span className="symbol-label bg-light">
                                                            <i className="ki-duotone ki-chart-simple fs-2 text-primary"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></i>
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol*/}
                                                    {/*begin::Title*/}
                                                    <div className="d-flex flex-column">
                                                        <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"Kept API Project Meeting</a>
                                                        <span className="fs-7 text-muted fw-semibold">#84050</span>
                                                    </div>
                                                    {/*end::Title*/}
                                                </div>
                                                {/*end::Item*/}
                                                {/*begin::Item*/}
                                                <div className="d-flex align-items-center mb-5">
                                                    {/*begin::Symbol*/}
                                                    <div className="symbol symbol-40px me-4">
                                                        <span className="symbol-label bg-light">
                                                            <i className="ki-duotone ki-chart fs-2 text-primary"><span className="path1" /><span className="path2" /></i>
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol*/}
                                                    {/*begin::Title*/}
                                                    <div className="d-flex flex-column">
                                                        <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"KPI Monitoring App Launch</a>
                                                        <span className="fs-7 text-muted fw-semibold">#84250</span>
                                                    </div>
                                                    {/*end::Title*/}
                                                </div>
                                                {/*end::Item*/}
                                                {/*begin::Item*/}
                                                <div className="d-flex align-items-center mb-5">
                                                    {/*begin::Symbol*/}
                                                    <div className="symbol symbol-40px me-4">
                                                        <span className="symbol-label bg-light">
                                                            <i className="ki-duotone ki-chart-line-down fs-2 text-primary"><span className="path1" /><span className="path2" /></i>
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol*/}
                                                    {/*begin::Title*/}
                                                    <div className="d-flex flex-column">
                                                        <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">Project Reference FAQ</a>
                                                        <span className="fs-7 text-muted fw-semibold">#67945</span>
                                                    </div>
                                                    {/*end::Title*/}
                                                </div>
                                                {/*end::Item*/}
                                                {/*begin::Item*/}
                                                <div className="d-flex align-items-center mb-5">
                                                    {/*begin::Symbol*/}
                                                    <div className="symbol symbol-40px me-4">
                                                        <span className="symbol-label bg-light">
                                                            <i className="ki-duotone ki-sms fs-2 text-primary"><span className="path1" /><span className="path2" /></i>
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol*/}
                                                    {/*begin::Title*/}
                                                    <div className="d-flex flex-column">
                                                        <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"FitPro App Development</a>
                                                        <span className="fs-7 text-muted fw-semibold">#84250</span>
                                                    </div>
                                                    {/*end::Title*/}
                                                </div>
                                                {/*end::Item*/}
                                                {/*begin::Item*/}
                                                <div className="d-flex align-items-center mb-5">
                                                    {/*begin::Symbol*/}
                                                    <div className="symbol symbol-40px me-4">
                                                        <span className="symbol-label bg-light">
                                                            <i className="ki-duotone ki-bank fs-2 text-primary"><span className="path1" /><span className="path2" /></i>
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol*/}
                                                    {/*begin::Title*/}
                                                    <div className="d-flex flex-column">
                                                        <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">Shopix Mobile App</a>
                                                        <span className="fs-7 text-muted fw-semibold">#45690</span>
                                                    </div>
                                                    {/*end::Title*/}
                                                </div>
                                                {/*end::Item*/}
                                                {/*begin::Item*/}
                                                <div className="d-flex align-items-center mb-5">
                                                    {/*begin::Symbol*/}
                                                    <div className="symbol symbol-40px me-4">
                                                        <span className="symbol-label bg-light">
                                                            <i className="ki-duotone ki-chart-line-down fs-2 text-primary"><span className="path1" /><span className="path2" /></i>
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol*/}
                                                    {/*begin::Title*/}
                                                    <div className="d-flex flex-column">
                                                        <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"Landing UI Design" Launch</a>
                                                        <span className="fs-7 text-muted fw-semibold">#24005</span>
                                                    </div>
                                                    {/*end::Title*/}
                                                </div>
                                                {/*end::Item*/}
                                            </div>
                                            {/*end::Items*/}
                                        </div>
                                        {/*end::Recently viewed*/}
                                        {/*begin::Empty*/}
                                        <div data-kt-search-element="empty" className="text-center d-none">
                                            {/*begin::Icon*/}
                                            <div className="pt-10 pb-10">
                                                <i className="ki-duotone ki-search-list fs-4x opacity-50"><span className="path1" /><span className="path2" /><span className="path3" /></i>  </div>
                                            {/*end::Icon*/}
                                            {/*begin::Message*/}
                                            <div className="pb-15 fw-semibold">
                                                <h3 className="text-gray-600 fs-5 mb-2">No result found</h3>
                                                <div className="text-muted fs-7">Please try again with a different query</div>
                                            </div>
                                            {/*end::Message*/}
                                        </div>
                                        {/*end::Empty*/}      </div>
                                    {/*end::Wrapper*/}
                                    {/*begin::Preferences*/}
                                    <form data-kt-search-element="advanced-options-form" className="pt-1 d-none">
                                        {/*begin::Heading*/}
                                        <h3 className="fw-semibold text-gray-900 mb-7">Advanced Search</h3>
                                        {/*end::Heading*/}
                                        {/*begin::Input group*/}
                                        <div className="mb-5">
                                            <input type="text" className="form-control form-control-sm form-control-solid" placeholder="Contains the word" name="query" />
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Input group*/}
                                        <div className="mb-5">
                                            {/*begin::Radio group*/}
                                            <div className="nav-group nav-group-fluid">
                                                {/*begin::Option*/}
                                                <label>
                                                    <input type="radio" className="btn-check" name="type" defaultValue="has" defaultChecked={true} />
                                                    <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">
                                                        All
                                                    </span>
                                                </label>
                                                {/*end::Option*/}
                                                {/*begin::Option*/}
                                                <label>
                                                    <input type="radio" className="btn-check" name="type" defaultValue="users" />
                                                    <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                                        Users
                                                    </span>
                                                </label>
                                                {/*end::Option*/}
                                                {/*begin::Option*/}
                                                <label>
                                                    <input type="radio" className="btn-check" name="type" defaultValue="orders" />
                                                    <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                                        Orders
                                                    </span>
                                                </label>
                                                {/*end::Option*/}
                                                {/*begin::Option*/}
                                                <label>
                                                    <input type="radio" className="btn-check" name="type" defaultValue="projects" />
                                                    <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                                        Projects
                                                    </span>
                                                </label>
                                                {/*end::Option*/}
                                            </div>
                                            {/*end::Radio group*/}
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Input group*/}
                                        <div className="mb-5">
                                            <input type="text" name="assignedto" className="form-control form-control-sm form-control-solid" placeholder="Assigned to" defaultValue="has" />
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Input group*/}
                                        <div className="mb-5">
                                            <input type="text" name="collaborators" className="form-control form-control-sm form-control-solid" placeholder="Collaborators" defaultValue="has" />
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Input group*/}
                                        <div className="mb-5">
                                            {/*begin::Radio group*/}
                                            <div className="nav-group nav-group-fluid">
                                                {/*begin::Option*/}
                                                <label>
                                                    <input type="radio" className="btn-check" name="attachment" defaultValue="has" defaultChecked={true} />
                                                    <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">
                                                        Has attachment
                                                    </span>
                                                </label>
                                                {/*end::Option*/}
                                                {/*begin::Option*/}
                                                <label>
                                                    <input type="radio" className="btn-check" name="attachment" defaultValue="any" />
                                                    <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                                        Any
                                                    </span>
                                                </label>
                                                {/*end::Option*/}
                                            </div>
                                            {/*end::Radio group*/}
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Input group*/}
                                        <div className="mb-5">
                                            <select name="timezone" aria-label="Select a Timezone" data-control="select2" data-dropdown-parent="#kt_header_search" data-placeholder="date_period" className="form-select form-select-sm form-select-solid select2-hidden-accessible" data-select2-id="select2-data-1-3100" tabIndex={-1} aria-hidden="true" data-kt-initialized={1}>
                                                <option value="next" data-select2-id="select2-data-3-f8i1">Within the next</option>
                                                <option value="last">Within the last</option>
                                                <option value="between">Between</option>
                                                <option value="on">On</option>
                                            </select><span className="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-2-jzm6" style={{ width: '100%' }}><span className="selection"><span className="select2-selection select2-selection--single form-select form-select-sm form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-timezone-2z-container" aria-controls="select2-timezone-2z-container"><span className="select2-selection__rendered" id="select2-timezone-2z-container" role="textbox" aria-readonly="true" title="Within the next">Within the next</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Input group*/}
                                        <div className="row mb-8">
                                            {/*begin::Col*/}
                                            <div className="col-6">
                                                <input type="number" name="date_number" className="form-control form-control-sm form-control-solid" placeholder="Lenght" defaultValue="has" />
                                            </div>
                                            {/*end::Col*/}
                                            {/*begin::Col*/}
                                            <div className="col-6">
                                                <select name="date_typer" aria-label="Select a Timezone" data-control="select2" data-dropdown-parent="#kt_header_search" data-placeholder="Period" className="form-select form-select-sm form-select-solid select2-hidden-accessible" data-select2-id="select2-data-4-reu7" tabIndex={-1} aria-hidden="true" data-kt-initialized={1}>
                                                    <option value="days" data-select2-id="select2-data-6-7qwk">Days</option>
                                                    <option value="weeks">Weeks</option>
                                                    <option value="months">Months</option>
                                                    <option value="years">Years</option>
                                                </select><span className="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-5-xkpk" style={{ width: '100%' }}><span className="selection"><span className="select2-selection select2-selection--single form-select form-select-sm form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-date_typer-z0-container" aria-controls="select2-date_typer-z0-container"><span className="select2-selection__rendered" id="select2-date_typer-z0-container" role="textbox" aria-readonly="true" title="Days">Days</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                                            </div>
                                            {/*end::Col*/}
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Actions*/}
                                        <div className="d-flex justify-content-end">
                                            <button type="reset" className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2" data-kt-search-element="advanced-options-form-cancel">Cancel</button>
                                            <a href="utilities/search/horizontal.html" className="btn btn-sm fw-bold btn-primary" data-kt-search-element="advanced-options-form-search">Search</a>
                                        </div>
                                        {/*end::Actions*/}
                                    </form>
                                    {/*end::Preferences*/}
                                    {/*begin::Preferences*/}
                                    <form data-kt-search-element="preferences" className="pt-1 d-none">
                                        {/*begin::Heading*/}
                                        <h3 className="fw-semibold text-gray-900 mb-7">Search Preferences</h3>
                                        {/*end::Heading*/}
                                        {/*begin::Input group*/}
                                        <div className="pb-4 border-bottom">
                                            <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                                                    Projects
                                                </span>
                                                <input className="form-check-input" type="checkbox" defaultValue={1} defaultChecked={true} />
                                            </label>
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Input group*/}
                                        <div className="py-4 border-bottom">
                                            <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                                                    Targets
                                                </span>
                                                <input className="form-check-input" type="checkbox" defaultValue={1} defaultChecked={true} />
                                            </label>
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Input group*/}
                                        <div className="py-4 border-bottom">
                                            <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                                                    Affiliate Programs
                                                </span>
                                                <input className="form-check-input" type="checkbox" defaultValue={1} />
                                            </label>
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Input group*/}
                                        <div className="py-4 border-bottom">
                                            <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                                                    Referrals
                                                </span>
                                                <input className="form-check-input" type="checkbox" defaultValue={1} defaultChecked={true} />
                                            </label>
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Input group*/}
                                        <div className="py-4 border-bottom">
                                            <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                                                    Users
                                                </span>
                                                <input className="form-check-input" type="checkbox" defaultValue={1} />
                                            </label>
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Actions*/}
                                        <div className="d-flex justify-content-end pt-7">
                                            <button type="reset" className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2" data-kt-search-element="preferences-dismiss">Cancel</button>
                                            <button type="submit" className="btn btn-sm fw-bold btn-primary">Save Changes</button>
                                        </div>
                                        {/*end::Actions*/}
                                    </form>
                                    {/*end::Preferences*/}  </div>
                                {/*end::Menu*/}
                            </div>
                            {/*end::Search*/}          </div>
                        {/*end::Search*/}
                        {/*begin::Action*/}
                        <div className="d-flex align-items-center py-3 py-lg-0">
                            {/*begin::Item*/}
                            <div className="me-3">
                                <a href="#" className="btn btn-icon btn-custom btn-active-color-primary position-relative" onClick={handleShowNotifyDrop} data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                    <i className="ki-duotone ki-notification-bing fs-1"><span className="path1" /><span className="path2" /><span className="path3" /></i>                        <span className="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink" />
                                </a>
                                {/*begin::Menu*/}
                                <div className="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px" style={selectNotifyDropdown ? { zIndex: '107', position: 'fixed', inset: '0px 0px auto auto', margin: '0', transform: 'translate3d(-253.5px, 107px, 0px)' } : {}} data-kt-menu="true" ref={(node) => (notifyDropRef.current = node)} id="kt_menu_notifications">
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
                                {/*end::Menu*/}              </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="me-3">
                                <a href="#" className="btn btn-icon btn-custom btn-active-color-primary" onClick={handleShowUserDrop} data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                    <i className="ki-duotone ki-user fs-1"><span className="path1" /><span className="path2" /></i>                  </a>
                                {/*begin::User account menu*/}
                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" ref={(node) => (userDropRef.current = node)} style={selectUserDropDown ? { zIndex: '107', position: 'fixed', inset: '0px 0px auto auto', margin: '0', transform: 'translate3d(-200px, 107px, 0px)' } : {}} data-kt-menu="true">
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                        <div className="menu-content d-flex align-items-center px-3">
                                            {/*begin::Avatar*/}
                                            <div className="symbol symbol-50px me-5">
                                                <img alt="Logo" src="assets/media/avatars/300-1.jpg" />
                                            </div>
                                            {/*end::Avatar*/}
                                            {/*begin::Username*/}
                                            <div className="d-flex flex-column">
                                                <div className="fw-bold d-flex align-items-center fs-5">
                                                    Max Smith                    <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span>
                                                </div>
                                                <a href="#" className="fw-semibold text-muted text-hover-primary fs-7">
                                                    max@kt.com              </a>
                                            </div>
                                            {/*end::Username*/}
                                        </div>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu separator*/}
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
                                {/*end::User account menu*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Theme mode*/}
                            <div className="d-flex align-items-center me-3">
                                {/*begin::Menu toggle*/}
                                <a href="#" className="btn btn-icon btn-custom btn-active-color-primary" data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                    <i className="ki-duotone ki-night-day theme-light-show fs-1"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /><span className="path7" /><span className="path8" /><span className="path9" /><span className="path10" /></i>    <i className="ki-duotone ki-moon theme-dark-show fs-1"><span className="path1" /><span className="path2" /></i></a>
                                {/*begin::Menu toggle*/}
                                {/*begin::Menu*/}
                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px" data-kt-menu="true" data-kt-element="theme-mode-menu">
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3 my-0">
                                        <a href="#" className="menu-link px-3 py-2 active" data-kt-element="mode" data-kt-value="light">
                                            <span className="menu-icon" data-kt-element="icon">
                                                <i className="ki-duotone ki-night-day fs-2"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /><span className="path7" /><span className="path8" /><span className="path9" /><span className="path10" /></i>          </span>
                                            <span className="menu-title">
                                                Light
                                            </span>
                                        </a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3 my-0">
                                        <a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="dark">
                                            <span className="menu-icon" data-kt-element="icon">
                                                <i className="ki-duotone ki-moon fs-2"><span className="path1" /><span className="path2" /></i>          </span>
                                            <span className="menu-title">
                                                Dark
                                            </span>
                                        </a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3 my-0">
                                        <a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="system">
                                            <span className="menu-icon" data-kt-element="icon">
                                                <i className="ki-duotone ki-screen fs-2"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></i>          </span>
                                            <span className="menu-title">
                                                System
                                            </span>
                                        </a>
                                    </div>
                                    {/*end::Menu item*/}
                                </div>
                                {/*end::Menu*/}
                            </div>
                            {/*end::Theme mode*/}
                            {/*begin::Item*/}
                            <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app">New Goal</a>
                            {/*end::Item*/}
                        </div>
                        {/*end::Action*/}
                    </div>
                    {/*end::Wrapper*/}
                </div>
                <div className="header-offset" />
            </div >
        </>
    )
}

export default Header
