import React from 'react'
import CasinoImg from "../assets/images/casino-img.webp"
import GradientBtn from './GradientBtn'

const CasinoSection = () => {
    return (
        <>
            <div className='max-md:bg-white bg-[url(./assets/images/Second-white-bg-img.webp)] bg-no-repeat bg-100 py-[50px] md:pt-[304px] md:pb-[324px]'>
                <div className='max-w-[1140px] mx-auto px-3 py-[30px]'>
                    <div className='row'>
                        <div className=' w-full flex flex-col max-md:items-center md:w-1/2 px-3 my-auto'>
                            <h2 className='font-["anton"] font-normal sm:text-[30px] text-[40px] md:text-[48px]  leading-10  text-[#00141B] '>Por qué elegirnos</h2>
                            <p className='font-["inter"] font-medium text-[16px]  leading-6  text-[#334349] max-w-[526px] pt-[16px] pb-[24px]'>Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos todo lo invertido en fichas en la moneda que elijas. En Exclusive Games siempre sumamos nuevos juegos. Juegos crash, los juegos interactivos que más pide la gente. Con Exclusive Games empezás a ganar ya! Creamos tu plataforma en solo 2 semanas.</p>
                            <span className='mt-3'><GradientBtn className="text-[#000]" text="Leer más" /></span>
                        </div>
                        <div className='flex flex-col max-md:items-center w-full md:w-1/2 px-3 sm:pt-6 pt-4 md:pt-0'>
                            <img src={CasinoImg} alt="CasinoImg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CasinoSection