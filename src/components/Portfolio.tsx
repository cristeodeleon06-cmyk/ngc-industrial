import React, { useState, useEffect } from 'react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';
import { MapPin, Calendar, Building2, Check, Grid, Briefcase, ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectCardProps {
  project: Project;
  onOpen: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpen }) => {
  const hasImages = project.images && project.images.length > 0;
  const slideImages = hasImages ? project.images! : [project.image];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!hasImages || slideImages.length <= 1 || isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [hasImages, slideImages.length, isHovered]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + slideImages.length) % slideImages.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % slideImages.length);
  };

  const handleDotClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <article 
      className="bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden shadow-md flex flex-col justify-between group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer select-none"
      id={`project-card-${project.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onOpen}
    >
      {/* Card Header Media with hover effect & fit to frame */}
      <div className="relative overflow-hidden aspect-video bg-slate-950" id={`project-img-wrapper-${project.id}`}>
        {slideImages.map((imgSrc, index) => {
          const isVideo = imgSrc.toLowerCase().endsWith('.mp4');
          if (isVideo) {
            return (
              <video
                key={imgSrc + index}
                src={imgSrc}
                autoPlay
                muted
                loop
                playsInline
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
                  index === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'
                }`}
                id={`project-video-${project.id}-${index}`}
              />
            );
          }
          return (
            <img
              key={imgSrc + index}
              src={imgSrc}
              alt={`${project.title} - Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 ease-in-out ${
                index === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'
              }`}
              referrerPolicy="no-referrer"
              id={`project-img-${project.id}-${index}`}
            />
          );
        })}

        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none z-10" />
        
        {/* Modern click-to-expand hover overlay */}
        <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-2 transition-all duration-300 z-20 text-white font-bold text-xs pointer-events-none">
          <div className="w-10 h-10 rounded-full bg-[#FACC15] text-slate-950 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Maximize2 className="w-5 h-5" />
          </div>
          <span className="uppercase tracking-wider text-[11px] text-[#FACC15]">Expand Details & Gallery</span>
        </div>

        {/* Category Badge overlay */}
        <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-1.5">
          {(Array.isArray(project.category) ? project.category : [project.category]).map((cat) => (
            <span
              key={cat}
              className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full text-white ${
                cat === 'drilling'
                  ? 'bg-[#0F172A]/95 border border-[#FACC15]/30 text-[#FACC15] backdrop-blur'
                  : cat === 'supply'
                  ? 'bg-slate-900/95 border border-yellow-400/30 text-yellow-400 backdrop-blur'
                  : cat === 'servicing'
                  ? 'bg-amber-950/95 border border-amber-400/30 text-amber-400 backdrop-blur'
                  : 'bg-slate-950/95 border border-amber-300/30 text-amber-300 backdrop-blur'
              }`}
            >
              {cat === 'drilling' ? 'Well Drilling' : cat === 'supply' ? 'Electro-Mechanical' : cat === 'servicing' ? 'Servicing' : 'Maintenance'}
            </span>
          ))}
        </div>

        {/* Slideshow Arrows */}
        {slideImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className={`absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/85 hover:bg-[#FACC15] text-white hover:text-slate-950 flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-20 cursor-pointer shadow-lg border border-slate-800/40 ${
                isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none sm:opacity-0'
              }`}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 stroke-[3]" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className={`absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/85 hover:bg-[#FACC15] text-white hover:text-slate-950 flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-20 cursor-pointer shadow-lg border border-slate-800/40 ${
                isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none sm:opacity-0'
              }`}
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 bg-slate-950/65 px-2.5 py-1 rounded-full backdrop-blur-sm border border-slate-800/30">
              {slideImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={(e) => handleDotClick(e, index)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-[#FACC15] w-3 scale-110' 
                      : 'bg-white/40 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Card Body Information */}
      <div className="p-6 flex-grow space-y-4 flex flex-col justify-between" id={`project-info-${project.id}`}>
        <div className="space-y-2">
          {/* Location & Client meta indicators */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] text-slate-500 font-bold uppercase">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#0F172A] shrink-0" /> {project.location}
            </span>
            <span className="flex items-center gap-1">
              <Building2 className="w-3.5 h-3.5 text-[#0F172A] shrink-0" /> {project.client}
            </span>
          </div>

          {/* Title and Short description */}
          <h3 className="text-lg font-black text-slate-900 tracking-tight leading-snug group-hover:text-yellow-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
            {project.description}
          </p>
        </div>

        {/* Bullets lists of project execution highlights */}
        <div className="space-y-1.5 border-t border-slate-200/60 pt-4" id={`project-bullets-${project.id}`}>
          <span className="text-[10px] uppercase font-bold text-slate-400">Execution Highlights</span>
          <div className="space-y-1">
            {project.highlights.map((hl, i) => (
              <div key={i} className="flex items-start gap-1.5 text-[11px] md:text-xs text-slate-700 font-semibold">
                <Check className="w-3.5 h-3.5 text-[#FACC15] shrink-0 mt-0.5" />
                <span className="leading-snug">{hl}</span>
              </div>
            ))}
          </div>
          <div className="pt-2 text-[10px] font-bold text-yellow-600 group-hover:text-[#FACC15] flex items-center gap-1 transition-colors">
            Click to read more & view full gallery →
          </div>
        </div>
      </div>

      {/* Card Footer completing date meta */}
      <div className="px-6 py-4 bg-slate-100 border-t border-slate-200/50 flex justify-between items-center" id={`project-footer-${project.id}`}>
        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">COMPLETED IN</span>
        <span className="text-xs text-slate-700 font-bold flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5 text-slate-400" /> {project.completionDate}
        </span>
      </div>
    </article>
  );
};

interface ProjectLightboxProps {
  project: Project;
  onClose: () => void;
}

const ProjectLightbox: React.FC<ProjectLightboxProps> = ({ project, onClose }) => {
  const hasImages = project.images && project.images.length > 0;
  const slideImages = hasImages ? project.images! : [project.image];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Close on Escape key or navigate with Arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && slideImages.length > 1) {
        setCurrentIndex((prev) => (prev + 1) % slideImages.length);
      }
      if (e.key === 'ArrowLeft' && slideImages.length > 1) {
        setCurrentIndex((prev) => (prev - 1 + slideImages.length) % slideImages.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, slideImages.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slideImages.length) % slideImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slideImages.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative bg-white border border-slate-200 rounded-3xl w-full max-w-5xl shadow-2xl overflow-hidden text-slate-900 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-40 p-2.5 rounded-full bg-slate-900/90 text-white hover:bg-[#FACC15] hover:text-slate-950 shadow-lg border border-slate-800/40 transition-all duration-300 cursor-pointer hover:scale-110"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Responsive Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[500px]">
          
          {/* Left Column: Huge Slider */}
          <div className="lg:col-span-7 bg-slate-950 flex flex-col justify-between relative p-4 min-h-[300px] sm:min-h-[450px]">
            {/* Main Image Slider Area */}
            <div className="relative flex-grow flex items-center justify-center overflow-hidden rounded-2xl aspect-video sm:aspect-[4/3] lg:aspect-auto h-full">
              {slideImages.map((imgSrc, index) => {
                const isVideo = imgSrc.toLowerCase().endsWith('.mp4');
                if (isVideo) {
                  return (
                    <motion.video
                      key={imgSrc + index}
                      src={imgSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: index === currentIndex ? 1 : 0, scale: index === currentIndex ? 1 : 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="absolute max-w-full max-h-full object-contain rounded-xl"
                      style={{ pointerEvents: index === currentIndex ? 'auto' : 'none' }}
                    />
                  );
                }
                return (
                  <motion.img
                    key={imgSrc + index}
                    src={imgSrc}
                    alt={`${project.title} - Larger View ${index + 1}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: index === currentIndex ? 1 : 0, scale: index === currentIndex ? 1 : 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="absolute max-w-full max-h-full object-contain rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                );
              })}

              {/* Slider controls inside Lightbox */}
              {slideImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/90 hover:bg-[#FACC15] text-white hover:text-slate-950 flex items-center justify-center transition-all duration-300 shadow-xl border border-slate-800/40 cursor-pointer z-20 hover:scale-105"
                  >
                    <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/90 hover:bg-[#FACC15] text-white hover:text-slate-950 flex items-center justify-center transition-all duration-300 shadow-xl border border-slate-800/40 cursor-pointer z-20 hover:scale-105"
                  >
                    <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Navigation Row */}
            {slideImages.length > 1 && (
              <div className="flex flex-wrap items-center justify-center gap-1.5 mt-4 pt-3 border-t border-slate-800/40 z-10 max-h-[100px] overflow-y-auto px-2">
                {slideImages.map((imgSrc, index) => {
                  const isVideo = imgSrc.toLowerCase().endsWith('.mp4');
                  return (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer shrink-0 ${
                        index === currentIndex 
                          ? 'border-[#FACC15] scale-105 shadow-md' 
                          : 'border-slate-800/60 hover:border-slate-400 opacity-60 hover:opacity-100'
                      }`}
                    >
                      {isVideo ? (
                        <div className="relative w-full h-full bg-slate-900 flex items-center justify-center">
                          <video 
                            src={imgSrc} 
                            className="w-full h-full object-cover"
                            muted
                            playsInline
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/45">
                            <span className="text-[10px] text-[#FACC15] font-black uppercase tracking-wider">Video</span>
                          </div>
                        </div>
                      ) : (
                        <img 
                          src={imgSrc} 
                          alt={`Thumb ${index + 1}`} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Column: Rich Details Panel */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 max-h-[90vh] lg:max-h-none overflow-y-auto">
            <div className="space-y-6">
              {/* Tag & Meta Info */}
              <div className="space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {(Array.isArray(project.category) ? project.category : [project.category]).map((cat) => (
                    <span
                      key={cat}
                      className={`inline-flex text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${
                        cat === 'drilling'
                          ? 'bg-blue-50 text-blue-700 border border-blue-100'
                          : cat === 'supply'
                          ? 'bg-yellow-50 text-amber-700 border border-yellow-100'
                          : cat === 'servicing'
                          ? 'bg-amber-50 text-amber-800 border border-amber-100'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                      }`}
                    >
                      {cat === 'drilling' ? 'Well Drilling' : cat === 'supply' ? 'Electro-Mechanical' : cat === 'servicing' ? 'Servicing' : 'Maintenance'}
                    </span>
                  ))}
                </div>

                <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  {project.title}
                </h2>
              </div>

              {/* Grid of Key Specifications/Meta */}
              <div className="grid grid-cols-2 gap-4 bg-slate-50 border border-slate-100 p-4 rounded-2xl text-xs font-bold uppercase text-slate-600">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 block tracking-wider">Location</span>
                  <span className="flex items-center gap-1.5 text-slate-900 font-extrabold normal-case leading-snug">
                    <MapPin className="w-4 h-4 text-slate-900 shrink-0" /> {project.location}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 block tracking-wider">Client</span>
                  <span className="flex items-center gap-1.5 text-slate-900 font-extrabold normal-case leading-snug">
                    <Building2 className="w-4 h-4 text-slate-900 shrink-0" /> {project.client}
                  </span>
                </div>
                <div className="space-y-1 col-span-2 border-t border-slate-200/60 pt-2.5">
                  <span className="text-[10px] font-bold text-slate-400 block tracking-wider">Project Timeline</span>
                  <span className="flex items-center gap-1.5 text-slate-900 font-extrabold normal-case leading-snug">
                    <Calendar className="w-4 h-4 text-slate-900 shrink-0" /> {project.completionDate}
                  </span>
                </div>
              </div>

              {/* Comprehensive Project Description */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-black">Project Overview</h4>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>

              {/* Detailed Execution Highlights (Readable & Enlarged) */}
              <div className="space-y-3 pt-4 border-t border-slate-200/60">
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-black">Execution Highlights</h4>
                <div className="space-y-2.5">
                  {project.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold bg-slate-50 border border-slate-100/60 hover:border-slate-200 p-3 rounded-xl transition-all">
                      <div className="w-5 h-5 rounded-full bg-[#FACC15]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-slate-950 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Lightbox Modal Footer Prompt */}
            <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase">
              <span>NGC Industrial Pump</span>
              <span className="text-[#0F172A] flex items-center gap-1">
                Press <kbd className="px-1.5 py-0.5 bg-slate-100 rounded border border-slate-200 text-xs text-slate-500 font-mono">ESC</kbd> to close
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CLIENT_ROW1 = [
  { name: 'Maynilad', logo: '/images/LogoClient/maynilad.png' },
  { name: 'Manila Water', logo: '/images/LogoClient/manilawater.png' },
  { name: 'Petron Corporation', logo: '/images/LogoClient/petron.png' },
  { name: 'Clark Airport', logo: '/images/LogoClient/clark.png' },
  { name: 'Wyeth Philippines', logo: '/images/LogoClient/wyeth.png' },
  { name: 'Vena Energy', logo: '/images/LogoClient/vena.png' },
  { name: 'Balibago Waterworks', logo: '/images/LogoClient/balibago.png' },
  { name: 'Bataan 2020', logo: '/images/LogoClient/bataan2020.png' },
  { name: 'San Miguel Brewery', logo: '/images/LogoClient/brewery.png' },
  { name: 'Bustos Water', logo: '/images/LogoClient/bustos.png' },
];

const CLIENT_ROW2 = [
  { name: 'Calumpit Water District', logo: '/images/LogoClient/CALUMPIT.png' },
  { name: 'Mariveles Water District', logo: '/images/LogoClient/mariveles.png' },
  { name: 'Pacifica', logo: '/images/LogoClient/pacifica.png' },
  { name: 'Pandi Water District', logo: '/images/LogoClient/pandi.png' },
  { name: 'Pililla Wind Farm', logo: '/images/LogoClient/pililla.png' },
  { name: 'Prime Water', logo: '/images/LogoClient/prime.png' },
  { name: 'San Fernando Water', logo: '/images/LogoClient/sanfernando.png' },
  { name: 'SCG Paper', logo: '/images/LogoClient/scgp.png' },
  { name: 'Tanay Water District', logo: '/images/LogoClient/tanay.png' },
];

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'drilling' | 'supply' | 'maintenance' | 'servicing'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (filter === 'all') return true;
    return Array.isArray(project.category)
      ? project.category.includes(filter)
      : project.category === filter;
  });

  return (
    <section className="py-24 px-4 md:px-8 bg-white" id="portfolio">
      <div className="max-w-7xl mx-auto space-y-16" id="portfolio-container">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4" id="portfolio-header">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0F172A] text-[#FACC15] font-black text-xs uppercase tracking-wide">
            <Briefcase className="w-3.5 h-3.5" /> Proven Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Project Portfolio
          </h2>
          <p className="text-slate-600 font-medium">
            Explore some of our largest and most successful completed contracts, showcasing our expertise, quality workmanship, and commitment to delivering exceptional results on every project.
          </p>
        </div>

        {/* Filter Navigation Menu */}
        <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto" id="portfolio-filters">
          {[
            { id: 'all', label: 'Projects', icon: '📁' },
            { id: 'drilling', label: 'Well Drilling', icon: '💦' },
            { id: 'supply', label: 'Pump Supply', icon: '⚡' },
            { id: 'maintenance', label: 'Water Services', icon: '🛠️' },
            { id: 'servicing', label: 'Servicing', icon: '🔧' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`py-2 px-5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 border ${
                filter === tab.id
                  ? 'bg-[#0F172A] border-[#0F172A] border-b-2 border-b-[#FACC15] text-white shadow-md font-black'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-100'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Responsive Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="portfolio-grid">
          {filteredProjects.map((project: Project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onOpen={() => setSelectedProject(project)} 
            />
          ))}
        </div>

        {/* AnimatePresence for the detailed Project Lightbox Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectLightbox 
              project={selectedProject} 
              onClose={() => setSelectedProject(null)} 
            />
          )}
        </AnimatePresence>

        {/* Trusted Clients Logo Slider Section */}
        <div className="pt-24 border-t border-slate-100 space-y-12" id="trusted-clients-section">
          <div className="text-center max-w-xl mx-auto space-y-3" id="clients-header">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-900 text-[#FACC15] font-black text-xs uppercase tracking-wide">
              <Building2 className="w-3.5 h-3.5 text-[#FACC15]" /> Trusted Partners
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Our Esteemed Clients & Partners
            </h3>
            <p className="text-sm text-slate-500 font-medium">
              Trusted by Government Agencies, Contractors,
Manufacturing Companies & Private Developers.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 pt-4" id="clients-grid">
            {[...CLIENT_ROW1, ...CLIENT_ROW2].map((client, idx) => (
              <div
                key={`client-${idx}`}
                className="flex items-center justify-center bg-white border border-slate-200/60 rounded-2xl p-3 sm:p-4 shadow-sm hover:border-[#FACC15] hover:shadow-lg hover:scale-110 hover:-translate-y-1 hover:z-20 transition-all duration-300 aspect-video shrink-0 overflow-hidden relative group cursor-pointer"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-11/12 h-11/12 object-contain relative z-10 filter grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-115 transition-all duration-300"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <Building2 className="w-10 h-10 text-slate-100 absolute group-hover:opacity-0 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
export default Portfolio;
