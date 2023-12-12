import React from 'react'

interface ThemeDropDownTypes {
    themeDropRef: React.MutableRefObject<HTMLElement | null>,
    selectThemeDarkLightDropDown: boolean,
    handleChangeTheme: (value: string) => void
}

const ThemeDropDown = ({ themeDropRef, selectThemeDarkLightDropDown, handleChangeTheme }: ThemeDropDownTypes) => {
    return (
        <div ref={(node) => (themeDropRef.current = node)} className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px" style={selectThemeDarkLightDropDown ? { zIndex: '107', position: 'fixed', inset: '0px 0px auto auto', margin: '0', transform: 'translate(-180px, 107px)' } : {}} data-kt-menu="true" data-kt-element="theme-mode-menu">
            {/*begin::Menu item*/}
            <div className="menu-item px-3 my-0">
                <a href="#" className="menu-link px-3 py-2 active" data-kt-element="mode" data-kt-value="light" onClick={() => handleChangeTheme('light')}>
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
                <a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="dark" onClick={() => handleChangeTheme('dark')}>
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
                <a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="system" onClick={() => handleChangeTheme('light')}>
                    <span className="menu-icon" data-kt-element="icon">
                        <i className="ki-duotone ki-screen fs-2"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></i>          </span>
                    <span className="menu-title">
                        System
                    </span>
                </a>
            </div>
            {/*end::Menu item*/}
        </div>
    )
}

export default ThemeDropDown
