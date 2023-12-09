import { MenuListState } from "@renderer/types.d"

const MenuList = ({ menuList, selectMenu, setSelectMenu }) => {


    return (
        <ul
            className="nav nav-pills d-flex justify-content-between nav-pills-custom gap-3 mb-6"
            role="tablist"
        >
            {
                menuList.map((menu: MenuListState, idx: number) => (
                    <li className="nav-item mb-3 me-0" role="presentation" key={idx}>
                        <button
                            onClick={() => setSelectMenu(idx)}
                            className={`nav-link nav-link-border-solid btn btn-outline btn-flex btn-active-color-primary flex-column flex-stack pt-9 pb-7 page-bg show ${selectMenu == idx && 'active'}`}
                            data-bs-toggle="pill"
                            style={{ width: 138, height: 180 }}
                            aria-selected="true"
                            role="tab"
                        >
                            <div className="nav-icon mb-3">
                                <img
                                    src={menu.imageUrl}
                                    className="w-50px"
                                    alt=""
                                />
                            </div>
                            <div className="">
                                <span className="text-gray-800 fw-bold fs-2 d-block">
                                    {menu.title}
                                </span>
                                <span className="text-gray-500 fw-semibold fs-7">
                                    {menu.count}  {menu.countTitle}
                                </span>
                            </div>
                        </button>
                    </li>
                ))
            }

        </ul>
    )
}

export default MenuList
