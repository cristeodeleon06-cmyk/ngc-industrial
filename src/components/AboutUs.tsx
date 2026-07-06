import React from 'react';
import { motion } from 'motion/react';
import { 
  Building, Compass, HardHat, ShieldCheck, Award, 
  CheckCircle, Users, Settings, Wrench, HeartHandshake, FileDown
} from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-slate-50 text-slate-900 relative overflow-hidden" id="about">
      {/* Decorative gradient elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0F172A]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Massive Transparent Watermark NGC Logo in the background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 opacity-[0.045] md:opacity-[0.06]" id="about-watermark">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-w-[580px] max-h-[580px] md:max-w-[920px] md:max-h-[920px] w-full h-full"
        >
          <defs>
            {/* Metallic Blue Gradients */}
            <linearGradient id="watermarkBlueMetallic" x1="10" y1="10" x2="190" y2="190" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#25A0FF" />
              <stop offset="35%" stopColor="#0072E5" />
              <stop offset="70%" stopColor="#004C99" />
              <stop offset="100%" stopColor="#002D66" />
            </linearGradient>
            
            <linearGradient id="watermarkBevelHighlight" x1="100" y1="10" x2="100" y2="190" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#000000" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
            </linearGradient>

            {/* Red 3D Text Gradients */}
            <linearGradient id="watermarkRed3D" x1="100" y1="75" x2="100" y2="125" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF4141" />
              <stop offset="100%" stopColor="#B30000" />
            </linearGradient>
          </defs>

          {/* 1. Main Blue Diamond Shape (Split into quadrants with a horizontal gap between North and South) */}
          {/* Top Half (North) of Diamond - Truncated at y = 98 for a 2px offset from center */}
          <path
            d="M 100,8 L 190,98 L 100,98 Z"
            fill="url(#watermarkBlueMetallic)"
          />
          <path
            d="M 100,8 L 10,98 L 100,98 Z"
            fill="url(#watermarkBlueMetallic)"
          />
          
          {/* Bottom Half (South) of Diamond - Truncated at y = 102 for a 2px offset from center */}
          <path
            d="M 100,192 L 190,102 L 100,102 Z"
            fill="url(#watermarkBlueMetallic)"
          />
          <path
            d="M 100,192 L 10,102 L 100,102 Z"
            fill="url(#watermarkBlueMetallic)"
          />

          {/* Clean Outer Border for each part of the Diamond (Symmetrical triangular caps) */}
          <polygon
            points="100,8 190,98 10,98"
            fill="none"
            stroke="#003366"
            strokeWidth="2"
          />
          <polygon
            points="100,192 190,102 10,102"
            fill="none"
            stroke="#003366"
            strokeWidth="2"
          />

          {/* Bevel Overlay for Metallic Shine (Aligned with truncated boundaries) */}
          <path
            d="M 100,8 L 190,98 L 10,98 Z"
            fill="url(#watermarkBevelHighlight)"
            style={{ mixBlendMode: 'overlay' }}
          />
          <path
            d="M 100,192 L 190,102 L 10,102 Z"
            fill="url(#watermarkBevelHighlight)"
            style={{ mixBlendMode: 'overlay' }}
          />

          {/* Inner White/Silver Circle Backing */}
          <circle cx="100" cy="100" r="54" fill="#FFFFFF" stroke="#002D66" strokeWidth="2" />

          {/* 2. Red "NGC" Letters with 3D Border & Stroke */}
          <g>
            {/* 3D Underlay Stroke */}
            <text
              x="100"
              y="118"
              fontFamily="'Impact', 'Arial Black', sans-serif"
              fontSize="55"
              fontWeight="900"
              textAnchor="middle"
              fill="#500000"
              stroke="#000"
              strokeWidth="8"
              strokeLinejoin="round"
              letterSpacing="-2"
            >
              NGC
            </text>
            {/* White Outer Stroke Outline */}
            <text
              x="100"
              y="118"
              fontFamily="'Impact', 'Arial Black', sans-serif"
              fontSize="55"
              fontWeight="900"
              textAnchor="middle"
              fill="#FFFFFF"
              stroke="#FFFFFF"
              strokeWidth="5"
              strokeLinejoin="round"
              letterSpacing="-2"
            >
              NGC
            </text>
            {/* Red Main Front Fill */}
            <text
              x="100"
              y="118"
              fontFamily="'Impact', 'Arial Black', sans-serif"
              fontSize="55"
              fontWeight="900"
              textAnchor="middle"
              fill="url(#watermarkRed3D)"
              letterSpacing="-2"
            >
              NGC
            </text>
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10" id="about-container">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4" id="about-title-block">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0F172A] text-[#FACC15] border border-[#FACC15]/20 font-bold text-xs uppercase tracking-wide">
            <Users className="w-3.5 h-3.5 text-[#FACC15]" /> About Our Company
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            NGC Industrial Pump Trading & Services
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            To translating our clients' visions into reality.  We are committed to achieving excellence in our services and delivering precisely what our customers desire and require. 
          </p>
        </div>

        {/* Core Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center" id="about-content-grid">
          
          {/* Left Panel: Narrative, Mission & Vision */}
          <div className="space-y-8 order-2 lg:order-1" id="about-story-pane">
            <div className="space-y-4">
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Our Story & Legacy
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                NGC Industrial Pump Trading & Services, established in February 2003 by the former VP of Operations at Aqua Pump Industrial Corporation. NGC is a trusted provider of specialized electromechanical services. We offer end-to-end solutions including water well drilling (Design & Build), pump and motor repair, deepwell rehabilitation, submersible motor rewinding, motor controller fabrication, and water systems 

maintenance.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our team comprises highly trained professionals with backgrounds in leading firms such as IPEC and Aquahaus Inc. (Grundfos Authorized Service Partner), with expertise in servicing top-tier brands like Grundfos, Goulds, Pleuger, and Franklin. As an accredited contractor for Maynilad, Manila Water Ventures, Wyeth Philippines, and Petron Corporation, we uphold the highest standards of quality and safety. Our ISO certifications—9001 (Quality), 14001 (Environmental), and 45001 (Occupational Health & Safety)—reflect our commitment to excellence and regulatory compliance.
              </p>
              
              <div className="pt-4" id="download-profile-wrapper">
                <a
                  href="https://drive.google.com/file/d/1K5lRhRajxiTKYz0pbMVaix93e89Clqyl/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 font-extrabold text-sm transition-all duration-300 shadow-lg hover:shadow-slate-900/20 group cursor-pointer"
                  id="download-profile-btn"
                >
                  <FileDown className="w-5 h-5 text-[#FACC15] group-hover:translate-y-0.5 transition-transform" />
                  <span>Download Our Company Profile Here</span>
                </a>
              </div>
            </div>

            {/* Mission & Vision Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" id="about-mission-vision">
              <div className="p-5 bg-white border border-slate-200/80 rounded-2xl shadow-sm space-y-3">
                <div className="p-2 w-10 h-10 rounded-xl bg-[#FACC15]/10 text-amber-600 flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Our Mission</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  To supply sustainable water systems and premium electromechanical solutions that keep community, agricultural, and industrial water networks running smoothly.
                </p>
              </div>

              <div className="p-5 bg-white border border-slate-200/80 rounded-2xl shadow-sm space-y-3">
                <div className="p-2 w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                  <Building className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Our Vision</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  To become the nation’s premier engineering partner, renowned for uncompromised quality, robust safety parameters, and professional integrity.
                </p>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="space-y-3.5" id="about-pillars">
              <h4 className="text-xs font-black uppercase text-slate-400 tracking-widest">Our Strategic Value</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>Licensed General Contractor (PCAB Cat A)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>NWRB Approved Well Drillers (No. 591)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>Triple ISO Compliance (QMS, EMS, OHSMS)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>24/7 Fast Emergency Servicing Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Beautiful stats bento block & Image */}
          <div className="space-y-8 order-1 lg:order-2" id="about-stats-pane">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <video 
                src="/images/portfolio_images/ncc.mp4" 
                className="w-full h-72 md:h-96 object-cover object-center scale-100 hover:scale-105 transition-transform duration-500"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-4 left-4 bg-slate-950/95 border border-[#FACC15]/20 text-yellow-400 px-4 py-2 rounded-xl text-xs uppercase font-black tracking-wider flex items-center gap-2 shadow-lg backdrop-blur">
                <ShieldCheck className="w-4 h-4 text-[#FACC15]" />
                Professional Integrity
              </span>
            </div>

            {/* Bento Grid Stats */}
            <div className="grid grid-cols-2 gap-4" id="about-stats-grid">
              
              <div className="p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-1 shadow-md">
                <span className="block text-3xl md:text-4xl font-black text-[#FACC15]">20+</span>
                <span className="block text-[10px] font-black uppercase text-slate-400 tracking-widest">Combined Years Exp</span>
                <span className="block text-xs text-slate-400 mt-1">Groundwater drilling & industrial pump setup.</span>
              </div>

              <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-1 shadow-sm">
                <span className="block text-3xl md:text-4xl font-black text-slate-900">100%</span>
                <span className="block text-[10px] font-black uppercase text-slate-500 tracking-widest">Project Completion</span>
                <span className="block text-xs text-slate-500 mt-1">Delivering contract specs on time, every time.</span>
              </div>

              <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-1 shadow-sm">
                <span className="block text-3xl md:text-4xl font-black text-slate-900">3</span>
                <span className="block text-[10px] font-black uppercase text-slate-500 tracking-widest">ISO Certifications</span>
                <span className="block text-xs text-slate-500 mt-1">Quality Management, Environment, Health & Safety.</span>
              </div>

              <div className="p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-1 shadow-md">
                <span className="block text-3xl md:text-4xl font-black text-emerald-400">CAT A</span>
                <span className="block text-[10px] font-black uppercase text-slate-400 tracking-widest">PCAB License Class</span>
                <span className="block text-xs text-slate-400 mt-1">Regular contractor’s license category A rating.</span>
              </div>

            </div>
          </div>

        </div>

        {/* Corporate Values Strip */}
        <div className="border-t border-slate-200 pt-12" id="about-values-strip">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="about-values-grid">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-[#FACC15]/10 text-amber-600 rounded-xl shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Accredited Excellence</h5>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Every drill, weld, and electromechanical controller is subject to strict ISO audits, assuring first-rate execution.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-[#FACC15]/10 text-amber-600 rounded-xl shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Customer First</h5>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Customized services engineered for specific site challenges, from hard rock formations to booster station retrofits.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-[#FACC15]/10 text-amber-600 rounded-xl shrink-0">
                <Settings className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Cutting-Edge Tech</h5>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We deploy state-of-the-art downhole cameras, geo-resistivity earth-scanners, and automated VFD controls.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
