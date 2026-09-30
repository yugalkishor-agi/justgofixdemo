import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { InteractiveHoverButton } from './Interactive-hover-button'
import { MessageCircle, Phone } from 'lucide-react'

import RoCover from '../../../assets/Ro_cover.png'
import RoBg from '../../../assets/Ro_bg.jpg'
import PlumberCover from '../../../assets/Plumber_cover.png'
import PlumberBg from '../../../assets/plumber_bg.jpg'
import ElectricityCover from '../../../assets/Electricity_cover.png'
import ElectricityBg from '../../../assets/Electricty_bg.png'
import HousecleaningCover from '../../../assets/Housecleaning_cover.png'
import HousecleaningBg from '../../../assets/Housecleaning_bg.png'
import PestControlCover from '../../../assets/pestcontrol_cover.png'
import PestControlBg from '../../../assets/pestcontrol_bg.png'
import AcCover from '../../../assets/AC-cover.png'
import LoadingVideo from '../../../assets/Loading.webm'

const services = [
  { 
    title: 'RO Service', 
    desc: 'Ensure clean, safe drinking water with comprehensive RO installation and maintenance services.',
    coverImage: RoCover,
    bgImage: RoBg
  },
  { 
    title: 'AC Repair', 
    desc: 'Beat the heat with timely AC repairs, servicing, and installation by our trained professionals.',
    coverImage: AcCover,
    bgImage: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Plumbing', 
    desc: 'From minor leaks to major overhauls, our expert plumbers are here to keep your water systems running smoothly.',
    coverImage: PlumberCover,
    bgImage: PlumberBg
  },
  { 
    title: 'Electrical', 
    desc: 'Stay powered up with our licensed electricians who handle wiring, repairs, and troubleshooting safely.',
    coverImage: ElectricityCover,
    bgImage: ElectricityBg
  },
  { 
    title: 'House Cleaning', 
    desc: 'Experience a spotless home with our thorough and eco-friendly cleaning services, tailored to your needs.',
    coverImage: HousecleaningCover,
    bgImage: HousecleaningBg
  },
  { 
    title: 'Pest Control', 
    desc: 'Keep your home pest-free with our targeted treatments, ensuring a safe and hygienic environment.',
    coverImage: PestControlCover,
    bgImage: PestControlBg
  }
]

// ─── Image Preloader ───────────────────────────────────────
// Renders all images as hidden <img> elements so the browser
// fetches and caches every asset before it's needed.
// Uses position:fixed + zero size so it NEVER contributes to
// the document layout width (avoids right-side overflow on mobile).
// The first service gets fetchpriority="high" (LCP candidate).
// All others get fetchpriority="low" so they don't compete
// with above-the-fold resources.
const ImagePreloader = () => (
  <div aria-hidden="true" style={{ position: 'fixed', width: 0, height: 0, overflow: 'hidden', opacity: 0, pointerEvents: 'none', top: 0, left: 0 }}>
    {services.map((svc, idx) => (
      <>
        <img
          key={`bg-${idx}`}
          src={svc.bgImage}
          alt=""
          // @ts-expect-error fetchpriority is valid HTML but not yet in React types
          fetchpriority={idx === 0 ? 'high' : 'low'}
          decoding="async"
        />
        <img
          key={`cover-${idx}`}
          src={svc.coverImage}
          alt=""
          // @ts-expect-error fetchpriority is valid HTML but not yet in React types
          fetchpriority={idx === 0 ? 'high' : 'low'}
          decoding="async"
        />
      </>
    ))}
  </div>
)

// ─── JS-based image preloader hook ────────────────────────
// As a belt-and-suspenders approach, also imperatively preload
// via the Image constructor so assets hit the disk cache even
// if CSS hides the DOM nodes above (some browsers skip hidden imgs).
function useImagePreload(urls: string[]) {
  useEffect(() => {
    urls.forEach(url => {
      const img = new Image()
      img.src = url
    })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
}

const SwirlIcon = ({ className }: { className?: string }) => (
  <video
    src={LoadingVideo}
    className={className}
    autoPlay
    loop
    muted
    playsInline
    style={{ objectFit: 'contain' }}
  />
)

// ─── Mobile Card Layout ────────────────────────────────────
const MobileServicesGrid = () => {
  // Preload all bg images imperatively for mobile too
  useImagePreload(services.map(s => s.bgImage))

  return (
    <section id="services" className="py-16 bg-blue-950">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="font-technor text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight text-center">Our Services</h2>
        <p className="text-white/60 text-center text-sm mb-10">Tap to book any service instantly</p>
        <div className="grid grid-cols-2 gap-4">
          {services.map((svc, idx) => (
            <div key={idx} className="relative rounded-2xl overflow-hidden aspect-square cursor-pointer">
              <img
                src={svc.bgImage}
                alt={svc.title}
                className="w-full h-full object-cover"
                loading={idx < 2 ? 'eager' : 'lazy'}
                decoding="async"
              />
              <div className="absolute inset-0 bg-blue-950/60" />
              <div className="absolute inset-0 flex flex-col justify-end p-3">
                <h3 className="font-khand text-white font-bold text-lg leading-tight">{svc.title}</h3>
                <div className="flex gap-2 mt-2">
                  <a
                    href={`https://wa.me/919204946507?text=Hi, I want to book ${encodeURIComponent(svc.title)} service.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 bg-[#25D366] text-white px-2 py-1.5 rounded-full font-bold text-xs"
                  >
                    <MessageCircle size={12} />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+919204946507"
                    className="flex-1 flex items-center justify-center gap-1 bg-white text-blue-950 px-2 py-1.5 rounded-full font-bold text-xs"
                  >
                    <Phone size={12} />
                    Call
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <InteractiveHoverButton
            text="View All Services"
            className="bg-transparent border-white/20 text-white hover:text-black w-56"
          />
        </div>
      </div>
    </section>
  )
}

// ─── Desktop Sticky Scroll Layout ─────────────────────────
const DesktopServicesScroll = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  // Preload all images upfront via JS Image constructor
  useImagePreload([
    ...services.map(s => s.bgImage),
    ...services.map(s => s.coverImage),
  ])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    let index = Math.floor(latest * services.length)
    if (index >= services.length) index = services.length - 1
    if (index < 0) index = 0
    setActiveIndex(index)
  })

  return (
    <section ref={sectionRef} id="services" className="relative h-[400vh] bg-blue-950">
      {/* Hidden DOM preloader: all bg + cover images are fetched immediately */}
      <ImagePreloader />

      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        
        {/* Blurred Background Image */}
        <div className="absolute inset-0 z-0 bg-blue-950">
          {/*
            Pre-render ALL background images in the DOM, stacked.
            Only the active one is visible (opacity-70), others are opacity-0.
            This avoids AnimatePresence unmounting/remounting <img> tags
            which forces re-fetches. Images stay in DOM → instant transitions.
          */}
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: idx === activeIndex ? 1 : 0 }}
            >
              <img
                src={svc.bgImage}
                alt=""
                className="w-full h-full object-cover scale-110 opacity-70 will-change-transform"
                loading={idx === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </div>
          ))}
          {/* Static Blur Overlay */}
          <div className="absolute inset-0 backdrop-blur-[2px] transform-gpu" />
          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 from-20% via-blue-950/80 via-50% to-transparent" />
        </div>

        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center h-full max-h-[90vh] lg:max-h-[80vh] pt-16 lg:pt-0">
          
          {/* Left Column - Scrolling List */}
          <div className="lg:col-span-5 flex flex-col h-full justify-center relative">
            {/* Top/Bottom gradient masks */}
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-blue-950 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-blue-950 to-transparent z-20 pointer-events-none" />

            <div className="relative h-[250px] lg:h-[400px] w-full overflow-hidden">
              <motion.div
                animate={{ y: activeIndex * -80 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30, mass: 1 }}
                className="absolute top-1/2 left-0 w-full"
                style={{ marginTop: -40 }}
              >
                {services.map((svc, idx) => {
                  const distance = Math.abs(idx - activeIndex)
                  let opacity = 1
                  let scale = 1
                  let letterSpacing = '1px'
                  if (distance === 1) { opacity = 0.5; scale = 0.9; letterSpacing = '0px' }
                  else if (distance === 2) { opacity = 0.2; scale = 0.8; letterSpacing = '-0.5px' }
                  else if (distance >= 3) { opacity = 0.05; scale = 0.75; letterSpacing = '-1px' }

                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        if (!sectionRef.current) return
                        const sectionTop = sectionRef.current.offsetTop
                        const sectionHeight = sectionRef.current.offsetHeight
                        const scrollPoint = sectionTop + (idx / services.length) * (sectionHeight - window.innerHeight) + 50
                        window.scrollTo({ top: scrollPoint, behavior: 'smooth' })
                      }}
                      className="h-[80px] flex items-center gap-0 cursor-pointer group"
                    >
                      <div className="w-16 lg:w-24 h-20 lg:h-32 flex flex-shrink-0 items-center justify-center relative ml-0 lg:ml-3">
                        <AnimatePresence>
                          {activeIndex === idx && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0 }}
                              transition={{ duration: 0.3 }}
                              className="absolute inset-0 flex items-center justify-center"
                            >
                              <SwirlIcon className="w-20 h-20 md:w-32 md:h-32 text-[#A3E5D0]" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <motion.h3
                        animate={{
                          color: activeIndex === idx ? '#A3E5D0' : '#ffffff',
                          opacity: activeIndex === idx ? 1 : opacity,
                          scale: activeIndex === idx ? 1 : scale,
                          letterSpacing: activeIndex === idx ? '1px' : letterSpacing
                        }}
                        style={{ originX: 0 }}
                        transition={{ duration: 0.3 }}
                        className="font-khand text-xl md:text-2xl lg:text-3xl font-bold"
                      >
                        {svc.title}
                      </motion.h3>
                    </div>
                  )
                })}
              </motion.div>
            </div>

            <div className="mt-4 lg:mt-8 ml-0 lg:ml-12 relative z-20 flex justify-center lg:justify-start">
              <InteractiveHoverButton
                text="View All Services"
                className="bg-transparent border-white/20 text-white hover:text-black w-56"
              />
            </div>
          </div>

          {/* Center Column - Cover Images (all pre-rendered, only active is visible) */}
          <div className="lg:col-span-5 flex justify-center items-center hidden sm:flex" style={{ perspective: '1200px' }}>
            <div className="relative w-2/3 lg:w-full aspect-[4/3]" style={{ transformStyle: 'preserve-3d' }}>
              {/*
                Pre-render ALL cover images in the DOM.
                Use CSS opacity + scale transition instead of AnimatePresence
                unmounting, so images are never evicted from cache.
              */}
              {services.map((svc, idx) => (
                <div
                  key={idx}
                  className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl shadow-black/80 origin-center will-change-transform"
                  style={{
                    opacity: idx === activeIndex ? 1 : 0,
                    transform: idx === activeIndex
                      ? 'rotateX(0deg) rotateY(0deg) scale(1)'
                      : 'rotateX(25deg) rotateY(-15deg) scale(0.8)',
                    transition: 'opacity 0.6s ease, transform 0.8s cubic-bezier(0.16,1,0.3,1)',
                    // Keep inactive images pointer-events off so they don't block clicks
                    pointerEvents: idx === activeIndex ? 'auto' : 'none',
                  }}
                >
                  <img
                    src={svc.coverImage}
                    alt={svc.title}
                    className="w-full h-full object-contain"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Description and Actions */}
          <div className="lg:col-span-2 flex flex-col justify-center gap-4 lg:gap-6 h-full relative mt-4 lg:mt-0">
            <div className="h-20 lg:h-24 relative w-full text-center lg:text-left px-4 lg:px-0">
              <AnimatePresence>
                <motion.p
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 text-white font-bold text-sm md:text-base leading-relaxed flex items-center"
                >
                  {services[activeIndex].desc}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex flex-row lg:flex-col gap-3 w-full justify-center lg:justify-start px-2 lg:px-0">
              <a
                href={`https://wa.me/919204946507?text=Hi, I want to book ${encodeURIComponent(services[activeIndex].title)} service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full font-bold text-sm hover:bg-[#1ebd5b] transition-all hover:scale-105 shadow-lg"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a
                href="tel:+919204946507"
                className="flex items-center justify-center gap-2 bg-white text-blue-950 px-4 py-3 rounded-full font-bold text-sm hover:bg-slate-100 transition-all hover:scale-105 shadow-lg"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// ─── Exported Component (responsive switch) ───────────────
const ServicesSection = () => {
  return (
    <>
      {/* Mobile & tablet: simple card grid */}
      <div className="lg:hidden">
        <MobileServicesGrid />
      </div>
      {/* Desktop: sticky scroll experience */}
      <div className="hidden lg:block">
        <DesktopServicesScroll />
      </div>
    </>
  )
}

export default ServicesSection
