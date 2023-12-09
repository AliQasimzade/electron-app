import { useState } from 'react';
import OrdersTable from './OrdersTable'
import PaymentMethods from "./PaymentMethods";
import { ProductState } from '@renderer/types.d';
const PosOrderTotal = ({ selectPaymentMethod, setSelectPaymentMethod }) => {

  const [selectedProducts, setSelectedProducts] = useState<ProductState[]>([
    {
      image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-2.jpg',
      price: 33.00,
      title: 'T-Bone Stake',
      productCount: 5
    },
    {
      image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-9.jpg',
      price: 7.50,
      title: 'Soup of the Day',
      productCount: 1
    },
    {
      image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-3.jpg',
      price: 13.00,
      title: 'Pancakes',
      productCount: 3
    }
  ])


  const clearAllSelectedProducts = () => setSelectedProducts([])
  return (
    <div className="card card-flush bg-body " id="kt_pos_form">
      {/*begin::Header*/}
      <div className="card-header pt-5">
        <h3 className="card-title fw-bold text-gray-800 fs-2qx">
          Current Order
        </h3>
        <div className="card-toolbar">
          <button  onClick={clearAllSelectedProducts}className="btn btn-light-primary fs-4 fw-bold py-4">
            Clear All
          </button>
        </div>
      </div>

      <div className="card-body pt-0">
        <OrdersTable selectedProducts={selectedProducts} setSelectedProduct={setSelectedProducts}/>
        {/*end::Table container*/}
        {/*begin::Summary*/}
        <div className="d-flex flex-stack bg-success rounded-3 p-6 mb-11">
          {/*begin::Content*/}
          <div className="fs-6 fw-bold text-white">
            <span className="d-block lh-1 mb-2">Subtotal</span>
            <span className="d-block mb-2">Discounts</span>
            <span className="d-block mb-9">Tax(12%)</span>
            <span className="d-block fs-2qx lh-1">Total</span>
          </div>
          {/*end::Content*/}
          {/*begin::Content*/}
          <div className="fs-6 fw-bold text-white text-end">
            <span className="d-block lh-1 mb-2" data-kt-pos-element="total">
              ${selectedProducts.reduce((acc, product) => acc + (product.productCount !== undefined ? product.productCount * product.price : 0), 0)}
            </span>
            <span className="d-block mb-2" data-kt-pos-element="discount">
              -$0
            </span>
            <span className="d-block mb-9" data-kt-pos-element="tax">
              $ {selectedProducts.reduce((acc, product) => acc + (product.productCount !== undefined ? product.productCount * product.price : 0), 11.20)}
            </span>
            <span
              className="d-block fs-2qx lh-1"
              data-kt-pos-element="grant-total"
            >
              ${selectedProducts.reduce((acc, product) => acc + (product.productCount !== undefined ? product.productCount * product.price : 0), 11.20)}
            </span>
          </div>
          {/*end::Content*/}
        </div>
        {/*end::Summary*/}
        {/*begin::Payment Method*/}
        <PaymentMethods selectPaymentMethod={selectPaymentMethod} setSelectPaymentMethod={setSelectPaymentMethod} />
        {/*end::Payment Method*/}
      </div>
      {/*end: Card Body*/}
    </div>
  )
}

export default PosOrderTotal
