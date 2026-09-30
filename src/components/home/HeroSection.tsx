import { ChevronDown, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { InteractiveHoverButton } from './Interactive-hover-button'

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-[#A3E5D0]">
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center mt-12">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-technor text-[4rem] md:text-[7rem] lg:text-[8rem] font-bold text-[#0D120B] mb-8 tracking-tighter leading-[0.9]"
        >
          Justgofix,<br/>
          Instant Solutions
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#0D120B]/80 text-xl md:text-2xl font-medium tracking-tight max-w-2xl mx-auto mb-16"
        >
          Get professional services at your fingertips. Whether you need help or want to provide services, we've got you covered.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-6 mb-20"
        >
          <InteractiveHoverButton text="Get the App Now" />
          <InteractiveHoverButton text="Become a Partner" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="animate-bounce mt-12"
        >
          <ChevronDown className="text-[#0D120B]/50" size={32} strokeWidth={2} />
        </motion.div>
      </div>
    </section>
  )
}
export default HeroSection
