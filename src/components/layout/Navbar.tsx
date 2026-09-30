import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${scrolled ? 'top-2' : 'top-6'}`}>
      <nav className={`transition-all duration-300 rounded-full px-8 py-3 flex items-center justify-between gap-10 lg:gap-20 w-full max-w-4xl border ${
        scrolled 
          ? 'bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-2xl backdrop-saturate-200 border-white/40 border-t-white/90 border-l-white/90 shadow-[0_8px_32px_0_rgba(0,0,0,0.15),inset_0_1px_2px_rgba(255,255,255,0.8)]' 
          : 'bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl backdrop-saturate-150 border-white/20 border-t-white/60 border-l-white/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,0.6)]'
      }`}>
        <div className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-[#3b4c68] text-sm font-medium hover:text-[#0b2d61] transition-colors">Services</a>
          <a href="#how-it-works" className="text-[#3b4c68] text-sm font-medium hover:text-[#0b2d61] transition-colors">How it works</a>
        </div>
        
        <div className="flex items-center justify-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
           <img src="/logo.png" alt="JustGoFix" className="h-8 md:h-10 w-auto" />
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#why-us" className="hidden md:block text-[#3b4c68] text-sm font-medium hover:text-[#0b2d61] transition-colors">Why us?</a>
          <a href="#faq" className="hidden md:block text-[#3b4c68] text-sm font-medium hover:text-[#0b2d61] transition-colors">Faq</a>
          <button className="bg-[#ffbc00] text-[#0b2d61] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#e6a900] transition-transform hover:scale-105">
            Download App
          </button>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
