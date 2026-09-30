import { ShieldCheck, Clock, Award, ThumbsUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { InteractiveHoverButton } from './Interactive-hover-button'

const features = [
  { icon: <ShieldCheck size={32}/>, title: 'Verified Professionals', desc: 'Background checked, trained, and highly skilled experts for your peace of mind.' },
  { icon: <Clock size={32}/>, title: 'On-time Service', desc: 'We value your time. Our pros arrive as scheduled, or we compensate you.' },
  { icon: <Award size={32}/>, title: 'Quality Guarantee', desc: '100% satisfaction guaranteed on all repairs with a 30-day warranty.' },
  { icon: <ThumbsUp size={32}/>, title: 'Transparent Pricing', desc: 'No hidden costs. Know the exact price before we even start the job.' }
]

const FeaturesSection = () => {
  return (
    <section className="py-32 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-technor text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8">
              Why JustGoFix is the <br/>
              <span className="text-[#A3E5D0]">smartest choice.</span>
            </h2>
            <p className="text-gray-400 text-xl md:text-2xl mb-12 leading-relaxed">
              Experience hassle-free home repairs with our trusted network of professionals. We take the stress out of home maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <InteractiveHoverButton text="Learn More" className="w-56 py-4 text-lg" />
              <InteractiveHoverButton text="Our Guarantee" className="w-56 py-4 text-lg bg-transparent text-white border-white/20 hover:text-black" />
            </div>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((ft, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#111111] p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-colors duration-300"
              >
                <div className="text-[#A3E5D0] mb-6">
                  {ft.icon}
                </div>
                <h3 className="font-khand text-2xl font-bold tracking-tight mb-3">{ft.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{ft.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default FeaturesSection
