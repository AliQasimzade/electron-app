import Widgets from './DashboardComponents/Widgets'
import ChartImg from '../assets/images/test.svg'

const DashboardContent = (): JSX.Element => {
  return (
    <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
      <div className=" container-xxl " id="kt_content_container">
        <div className="row g-5 g-xl-8">
          <div className="col-xl-4">
            <Widgets />
            <div className="card mb-5 mb-xl-8">
              <div className="card-header align-items-center border-0 mt-4">
                <h3 className="card-title align-items-start flex-column">
                  <span className="fw-bold mb-2 text-gray-900">Activities</span>
                  <span className="text-muted fw-semibold fs-7">890,344 Sales</span>
                </h3>
                <div className="card-toolbar">
                  <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                    <i className="ki-duotone ki-category fs-6"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></i>            </button>
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
              <div className="card-body pt-5">
                <div className="timeline-label">
                  <div className="timeline-item">
                    <div className="timeline-label fw-bold text-gray-800 fs-6">08:42</div>
                    <div className="timeline-badge">
                      <i className="fa fa-genderless text-warning fs-1"></i>
                    </div>
                    <div className="fw-mormal timeline-content text-muted ps-3">
                      Outlines keep you honest. And keep structure
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-label fw-bold text-gray-800 fs-6">10:00</div>
                    <div className="timeline-badge">
                      <i className="fa fa-genderless text-success fs-1"></i>
                    </div>
                    <div className="timeline-content d-flex">
                      <span className="fw-bold text-gray-800 ps-3">AEOL meeting</span>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-label fw-bold text-gray-800 fs-6">14:37</div>
                    <div className="timeline-badge">
                      <i className="fa fa-genderless text-danger fs-1"></i>
                    </div>
                    <div className="timeline-content fw-bold text-gray-800 ps-3">
                      Make deposit
                      <a href="#" className="text-primary">USD 700</a>.
                      to ESL
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-label fw-bold text-gray-800 fs-6">16:50</div>
                    <div className="timeline-badge">
                      <i className="fa fa-genderless text-primary fs-1"></i>
                    </div>
                    <div className="timeline-content fw-mormal text-muted ps-3">
                      Indulging in poorly driving and keep structure keep great
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-label fw-bold text-gray-800 fs-6">21:03</div>
                    <div className="timeline-badge">
                      <i className="fa fa-genderless text-danger fs-1"></i>
                    </div>
                    <div className="timeline-content fw-semibold text-gray-800 ps-3">
                      New order placed <a href="#" className="text-primary">#XF-2356</a>.
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-label fw-bold text-gray-800 fs-6">16:50</div>
                    <div className="timeline-badge">
                      <i className="fa fa-genderless text-primary fs-1"></i>
                    </div>
                    <div className="timeline-content fw-mormal text-muted ps-3">
                      Indulging in poorly driving and keep structure keep great
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-label fw-bold text-gray-800 fs-6">21:03</div>
                    <div className="timeline-badge">
                      <i className="fa fa-genderless text-danger fs-1"></i>
                    </div>
                    <div className="timeline-content fw-semibold text-gray-800 ps-3">
                      New order placed <a href="#" className="text-primary">#XF-2356</a>.
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-label fw-bold text-gray-800 fs-6">10:30</div>
                    <div className="timeline-badge">
                      <i className="fa fa-genderless text-success fs-1"></i>
                    </div>
                    <div className="timeline-content fw-mormal text-muted ps-3">
                      Finance KPI Mobile app launch preparion meeting
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card   mb-xl-8">

              <div className="card-header border-0 pt-5">
                <h3 className="card-title align-items-start flex-column">
                  <span className="card-label fw-bold text-gray-900">Trends</span>

                  <span className="text-muted mt-1 fw-semibold fs-7">Latest tech trends</span>
                </h3>

                <div className="card-toolbar">

                  <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                    <i className="ki-duotone ki-category fs-6"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></i>            </button>


                  <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">

                    <div className="menu-item px-3">
                      <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                        Payments
                      </div>
                    </div>



                    <div className="menu-item px-3">
                      <a href="#" className="menu-link px-3">
                        Create Invoice
                      </a>
                    </div>



                    <div className="menu-item px-3">
                      <a href="#" className="menu-link flex-stack px-3">
                        Create Payment

                        <span className="ms-2" data-bs-toggle="tooltip" aria-label="Specify a target name for future usage and reference" data-bs-original-title="Specify a target name for future usage and reference" data-kt-initialized="1">
                          <i className="ki-duotone ki-information fs-6"><span className="path1"></span><span className="path2"></span><span className="path3"></span></i>            </span>
                      </a>
                    </div>



                    <div className="menu-item px-3">
                      <a href="#" className="menu-link px-3">
                        Generate Bill
                      </a>
                    </div>



                    <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                      <a href="#" className="menu-link px-3">
                        <span className="menu-title">Subscription</span>
                        <span className="menu-arrow"></span>
                      </a>


                      <div className="menu-sub menu-sub-dropdown w-175px py-4">

                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Plans
                          </a>
                        </div>



                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Billing
                          </a>
                        </div>



                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Statements
                          </a>
                        </div>



                        <div className="separator my-2"></div>



                        <div className="menu-item px-3">
                          <div className="menu-content px-3">

                            <label className="form-check form-switch form-check-custom form-check-solid">

                              <input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked={true} name="notifications" />



                              <span className="form-check-label text-muted fs-6">
                                Recuring
                              </span>

                            </label>

                          </div>
                        </div>

                      </div>

                    </div>



                    <div className="menu-item px-3 my-1">
                      <a href="#" className="menu-link px-3">
                        Settings
                      </a>
                    </div>

                  </div>


                </div>
              </div>



              <div className="card-body pt-5">


                <div className="d-flex align-items-sm-center mb-7">

                  <div className="symbol symbol-50px me-5">
                    <span className="symbol-label">
                      <img src="/metronic8/demo9/assets/media/svg/brand-logos/plurk.svg" className="h-50 align-self-center" alt="" />
                    </span>
                  </div>



                  <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                    <div className="flex-grow-1 me-2">
                      <a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bold">Top Authors</a>

                      <span className="text-muted fw-semibold d-block fs-7">Mark, Rowling, Esther</span>
                    </div>

                    <span className="badge badge-light fw-bold my-2">+82$</span>
                  </div>

                </div>



                <div className="d-flex align-items-sm-center mb-7">

                  <div className="symbol symbol-50px me-5">
                    <span className="symbol-label">
                      <img src="/metronic8/demo9/assets/media/svg/brand-logos/telegram.svg" className="h-50 align-self-center" alt="" />
                    </span>
                  </div>



                  <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                    <div className="flex-grow-1 me-2">
                      <a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bold">Popular Authors</a>

                      <span className="text-muted fw-semibold d-block fs-7">Randy, Steve, Mike</span>
                    </div>

                    <span className="badge badge-light fw-bold my-2">+280$</span>
                  </div>

                </div>



                <div className="d-flex align-items-sm-center mb-7">

                  <div className="symbol symbol-50px me-5">
                    <span className="symbol-label">
                      <img src="/metronic8/demo9/assets/media/svg/brand-logos/vimeo.svg" className="h-50 align-self-center" alt="" />
                    </span>
                  </div>



                  <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                    <div className="flex-grow-1 me-2">
                      <a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bold">New Users</a>

                      <span className="text-muted fw-semibold d-block fs-7">John, Pat, Jimmy</span>
                    </div>

                    <span className="badge badge-light fw-bold my-2">+4500$</span>
                  </div>

                </div>



                <div className="d-flex align-items-sm-center mb-7">

                  <div className="symbol symbol-50px me-5">
                    <span className="symbol-label">
                      <img src="/metronic8/demo9/assets/media/svg/brand-logos/bebo.svg" className="h-50 align-self-center" alt="" />
                    </span>
                  </div>



                  <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                    <div className="flex-grow-1 me-2">
                      <a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bold">Active Customers</a>

                      <span className="text-muted fw-semibold d-block fs-7">Mark, Rowling, Esther</span>
                    </div>

                    <span className="badge badge-light fw-bold my-2">+686$</span>
                  </div>

                </div>



                <div className="d-flex align-items-sm-center mb-7">

                  <div className="symbol symbol-50px me-5">
                    <span className="symbol-label">
                      <img src="/metronic8/demo9/assets/media/svg/brand-logos/kickstarter.svg" className="h-50 align-self-center" alt="" />
                    </span>
                  </div>



                  <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                    <div className="flex-grow-1 me-2">
                      <a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bold">Bestseller Theme</a>

                      <span className="text-muted fw-semibold d-block fs-7">Disco, Retro, Sports</span>
                    </div>

                    <span className="badge badge-light fw-bold my-2">+726$</span>
                  </div>

                </div>



                <div className="d-flex align-items-sm-center ">

                  <div className="symbol symbol-50px me-5">
                    <span className="symbol-label">
                      <img src="/metronic8/demo9/assets/media/svg/brand-logos/fox-hub.svg" className="h-50 align-self-center" alt="" />
                    </span>
                  </div>



                  <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                    <div className="flex-grow-1 me-2">
                      <a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bold">Fox Broker App</a>

                      <span className="text-muted fw-semibold d-block fs-7">Finance, Corporate, Apps</span>
                    </div>

                    <span className="badge badge-light fw-bold my-2">+145$</span>
                  </div>

                </div>


              </div>

            </div>
         </div>
          <div className="col-xl-8 ps-xl-12">
            <div className="card bgi-position-y-bottom bgi-position-x-end bgi-no-repeat bgi-size-cover min-h-250px bg-primary mb-5 mb-xl-8 border-0" style={{ backgroundPosition: "100% 50px", backgroundSize: "500px auto", backgroundImage: "url('/metronic8/demo9/assets/media/misc/city.png')" }} dir="ltr">
              <div className="card-body d-flex flex-column justify-content-center ps-lg-12">
                <h3 className="text-white fs-2qx fw-bold mb-7">
                  We are working <br />
                  to boost lovely mood
                </h3>
                <div className="m-0">
                  <a href="#" className="btn btn-success fw-semibold px-6 py-3" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app">Create a Store</a>
                </div>
              </div>
            </div>
            <div className="row g-5 g-xl-8">
              <div className="col-xl-6">
                <div className="card card-xl-stretch mb-xl-8">
                  <div className="card-header border-0 py-5">
                    <h3 className="card-title align-items-start flex-column">
                      <span className="card-label fw-bold fs-3 mb-1">Trends</span>
                      <span className="text-muted fw-semibold fs-7">Latest trends</span>
                    </h3>
                    <div className="card-toolbar">
                      <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                        <i className="ki-duotone ki-category fs-6"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></i>            </button>
                      <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
                        <div className="menu-item px-3">
                          <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                            Payments
                          </div>
                        </div>
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Create Invoice
                          </a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link flex-stack px-3">Create Payment
                            <span className="ms-2" data-bs-toggle="tooltip" aria-label="Specify a target name for future usage and reference" data-bs-original-title="Specify a target name for future usage and reference" data-kt-initialized="1">
                              <i className="ki-duotone ki-information fs-6"><span className="path1"></span><span className="path2"></span><span className="path3"></span></i>            </span>
                          </a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Generate Bill
                          </a>
                        </div>
                        <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                          <a href="#" className="menu-link px-3">
                            <span className="menu-title">Subscription</span>
                            <span className="menu-arrow"></span>
                          </a>
                          <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Plans
                              </a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Billing
                              </a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Statements
                              </a>
                            </div>
                            <div className="separator my-2"></div>
                            <div className="menu-item px-3">
                              <div className="menu-content px-3">
                                <label className="form-check form-switch form-check-custom form-check-solid">
                                  <input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked={true} name="notifications" />
                                  <span className="form-check-label text-muted fs-6">
                                    Recuring
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="menu-item px-3 my-1">
                          <a href="#" className="menu-link px-3">
                            Settings
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <div className="mixed-widget-5-chart card-rounded-top" data-kt-chart-color="primary" style={{ height: "150px", minHeight: "150px" }}><div id="apexchartsj1xs67enk" className="apexcharts-canvas apexchartsj1xs67enk apexcharts-theme-light" style={{ width: "292px", height: "150px" }}>
                    <img src={ChartImg} alt="chart" />  
                    <div className="apexcharts-tooltip apexcharts-theme-light" style={{ left: "-20px", top: "93.4615px" }}><div className="apexcharts-tooltip-title" style={{ fontFamily: "inherit", fontSize: "12px" }}>May</div><div className="apexcharts-tooltip-series-group apexcharts-active" style={{ order: "1", display: "flex" }}><span className="apexcharts-tooltip-marker" style={{ backgroundColor: "rgb(233, 243, 255)" }}></span><div className="apexcharts-tooltip-text" style={{ fontFamily: "inherit", fontSize: "12px" }}><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label">Net Profit: </span><span className="apexcharts-tooltip-text-y-value">$25 thousands</span></div><div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label"></span><span className="apexcharts-tooltip-text-goals-value"></span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div></div><div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light" style={{ left: "152.755px", top: "150.5px" }}><div className="apexcharts-xaxistooltip-text" style={{ fontFamily: "inherit", fontSize: "12px", minWidth: "22.7656px" }}>May</div></div><div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div className="apexcharts-yaxistooltip-text"></div></div></div></div>
                    <div className="mt-5">
                      <div className="d-flex flex-stack mb-5">
                        <div className="d-flex align-items-center me-2">
                          <div className="symbol symbol-50px me-3">
                            <div className="symbol-label bg-light">
                              <img src="/metronic8/demo9/assets/media/svg/brand-logos/plurk.svg" alt="" className="h-50" />
                            </div>
                          </div>
                          <div>
                            <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Top Authors</a>
                            <div className="fs-7 text-muted fw-semibold mt-1">Ricky Hunt, Sandra Trepp</div>
                          </div>
                        </div>
                        <div className="badge badge-light fw-semibold py-4 px-3">+82$</div>
                      </div>
                      <div className="d-flex flex-stack mb-5">
                        <div className="d-flex align-items-center me-2">
                          <div className="symbol symbol-50px me-3">
                            <div className="symbol-label bg-light">
                              <img src="/metronic8/demo9/assets/media/svg/brand-logos/figma-1.svg" alt="" className="h-50" />
                            </div>
                          </div>
                          <div>
                            <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Top Sales</a>
                            <div className="fs-7 text-muted fw-semibold mt-1">PitStop Emails</div>
                          </div>
                        </div>
                        <div className="badge badge-light fw-semibold py-4 px-3">+82$</div>
                      </div>
                      <div className="d-flex flex-stack">
                        <div className="d-flex align-items-center me-2">
                          <div className="symbol symbol-50px me-3">
                            <div className="symbol-label bg-light">
                              <img src="/metronic8/demo9/assets/media/svg/brand-logos/vimeo.svg" alt="" className="h-50" />
                            </div>
                          </div>
                          <div className="py-1">
                            <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Top Engagement</a>
                            <div className="fs-7 text-muted fw-semibold mt-1">KT.com</div>
                          </div>
                        </div>
                        <div className="badge badge-light fw-semibold py-4 px-3">+82$</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="card card-xl-stretch mb-5 mb-xl-8">
                  <div className="card-header border-0">
                    <h3 className="card-title fw-bold text-gray-900">Todo</h3>
                    <div className="card-toolbar">
                      <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                        <i className="ki-duotone ki-category fs-6"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></i>            </button>
                      <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
                        <div className="menu-item px-3">
                          <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                            Payments
                          </div>
                        </div>
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Create Invoice
                          </a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link flex-stack px-3">Create Payment
                            <span className="ms-2" data-bs-toggle="tooltip" aria-label="Specify a target name for future usage and reference" data-bs-original-title="Specify a target name for future usage and reference" data-kt-initialized="1">
                              <i className="ki-duotone ki-information fs-6"><span className="path1"></span><span className="path2"></span><span className="path3"></span></i>            </span>
                          </a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Generate Bill
                          </a>
                        </div>
                        <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                          <a href="#" className="menu-link px-3">
                            <span className="menu-title">Subscription</span>
                            <span className="menu-arrow"></span>
                          </a>
                          <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Plans
                              </a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Billing
                              </a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Statements
                              </a>
                            </div>
                            <div className="separator my-2"></div>
                            <div className="menu-item px-3">
                              <div className="menu-content px-3">
                                <label className="form-check form-switch form-check-custom form-check-solid">
                                  <input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked={true} name="notifications" />
                                  <span className="form-check-label text-muted fs-6">Recuring</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="menu-item px-3 my-1">
                          <a href="#" className="menu-link px-3">
                            Settings
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-2">
                    <div className="d-flex align-items-center mb-8">
                      <span className="bullet bullet-vertical h-40px bg-success"></span>
                      <div className="form-check form-check-custom form-check-solid mx-5">
                        <input className="form-check-input" type="checkbox" value="" />
                      </div>
                      <div className="flex-grow-1">
                        <a href="#" className="text-gray-800 text-hover-primary fw-bold fs-6">Create FireStone Logo</a>
                        <span className="text-muted fw-semibold d-block">Due in 2 Days</span>
                      </div>
                      <span className="badge badge-light-success fs-8 fw-bold">New</span>
                    </div>
                    <div className="d-flex align-items-center mb-8">
                      <span className="bullet bullet-vertical h-40px bg-primary"></span>
                      <div className="form-check form-check-custom form-check-solid mx-5">
                        <input className="form-check-input" type="checkbox" value="" />
                      </div>
                      <div className="flex-grow-1">
                        <a href="#" className="text-gray-800 text-hover-primary fw-bold fs-6">Stakeholder Meeting</a>
                        <span className="text-muted fw-semibold d-block">Due in 3 Days</span>
                      </div>
                      <span className="badge badge-light-primary fs-8 fw-bold">New</span>
                    </div>
                    <div className="d-flex align-items-center mb-8">
                      <span className="bullet bullet-vertical h-40px bg-warning"></span>
                      <div className="form-check form-check-custom form-check-solid mx-5">
                        <input className="form-check-input" type="checkbox" value="" />
                      </div>
                      <div className="flex-grow-1">
                        <a href="#" className="text-gray-800 text-hover-primary fw-bold fs-6">Scoping &amp; Estimations</a>
                        <span className="text-muted fw-semibold d-block">Due in 5 Days</span>
                      </div>
                      <span className="badge badge-light-warning fs-8 fw-bold">New</span>
                    </div>
                    <div className="d-flex align-items-center mb-8">
                      <span className="bullet bullet-vertical h-40px bg-primary"></span>
                      <div className="form-check form-check-custom form-check-solid mx-5">
                        <input className="form-check-input" type="checkbox" value="" />
                      </div>
                      <div className="flex-grow-1">
                        <a href="#" className="text-gray-800 text-hover-primary fw-bold fs-6">KPI App Showcase</a>
                        <span className="text-muted fw-semibold d-block">Due in 2 Days</span>
                      </div>
                      <span className="badge badge-light-primary fs-8 fw-bold">New</span>
                    </div>
                    <div className="d-flex align-items-center mb-8">
                      <span className="bullet bullet-vertical h-40px bg-danger"></span>
                      <div className="form-check form-check-custom form-check-solid mx-5">
                        <input className="form-check-input" type="checkbox" value="" />
                      </div>
                      <div className="flex-grow-1">
                        <a href="#" className="text-gray-800 text-hover-primary fw-bold fs-6">Project Meeting</a>
                        <span className="text-muted fw-semibold d-block">Due in 12 Days</span>
                      </div>
                      <span className="badge badge-light-danger fs-8 fw-bold">New</span>
                    </div>
                    <div className="d-flex align-items-center ">
                      <span className="bullet bullet-vertical h-40px bg-success"></span>
                      <div className="form-check form-check-custom form-check-solid mx-5">
                        <input className="form-check-input" type="checkbox" value="" />
                      </div>
                      <div className="flex-grow-1">
                        <a href="#" className="text-gray-800 text-hover-primary fw-bold fs-6">Customers Update</a>
                        <span className="text-muted fw-semibold d-block">Due in 1 week</span>
                      </div>
                      <span className="badge badge-light-success fs-8 fw-bold">New</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-5 mb-xl-8">
              <div className="card-header border-0 pt-5">
                  <h3 className="card-title align-items-start flex-column">
                  <span className="card-label fw-bold fs-3 mb-1">Latest Products</span>
                  <span className="text-muted mt-1 fw-semibold fs-7">More than 400 new products</span>
                </h3>
                <div className="card-toolbar">
                  <ul className="nav" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4 me-1 active" data-bs-toggle="tab" href="#kt_table_widget_5_tab_1" aria-selected="true" role="tab">Month</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4 me-1" data-bs-toggle="tab" href="#kt_table_widget_5_tab_2" aria-selected="false" tabIndex={-1} role="tab">Week</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4" data-bs-toggle="tab" href="#kt_table_widget_5_tab_3" aria-selected="false" tabIndex={-1} role="tab">Day</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body py-3">
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="kt_table_widget_5_tab_1" role="tabpanel">
                    <div className="table-responsive">
                      <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                        <thead>
                          <tr className="border-0">
                            <th className="p-0 w-50px"></th>
                            <th className="p-0 min-w-150px"></th>
                            <th className="p-0 min-w-140px"></th>
                            <th className="p-0 min-w-110px"></th>
                            <th className="p-0 min-w-50px"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="symbol symbol-45px me-2">
                                <span className="symbol-label">
                                  <img src="/metronic8/demo9/assets/media/svg/brand-logos/plurk.svg" className="h-50 align-self-center" alt="" />
                                </span>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-gray-900 fw-bold text-hover-primary mb-1 fs-6">Brad Simmons</a>
                              <span className="text-muted fw-semibold d-block">Movie Creator</span>
                            </td>
                            <td className="text-end text-muted fw-bold">
                              React, HTML                                        </td>
                            <td className="text-end">
                              <span className="badge badge-light-success">Approved</span>
                            </td>
                            <td className="text-end">
                              <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                <i className="ki-duotone ki-arrow-right fs-2"><span className="path1"></span><span className="path2"></span></i>                                            </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="symbol symbol-45px me-2">
                                <span className="symbol-label">
                                  <img src="/metronic8/demo9/assets/media/svg/brand-logos/telegram.svg" className="h-50 align-self-center" alt="" />
                                </span>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-gray-900 fw-bold text-hover-primary mb-1 fs-6">Popular Authors</a>
                              <span className="text-muted fw-semibold d-block">Most Successful</span>
                            </td>
                            <td className="text-end text-muted fw-bold">
                              Python, MySQL                                        </td>
                            <td className="text-end">
                              <span className="badge badge-light-warning">In Progress</span>
                            </td>
                            <td className="text-end">
                              <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                <i className="ki-duotone ki-arrow-right fs-2"><span className="path1"></span><span className="path2"></span></i>                                            </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="symbol symbol-45px me-2">
                                <span className="symbol-label">
                                  <img src="/metronic8/demo9/assets/media/svg/brand-logos/vimeo.svg" className="h-50 align-self-center" alt="" />
                                </span>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-gray-900 fw-bold text-hover-primary mb-1 fs-6">New Users</a>
                              <span className="text-muted fw-semibold d-block">Awesome Users</span>
                            </td>
                            <td className="text-end text-muted fw-bold">
                              Laravel,Metronic                                        </td>
                            <td className="text-end">
                              <span className="badge badge-light-primary">Success</span>
                            </td>
                            <td className="text-end">
                              <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                <i className="ki-duotone ki-arrow-right fs-2"><span className="path1"></span><span className="path2"></span></i>                                            </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="symbol symbol-45px me-2">
                                <span className="symbol-label">
                                  <img src="/metronic8/demo9/assets/media/svg/brand-logos/bebo.svg" className="h-50 align-self-center" alt="" />
                                </span>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-gray-900 fw-bold text-hover-primary mb-1 fs-6">Active Customers</a>
                              <span className="text-muted fw-semibold d-block">Movie Creator</span>
                            </td>
                            <td className="text-end text-muted fw-bold">
                              AngularJS, C#                                        </td>
                            <td className="text-end">
                              <span className="badge badge-light-danger">Rejected</span>
                            </td>
                            <td className="text-end">
                              <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                <i className="ki-duotone ki-arrow-right fs-2"><span className="path1"></span><span className="path2"></span></i>                                            </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="symbol symbol-45px me-2">
                                <span className="symbol-label">
                                  <img src="/metronic8/demo9/assets/media/svg/brand-logos/kickstarter.svg" className="h-50 align-self-center" alt="" />
                                </span>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-gray-900 fw-bold text-hover-primary mb-1 fs-6">Bestseller Theme</a>
                              <span className="text-muted fw-semibold d-block">Best Customers</span>
                            </td>
                            <td className="text-end text-muted fw-bold">
                              ReactJS, Ruby	                                        </td>
                            <td className="text-end">
                              <span className="badge badge-light-warning">In Progress</span>
                            </td>
                            <td className="text-end">
                              <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                <i className="ki-duotone ki-arrow-right fs-2"><span className="path1"></span><span className="path2"></span></i>                                            </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="tab-pane fade " id="kt_table_widget_5_tab_2" role="tabpanel">
                    <div className="table-responsive">
                      <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                        <thead>
                          <tr className="border-0">
                            <th className="p-0 w-50px"></th>
                            <th className="p-0 min-w-150px"></th>
                            <th className="p-0 min-w-140px"></th>
                            <th className="p-0 min-w-110px"></th>
                            <th className="p-0 min-w-50px"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="symbol symbol-45px me-2">
                                <span className="symbol-label">
                                  <img src="/metronic8/demo9/assets/media/svg/brand-logos/plurk.svg" className="h-50 align-self-center" alt="" />
                                </span>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-gray-900 fw-bold text-hover-primary mb-1 fs-6">Brad Simmons</a>
                              <span className="text-muted fw-semibold d-block">Movie Creator</span>
                            </td>
                            <td className="text-end text-muted fw-bold">
                              React, HTML                                        </td>
                            <td className="text-end">
                              <span className="badge badge-light-success">Approved</span>
                            </td>
                            <td className="text-end">
                              <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                <i className="ki-duotone ki-arrow-right fs-2"><span className="path1"></span><span className="path2"></span></i>                                            </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="symbol symbol-45px me-2">
                                <span className="symbol-label">
                                  <img src="/metronic8/demo9/assets/media/svg/brand-logos/telegram.svg" className="h-50 align-self-center" alt="" />
                                </span>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-gray-900 fw-bold text-hover-primary mb-1 fs-6">Popular Authors</a>
                              <span className="text-muted fw-semibold d-block">Most Successful</span>
                            </td>
                            <td className="text-end text-muted fw-bold">
                              Python, MySQL                                        </td>
                            <td className="text-end">
                              <span className="badge badge-light-warning">In Progress</span>
                            </td>
                            <td className="text-end">
                              <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                <i className="ki-duotone ki-arrow-right fs-2"><span className="path1"></span><span className="path2"></span></i>                                            </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="symbol symbol-45px me-2">
                                <span className="symbol-label">
                                  <img src="/metronic8/demo9/assets/media/svg/brand-logos/bebo.svg" className="h-50 align-self-center" alt="" />
                                </span>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-gray-900 fw-bold text-hover-primary mb-1 fs-6">Active Customers</a>
                              <span className="text-muted fw-semibold d-block">Movie Creator</span>
                            </td>
                            <td className="text-end text-muted fw-bold">
                              AngularJS, C#                                        </td>
                            <td className="text-end">
                              <span className="badge badge-light-danger">Rejected</span>
                            </td>
                            <td className="text-end">
                              <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                <i className="ki-duotone ki-arrow-right fs-2"><span className="path1"></span><span className="path2"></span></i>                                            </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="tab-pane fade " id="kt_table_widget_5_tab_3" role="tabpanel">
                    <div className="table-responsive">
                      <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                        <thead>
                          <tr className="border-0">
                            <th className="p-0 w-50px"></th>
                            <th className="p-0 min-w-150px"></th>
                            <th className="p-0 min-w-140px"></th>
                            <th className="p-0 min-w-110px"></th>
                            <th className="p-0 min-w-50px"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="symbol symbol-45px me-2">
                                <span className="symbol-label">
                                  <img src="/metronic8/demo9/assets/media/svg/brand-logos/kickstarter.svg" className="h-50 align-self-center" alt="" />
                                </span>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-gray-900 fw-bold text-hover-primary mb-1 fs-6">Bestseller Theme</a>
                              <span className="text-muted fw-semibold d-block">Best Customers</span>
                            </td>
                            <td className="text-end text-muted fw-bold">
                              ReactJS, Ruby	                                        </td>
                            <td className="text-end">
                              <span className="badge badge-light-warning">In Progress</span>
                            </td>
                            <td className="text-end">
                              <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                <i className="ki-duotone ki-arrow-right fs-2"><span className="path1"></span><span className="path2"></span></i>                                            </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="symbol symbol-45px me-2">
                                <span className="symbol-label">
                                  <img src="/metronic8/demo9/assets/media/svg/brand-logos/bebo.svg" className="h-50 align-self-center" alt="" />
                                </span>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-gray-900 fw-bold text-hover-primary mb-1 fs-6">Active Customers</a>
                              <span className="text-muted fw-semibold d-block">Movie Creator</span>
                            </td>
                            <td className="text-end text-muted fw-bold">
                              AngularJS, C#                                        </td>
                            <td className="text-end">
                              <span className="badge badge-light-danger">Rejected</span>
                            </td>
                            <td className="text-end">
                              <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                <i className="ki-duotone ki-arrow-right fs-2"><span className="path1"></span><span className="path2"></span></i>                                            </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="symbol symbol-45px me-2">
                                <span className="symbol-label">
                                  <img src="/metronic8/demo9/assets/media/svg/brand-logos/vimeo.svg" className="h-50 align-self-center" alt="" />
                                </span>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-gray-900 fw-bold text-hover-primary mb-1 fs-6">New Users</a>
                              <span className="text-muted fw-semibold d-block">Awesome Users</span>
                            </td>
                            <td className="text-end text-muted fw-bold">
                              Laravel,Metronic                                        </td>
                            <td className="text-end">
                              <span className="badge badge-light-primary">Success</span>
                            </td>
                            <td className="text-end">
                              <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                <i className="ki-duotone ki-arrow-right fs-2"><span className="path1"></span><span className="path2"></span></i>                                            </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="symbol symbol-45px me-2">
                                <span className="symbol-label">
                                  <img src="/metronic8/demo9/assets/media/svg/brand-logos/telegram.svg" className="h-50 align-self-center" alt="" />
                                </span>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-gray-900 fw-bold text-hover-primary mb-1 fs-6">Popular Authors</a>
                              <span className="text-muted fw-semibold d-block">Most Successful</span>
                            </td>
                            <td className="text-end text-muted fw-bold">
                              Python, MySQL                                        </td>
                            <td className="text-end">
                              <span className="badge badge-light-warning">In Progress</span>
                            </td>
                            <td className="text-end">
                              <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                <i className="ki-duotone ki-arrow-right fs-2"><span className="path1"></span><span className="path2"></span></i>                                            </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-5 g-xl-8">
              <div className="col-xl-6">
                <div className="card card-xl-stretch mb-xl-8">
                  <div className="card-body">
                    <div className="d-flex flex-stack">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-60px me-5">
                          <span className="symbol-label bg-danger-light">
                            <img src="/metronic8/demo9/assets/media/svg/brand-logos/plurk.svg" className="h-50 align-self-center" alt="" />
                          </span>
                        </div>
                        <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3">
                          <a href="#" className="text-gray-900 fw-bold text-hover-primary fs-5">
                            Monthly Subscription                    </a>
                          <span className="text-muted fw-bold">
                            Due: 27 Apr 2020                    </span>
                        </div>
                      </div>
                      <div className="ms-1">
                        <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                          <i className="ki-duotone ki-category fs-6"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></i>                </button>
                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                          <div className="menu-item px-3">
                            <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">Quick Actions</div>
                          </div>
                          <div className="separator mb-3 opacity-75"></div>
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              New Ticket
                            </a>
                          </div>
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              New Customer
                            </a>
                          </div>
                          <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                            <a href="#" className="menu-link px-3">
                              <span className="menu-title">New Group</span>
                              <span className="menu-arrow"></span>
                            </a>
                            <div className="menu-sub menu-sub-dropdown w-175px py-4">
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3">
                                  Admin Group
                                </a>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3">
                                  Staff Group
                                </a>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3">
                                  Member Group
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              New Contact
                            </a>
                          </div>
                          <div className="separator mt-3 opacity-75"></div>
                          <div className="menu-item px-3">
                            <div className="menu-content px-3 py-3">
                              <a className="btn btn-primary  btn-sm px-4" href="#">
                                Generate Reports
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column w-100 mt-12">
                      <span className="text-gray-900 me-2 fw-bold pb-3">
                        Progress
                      </span>
                      <div className="progress h-5px w-100">
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                      </div>
                    </div>
                    <div className="d-flex flex-column mt-10">
                      <div className="text-gray-900 me-2 fw-bold pb-4">
                        Team
                      </div>
                      <div className="d-flex">
                        <a href="#" className="symbol symbol-35px me-2" data-bs-toggle="tooltip" aria-label="Ana Stone" data-bs-original-title="Ana Stone" data-kt-initialized="1">
                          <img src="/metronic8/demo9/assets/media/avatars/300-6.jpg" alt="" />
                        </a>
                        <a href="#" className="symbol symbol-35px me-2" data-bs-toggle="tooltip" aria-label="Mark Larson" data-bs-original-title="Mark Larson" data-kt-initialized="1">
                          <img src="/metronic8/demo9/assets/media/avatars/300-5.jpg" alt="" />
                        </a>
                        <a href="#" className="symbol symbol-35px me-2" data-bs-toggle="tooltip" aria-label="Sam Harris" data-bs-original-title="Sam Harris" data-kt-initialized="1">
                          <img src="/metronic8/demo9/assets/media/avatars/300-9.jpg" alt="" />
                        </a>
                        <a href="#" className="symbol symbol-35px" data-bs-toggle="tooltip" aria-label="Alice Micto" data-bs-original-title="Alice Micto" data-kt-initialized="1">
                          <img src="/metronic8/demo9/assets/media/avatars/300-10.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="card card-xl-stretch mb-xl-8">
                  <div className="card-body">
                    <div className="d-flex flex-stack">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-60px me-5">
                          <span className="symbol-label bg-primary-light">
                            <img src="/metronic8/demo9/assets/media/svg/brand-logos/vimeo.svg" className="h-50 align-self-center" alt="" />
                          </span>
                        </div>
                        <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3">
                          <a href="#" className="text-gray-900 fw-bold text-hover-primary fs-5">
                            Monthly Subscription                    </a>
                          <span className="text-muted fw-bold">
                            Due: 27 Apr 2020                    </span>
                        </div>
                      </div>
                      <div className="ms-1">
                        <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                          <i className="ki-duotone ki-category fs-6"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></i>                </button>
                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                          <div className="menu-item px-3">
                            <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">Quick Actions</div>
                          </div>
                          <div className="separator mb-3 opacity-75"></div>
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              New Ticket
                            </a>
                          </div>
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              New Customer
                            </a>
                          </div>
                          <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                            <a href="#" className="menu-link px-3">
                              <span className="menu-title">New Group</span>
                              <span className="menu-arrow"></span>
                            </a>
                            <div className="menu-sub menu-sub-dropdown w-175px py-4">
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3">
                                  Admin Group
                                </a>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3">
                                  Staff Group
                                </a>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3">
                                  Member Group
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              New Contact
                            </a>
                          </div>
                          <div className="separator mt-3 opacity-75"></div>
                          <div className="menu-item px-3">
                            <div className="menu-content px-3 py-3">
                              <a className="btn btn-primary  btn-sm px-4" href="#">
                                Generate Reports
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column w-100 mt-12">
                      <span className="text-gray-900 me-2 fw-bold pb-3">
                        Progress
                      </span>
                      <div className="progress h-5px w-100">
                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: "75%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                      </div>
                    </div>
                    <div className="d-flex flex-column mt-10">
                      <div className="text-gray-900 me-2 fw-bold pb-4">
                        Team
                      </div>
                      <div className="d-flex">
                        <a href="#" className="symbol symbol-35px me-2" data-bs-toggle="tooltip" aria-label="Ana Stone" data-bs-original-title="Ana Stone" data-kt-initialized="1">
                          <img src="/metronic8/demo9/assets/media/avatars/300-6.jpg" alt="" />
                        </a>
                        <a href="#" className="symbol symbol-35px me-2" data-bs-toggle="tooltip" aria-label="Mark Larson" data-bs-original-title="Mark Larson" data-kt-initialized="1">
                          <img src="/metronic8/demo9/assets/media/avatars/300-5.jpg" alt="" />
                        </a>
                        <a href="#" className="symbol symbol-35px me-2" data-bs-toggle="tooltip" aria-label="Sam Harris" data-bs-original-title="Sam Harris" data-kt-initialized="1">
                          <img src="/metronic8/demo9/assets/media/avatars/300-9.jpg" alt="" />
                        </a>
                        <a href="#" className="symbol symbol-35px" data-bs-toggle="tooltip" aria-label="Alice Micto" data-bs-original-title="Alice Micto" data-kt-initialized="1">
                          <img src="/metronic8/demo9/assets/media/avatars/300-10.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardContent