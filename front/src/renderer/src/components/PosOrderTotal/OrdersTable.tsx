import { ProductState } from "@renderer/types.d"
const OrdersTable = ({ selectedProducts, setSelectedProduct }) => {



  const decrementProductCount = (index: number) => {

    setSelectedProduct((prevState: ProductState[]) => prevState.map((product: ProductState, idx: number) => {
      if (idx === index) {
        if (product.productCount != 1) {
          product.productCount = product.productCount != undefined ? product.productCount - 1 : 1
        }
      }

      return product;
    }))
  }

  const incrementProductCount = (index: number) => {
    setSelectedProduct((prevState: ProductState[]) => prevState.map((product: ProductState, idx: number) => {
      if (idx === index) {
        if (product.productCount != 10) {
          product.productCount = product.productCount != undefined ? product.productCount + 1 : 10
        }
      }

      return product;
    }))
  }
  return (
    <div className="table-responsive mb-8">
      <table className="table align-middle gs-0 gy-4 my-0">
        <thead>
          <tr>
            <th className="min-w-175px" />
            <th className="w-125px" />
            <th className="w-60px" />
          </tr>
        </thead>

        <tbody>
          {selectedProducts.map((product: ProductState, idx: number) => (
            <tr key={idx} data-kt-pos-element="item" data-kt-pos-item-price={product.price}>
              <td className="pe-0">
                <div className="d-flex align-items-center">
                  <img
                    src={product.image}
                    className="w-50px h-50px rounded-3 me-3"
                    alt="product"
                  />
                  <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-6 me-1">
                    {product.title}
                  </span>
                </div>
              </td>
              <td className="pe-0">
                <div
                  className="position-relative d-flex align-items-center"
                  data-kt-dialer="true"
                  data-kt-dialer-min={1}
                  data-kt-dialer-max={10}
                  data-kt-dialer-step={1}
                  data-kt-dialer-decimals={0}
                >
                  <button
                    onClick={() => decrementProductCount(idx)}
                    type="button"
                    disabled={product.productCount === 1}
                    className="btn btn-icon btn-sm btn-light btn-icon-gray-500"
                    data-kt-dialer-control="decrease"
                  >
                    <i className="ki-duotone ki-minus fs-3x" />
                  </button>

                  <input
                    type="text"
                    className="form-control border-0 text-center px-0 fs-3 fw-bold text-gray-800 w-30px"
                    data-kt-dialer-control="input"
                    placeholder="Amount"
                    name="manageBudget"
                    readOnly
                    value={product.productCount}
                  />
                  <button
                    type="button"
                    disabled={product.productCount === 10}
                    onClick={() => incrementProductCount(idx)}
                    className="btn btn-icon btn-sm btn-light btn-icon-gray-500"
                    data-kt-dialer-control="increase"
                  >
                    <i className="ki-duotone ki-plus fs-3x" />{" "}
                  </button>
                </div>
              </td>
              <td className="text-end">
                <span
                  className="fw-bold text-primary fs-2"
                  data-kt-pos-element="item-total"
                >
                  ${product.productCount !== undefined ? product.productCount * product.price : 0}

                </span>
              </td>
            </tr>
          ))}

        </tbody>
        {/*end::Table body*/}
      </table>
      {/*end::Table*/}
    </div>
  )
}

export default OrdersTable
