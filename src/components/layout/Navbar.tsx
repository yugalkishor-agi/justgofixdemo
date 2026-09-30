import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className={`fixed left-0 right-0 z-50 flex flex-col items-center px-4 transition-all duration-300 ${scrolled ? 'top-2' : 'top-4 md:top-6'}`}>
      <nav className={`transition-all duration-300 rounded-full px-5 md:px-8 py-3 flex items-center justify-between gap-4 lg:gap-20 w-full max-w-4xl border ${
        scrolled 
          ? 'bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-2xl backdrop-saturate-200 border-white/40 border-t-white/90 border-l-white/90 shadow-[0_8px_32px_0_rgba(0,0,0,0.15),inset_0_1px_2px_rgba(255,255,255,0.8)]' 
          : 'bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl backdrop-saturate-150 border-white/20 border-t-white/60 border-l-white/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,0.6)]'
      }`}>
        <div className="hidden md:flex items-center gap-6">
          <a href="#services" onClick={closeMenu} className="text-[#3b4c68] text-sm font-medium hover:text-[#0b2d61] transition-colors">Services</a>
          <a href="#how-it-works" onClick={closeMenu} className="text-[#3b4c68] text-sm font-medium hover:text-[#0b2d61] transition-colors">How it works</a>
        </div>
        
        <div className="flex items-center justify-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <img src="/logo.png" alt="JustGoFix" className="h-8 md:h-10 w-auto" />
        </div>
        
        <div className="flex items-center gap-3 md:gap-6">
          <a href="#why-us" className="hidden md:block text-[#3b4c68] text-sm font-medium hover:text-[#0b2d61] transition-colors">Why us?</a>
          <a href="#faq" className="hidden md:block text-[#3b4c68] text-sm font-medium hover:text-[#0b2d61] transition-colors">Faq</a>
          <button className="bg-[#ffbc00] text-[#0b2d61] px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-[#e6a900] transition-transform hover:scale-105 whitespace-nowrap">
            Download App
          </button>
          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/30 backdrop-blur-sm text-[#0b2d61] hover:bg-white/50 transition-colors"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 w-full max-w-4xl bg-white/80 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col py-4">
            {[
              { label: 'Services', href: '#services' },
              { label: 'How it works', href: '#how-it-works' },
              { label: 'Why us?', href: '#why-us' },
              { label: 'FAQ', href: '#faq' },
            ].map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="px-8 py-3 text-[#3b4c68] font-medium text-base hover:bg-white/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
export default Navbar
