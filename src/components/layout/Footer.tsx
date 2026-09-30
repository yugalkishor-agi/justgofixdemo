
import { Phone, MessageCircle, Mail } from 'lucide-react'
import LoadingVideo from '../../../assets/Loading.webm'

const Footer = () => {
  return (
    <footer className="bg-[#0b2d61] text-white pt-16 pb-6 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 mb-12 sm:mb-16">
          <div className="col-span-2 lg:col-span-6 pr-0 sm:pr-8">
            <div className="flex items-center mb-8 relative">
              <img src="/logo.png" alt="JustGoFix" className="h-16 w-auto brightness-0 invert relative z-10" />
              <video 
                src={LoadingVideo} 
                className="h-24 sm:h-40 w-24 sm:w-40 object-contain -ml-5 sm:-ml-8 relative z-0" 
                autoPlay 
                loop 
                muted 
                playsInline 
              />
            </div>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <Phone size={16} />
                <span>+91-9204946507</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} />
                <span>+91-9204946507</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} />
                <span>hello.justgofix@gmail.com</span>
              </li>
            </ul>
            <div className="flex gap-5 mt-6">
              <a href="#" className="text-slate-300 hover:text-[#ffbc00] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-slate-300 hover:text-[#ffbc00] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="text-slate-300 hover:text-[#ffbc00] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-slate-300 hover:text-[#ffbc00] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="font-panchang text-[#ffbc00] font-bold text-sm mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><a href="#" className="hover:text-[#ffbc00] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#ffbc00] transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-[#ffbc00] transition-colors">Become a Partner</a></li>
              <li><a href="#" className="hover:text-[#ffbc00] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#ffbc00] transition-colors">About us</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="font-panchang text-[#ffbc00] font-bold text-sm mb-6 tracking-wide">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><a href="#" className="hover:text-[#ffbc00] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#ffbc00] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#ffbc00] transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-[#ffbc00] transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center text-xs text-slate-400">
          © 2026 Justgofix. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
export default Footer
