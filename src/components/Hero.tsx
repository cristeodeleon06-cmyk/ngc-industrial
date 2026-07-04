import React from 'react';
import { ArrowRight, Drill, Droplet, Shield, Settings, Wrench, Camera, Building, Hammer, Route, Compass } from 'lucide-react';

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollTo }) => {
  return (
    <section 
      className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-24"
      id="hero"
    >
      {/* 1. Backdrop Image with high-contrast darkening gradient overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden" id="hero-backdrop">
        <img
          src="/images/princess_amira_banner_1782705805117.jpg"
          alt="NGC Princess Amira Water Drilling Rig"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow"
          referrerPolicy="no-referrer"
          id="hero-bg-img"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-950/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-slate-900/30" />
      </div>

      {/* Decorative subtle patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.15),transparent_60%)]" />

      {/* 2. Hero Core Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col justify-between min-h-[75vh]" id="hero-content">
        <div className="my-auto max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          
          {/* Accent Ribbon Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FACC15]/10 border border-[#FACC15]/20 text-yellow-400 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 text-[#FACC15]" />
            Your Trusted Engineering & Water Supply Partner
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Specializing in <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-[#FACC15] to-amber-300">Water Drilling</span>, Electro-Mechanical & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-[#FACC15]">Water Services</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-medium max-w-2xl leading-relaxed">
              NGC Industrial Pump Trading and Services is committed to delivering reliable,  and high-quality water well drilling systems and solutions. As one of the few companies in the industry offering a complete one-stop-shop service, we provide end-to-end expertise for all your water well needs—from supply, construction and installation to maintenance and support. 
            </p>
          </div>

          {/* Interactive CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onScrollTo('inquiry')}
              className="bg-[#FACC15] hover:bg-yellow-500 text-[#0F172A] font-black text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-yellow-900/10 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2.5 group"
              id="hero-estimator-btn"
            >
              Send Inquiry
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
            </button>
            <button
              onClick={() => onScrollTo('services')}
              className="bg-slate-900 hover:bg-[#0F172A] border border-slate-700 hover:border-slate-600 text-white font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2"
              id="hero-services-btn"
            >
              Our Expertise & Services
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> ISO Compliant Standards</span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Over 20+ Years Combined Experience</span>
          </div>
        </div>

        {/* 3. Bottom Bento-style Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 md:mt-24" id="hero-bento-badges">
          
          {/* Card 1: Water Drilling */}
          <div 
            onClick={() => onScrollTo('services')}
            className="group bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-[#FACC15]/40 p-5 rounded-2xl backdrop-blur-md cursor-pointer transition-all duration-300 flex items-start gap-4"
            id="hero-badge-drilling"
          >
            <div className="p-3 rounded-xl bg-[#FACC15]/10 text-[#FACC15] group-hover:bg-[#FACC15] group-hover:text-[#0F172A] transition-all duration-300 shrink-0">
              <Drill className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider group-hover:text-[#FACC15] transition-colors">Water Well Drilling</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Precision groundwater exploration, permit logging, and casing up to 1,500 feet depth.
              </p>
            </div>
          </div>

          {/* Card 2: Pump Supply */}
          <div 
            onClick={() => onScrollTo('services')}
            className="group bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-[#FACC15]/40 p-5 rounded-2xl backdrop-blur-md cursor-pointer transition-all duration-300 flex items-start gap-4"
            id="hero-badge-supply"
          >
            <div className="p-3 rounded-xl bg-[#FACC15]/10 text-[#FACC15] group-hover:bg-[#FACC15] group-hover:text-[#0F172A] transition-all duration-300 shrink-0">
              <Droplet className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider group-hover:text-[#FACC15] transition-colors">Electro-Mechanical</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Trading and custom panels of high-efficiency submersible and booster pump units.
              </p>
            </div>
          </div>

          {/* Card 3: Water Services */}
          <div 
            onClick={() => onScrollTo('services')}
            className="group bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-[#FACC15]/40 p-5 rounded-2xl backdrop-blur-md cursor-pointer transition-all duration-300 flex items-start gap-4"
            id="hero-badge-maintenance"
          >
            <div className="p-3 rounded-xl bg-[#FACC15]/10 text-[#FACC15] group-hover:bg-[#FACC15] group-hover:text-[#0F172A] transition-all duration-300 shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider group-hover:text-[#FACC15] transition-colors">Water Services</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                24/7 pump retrieval cranes, downhole CCTV well-scanning, and prompt repair.
              </p>
            </div>
          </div>

          {/* Card 4: Camera Logging */}
          <div 
            onClick={() => onScrollTo('services')}
            className="group bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-[#FACC15]/40 p-5 rounded-2xl backdrop-blur-md cursor-pointer transition-all duration-300 flex items-start gap-4"
            id="hero-badge-cameralogging"
          >
            <div className="p-3 rounded-xl bg-[#FACC15]/10 text-[#FACC15] group-hover:bg-[#FACC15] group-hover:text-[#0F172A] transition-all duration-300 shrink-0">
              <Camera className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider group-hover:text-[#FACC15] transition-colors">Camera Logging</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                High-definition downhole video scanning to inspect casing and assess well integrity.
              </p>
            </div>
          </div>

          {/* Card 5: Construction of Pump House */}
          <div 
            onClick={() => onScrollTo('services')}
            className="group bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-[#FACC15]/40 p-5 rounded-2xl backdrop-blur-md cursor-pointer transition-all duration-300 flex items-start gap-4"
            id="hero-badge-pumphouse"
          >
            <div className="p-3 rounded-xl bg-[#FACC15]/10 text-[#FACC15] group-hover:bg-[#FACC15] group-hover:text-[#0F172A] transition-all duration-300 shrink-0">
              <Building className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider group-hover:text-[#FACC15] transition-colors">Construction of Pump House</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Civil works and concrete structures to secure electromechanical control equipment.
              </p>
            </div>
          </div>

          {/* Card 6: Frame Fabrication */}
          <div 
            onClick={() => onScrollTo('services')}
            className="group bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-[#FACC15]/40 p-5 rounded-2xl backdrop-blur-md cursor-pointer transition-all duration-300 flex items-start gap-4"
            id="hero-badge-fabrication"
          >
            <div className="p-3 rounded-xl bg-[#FACC15]/10 text-[#FACC15] group-hover:bg-[#FACC15] group-hover:text-[#0F172A] transition-all duration-300 shrink-0">
              <Hammer className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider group-hover:text-[#FACC15] transition-colors">Frame Fabrication</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Custom metal structures, structural welding, and booster system skid fabrication.
              </p>
            </div>
          </div>

          {/* Card 7: Pipe Laying */}
          <div 
            onClick={() => onScrollTo('services')}
            className="group bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-[#FACC15]/40 p-5 rounded-2xl backdrop-blur-md cursor-pointer transition-all duration-300 flex items-start gap-4"
            id="hero-badge-pipelaying"
          >
            <div className="p-3 rounded-xl bg-[#FACC15]/10 text-[#FACC15] group-hover:bg-[#FACC15] group-hover:text-[#0F172A] transition-all duration-300 shrink-0">
              <Route className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider group-hover:text-[#FACC15] transition-colors">Pipe Laying</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Professional water transmission piping, trenching, flange couplings, and manifold setup.
              </p>
            </div>
          </div>

          {/* Card 8: Geo Resistivity */}
          <div 
            onClick={() => onScrollTo('services')}
            className="group bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-[#FACC15]/40 p-5 rounded-2xl backdrop-blur-md cursor-pointer transition-all duration-300 flex items-start gap-4"
            id="hero-badge-georesistivity"
          >
            <div className="p-3 rounded-xl bg-[#FACC15]/10 text-[#FACC15] group-hover:bg-[#FACC15] group-hover:text-[#0F172A] transition-all duration-300 shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider group-hover:text-[#FACC15] transition-colors">Geo Resistivity</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Scientific hydrogeological surveys and earth scanner mapping of local aquifers.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Hero;
