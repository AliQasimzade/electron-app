import { useState } from "react";
import { ProductState } from "@renderer/types.d";

const MenuContent = ({ selectMenu }) => {

    const [data] = useState<ProductState[][]>([
        [
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-2.jpg',
                title: "T-Bone Stake",
                time: 16,
                price: 16.50
            },
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-7.jpg',
                title: "Chef’s Salmon",
                time: 16,
                price: 12.40
            },
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-8.jpg',
                title: "Ramen",
                time: 16,
                price: 14.90
            },
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-4.jpg',
                title: "Chicken Breast",
                time: 16,
                price: 9.00
            },
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-10.jpg',
                title: "Tenderlion Steak",
                time: 16,
                price: 19.00
            }
        ],

        [
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-11.jpg',
                title: 'Sweety',
                time: 16,
                price: 11.40
            },
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-5.jpg',
                title: 'Breakfast',
                time: 16,
                price: 8.20
            },
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-4.jpg',
                title: 'Chicken Breast',
                time: 16,
                price: 9.00
            },
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-8.jpg',
                title: 'Ramen',
                time: 16,
                price: 14.90
            },
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-10.jpg',
                title: 'Tenderlion Steak',
                time: 16,
                price: 19.00
            }
        ],

        [
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-11.jpg',
                title: 'Sweety',
                time: 16,
                price: 11.40
            },
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-5.jpg',
                title: 'Breakfast',
                time: 16,
                price: 8.20
            },
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-4.jpg',
                title: 'Chicken Breast',
                time: 16,
                price: 9.00
            },
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-8.jpg',
                title: 'Ramen',
                time: 16,
                price: 14.90
            },
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-10.jpg',
                title: 'Tenderlion Steak',
                time: 16,
                price: 19.00
            }
        ],

        [
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-11.jpg',
                title: 'Sweety',
                time: 16,
                price: 11.40
            },
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-5.jpg',
                title: 'Breakfast',
                time: 16,
                price: 8.20
            },
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-4.jpg',
                title: 'Chicken Breast',
                time: 16,
                price: 9.00
            },
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-8.jpg',
                title: 'Ramen',
                time: 16,
                price: 14.90
            },
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-10.jpg',
                title: 'Tenderlion Steak',
                time: 16,
                price: 19.00
            }
        ],

        [
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-11.jpg',
                title: 'Sweety',
                time: 16,
                price: 11.40
            },
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-5.jpg',
                title: 'Breakfast',
                time: 16,
                price: 8.20
            },
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-4.jpg',
                title: 'Chicken Breast',
                time: 16,
                price: 9.00
            },
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-8.jpg',
                title: 'Ramen',
                time: 16,
                price: 14.90
            },
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-10.jpg',
                title: 'Tenderlion Steak',
                time: 16,
                price: 19.00
            }
        ],

        [
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-11.jpg',
                title: 'Sweety',
                time: 16,
                price: 11.40
            },
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-5.jpg',
                title: 'Breakfast',
                time: 16,
                price: 8.20
            },
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-4.jpg',
                title: 'Chicken Breast',
                time: 16,
                price: 9.00
            },
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-8.jpg',
                title: 'Ramen',
                time: 16,
                price: 14.90
            },
            {
                image: 'https://preview.keenthemes.com/metronic8/demo9/assets/media/stock/food/img-10.jpg',
                title: 'Tenderlion Steak',
                time: 16,
                price: 19.00
            }
        ]
    ])
    return (
        <div className="tab-content">
            <div
                className={`tab-pane fade ${selectMenu == 0 ? 'show active' : ''} `}
                id="kt_pos_food_content_1"
                role="tabpanel"
            >
                {/*begin::Wrapper*/}
                <div className="d-flex flex-wrap d-grid gap-5 gap-xxl-9">
                    {/*begin::Card*/}
                    {data[0].map((product, idx) => (
                        <div key={idx} className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                            {/*begin::Body*/}
                            <div className="card-body text-center">
                                {/*begin::Food img*/}
                                <img
                                    src={product.image}
                                    className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                                    alt="product"
                                />
                                {/*end::Food img*/}
                                {/*begin::Info*/}
                                <div className="mb-2">
                                    {/*begin::Title*/}
                                    <div className="text-center">
                                        <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                            {product.title}
                                        </span>
                                        <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                            {product.time} mins to cook
                                        </span>
                                    </div>
                                    {/*end::Title*/}
                                </div>
                                {/*end::Info*/}
                                {/*begin::Total*/}
                                <span className="text-success text-end fw-bold fs-1">
                                    ${product.price}
                                </span>
                                {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                        </div>
                    ))}
                    {/*end::Card*/}
                </div>
                {/*end::Wrapper*/}
            </div>

            <div
                className={`tab-pane fade ${selectMenu == 1 ? 'show active' : ''}`}
                id="kt_pos_food_content_2"
                role="tabpanel"
            >
                {/*begin::Wrapper*/}
                <div className="d-flex flex-wrap d-grid gap-5 gap-xxl-9">
                    {/*begin::Card*/}
                    {data[1].map((product, idx) => (
                        <div key={idx} className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                            {/*begin::Body*/}
                            <div className="card-body text-center">
                                {/*begin::Food img*/}
                                <img
                                    src={product.image}
                                    className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                                    alt="product"
                                />
                                {/*end::Food img*/}
                                {/*begin::Info*/}
                                <div className="mb-2">
                                    {/*begin::Title*/}
                                    <div className="text-center">
                                        <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                            {product.title}
                                        </span>
                                        <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                            {product.time} mins to cook
                                        </span>
                                    </div>
                                    {/*end::Title*/}
                                </div>
                                {/*end::Info*/}
                                {/*begin::Total*/}
                                <span className="text-success text-end fw-bold fs-1">
                                    ${product.price}
                                </span>
                                {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                        </div>
                    ))}
                    {/*end::Card*/}
                </div>
                {/*end::Wrapper*/}
            </div>

            <div
                className={`tab-pane fade ${selectMenu == 2 ? 'show active' : ''}`}
                id="kt_pos_food_content_3"
                role="tabpanel"
            >
                {/*begin::Wrapper*/}
                <div className="d-flex flex-wrap d-grid gap-5 gap-xxl-9">
                    {/*begin::Card*/}
                    {data[2].map((product, idx) => (
                        <div key={idx} className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                            {/*begin::Body*/}
                            <div className="card-body text-center">
                                {/*begin::Food img*/}
                                <img
                                    src={product.image}
                                    className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                                    alt="product"
                                />
                                {/*end::Food img*/}
                                {/*begin::Info*/}
                                <div className="mb-2">
                                    {/*begin::Title*/}
                                    <div className="text-center">
                                        <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                            {product.title}
                                        </span>
                                        <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                            {product.time} mins to cook
                                        </span>
                                    </div>
                                    {/*end::Title*/}
                                </div>
                                {/*end::Info*/}
                                {/*begin::Total*/}
                                <span className="text-success text-end fw-bold fs-1">
                                    ${product.price}
                                </span>
                                {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                        </div>
                    ))}
                    {/*end::Card*/}
                </div>
                {/*end::Wrapper*/}
            </div>

            <div
                className={`tab-pane fade ${selectMenu == 3 ? 'show active' : ''}`}
                id="kt_pos_food_content_4"
                role="tabpanel"
            >
                {/*begin::Wrapper*/}
                <div className="d-flex flex-wrap d-grid gap-5 gap-xxl-9">
                    {/*begin::Card*/}
                    {data[3].map((product, idx) => (
                        <div key={idx} className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                            {/*begin::Body*/}
                            <div className="card-body text-center">
                                {/*begin::Food img*/}
                                <img
                                    src={product.image}
                                    className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                                    alt="product"
                                />
                                {/*end::Food img*/}
                                {/*begin::Info*/}
                                <div className="mb-2">
                                    {/*begin::Title*/}
                                    <div className="text-center">
                                        <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                            {product.title}
                                        </span>
                                        <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                            {product.time} mins to cook
                                        </span>
                                    </div>
                                    {/*end::Title*/}
                                </div>
                                {/*end::Info*/}
                                {/*begin::Total*/}
                                <span className="text-success text-end fw-bold fs-1">
                                    ${product.price}
                                </span>
                                {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                        </div>
                    ))}
                    {/*end::Card*/}
                </div>
                {/*end::Wrapper*/}
            </div>

            <div
                className={`tab-pane fade ${selectMenu == 4 ? 'show active' : ''}`}
                id="kt_pos_food_content_5"
                role="tabpanel"
            >
                {/*begin::Wrapper*/}
                <div className="d-flex flex-wrap d-grid gap-5 gap-xxl-9">
                    {/*begin::Card*/}
                    {data[4].map((product, idx) => (
                        <div key={idx} className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                            {/*begin::Body*/}
                            <div className="card-body text-center">
                                {/*begin::Food img*/}
                                <img
                                    src={product.image}
                                    className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                                    alt="product"
                                />
                                {/*end::Food img*/}
                                {/*begin::Info*/}
                                <div className="mb-2">
                                    {/*begin::Title*/}
                                    <div className="text-center">
                                        <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                            {product.title}
                                        </span>
                                        <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                            {product.time} mins to cook
                                        </span>
                                    </div>
                                    {/*end::Title*/}
                                </div>
                                {/*end::Info*/}
                                {/*begin::Total*/}
                                <span className="text-success text-end fw-bold fs-1">
                                    ${product.price}
                                </span>
                                {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                        </div>
                    ))}
                    {/*end::Card*/}
                </div>
                {/*end::Wrapper*/}
            </div>

        </div>
    )
}

export default MenuContent
