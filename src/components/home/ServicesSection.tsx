import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { InteractiveHoverButton } from './Interactive-hover-button'

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

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let index = Math.floor(latest * services.length)
    if (index >= services.length) index = services.length - 1
    if (index < 0) index = 0
    setActiveIndex(index)
  })

  return (
    <section ref={sectionRef} className="relative h-[400vh] bg-blue-950">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        
        {/* Blurred Background Image */}
        <div className="absolute inset-0 z-0 bg-blue-950">
          <AnimatePresence>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <img 
                src={services[activeIndex].bgImage} 
                alt="bg" 
                className="w-full h-full object-cover scale-110 opacity-70 will-change-opacity will-change-transform"
              />
            </motion.div>
          </AnimatePresence>
          {/* Static Blur Overlay */}
          <div className="absolute inset-0 backdrop-blur-[2px] transform-gpu" />
          {/* Expanded gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 from-20% via-blue-950/80 via-50% to-transparent" />
        </div>

        <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full max-h-[80vh]">
          
          {/* Left Column - Scrolling List */}
          <div className="lg:col-span-5 flex flex-col h-full justify-center relative">
            
            {/* Top/Bottom gradient masks to fade the edges of the list slightly */}
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-blue-950 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-blue-950 to-transparent z-20 pointer-events-none" />

            <div className="relative h-[400px] w-full overflow-hidden">
              <motion.div 
                animate={{ y: activeIndex * -80 }} 
                transition={{ type: "spring", stiffness: 300, damping: 30, mass: 1 }}
                className="absolute top-1/2 left-0 w-full"
                style={{ marginTop: -40 }} // Pulls the first item up so its center aligns perfectly with top-1/2
              >
                {services.map((svc, idx) => {
                  const distance = Math.abs(idx - activeIndex);
                  
                  // Dynamic styling based on distance from the active item
                  let opacity = 1;
                  let scale = 1;
                  let letterSpacing = "1px";

                  if (distance === 1) {
                    opacity = 0.5;
                    scale = 0.9;
                    letterSpacing = "0px";
                  } else if (distance === 2) {
                    opacity = 0.2;
                    scale = 0.8;
                    letterSpacing = "-0.5px";
                  } else if (distance >= 3) {
                    opacity = 0.05;
                    scale = 0.75;
                    letterSpacing = "-1px";
                  }

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
                      <div className="w-24 h-32 flex flex-shrink-0 items-center justify-center relative ml-3">
                        <AnimatePresence>
                          {activeIndex === idx && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0 }}
                              transition={{ duration: 0.3 }}
                              className="absolute inset-0 flex items-center justify-center"
                            >
                              <SwirlIcon className="w-28 h-28 md:w-32 md:h-32 text-[#A3E5D0]" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <motion.h3 
                        animate={{ 
                          color: activeIndex === idx ? '#A3E5D0' : '#ffffff',
                          opacity: activeIndex === idx ? 1 : opacity,
                          scale: activeIndex === idx ? 1 : scale,
                          letterSpacing: activeIndex === idx ? "1px" : letterSpacing
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

            <div className="mt-8 ml-12 relative z-20">
              <InteractiveHoverButton 
                text="View All Services" 
                className="bg-transparent border-white/20 text-white hover:text-black w-56" 
              />
            </div>
          </div>

          {/* Center Column - Image */}
          <div className="lg:col-span-5 flex justify-center items-center" style={{ perspective: '1200px' }}>
            <div className="relative w-full aspect-[4/3]" style={{ transformStyle: 'preserve-3d' }}>
              <AnimatePresence>
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, rotateX: 25, rotateY: -15, scale: 0.8, z: -200 }}
                  animate={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1, z: 0 }}
                  exit={{ opacity: 0, rotateX: -25, rotateY: 15, scale: 0.8, z: -200 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl shadow-black/80 origin-center will-change-transform will-change-opacity"
                >
                  <img 
                    src={services[activeIndex].coverImage} 
                    alt={services[activeIndex].title}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column - Description */}
          <div className="lg:col-span-2 flex items-center h-24 relative pl-4 lg:pl-0">
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

        </div>
      </div>
    </section>
  )
}

export default ServicesSection
