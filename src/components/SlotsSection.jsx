import slot1 from '../assets/images/slot-1.webp'
import slot2 from '../assets/images/slot-6.webp'
import slot3 from '../assets/images/slot-3.webp'
import slot4 from '../assets/images/slot-4.webp'
import slot5 from '../assets/images/slot-5.webp'
import slot6 from '../assets/images/slot-2.webp'
import WhiteBtn from './WhiteBtn'
import GradientBtn from './GradientBtn.jsx'

const SlotsSection = () => {
    const Games = [
        { img: slot1 },
        { img: slot2 },
        { img: slot3 },
        { img: slot4 },
        { img: slot5 },
        { img: slot6 },
    ]
    return (
        <>
            <div>
                <div className='container mt-[60px] min-[1030px]:mt-[151px]'>
                    <p className='text-[#00141B] text-xl sm:text-[48px] leading-[57.6px] mb-[16px] font-[Anton] text-center font-[400]'>Slots</p>
                    <p className='text-[#00141B] text-center text-sm sm:text-[16px] leading-[25.6px] font-[Inter] font-medium'>En Exclusive Games, ofrecemos una selección de más de 600 juegos de los principales desarrolladores, como Aristocrat, Amatic, EGT, Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja incansablemente para innovar y ampliar nuestra oferta de experiencias, garantizando la máxima seguridad con operaciones protegidas por cifrado SSL de 256 bits.</p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-5 xl:gap-[24px] mt-[60px] mb-[40px] ' >
                        {Games.map((items, index) => (
                            <div key={index}>
                                <div className='w-full h-full relative overflow-auto rounded-[8px] group duration-300 cursor-pointer'>
                                    <img className="w-full" src={items.img} alt="" />
                                    <div className=' absolute bg-[#000000B8] w-full h-full scale-0 group-hover:scale-100 flex items-center justify-center left-0 bottom-0 group-hover:opacity-100 opacity-0 duration-300'>
                                        <WhiteBtn text='Jugar' />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="justify-center flex">
                        <div className="pb-5">
                            <GradientBtn text="Mostrar más" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SlotsSection