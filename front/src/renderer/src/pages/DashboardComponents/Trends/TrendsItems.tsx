import React from 'react'

interface TrendsItemsProps {
    img_url: string,
    titles: string,
    subtitles: string,
    price: number
}

function TrendsItems(props: TrendsItemsProps) {
    return (
        <div className="d-flex align-items-sm-center mb-7">
            <div className="symbol symbol-50px me-5">
                <span className="symbol-label">
                    <img src={`https://preview.keenthemes.com${props.img_url}`} className="h-50 align-self-center" alt="" />
                </span>
            </div>
            <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                <div className="flex-grow-1 me-2">
                    <a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bold">{props.titles}</a>
                    <span className="text-muted fw-semibold d-block fs-7">{props.subtitles}</span>
                </div>
                <span className="badge badge-light fw-bold my-2">+{props.price}$</span>
            </div>
        </div>
    )
}

export default TrendsItems