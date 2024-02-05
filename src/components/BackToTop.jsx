import React, { useState, useEffect } from 'react';
import Back from "../assets/images/back-to-top.webp"

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <button
                className={`${isVisible ? 'opacity-100' : 'opacity-0'
                    } fixed z-50 bottom-8 right-2 sm:right-6 p-2  animate-bounce duration-500 `}
                onClick={scrollToTop}
            >
                <img className='w-[35px] h-[35px]' src={Back} alt="" />
            </button>
        </>
    )
}

export default BackToTop