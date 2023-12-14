import DashboardItemHeader from "../DashboardItemHeader"
import TimeLineItem from "./TimeLineItem"

const staticTimelineData = {
    Outline: <div className="fw-mormal timeline-content text-muted ps-3">Outlines keep you honest. And keep structure</div>,
    Aeol: <div className="timeline-content d-flex"><span className="fw-bold text-gray-800 ps-3">AEOL meeting</span></div>,
    Deposit: <div className="timeline-content fw-bold text-gray-800 ps-3">Make deposit
        <a href="#" className="text-primary">USD 700</a>. to ESL</div>,
    Indulging: <div className="timeline-content fw-mormal text-muted ps-3">Indulging in poorly driving and keep structure keep great</div>,
    NewOrder: <div className="timeline-content fw-semibold text-gray-800 ps-3">New order placed <a href="#" className="text-primary">#XF-2356</a>.</div>,
    Finance: <div className="timeline-content fw-mormal text-muted ps-3">Finance KPI Mobile app launch preparion meeting</div>,
}


const Activities = (): JSX.Element => {
    return (
        <div className="card mb-5 mb-xl-8">
            <DashboardItemHeader title="Activities" subtitle="890,344 Sales" />
            <div className="card-body pt-5">
                <div className="timeline-label">
                    <TimeLineItem hour="08:42" icon_color="text-warning" text={staticTimelineData.Outline} />
                    <TimeLineItem hour="10:00" icon_color="text-success" text={staticTimelineData.Aeol} />
                    <TimeLineItem hour="14:37" icon_color="text-primary" text={staticTimelineData.Deposit} />
                    <TimeLineItem hour="16:50" icon_color="" text={staticTimelineData.Indulging} />
                    <TimeLineItem hour="21:03" icon_color="text-danger" text={staticTimelineData.NewOrder} />
                    <TimeLineItem hour="16:50" icon_color="" text={staticTimelineData.Indulging} />
                    <TimeLineItem hour="21:03" icon_color="text-danger" text={staticTimelineData.NewOrder} />
                    <TimeLineItem hour="10:30" icon_color="text-success" text={staticTimelineData.Finance} />
                </div>
            </div>
        </div>
    )
}

export default Activities