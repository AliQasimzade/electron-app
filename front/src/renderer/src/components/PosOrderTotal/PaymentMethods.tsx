import { useState } from "react";

const PaymentMethods = ({selectPaymentMethod, setSelectPaymentMethod}) => {
  return (
    <div className="m-0">
        {/*begin::Title*/}
        <h1 className="fw-bold text-gray-800 mb-5">Payment Method</h1>
        {/*end::Title*/}
        {/*begin::Radio group*/}
        <div
          className="d-flex flex-equal gap-5 gap-xxl-9 px-0 mb-12"
          data-kt-buttons="true"
          data-kt-buttons-target="[data-kt-button]"
          data-kt-initialized={1}
        >
          {/*begin::Radio*/}
          <label
            className={`btn bg-light btn-color-gray-600 btn-active-text-gray-800 border border-3 border-gray-100 border-active-primary btn-active-light-primary w-100 px-4 ${selectPaymentMethod == 1 ? 'active': ''}`}
            data-kt-button="true"
          >
            {/*begin::Input*/}
            <input
              className="btn-check"
              type="radio"
              name="method"
              onClick={() => setSelectPaymentMethod(1)}
              defaultValue={0}
            />
            {/*end::Input*/}
            {/*begin::Icon*/}
            <i className="ki-duotone ki-dollar fs-2hx mb-2 pe-0">
              <span className="path1" />
              <span className="path2" />
              <span className="path3" />
            </i>{" "}
            {/*end::Icon*/}
            {/*begin::Title*/}
            <span className="fs-7 fw-bold d-block">Cash</span>
            {/*end::Title*/}
          </label>
          {/*end::Radio*/}
          {/*begin::Radio*/}
          <label
            className={`btn bg-light btn-color-gray-600 btn-active-text-gray-800 border border-3 border-gray-100 border-active-primary btn-active-light-primary w-100 px-4 ${selectPaymentMethod == 2 ? 'active': ''}`}
            data-kt-button="true"
          >
            {/*begin::Input*/}
            <input
              className="btn-check"
              type="radio"
              name="method"
              onClick={() => setSelectPaymentMethod(2)}

              defaultValue={1}
            />
            {/*end::Input*/}
            {/*begin::Icon*/}
            <i className="ki-duotone ki-credit-cart fs-2hx mb-2 pe-0">
              <span className="path1" />
              <span className="path2" />
            </i>{" "}
            {/*end::Icon*/}
            {/*begin::Title*/}
            <span className="fs-7 fw-bold d-block">Card</span>
            {/*end::Title*/}
          </label>
          {/*end::Radio*/}
          {/*begin::Radio*/}
          <label
           className={`btn bg-light btn-color-gray-600 btn-active-text-gray-800 border border-3 border-gray-100 border-active-primary btn-active-light-primary w-100 px-4 ${selectPaymentMethod == 3 ? 'active': ''}`}
            data-kt-button="true"
          >
            {/*begin::Input*/}
            <input
              className="btn-check"
              type="radio"
              onClick={() => setSelectPaymentMethod(3)}

              name="method"
              defaultValue={2}
            />
            {/*end::Input*/}
            {/*begin::Icon*/}
            <i className="ki-duotone ki-paypal fs-2hx mb-2 pe-0">
              <span className="path1" />
              <span className="path2" />
            </i>{" "}
            {/*end::Icon*/}
            {/*begin::Title*/}
            <span className="fs-7 fw-bold d-block">E-Wallet</span>
            {/*end::Title*/}
          </label>
          {/*end::Radio*/}
        </div>
        {/*end::Radio group*/}
        {/*begin::Actions*/}
        <button className="btn btn-primary fs-1 w-100 py-4">
          Print Bills
        </button>
        {/*end::Actions*/}
      </div>
  )
}

export default PaymentMethods
