import React from 'react'
import WhiteBtn from './WhiteBtn'
import elipse1 from '../assets/images/luxury-elipse-1.webp'
import elipse2 from '../assets/images/luxury-elipse-2.webp'
import elipse3 from '../assets/images/luxury-elipse-3.webp'
import elipse4 from '../assets/images/luxury-elipse-4.webp'
import { TickSign } from './Icon'
const LuxurySection = () => {
    return (
        <>
            <div className=' mx-4 z-[1]'>
                <div className='container relative z-[1] border-[1px] bg-[#062027] border-[#849191] bg-[url(../assets/images/luxury-bg-img.webp  )] sm:py-[50px] py-[20px] md:py-[60px] sm:mt-[50px] mt-[35px] md:mt-[60px] sm:mb-[50px] mb-[35px] md:mb-[60px] rounded-[16px]'>
                    <div className='flex items-center justify-center flex-col'>
                        <p className='text-white text-[24px] sm:text-[32px] leading-[57.6px] mb-[16px] font-normal text-nowrap max-xl:text-[38px] font-[Anton]'>Luxury</p>
                        <p className='text-white text-center max-sm:text-[13px] sm:text-[16px] max-w-[401px] leading-[25.6px] mb-[24px] font-medium font-inter'>lleva tu experiencia de juego al siguiente nivel. Con todas las características de la versión Silver y la potencia adicional de la tecnología React .</p>
                        <p className='text-white max-sm:[text-32px] sm:text-[48px] leading-[57.6px] mb-[24px] font-normal text-nowrap max-xl:text-[38px] font-[Anton]'>$9000</p>
                        <div className='max-w-[420px]'>
                            <div className='flex gap-2 mb-[20px]'>
                                <TickSign className='!w-[24px]' />
                                <p className='text-white max-w-[330px] text-center mx-auto max-sm:text-[13px] sm:text-[16px] leading-[25.6px] mt-[-8px] font-medium font-inter'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                            </div>
                            <div className='flex gap-2 mb-[20px]'>
                                <TickSign className='!w-[24px]' />
                                <p className='text-white text-center mx-auto max-sm:text-[13px] sm:text-[16px] leading-[25.6px] mt-[-8px] font-medium font-inter'>Control de RTP (controlás qué porcentaje pagar)</p>
                            </div>
                            <div className='flex gap-2 mb-[20px]'>
                                <TickSign className='!w-[24px]' />
                                <p className='text-white max-w-[330px] text-center mx-auto max-sm:text-[13px] sm:text-[16px] leading-[25.6px] mt-[-8px] font-medium font-inter'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</p>
                            </div>
                            <div className='flex gap-2 mb-[20px]'>
                                <TickSign />
                                <p className='text-white text-center mx-auto max-sm:text-[13px] sm:text-[16px] leading-[25.6px] mt-[-8px] font-medium font-inter'>Aplicación para Android y Windows de regalo.</p>
                            </div>
                            <div className='flex gap-2 mb-[32px]'>
                                <TickSign />
                                <p className='text-white mx-auto text-center max-w-[380px] max-sm:text-[13px] sm:text-[16px] mt-[-8px] leading-[25.6px] font-medium font-inter'>Tiempo de creación 2 a 3 semanas</p>
                            </div>
                            <div className='flex justify-center'>
                                <WhiteBtn text='Comprar ahora' />
                            </div>
                        </div>
                    </div>
                    <img src={elipse1} alt="elipse" className='absolute z-[-1] top-[19%] left-[18%] max-md:left-[10%] max-md:top-[30%]' />
                    <img src={elipse2} alt="elipse" className='absolute z-[-1] right-[10%] top-[19%]  max-sm:hidden' />
                    <img src={elipse3} alt="elipse" className='absolute z-[-1] bottom-[15%] left-[14%] max-lg:left-10 max-md:left-0 max-sm:hidden' />
                    <img src={elipse4} alt="elipse" className='absolute z-[-1] bottom-[10%] right-[15%]' />
                </div>
            </div>
        </>
    )
}

export default LuxurySection