import React from 'react';
import { NGCLogo } from './NGCLogo';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ChevronRight, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12" id="footer-container">
        
        {/* Main Footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12" id="footer-grid">
          
          {/* Column 1: Company Logo / Bio (4 Cols) */}
          <div className="space-y-6 lg:col-span-4" id="footer-col-company">
            <div className="cursor-pointer" onClick={() => onNavigate('hero')}>
              <NGCLogo textColor="text-white" size={48} />
            </div>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-sm font-medium">
              NGC Industrial Pump Trading & Services is a premiere accredited engineering contractor. We specialize in deep ground water borehole exploration, premium hydraulic pump trading, smart automated electrical supplies, and rapid electro-mechanical maintenance services.
            </p>
           
            <div className="flex items-center gap-2 text-xs text-yellow-400 font-bold">
              <ShieldCheck className="w-5 h-5 text-yellow-400" />
              <span>Design • Build • Install • Maintain </span>
            </div>
             <div className="flex items-center gap-2 text-xs text-yellow-400 font-bold">
              <ShieldCheck className="w-5 h-5 text-yellow-400" />
              <span>DTI Registered & Municipal Safety Compliant</span>
            </div>
          </div>

          {/* Column 2: Department shortcuts (3 Cols) */}
          <div className="space-y-4 lg:col-span-3" id="footer-col-services">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold border-b border-slate-900 pb-2">
              Our Departments
            </h4>
            <nav className="flex flex-col gap-2.5 text-xs text-slate-400 font-semibold" id="footer-services-nav">
              {[
                { id: 'drilling', label: '💦 Water Well Drilling' },
                { id: 'supply', label: '⚡ Electro-Mechanical Supply' },
                { id: 'maintenance', label: '🛠️ Water Services & Repair' },
                { id: 'camera', label: '📷 Camera Logging' },
                { id: 'pumphouse', label: '🏢 Construction of Pump House' },
                { id: 'frame', label: '🏗️ Frame Fabrication' },
                { id: 'pipe', label: '🚰 Pipe Laying' },
                { id: 'geo', label: '🌍 Geo Resistivity' }
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => onNavigate('services')}
                  className="text-left hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#FACC15] group-hover:translate-x-0.5 transition-all" />
                  <span>{s.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Column 3: Quick Navigation (2 Cols) */}
          <div className="space-y-4 lg:col-span-2" id="footer-col-nav">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold border-b border-slate-900 pb-2">
              Quick Resources
            </h4>
            <nav className="flex flex-col gap-2.5 text-xs text-slate-400 font-semibold" id="footer-resources-nav">
              {[
                { id: 'hero', label: 'Home Page' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Our Specializations' },
                { id: 'portfolio', label: 'Completed Gallery' },
                { id: 'inquiry', label: 'Project Inquiry Form' },
                { id: 'certifications', label: 'Accredited Certifications' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="text-left hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#FACC15] group-hover:translate-x-0.5 transition-all" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Column 4: Contact details (3 Cols) */}
          <div className="space-y-4 lg:col-span-3" id="footer-col-contact">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold border-b border-slate-900 pb-2">
              Contact Headquarters
            </h4>
            <div className="space-y-3.5 text-xs text-slate-400 font-semibold" id="footer-contact-info">
              <a
                href="https://www.google.com/maps/place/14%C2%B053'56.3%22N+120%C2%B048'54.1%22E/@14.898959,120.815018,17z/data=!4m4!3m3!8m2!3d14.898959!4d120.815018?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-[#FACC15] transition-colors group cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed text-slate-400 group-hover:text-[#FACC15] transition-colors underline decoration-slate-800 hover:decoration-[#FACC15]">
                  187 PUROK 6, DAMPOL, PLARIDEL, BULACAN 3004 ↗
                </span>
              </a>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>0917 623 2574/ 09688558232</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-yellow-400 shrink-0" />
                <span className="truncate">chris_ngcindustrial@yahoo.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>
                  Mon - Sat: 8:00 AM - 5:00 PM<br />
                  <span className="text-emerald-500 text-[10px] uppercase font-bold animate-pulse">24/7 Dispatch active for emergencies</span>
                </span>
              </div>
              <div className="flex items-center gap-3 border-t border-slate-900 pt-3 mt-1.5" id="footer-fb-link">
                <Facebook className="w-4 h-4 text-[#1877F2] shrink-0" />
                <a
                  href="https://www.facebook.com/NGCIndustrialPumpTradingServices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors text-slate-300 flex items-center gap-1 font-bold"
                >
                  Visit Facebook Page ↗
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Outer map placeholder or service regions banner */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-semibold" id="footer-coverage-banner">
          <div className="space-y-1">
            <span className="text-slate-200 font-bold block">Service Coverage Regions</span>
            <p className="text-slate-400 text-[11px] leading-relaxed max-w-xl">
              We actively mobilize heavy-duty drilling rigs and engineering teams throughout Luzon—from North to South—and extend our services to the Visayas and Mindanao, delivering reliable and efficient project execution nationwide.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('inquiry')}
            className="text-yellow-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider border border-[#FACC15]/20 hover:bg-slate-850 px-4 py-2 rounded-xl"
            id="coverage-estimate-btn"
          >
            Send Inquiry
          </button>
        </div>

        {/* Bottom copyright bars */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-[11px] font-bold" id="footer-bottom-bar">
          <p>© {currentYear} NGC Industrial Pump Trading & Services. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span className="text-slate-600">Built with Engineering Excellence</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
