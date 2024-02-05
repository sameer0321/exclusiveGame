import TripleSevenImg from '../assets/images/triple-7.webp'
import icon1 from "../assets/images/icon-1.webp"
import icon2 from "../assets/images/icon-2.webp"
import icon3 from "../assets/images/icon-3.webp"
import elipse1 from '../assets/images/elipse-1.webp'
import elipse2 from '../assets/images/elipse-2.webp'

const TripleSevenSection = () => {
    return (
        <>
            <div className='relative z-[1]'>
                <img src={elipse2} alt='image' className='z-[-1] animate-pulse absolute bottom-[-116%] right-0'></img>
                <img src={elipse1} alt='image' className='z-[-1] animate-pulse absolute bottom-[40%] left-[0%] max-md:hidden'></img>
                <div className='container mt-[100px]'>
                    <div className='row items-center justify-center'>
                        <div className='md:w-1/2 px-3'>
                            <img src={TripleSevenImg} alt="triple-7" className='w-full max-w-[558px]' />
                        </div>
                        <div className='md:w-1/2 px-3 h-full'>
                            <p className='text-white max-sm:[text-26px] leading-[57.6px] lg:mb-[60px] mb-7 font-normal max-xl:text-[38px] xl:text-[48px] font-[Anton]'>Más razones para elegirnos</p>
                            <div className='max-w-[374px]'>
                                <div className='flex border-[0.5px] border-white    bg-grad items-center justify-center py-[24px] gap-[37px] mb-7 max-w-[374px] rounded-[16px]'>
                                    <img src={icon1} alt="icon-1" />
                                    <div className='flex flex-col'>
                                        <p className='text-white text-[24px] sm:text-[32px] leading-[41.6px] font-normal text-nowrap font-[Anton]'>200</p>
                                        <p className=' font-[Inter]
                                        r"] font-medium text-[16px] leading-[25.6px] text-[#CED4D4] max-w-[364px]'>Páginas creadas</p>
                                    </div>
                                </div>
                                <div className='flex border-[0.5px] border-white   items-center justify-center py-[24px] gap-[37px] mb-7 max-w-[374px] rounded-[16px]'>
                                    <img src={icon2} alt="icon-2" />
                                    <div className='flex flex-col'>
                                        <p className='text-white text-[24px] sm:text-[32px] leading-[41.6px]  font-normal text-nowrap font-[Anton]'>98%</p>
                                        <p className=' font-[Inter]
                                        r"] font-medium text-[16px] leading-[25.6px] text-[#CED4D4] max-w-[364px]'>Clientes Satisfechas</p>
                                    </div>
                                </div>
                                <div className='flex  border-[0.5px] border-white  items-center justify-center py-[24px] gap-[37px]  max-w-[374px] rounded-[16px]'>
                                    <img src={icon3} alt="icon-3" />
                                    <div className='flex flex-col'>
                                        <p className='text-white text-[24px] sm:text-[32px] leading-[41.6px] font-normal text-nowrap font-[Anton]'>200</p>
                                        <p className=' font-[Inter]
                                        r"] font-medium text-[16px] leading-[25.6px] text-[#CED4D4] max-w-[364px]'>Divisas Disponibles</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TripleSevenSection