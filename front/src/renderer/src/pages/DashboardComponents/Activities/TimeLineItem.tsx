import React from 'react'

interface TimeLineItem {
    hour: string,
    icon_color: string,
    text: React.ReactNode,
}

const TimeLineItem = (props: TimeLineItem): JSX.Element => {
    return (
        <div className="timeline-item">
            <div className="timeline-label fw-bold text-gray-800 fs-6">{props.hour}</div>
            <div className="timeline-badge">
                <i className={`fa fa-genderless ${props.icon_color} fs-1`}></i>
            </div>
            {props.text}
        </div>
    )
}

export default TimeLineItem