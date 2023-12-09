import { useState } from 'react';
import { Outlet } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import MenuList from "@renderer/components/MenuList/MenuList"
import Spagetti from '@renderer/assets/images/spaghetti.svg'
import Salad from '@renderer/assets/images/salad.svg'
import CheeseBurger from '@renderer/assets/images/cheeseburger.svg'
import Coffee from '@renderer/assets/images/coffee.svg'
import CheeseCake from '@renderer/assets/images/cheesecake.svg'
import { MenuListState } from '@renderer/types.d';
import MenuContent from '@renderer/components/MenuList/MenuContent';
import PosOrderTotal from '@renderer/components/PosOrderTotal/PosOrderTotal';

const PosPage = () => {

  const [menuList] = useState<MenuListState[]>([

    {
      imageUrl: Spagetti,
      count: 8,
      title: 'Lunch',
      countTitle: 'Options'
    },

    {
      imageUrl: Salad,
      count: 14,
      title: 'Salad',
      countTitle: 'Salads'
    },

    {
      imageUrl: CheeseBurger,
      count: 5,
      title: 'Burgers',
      countTitle: 'Burgers'
    },

    {
      imageUrl: Coffee,
      count: 7,
      title: 'Coffee',
      countTitle: 'Beverages'
    },

    {
      imageUrl: CheeseCake,
      count: 8,
      title: 'Dessert',
      countTitle: 'Deserts'
    },

  ]);

  const [selectMenu, setSelectMenu] = useState<number>(0);
  const [selectPaymentMethod, setSelectPaymentMethod] = useState<number>(1)
  return (
    <div>
      <Helmet>
        <title>POS System</title>
      </Helmet>

      {/* Content */}
      <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
        {/*begin::Container*/}
        <div className=" container-xxl " id="kt_content_container">
          {/*begin::Layout*/}
          <div className="d-flex flex-column flex-xl-row">
            {/*begin::Content*/}
            <div className="d-flex flex-row-fluid me-xl-9 mb-10 mb-xl-0">
              {/*begin::Pos food*/}
              <div className="card card-flush card-p-0 bg-transparent border-0 ">
                {/*begin::Body*/}
                <div className="card-body">
                  {/*begin::Nav*/}
                  <MenuList menuList={menuList} selectMenu={selectMenu} setSelectMenu={setSelectMenu} />

                  <MenuContent selectMenu={selectMenu} />
                  {/*end::Tab Content*/}
                </div>
                {/*end: Card Body*/}
              </div>
              {/*end::Pos food*/}
            </div>
            {/*end::Content*/}
            {/*begin::Sidebar*/}
            <div className="flex-row-auto w-xl-450px">
              {/*begin::Pos order*/}
              <PosOrderTotal selectPaymentMethod={selectPaymentMethod} setSelectPaymentMethod={setSelectPaymentMethod} />
              {/*end::Pos order*/}{" "}
            </div>
            {/*end::Sidebar*/}
          </div>
          {/*end::Layout*/}
        </div>
        {/*end::Container*/}{" "}
      </div>


      <Outlet />
    </div>
  )
}

export default PosPage
