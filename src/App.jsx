import './App.css'
import Accordian from './components/Accordian'
import BackToTop from './components/BackToTop'
import CasinoSection from './components/CasinoSection'
import EventsSection from './components/EventsSection'
import Footer from './components/Footer'
import FortuneWheelSection from './components/FortuneWheelSection'
import HeroSection from './components/HeroSection'
import JackpotSection from './components/JackpotSection'
import LuxurySection from './components/LuxurySection'
import NewsLetter from './components/NewsLetter'
import PlatinumSection from './components/PlatinumSection'
import Preloader from './components/Preloader'
import SecondSection from './components/SecondSection'
import TripleSevenSection from './components/TripleSevenSection'
import WhiteSection from './components/WhiteSection'

function App() {

  return (
    <>
      <div className='bg-[#00141B]'>
        <Preloader />
        <BackToTop />
        <HeroSection />
        <SecondSection />
        <WhiteSection />
        <JackpotSection />
        <CasinoSection />
        <TripleSevenSection />
        <FortuneWheelSection />
        <LuxurySection />
        <PlatinumSection />
        <EventsSection />
        <Accordian />
        <NewsLetter />
        <Footer />
      </div>
    </>
  )
}

export default App
