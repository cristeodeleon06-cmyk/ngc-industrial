import React from 'react';
import { ArrowRight, Drill, Droplet, Shield, Settings, Wrench, Camera, Building, Hammer, Route, Compass, Sparkles, ChevronRight, Activity } from 'lucide-react';
import { motion } from 'motion/react';

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
            <motion.button
              onClick={() => onScrollTo('inquiry')}
              whileHover={{ 
                scale: 1.04,
                boxShadow: "0 0 25px rgba(250, 204, 21, 0.65)"
              }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-[#FACC15] to-amber-400 text-[#0F172A] font-black text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer border-b-4 border-b-amber-600 shadow-[0_0_15px_rgba(250,204,21,0.3)]"
              id="hero-estimator-btn"
            >
              {/* Shimmer line effect across the button */}
              <div className="absolute top-0 bottom-0 -left-[100%] w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:animate-shine pointer-events-none" />
              
              {/* Extra brightness overlay on hover */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <span className="relative flex items-center gap-2">
                Send Inquiry
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              onClick={() => onScrollTo('services')}
              whileHover={{ 
                scale: 1.04,
                borderColor: "rgba(250, 204, 21, 0.9)",
                boxShadow: "0 0 25px rgba(250, 204, 21, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden bg-slate-900/90 hover:bg-slate-950 border border-slate-700 hover:border-amber-400/80 text-white hover:text-[#FACC15] font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-xl backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer shadow-md hover:shadow-xl border-b-4 border-b-slate-800 hover:border-b-amber-500"
              id="hero-services-btn"
            >
              {/* Subtle hover background highlight gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/15 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              {/* Shimmer line effect across the button */}
              <div className="absolute top-0 bottom-0 -left-[100%] w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 group-hover:animate-shine pointer-events-none" />

              <span className="relative flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                Our Expertise & Services
              </span>

              <div className="relative p-1 rounded-md bg-slate-800 text-slate-300 group-hover:bg-[#FACC15] group-hover:text-slate-950 transition-all duration-300 flex items-center justify-center">
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-300" />
              </div>
            </motion.button>

            <motion.button
              onClick={() => onScrollTo('home-ongoing-projects')}
              whileHover={{ 
                scale: 1.04,
                borderColor: "rgba(250, 204, 21, 0.95)",
                boxShadow: "0 0 25px rgba(250, 204, 21, 0.45)"
              }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden bg-slate-950/85 hover:bg-slate-950 border border-[#FACC15]/80 text-[#FACC15] hover:text-white font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-xl backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer shadow-[0_0_15px_rgba(250,204,21,0.2)] border-b-4 border-b-amber-500"
              id="hero-active-projects-btn"
            >
              {/* Animated glowing border gradient pulse overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-amber-500/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Shimmer line effect across the button */}
              <div className="absolute top-0 bottom-0 -left-[100%] w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shine pointer-events-none" />

              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-90"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FACC15] shadow-[0_0_8px_#FACC15]"></span>
              </span>

              <span className="relative flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#FACC15] group-hover:text-white animate-pulse" />
                3 Active Projects
              </span>

              <div className="relative p-1 rounded-md bg-[#FACC15]/15 text-[#FACC15] group-hover:bg-[#FACC15] group-hover:text-slate-950 transition-all duration-300 flex items-center justify-center">
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-300" />
              </div>
            </motion.button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-xs sm:text-sm text-slate-200 font-semibold" id="hero-trust-indicators">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] shrink-0 animate-pulse" /> 
              ISO Compliant Standards
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] shrink-0 animate-pulse" /> 
              Over 20+ Years Combined Experience
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] shrink-0 animate-pulse" /> 
              2,000+ Pumps Installed
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] shrink-0 animate-pulse" /> 
              150+ Wells Drilled
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] shrink-0 animate-pulse" /> 
              Nationwide Service
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] shrink-0 animate-pulse" /> 
              24/7 Technical Support
            </span>
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
