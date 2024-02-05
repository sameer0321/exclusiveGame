import React from 'react'
import { GradientBtnLine } from './Icon'

const GradientBtn = (props) => {
    return (
        <>
            <button className="px-[46px] py-[13px] relative flex items-center duration-300 justify-center bg-gradient-to-tl from-[#51C8EF] to-[#7AF57A] rounded-[41px] font-bold font-inter  text-[16px] text-[#00141B]"> <span className='absolute -bottom-2 -left-2'>
                <GradientBtnLine />
            </span>{props.text}</button>
        </>
    )
}

export default GradientBtn