import React from 'react'
import GradientBtn from './GradientBtn'


const NewsLetter = () => {
    return (
        <>
            <div className=' md:pb-[130px] sm:pb-[100px] pb-[60px] lg:pb-[150px] pt-[30px] sm:pt-[50px] sm:px-5 px-3'>
                <div className=' max-w-[1140px] bg-[#062023] bg-cover  bg-center bg-no-repeat bg-[url(./assets/images/NewsLetter-Bg-Img.webp)]  container mx-auto px-3 sm:py-[70px] py-[40px] md:py-[100px] border-[0.5px] rounded-[12px] border-[#829092]'>
                    <h2 className='font-["anton"] font-normal sm:text-[27px] text-[24px] md:text-[32px]  leading-10  text-[#FFFFFF] pt-[10px] text-center'>Lanza tu propia plataforma en sólo 2 semanas</h2>
                    <span className=' flex justify-center mt-10'><GradientBtn className="" text="Leer más" /></span>
                </div>
            </div>

        </>
    )
}

export default NewsLetter