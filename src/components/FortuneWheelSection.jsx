import React from 'react'
import FortuneWheel from '../assets/images/fortune-wheel.webp'
import WhiteBtn from './WhiteBtn.jsx';
import { TickSign } from './Icon.jsx';

const FortuneWheelSection = () => {
    return (
        <>
            <div className='mx-4'>
                <p className='text-white text-xl sm:text-[48px] leading-[57.6px] font-["anton"] mb-3 text-center font-[400] md:mt-[100px] sm:mt-[70px] mt-[40px] lg:mt-[150px]'>Nuestras ofertas</p>
                <p className='text-white max-sm:text-[13px] sm:text-[16px] sm max-sm:text-[13px]:sm:text-[16px] leading-[25.6px] font-["inter"] text-center font-[500]'>Te ofrecemos las mejores experiencias de juegos para tus clientes.</p>

                <div className=' px-3 mx-auto max-w-[1140px] max-w-lg-mx-3 border-[#828F93] mt-[60px] border-[1px] rounded-[16px] bg-[#062027] md:p-[57px_40px_32px_0] sm:p-[40px_40px_28px_0] p-[30px_36px_24px_0]'>
                    <div className='flex flex-row flex-wrap -mx-3 justify-center items-center'>
                        <div className='lg:w-1/2 px-3'>
                            <img src={FortuneWheel} alt="fortune-wheel" className='w-full' />
                        </div>
                        <div className='lg:w-1/2 px-3'>
                            <p className='text-white text-[24px] sm:text-[32px] leading-[57.6px] mb-[10px] sm:mb-[16px] font-normal text-nowrap max-xl:text-[38px] font-["anton"]'>Silver</p>
                            <p className='text-white max-sm:text-[13px] sm:text-[16px] max-w-[401px] leading-[25.6px] mb-[16px] sm:mb-[24px] font-medium font-["inter"]'>Diseño predeterminado, atractivo y fácil de navegar, tecnología HTLM5.</p>
                            <p className='text-white max-sm:[text-32px] sm:text-[48px] leading-[57.6px] mb-[24px] font-normal text-nowrap max-xl:text-[38px] font-["anton"]'>$5000</p>

                            <div className='flex gap-2 mb-[16px] sm:mb-[20px]'>
                                <TickSign />
                                <p className='text-white max-sm:text-[13px] sm:text-[16px] leading-[25.6px] mt-[-8px] font-medium font-["inter"]'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                            </div>
                            <div className='flex gap-2 mb-[16px] sm:mb-[20px]'>
                                <TickSign />
                                <p className='text-white max-sm:text-[13px] sm:text-[16px] leading-[25.6px] mt-[-8px] font-medium font-["inter"]'>Control de RTP (controlás qué porcentaje pagar)</p>
                            </div>
                            <div className='flex gap-2 mb-[16px] sm:mb-[20px]'>
                                <TickSign />
                                <p className='text-white max-sm:text-[13px] sm:text-[16px] leading-[25.6px] mt-[-8px] font-medium font-["inter"]'>Control de RTP (controlás qué porcentaje pagar)</p>
                            </div>
                            <div className='flex gap-2 mb-[16px] sm:mb-[20px]'>
                                <TickSign />
                                <p className='text-white max-w-[380px] max-sm:text-[13px] sm:text-[16px] mt-[-8px] leading-[25.6px] font-medium font-["inter"]'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</p>
                            </div>
                            <div className='flex gap-2 sm:mb-[28px] mb-[24px] md:mb-[32px]'>
                                <TickSign />
                                <p className='text-white max-sm:text-[13px] sm:text-[16px] leading-[25.6px] mt-[-8px] font-medium font-["inter"]'>Aplicación para Android y Windows de regalo.</p>
                            </div>
                            <p className='text-white max-sm:text-[13px] sm:text-[16px] leading-[25.6px] sm:mb-[30px] mb-[25px] md:mb-[40px] font-medium font-["inter"]'>Tiempo de creación 2 a 3 semanas </p>
                            <div className=' flex justify-center lg:justify-start'>
                                <WhiteBtn text='Comprar ahora' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FortuneWheelSection