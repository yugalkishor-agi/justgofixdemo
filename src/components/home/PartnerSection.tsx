import { Users, DollarSign, Award, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const PartnerSection = () => {
  return (
    <section className="py-32 bg-[#414CFF] text-white overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-bold tracking-tighter max-w-2xl leading-[0.9]"
          >
            Partner With Us.
          </motion.h2>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group bg-white text-[#414CFF] px-8 py-5 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all flex items-center gap-3 shrink-0"
          >
            Join as a Partner
            <div className="bg-[#414CFF]/10 p-1 rounded-full group-hover:bg-[#414CFF]/20 transition-colors">
              <ArrowRight size={18} />
            </div>
          </motion.button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: <Users size={40} strokeWidth={1.5} />, title: 'Flexible Work', desc: 'Choose your hours and services. Complete freedom.' },
            { icon: <DollarSign size={40} strokeWidth={1.5} />, title: 'Competitive Earnings', desc: 'Earn more with our transparent commission structure.' },
            { icon: <Award size={40} strokeWidth={1.5} />, title: 'Professional Growth', desc: 'Build your reputation and client base.' }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-white/20 pt-8"
            >
              <div className="text-[#A3E5D0] mb-8">
                {item.icon}
              </div>
              <h3 className="font-bold text-3xl tracking-tight mb-4">{item.title}</h3>
              <p className="text-white/70 text-xl leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default PartnerSection
