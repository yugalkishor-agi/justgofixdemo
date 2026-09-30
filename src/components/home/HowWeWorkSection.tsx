import { ClipboardList, PhoneCall, Wrench, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const HowWeWorkSection = () => {
  const steps = [
    { icon: <ClipboardList size={32} strokeWidth={1.5} />, title: 'Request Service', desc: 'Easy booking through our app with just a few taps.' },
    { icon: <PhoneCall size={32} strokeWidth={1.5} />, title: 'Quick Matching', desc: 'We instantly connect you with the right service provider.' },
    { icon: <Wrench size={32} strokeWidth={1.5} />, title: 'Professional Service', desc: 'Skilled professionals arrive to solve your problem efficiently.' },
    { icon: <ShieldCheck size={32} strokeWidth={1.5} />, title: 'Satisfaction Guaranteed', desc: 'Quality service with transparent pricing and ratings.' }
  ]

  return (
    <section id="how-it-works" className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <h2 className="text-6xl md:text-8xl font-bold text-[#0D120B] tracking-tighter">
            How We Work.
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <div className="text-[#0D120B] mb-8 bg-[#f4f5f0] w-24 h-24 rounded-full flex items-center justify-center border border-[#0D120B]/10">
                {step.icon}
              </div>
              <h3 className="text-[#0D120B] font-bold text-2xl tracking-tight mb-4">{step.title}</h3>
              <p className="text-[#0D120B]/60 text-lg leading-relaxed max-w-xs">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default HowWeWorkSection
