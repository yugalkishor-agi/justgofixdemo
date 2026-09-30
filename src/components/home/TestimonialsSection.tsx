import { Star, Quote } from 'lucide-react'
import { InteractiveHoverButton } from './Interactive-hover-button'

const TestimonialsSection = () => {
  return (
    <section className="py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-technor text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Loved by Homeowners</h2>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto">See why thousands of people trust JustGoFix for their daily maintenance and repair needs.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Sarah Jenkins', role: 'Homeowner', text: 'The plumber arrived on time and fixed the leak in 20 minutes. Very professional and transparent pricing. Highly recommended!', img: '10' },
            { name: 'David Chen', role: 'Property Manager', text: 'JustGoFix has been a lifesaver for our rental properties. It is so easy to book an electrician or handyman in an emergency.', img: '11' },
            { name: 'Emily Rodriguez', role: 'Homeowner', text: 'I booked a painting service and they did a flawless job. The app is super intuitive and customer support is incredibly responsive.', img: '12' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-300">
              <Quote className="absolute top-10 right-10 text-slate-100 rotate-180" size={60} />
              <div className="flex text-amber-400 mb-8 relative z-10">
                {[1,2,3,4,5].map(s => <Star key={s} size={22} fill="currentColor" className="mr-1" />)}
              </div>
              <p className="text-slate-700 mb-10 text-lg leading-relaxed relative z-10 font-medium">"{item.text}"</p>
              
              <div className="flex items-center gap-5 relative z-10 mt-auto">
                <div className="w-14 h-14 bg-slate-200 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <img src={`https://i.pravatar.cc/150?img=${item.img}`} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-panchang font-bold text-slate-900 text-lg">{item.name}</h4>
                  <p className="text-sm text-slate-500 font-medium">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* App Download CTA banner */}
        <div className="mt-32 bg-blue-600 rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-2xl shadow-blue-600/30">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 max-w-xl text-center md:text-left mb-10 md:mb-0">
            <h3 className="font-technor text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Get the JustGoFix App</h3>
            <p className="text-blue-100 text-lg md:text-xl">Book services, track professionals in real-time, and manage your bookings easily from your phone.</p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-6">
            <InteractiveHoverButton text="App Store" className="w-56 py-4 text-lg bg-slate-900 text-white border-none" />
            <InteractiveHoverButton text="Google Play" className="w-56 py-4 text-lg border-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default TestimonialsSection
