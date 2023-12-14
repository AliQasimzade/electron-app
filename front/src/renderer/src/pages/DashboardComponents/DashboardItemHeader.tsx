
interface DashboardHeardTypes {
    title: string,
    subtitle: string
}

function DashboardItemHeader(props : DashboardHeardTypes) {
    return (
        <div className="card-header align-items-center border-0 mt-4">
            <h3 className="card-title align-items-start flex-column">
                <span className="fw-bold mb-2 text-gray-900">{props.title}</span>
                <span className="text-muted fw-semibold fs-7">{props.subtitle}</span>
            </h3>
            <div className="card-toolbar">
                <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                    <i className="ki-duotone ki-category fs-6">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                    </i>
                </button>
                <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_657aa73fc457d">
                    <div className="px-7 py-5">
                        <div className="fs-5 text-gray-900 fw-bold">Filter Options</div>
                    </div>
                    <div className="separator border-gray-200"></div>
                    <div className="px-7 py-5">
                        <div className="mb-10">
                            <label className="form-label fw-semibold">Status:</label>
                            <div>
                                <select className="form-select form-select-solid select2-hidden-accessible" multiple={true} data-kt-select2="true" data-close-on-select="false" data-placeholder="Select option" data-dropdown-parent="#kt_menu_657aa73fc457d" data-allow-clear="true" data-select2-id="select2-data-7-zrw8" tabIndex={-1} aria-hidden="true" data-kt-initialized="1">
                                    <option></option>
                                    <option value="1">Approved</option>
                                    <option value="2">Pending</option>
                                    <option value="2">In Process</option>
                                    <option value="2">Rejected</option>
                                </select><span className="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-8-5aij" style={{ width: "100%" }}><span className="selection"><span className="select2-selection select2-selection--multiple form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={-1} aria-disabled="false"><ul className="select2-selection__rendered" id="select2-wzw3-container"></ul><span className="select2-search select2-search--inline"><textarea className="select2-search__field" tabIndex={0} autoCorrect="off" role="searchbox" aria-autocomplete="list" aria-label="Search" aria-describedby="select2-wzw3-container" placeholder="Select option" style={{ width: "100%" }}></textarea></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                            </div>
                        </div>
                        <div className="mb-10">
                            <label className="form-label fw-semibold">Member Type:</label>
                            <div className="d-flex">
                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                                    <input className="form-check-input" type="checkbox" value="1" />
                                    <span className="form-check-label">
                                        Author
                                    </span>
                                </label>
                                <label className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="2" checked={true} />
                                    <span className="form-check-label">
                                        Customer
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="mb-10">
                            <label className="form-label fw-semibold">Notifications:</label>
                            <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                                <input className="form-check-input" type="checkbox" value="" name="notifications" checked={false} />
                                <label className="form-check-label">
                                    Enabled
                                </label>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                            <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardItemHeader