import { Shield, Users, Calendar, Heart, Star, Users as UsersGroup } from 'lucide-react'
import { motion } from 'framer-motion'

const WhyChooseSection = () => {
  const reasons = [
    { icon: <Shield size={32} strokeWidth={1.5} />, title: 'Background Verified & Trusted Experts', desc: 'We thoroughly verify professionals to ensure you get the safest and highest-quality service.' },
    { icon: <Users size={32} strokeWidth={1.5} />, title: 'Professionally Trained Staff', desc: 'Our workforce is skilled and continuously trained to deliver top-notch service for your needs.' },
    { icon: <Calendar size={32} strokeWidth={1.5} />, title: 'Freedom to Cancel or Reschedule', desc: 'We understand life can be unpredictable, so we offer flexible options for cancellations or changes.' },
    { icon: <Heart size={32} strokeWidth={1.5} />, title: 'Powered By Strong Women Workforce', desc: 'We believe in empowering women and helping them thrive in the home services industry.' },
    { icon: <Star size={32} strokeWidth={1.5} />, title: 'Average Service Rating: 4.5', desc: 'Thousands of satisfied customers have rated us highly for our reliable, friendly services.' },
    { icon: <UsersGroup size={32} strokeWidth={1.5} />, title: 'Trusted by 6000+ Families', desc: 'Our community is growing every day, thanks to our commitment to excellence and customer care.' }
  ]

  return (
    <section id="why-us" className="py-32 bg-[#F4F5F0]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <h2 className="font-technor text-6xl md:text-8xl font-bold text-[#0D120B] tracking-tighter mb-8 leading-[0.9]">
            Why Choose<br/>JustGoFix?
          </h2>
          <p className="text-[#0D120B]/60 text-xl md:text-2xl max-w-2xl font-medium tracking-tight">
            Discover what makes JustGoFix your go-to solution for instant, professional home services.
          </p>
        </motion.div>
        
        <div className="relative w-full overflow-hidden flex items-center py-12">
          {/* Fading edges for smooth entry/exit */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F4F5F0] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F4F5F0] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-x-12 w-max animate-marquee hover:[animation-play-state:paused] pr-12">
            {[...reasons, ...reasons].map((item, idx) => (
              <div 
                key={idx} 
                className="w-[350px] shrink-0 group p-8 rounded-[2rem] border border-[#0D120B]/10 bg-[#F4F5F0] hover:bg-white hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-8 w-16 h-16 flex items-center justify-center border border-[#0D120B]/20 rounded-2xl group-hover:bg-[#0D120B] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="font-khand text-[#0D120B] font-bold text-2xl tracking-tight mb-4">{item.title}</h3>
                <p className="text-[#0D120B]/60 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default WhyChooseSection
