import PageTtle from '@renderer/components/PageTitle/PageTtle';
import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '@renderer/redux-store/store';
import { setTheme } from '@renderer/redux-store/slices/themeSlice';
import { useAppSelector } from '@renderer/redux-store/store';
import UserInfoDropDown from '@renderer/components/UserInfoDropDown/UserInfoDropDown';
import SearchDropDown from '@renderer/components/SearchDropDown/SearchDropDown';
import NotifyDropDown from '@renderer/components/NotifyDropDown/NotifyDropDown';
import ThemeDropDown from '@renderer/components/ThemeDropDown/ThemeDropDown';

const Header = (): JSX.Element => {
    const { pathname } = useLocation()

    const themeMode = useAppSelector(state => state.persistedReducer.theme.theme)
    const user = useAppSelector(state => state.persistedReducer.user.user)

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', themeMode)
    }, [themeMode])

    const dispatch = useAppDispatch();
    const [selectSearchDropdown, setSelectSearchDropdown] = useState<boolean>(false);
    const [selectNotifyDropdown, setSelectNotifyDropdown] = useState<boolean>(false)
    const [selectUserDropDown, setSelectUserDropDown] = useState<boolean>(false)
    const [selectThemeDarkLightDropDown, setSelectThemeDarkLightDropDown] = useState<boolean>(false)

    const searchDropRef = useRef<HTMLElement | null>(null);
    const notifyDropRef = useRef<HTMLElement | null>(null);
    const userDropRef = useRef<HTMLElement | null>(null);
    const themeDropRef = useRef<HTMLElement | null>(null);
    const headerRef = useRef<HTMLElement | null>(null)


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                document.body.setAttribute('data-kt-sticky-header', 'on');
                if (headerRef.current && headerRef.current.style) {
                    headerRef.current.style.animationDuration = '0.3s'
                    headerRef.current.style.top = '0'
                    headerRef.current.setAttribute('data-kt-sticky-enabled', 'true')
                }
            } else {
                document.body.removeAttribute('data-kt-sticky-header');
                if (headerRef.current && headerRef.current.style) {
                    headerRef.current.style.animationDuration = 'none'
                    headerRef.current.style.top = '0'
                    headerRef.current.removeAttribute('data-kt-sticky-enabled')
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


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
        if (themeDropRef.current) {
            themeDropRef.current.classList.remove('show')
            themeDropRef.current?.removeAttribute('data-popper-placement')
            setSelectThemeDarkLightDropDown(false)
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
        if (themeDropRef.current) {
            themeDropRef.current.classList.remove('show')
            themeDropRef.current?.removeAttribute('data-popper-placement')
            setSelectThemeDarkLightDropDown(false)
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
        if (themeDropRef.current) {
            themeDropRef.current.classList.remove('show')
            themeDropRef.current?.removeAttribute('data-popper-placement')
            setSelectThemeDarkLightDropDown(false)
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

    const handleThemeLightDarkDrop = () => {
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
        if (userDropRef.current) {
            userDropRef.current.classList.remove('show')
            userDropRef.current?.removeAttribute('data-popper-placement')
            setSelectUserDropDown(false)
        }
        if (selectThemeDarkLightDropDown == false) {
            if (themeDropRef.current) {
                themeDropRef.current.classList.add('show')
                themeDropRef.current?.setAttribute('data-popper-placement', 'bottom-end')
                setSelectThemeDarkLightDropDown(true)
            }
        } else {
            if (themeDropRef.current) {
                themeDropRef.current.classList.remove('show')
                themeDropRef.current?.removeAttribute('data-popper-placement')
                setSelectThemeDarkLightDropDown(false)
            }
        }

    }

    const handleChangeTheme = (mode: string) => {
        dispatch(setTheme(mode));
        if (themeDropRef.current) {
            themeDropRef.current.classList.remove('show')
            themeDropRef.current?.removeAttribute('data-popper-placement')
            setSelectThemeDarkLightDropDown(false)
        }
    }
    return (
        <>
            <div id="kt_header" ref={(node) => (headerRef.current = node)} className="header header-fixed py-6 py-lg-0" data-kt-sticky="true" data-kt-sticky-name="header" data-kt-sticky-offset="{lg: '300px'}" data-kt-sticky-enabled="true">
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
                                <SearchDropDown searchDropRef={searchDropRef} selectSearchDropdown={selectSearchDropdown} />
                                {/*end::Menu*/}
                            </div>
                            {/*end::Search*/}          </div>
                        {/*end::Search*/}
                        {/*begin::Action*/}
                        <div className="d-flex align-items-center py-3 py-lg-0">
                            {/*begin::Item*/}
                            <div className="me-3">
                                <button className="btn btn-icon btn-custom btn-active-color-primary position-relative" onClick={handleShowNotifyDrop} data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                    <i className="ki-duotone ki-notification-bing fs-1"><span className="path1" /><span className="path2" /><span className="path3" /></i>                        <span className="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink" />
                                </button>
                                {/*begin::Menu*/}
                                <NotifyDropDown selectNotifyDropdown={selectNotifyDropdown} notifyDropRef={notifyDropRef} />
                                {/*end::Menu*/}              </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            {user && <div className="me-3">
                                <button className="btn btn-icon btn-custom btn-active-color-primary" onClick={handleShowUserDrop} data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                    <i className="ki-duotone ki-user fs-1"><span className="path1" /><span className="path2" /></i>                  </button>


                                <UserInfoDropDown userDropRef={userDropRef} selectUserDropDown={selectUserDropDown} />

                            </div>}
                            {/*end::Item*/}
                            {/*begin::Theme mode*/}
                            <div className="d-flex align-items-center me-3">
                                {/*begin::Menu toggle*/}
                                <button className="btn btn-icon btn-custom btn-active-color-primary" onClick={handleThemeLightDarkDrop} data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                    <i className="ki-duotone ki-night-day theme-light-show fs-1"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /><span className="path7" /><span className="path8" /><span className="path9" /><span className="path10" /></i>    <i className="ki-duotone ki-moon theme-dark-show fs-1"><span className="path1" /><span className="path2" /></i></button>

                                <ThemeDropDown themeDropRef={themeDropRef} selectThemeDarkLightDropDown={selectThemeDarkLightDropDown} handleChangeTheme={handleChangeTheme} />
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
