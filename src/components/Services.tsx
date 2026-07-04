import React, { useState, useEffect } from 'react';
import { SERVICES_DATA } from '../data';
import { ServiceDetail } from '../types';
import { 
  CheckCircle2, ChevronRight, Sliders, ShieldCheck, Cpu,
  Drill, Settings, Wrench, Camera, Building, Hammer, Route, Compass, ArrowRight,
  ChevronLeft, ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesProps {
  onSelectServiceAndScroll: (serviceType: 'drilling' | 'supply' | 'maintenance') => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceAndScroll }) => {
  const [activeTab, setActiveTab] = useState<string>('drilling');

  const activeService: ServiceDetail = SERVICES_DATA.find(s => s.id === activeTab) || SERVICES_DATA[0];

  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Auto-play interval for the slideshow
  useEffect(() => {
    const images = activeService.images || [activeService.image];
    if (images.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeService, isHovered]);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const images = activeService.images || [activeService.image];
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const images = activeService.images || [activeService.image];
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const mapTabToInquiryService = (tab: string): 'drilling' | 'supply' | 'maintenance' => {
    if (tab === 'pump-house' || tab === 'pipe-laying' || tab === 'geo-resistivity' || tab === 'drilling') {
      return 'drilling';
    }
    if (tab === 'frame-fabrication' || tab === 'supply') {
      return 'supply';
    }
    return 'maintenance';
  };

  const slideshowImages = (activeService.images || []).filter(Boolean);
  const hasMultipleImages = slideshowImages.length > 1;
  const hasImages = slideshowImages.length > 0 || !!activeService.image;

  return (
    <section className="py-24 px-4 md:px-8 bg-slate-50 border-t border-b border-slate-100" id="services">
      <div className="max-w-7xl mx-auto space-y-16" id="services-container">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4" id="services-title-block">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0F172A] text-[#FACC15] font-black text-xs uppercase tracking-wide">
            <Cpu className="w-3.5 h-3.5" /> What We Do Best
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Core Engineering Specializations
          </h2>
          <p className="text-slate-600 font-medium">
            From geophysics and mechanical assembly to electronic control protections, we combine heavy equipment capability with precision trading and services.
          </p>
        </div>

        {/* Dynamic Service Selection Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 p-1.5 bg-slate-200/60 backdrop-blur rounded-2xl max-w-5xl mx-auto gap-2" id="services-tabs-container">
          {[
            { id: 'drilling', label: 'Water Well Drilling', icon: <Drill className="w-4 h-4" /> },
            { id: 'supply', label: 'Electro-Mechanical', icon: <Settings className="w-4 h-4" /> },
            { id: 'maintenance', label: 'Water Services', icon: <Wrench className="w-4 h-4" /> },
            { id: 'camera-logging', label: 'Camera Logging', icon: <Camera className="w-4 h-4" /> },
            { id: 'pump-house', label: 'Construction of Pump House', icon: <Building className="w-4 h-4" /> },
            { id: 'frame-fabrication', label: 'Frame Fabrication', icon: <Hammer className="w-4 h-4" /> },
            { id: 'pipe-laying', label: 'Pipe Laying', icon: <Route className="w-4 h-4" /> },
            { id: 'geo-resistivity', label: 'Geo Resistivity', icon: <Compass className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setActiveImageIndex(0);
              }}
              className={`py-3 px-2 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 ${
                activeTab === tab.id
                  ? 'bg-[#0F172A] text-white border-b-4 border-[#FACC15] shadow-md'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-300/50'
              }`}
              id={`tab-btn-${tab.id}`}
            >
              <span className="shrink-0">{tab.icon}</span>
              <span className="text-center truncate">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Core Showcase Card details */}
        <div 
          className="bg-white border border-slate-100 rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 transition-all duration-500 hover:shadow-2xl"
          id="active-service-showcase"
        >
          {/* Left Column: Media Presentation / Professional Slideshow */}
          <div 
            className="relative min-h-[350px] lg:min-h-full lg:col-span-5 overflow-hidden group/media bg-slate-950" 
            id="showcase-media"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {!hasImages ? (
              <div className="absolute inset-0 w-full h-full bg-[#0F172A] flex flex-col items-center justify-center p-8 text-center select-none overflow-hidden">
                {/* Subtle blueprint grid pattern */}
                <div 
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '24px 24px'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/80 to-slate-950 pointer-events-none" />
                
                {/* Elegant outline icon */}
                <div className="relative w-16 h-16 rounded-2xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center mb-4 text-[#FACC15] shadow-inner">
                  <Drill className="w-8 h-8 animate-pulse" />
                </div>
                
                <h4 className="relative text-sm font-black text-white uppercase tracking-widest">
                  Operational Site Status
                </h4>
                <p className="relative text-xs text-slate-400 max-w-xs mt-2 leading-relaxed">
                  Deep well drilling field imagery and diagnostic slideshow currently under security clearance or site maintenance.
                </p>
                <div className="relative mt-4 flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-400 text-[9px] font-mono uppercase tracking-wider">
                  <span className="inline-block w-1.5 h-1.5 bg-[#FACC15] rounded-full animate-ping" />
                  No Active Gallery Images
                </div>
              </div>
            ) : hasMultipleImages ? (
              <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIndex}
                    src={slideshowImages[activeImageIndex]}
                    alt={`${activeService.title} slideshow ${activeImageIndex + 1}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>

                {/* Slideshow Arrows (Fade in on hover) */}
                <button
                  type="button"
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-950/70 hover:bg-slate-950/95 text-white p-2.5 rounded-full border border-slate-800 hover:border-slate-600 backdrop-blur-sm transition-all duration-300 opacity-0 group-hover/media:opacity-100 focus:opacity-100 z-10 hover:scale-105 cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-950/70 hover:bg-[#FACC15] hover:text-[#0F172A] text-white p-2.5 rounded-full border border-slate-800 hover:border-yellow-400 backdrop-blur-sm transition-all duration-300 opacity-0 group-hover/media:opacity-100 focus:opacity-100 z-10 hover:scale-105 cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Slideshow index badge / watermark */}
                <div className="absolute top-4 left-4 bg-slate-950/80 border border-slate-800/80 backdrop-blur-md text-[9px] sm:text-[10px] font-black tracking-wider text-slate-300 px-3 py-1.5 rounded-full uppercase flex items-center gap-1.5 shadow-md z-10 select-none">
                  <span className="inline-block w-1.5 h-1.5 bg-[#FACC15] rounded-full animate-pulse" />
                  <span>PROJECT IN ACTION: {activeImageIndex + 1} / {slideshowImages.length}</span>
                </div>

                {/* Bottom Dot Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 bg-slate-950/60 px-3 py-1.5 rounded-full backdrop-blur-sm border border-slate-800/40">
                  {slideshowImages.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex(idx);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        activeImageIndex === idx 
                          ? 'w-5 bg-[#FACC15]' 
                          : 'w-1.5 bg-slate-500 hover:bg-white'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <>
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="absolute inset-0 w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                  id="showcase-img"
                />
              </>
            )}

            {/* Quick specifications badge */}
            <div className="absolute bottom-16 left-6 right-6 bg-slate-900/95 backdrop-blur border border-slate-800 p-4 rounded-2xl text-white space-y-2 hidden sm:block shadow-lg z-10">
              <span className="text-[10px] uppercase tracking-wider text-[#FACC15] font-bold flex items-center gap-1">
                <Sliders className="w-3 h-3" /> Technical Specs Overview
              </span>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                {activeService.specs.slice(0, 2).map((s, i) => (
                  <div key={i}>
                    <span className="text-slate-400 block text-[10px]">{s.label}</span>
                    <span className="font-bold">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Text, Bullets and Action Buttons */}
          <div className="p-8 md:p-12 lg:col-span-7 flex flex-col justify-between space-y-8 bg-white" id="showcase-details">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {activeService.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
                {activeService.longDescription}
              </p>

              {activeService.photosUrl && (
                <div className="flex pt-1">
                  <a
                    href={activeService.photosUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#0F172A] hover:bg-[#FACC15] text-white hover:text-slate-950 font-black text-[11px] uppercase tracking-wider rounded-xl shadow-md transition-all duration-300 hover:scale-[1.02] group"
                    id="service-album-link"
                  >
                    <Camera className="w-4 h-4" />
                    Explore Live Project Album
                    <ExternalLink className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              )}

              {/* Service Capabilities Bullets Grid */}
              <div className="space-y-3" id="service-bullets">
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold">Key Capabilities</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeService.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="font-medium leading-normal">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specific Engineering Table */}
              <div className="border border-slate-100 rounded-xl bg-slate-50/50 p-4 overflow-x-auto" id="specs-table-container">
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-3">Service Scope & Standards</h4>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-150 text-[10px] text-slate-400 uppercase font-bold">
                      <th className="pb-1.5 font-bold">Parameter</th>
                      <th className="pb-1.5 font-bold">NGC Standard Offering</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs">
                    {activeService.specs.map((spec, i) => (
                      <tr key={i} className="hover:bg-slate-100/50 transition-colors">
                        <td className="py-2 font-bold text-slate-500">{spec.label}</td>
                        <td className="py-2 text-slate-800 font-semibold">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Direct CTA leading to Quote Calculator */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4" id="showcase-cta-row">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#0F172A]" />
                <span>Fully compliant with safety regulations & municipal codes.</span>
              </div>
              <button
                onClick={() => onSelectServiceAndScroll(mapTabToInquiryService(activeTab))}
                className="w-full sm:w-auto bg-[#FACC15] hover:bg-yellow-500 text-[#0F172A] font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                id="service-inquire-btn"
              >
                Inquire for this Department
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default Services;
