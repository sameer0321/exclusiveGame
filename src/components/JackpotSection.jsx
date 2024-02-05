import React from 'react'
import jackpot from '../assets/images/Jackpot.webp'
import boxLayer1 from '../assets/images/jackpot-box-layer-1.webp'
import boxLayer2 from '../assets/images/jackpot-box-layer-2.webp'
import Jackpot1 from '../assets/images/jackpot-1.webp'
import Jackpot2 from '../assets/images/jackpot-2.webp'
import Jackpot3 from '../assets/images/jackpot-3.webp'
import WhiteBtn from './WhiteBtn'
import elipse1 from '../assets/images/elipse-1.webp'
import elipse2 from '../assets/images/elipse-2.webp'
import { TickSign } from './Icon.jsx'

const JackpotSection = () => {
    const product = [
        { img: Jackpot1 },
        { img: Jackpot2 },
        { img: Jackpot3 },
    ]
    return (
        <>
            <div className='relative z-[1]'>
                <img src={elipse2} alt='image' className='z-[-1] animate-pulse absolute bottom-[-34%] right-0'></img>
                <img src={elipse1} alt='image' className='z-[-1] animate-pulse absolute top-[-50%] left-[0%] max-md:hidden'></img>
                <div className='bg-[url(./assets/images/jackpot-section-bg-layer.webp)] bg-cover bg-no-repeat bg-center md:pt-[90px]'>
                    <div className=' px-3 mx-auto max-w-[1140px]'>
                        <div className='flex flex-row flex-wrap -mx-3 justify-center items-center'>
                            <div className='lg:w-1/2 px-3'>
                                <img src={jackpot} alt="img" className='w-full max-h-[438px]' />
                            </div>
                            <div className='lg:w-1/2 pr-3 pl-[20px] pt-[30px]'>
                                <p className='text-white text-[35px] sm:text-[48px] leading-[57.6px] xl:text-nowrap mb-[16px] font-normal font-anton'>Potenciando sus elecciones</p>
                                <p className='text-white text-[14px] sm:text-[16px] leading-[25.6px] mb-[32px] font-medium font-inter'>Con Exclusive Game lo mejor está de tu lado.</p>
                                <div className='flex gap-2 mb-3 '>
                                    <TickSign />
                                    <p className='text-white text-[14px] sm:text-[16px] mt-[-8px] leading-[25.6px] font-medium font-inter'>Tecnología HTML5</p>
                                </div>
                                <div className='flex gap-2 mb-[20px] '>
                                    <TickSign />
                                    <p className='text-white text-[14px] sm:text-[16px] mt-[-8px] leading-[25.6px] font-medium font-inter'>Versión PC y móvil</p>
                                </div>
                                <div className='flex gap-2 mb-[20px] '>
                                    <TickSign />
                                    <p className='text-white text-[14px] sm:text-[16px] mt-[-8px] leading-[25.6px] font-medium font-inter'>Control de RTP (controlás qué porcentaje pagar)</p>
                                </div>
                                <div className='flex gap-2  mb-[20px]'>
                                    <span className='mt-2'><TickSign /></span>
                                    <p className='text-white max-w-[380px] text-[14px] sm:text-[16px] leading-[25.6px] font-medium font-inter'>Bonos editables, happy hours, Jackpots, códigos  promocionales.</p>
                                </div>
                                <div className='flex gap-2 mb-[32px] '>
                                    <TickSign />
                                    <p className='text-white text-[14px] sm:text-[16px] mt-[-8px] leading-[25.6px]  font-medium font-inter'>Aplicación para android y windows de regalo.</p>
                                </div>
                                <p className='text-white text-[14px] sm:text-[16px] leading-[25.6px] mb-[24px] font-medium font-inter'>Te reintegramos todo lo invertido en fichas en la moneda que elijas.</p>
                            </div>
                        </div>
                    </div>
                    <div className='px-3'>
                        <div className='max-w-[1044px] mx-auto rounded-[16px] mt-[50px] md:mt-[150px] relative z-[1] overflow-hidden border-[1px] border-white flex items-center justify-center py-[50px] sm:py-[96px]'>
                            <p className=' font-anton font-normal max-w-[520px] text-[36px] sm:text-[48px] text-center leading-[48px] sm:leading-[57.6px] text-white'>
                                lanza tu propia plataforma en sólo 2 semanas
                            </p>
                            <div className='absolute left-0 z-[-1] h-full' >
                                <img className='w-full h-full opacity-10' src={boxLayer1} alt="layer" />
                            </div>
                            <div className='absolute right-0 z-[-1] h-full'>
                                <img className='w-full h-full opacity-10' src={boxLayer2} alt="layer" />
                            </div>
                        </div>
                    </div>
                    <div className=' mx-auto container  max-w-[1140px] mt-[80px] md:mt-[135px] px-3'>
                        <p className='text-white text-xl sm:text-[48px] leading-[57.6px] font-anton text-center font-[400]'>Juegos en vivo</p>
                        <div className='grid grid-cols-1 mt-[60px] mb-[40px] md:grid-cols-2 xl:grid-cols-3 w-full lg:gap-5 xl:gap-[24px]' >
                            {product.map((items, index) => (
                                <div key={index}>
                                    <div className='w-full h-full relative overflow-auto rounded-[8px] group duration-300 cursor-pointer'>
                                        <img className="w-full" src={items.img} alt="" />
                                        <div className=' absolute bg-[#000000B8] w-full h-full scale-0 group-hover:scale-100 flex items-center justify-center left-0 bottom-0 group-hover:opacity-100 opacity-0 duration-300'>
                                            <WhiteBtn text='Reproducir ahora' />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JackpotSection