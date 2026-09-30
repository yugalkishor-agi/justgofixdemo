import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQSection = () => {
  const faqs = [
    { q: 'What is JustgoFix?', a: 'JustgoFix is your one-stop solution for all professional home services. We connect you with verified professionals for your needs.' },
    { q: 'How does the service work?', a: 'You can easily book a service through our app or website. Once booked, a professional will arrive at your doorstep.' },
    { q: 'Is it available in my area?', a: 'We are rapidly expanding! Please check the app to see if your pin code is serviceable.' },
    { q: 'How can I contact support?', a: 'You can reach us at hello.justgofix@gmail.com or call our support line at +91-9204946507.' }
  ]
  
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section id="faq" className="h-full w-full py-14 md:py-24 bg-[#050505] text-white flex flex-col justify-center overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto px-5 md:px-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-32">
          
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-sm font-semibold tracking-widest uppercase mb-6 text-gray-400">
                FAQ
              </h2>
              <h3 className="font-technor text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1]">
                Have <br className="hidden lg:block" /> Questions?
              </h3>
              <p className="mt-8 text-gray-400 text-lg md:text-xl leading-relaxed max-w-sm">
                Find answers to common questions below. If you need further assistance, our support team is always here to help.
              </p>
            </motion.div>
          </div>
          
          <div className="lg:w-2/3 mt-8 lg:mt-0">
            <div className="border-t border-white/10">
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="border-b border-white/10"
                  >
                    <button 
                      className="w-full py-8 flex justify-between items-center text-left group focus:outline-none"
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${idx}`}
                    >
                      <span className={`text-lg sm:text-2xl md:text-3xl font-medium tracking-tight transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                        {faq.q}
                      </span>
                      <div className={`ml-6 flex-shrink-0 w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-white text-black border-white' : 'bg-transparent text-white border-white/20 group-hover:border-white group-focus-visible:border-white'}`}>
                        {isOpen ? <Minus size={20} strokeWidth={2} /> : <Plus size={20} strokeWidth={2} />}
                      </div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div 
                          id={`faq-answer-${idx}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 pr-4 sm:pr-12 text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
export default FAQSection
