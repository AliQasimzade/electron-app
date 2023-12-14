import React from 'react'

interface Widgettypes{
    titles : string,
    icon: React.ReactNode
}

const WidgetsItems = (props : Widgettypes): JSX.Element => {
  return (
    <div className="col-6">
        <a className="card flex-column justfiy-content-start align-items-start text-start w-100 text-gray-800 text-hover-primary p-10" href="#">
            {props.icon}
            <span className="fs-4 fw-bold text-nowrap">{props.titles}</span>
        </a>
    </div>
  )
}
export default WidgetsItems