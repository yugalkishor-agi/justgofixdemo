import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/home/HeroSection'
import ServicesSection from './components/home/ServicesSection'
import HowWeWorkSection from './components/home/HowWeWorkSection'
import WhyChooseSection from './components/home/WhyChooseSection'
import PartnerSection from './components/home/PartnerSection'
import FAQSection from './components/home/FAQSection'

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    })

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white" style={{ overflowX: 'clip' }}>
      <Navbar />
      <main className="flex-grow pt-20">
        <HeroSection />
        <ServicesSection />
        <HowWeWorkSection />
        <WhyChooseSection />
        <PartnerSection />
        <div className="relative">
          <div className="sticky top-0 h-screen w-full z-0">
            <FAQSection />
          </div>
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App
