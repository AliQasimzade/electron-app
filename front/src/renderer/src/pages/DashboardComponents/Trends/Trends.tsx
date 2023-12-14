import React from 'react'
import DashboardItemHeader from '../DashboardItemHeader'
import TrendsItems from './TrendsItems'

function Trends() {
    return (
        <div className="card   mb-xl-8">
            <DashboardItemHeader title='Trends' subtitle='Latest tech trends' />
            <div className="card-body pt-5">
                <TrendsItems img_url="/metronic8/demo9/assets/media/svg/brand-logos/plurk.svg" titles="Top Authors" subtitles="Mark, Rowling, Esther" price={82}/>
                <TrendsItems img_url="/metronic8/demo9/assets/media/svg/brand-logos/telegram.svg" titles="Popular Authors" subtitles="Randy, Steve, Mike" price={280}/>
                <TrendsItems img_url="/metronic8/demo9/assets/media/svg/brand-logos/vimeo.svg" titles="New Users" subtitles="John, Pat, Jimmy" price={4500}/>
                <TrendsItems img_url="/metronic8/demo9/assets/media/svg/brand-logos/bebo.svg" titles="Active Customers" subtitles="Mark, Rowling, Esther" price={686}/>
                <TrendsItems img_url="/metronic8/demo9/assets/media/svg/brand-logos/kickstarter.svg" titles="Bestseller Theme" subtitles="Disco, Retro, Sports" price={726}/>
                <TrendsItems img_url="/metronic8/demo9/assets/media/svg/brand-logos/fox-hub.svg" titles="Fox Broker App" subtitles="Finance, Corporate, Apps" price={145}/>
            </div>
        </div>
    )
}

export default Trends