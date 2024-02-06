import React from 'react'
import RoadMap from './RoadMap'
import SlotsSection from './SlotsSection'

const WhiteSection = () => {
    return (
        <div id='section3' className=' max-[1030px]:bg-white bg-[url(./assets/images/First-white-bg-img.webp)] bg-no-repeat bg-100 relative z-10 py-[50px] lg:py-[243px]'>
            <RoadMap />
            <SlotsSection />
        </div>
    )
}

export default WhiteSection
