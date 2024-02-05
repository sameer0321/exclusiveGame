import React from 'react'

const CommonButton = (props) => {
    return (
        <div>
            <button className={`border-[1px] border-[#FFFFFF] px-[46px] py-[13px] rounded-[41px] font-[Inter] font-bold text-[16px] text-[#FFFFFF] ${props.customClass}`}>{props.text}</button>
        </div>
    )
}

export default CommonButton
