import React from 'react'
import PokerImg from '../assets/images/poker-img.png'
import Aviator from '../assets/images/aviator-img.webp'
import elipse1 from '../assets/images/elipse-1.webp'
import elipse2 from '../assets/images/elipse-2.webp'
import { LinkBtn } from './Icon'

const SecondSection = () => {
    return (
        <>
            <div className='relative z-[1]' id='section2'>
                <img src={elipse2} alt='image' className='z-[-1] animate-pulse absolute bottom-[-80%] right-0 max-md:hidden'></img>
                <img src={elipse1} alt='image' className='z-[-1] animate-pulse absolute bottom-[0%] left-[0%] max-md:hidden'></img>
                <div className='container md:pt-[74px] pb-[50px] md:pb-[100px]'>
                    <div className='row'>
                        <div className='w-1/2 max-lg:w-full max-lg:flex max-lg:flex-col max-lg:items-center px-3'>
                            <img src={PokerImg} alt="poker" />
                            <h2 className='pt-[30px] md:pt-[60px] font-[Anton] font-normal text-[40px] sm:text-[48px] text-[#FFFFFF]'>Nuestra Visión</h2>
                            <p className='pt-4 max-lg:text-center text-[#CCD0D2] font-[Inter] font-medium text-[16px] max-w-[444px]'>Nuestra visión es ser líderes indiscutibles en la industria de los juegos de azar y llevar nuestra pasión por el entretenimiento más allá de las fronteras. Imagina un mundo donde la emoción y la diversión no tengan límites, y ese es el mundo que queremos crear contigo.</p>
                            <div className='pt-6 inline-block' >
                                <a href="#"><LinkBtn /></a>
                            </div>
                        </div>
                        <div className='w-1/2 max-lg:w-full max-lg:flex max-lg:flex-col-reverse max-lg:items-center px-3'>
                            <div className='max-lg:flex max-lg:flex-col max-lg:items-center'>
                                <h2 className='font-[Anton] font-normal text-[40px] sm:text-[48px] text-[#FFFFFF]'>Nuestra Misión</h2>
                                <p className='max-lg:text-center pt-4 text-[#CCD0D2] font-[Inter] font-medium text-[16px] max-w-[444px]'>Nuestra misión es simple pero poderosa: proporcionarte la más amplia gama de soluciones de entretenimiento de alta calidad y rentabilidad. Estamos comprometidos a elevar tus expectativas y brindarte experiencias inigualables.</p>
                                <div className='pt-6 inline-block' >
                                    <a href="#"><LinkBtn /></a>
                                </div>
                            </div>
                            <div>
                                <img className=' pt-[30px] md:pt-[60px]' src={Aviator} alt="aviator" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondSection
