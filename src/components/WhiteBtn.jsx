import React from 'react'
import { WhiteBtnLine } from './Icon'

const Common = (props) => {
    return (
        <>
            <button className="py-[13px] px-[46px] relative flex items-center justify-center duration-300 hover:bg-black bg-transparent rounded-[41px] border-[1px] font-inter text-[16px] text-white"> <span className='absolute -bottom-2 -left-2'><WhiteBtnLine /></span>{props.text}</button>
        </>
    )
}

export default Common