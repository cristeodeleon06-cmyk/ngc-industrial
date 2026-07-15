import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Clock, 
  MapPin, 
  Building2, 
  TrendingUp, 
  Activity, 
  Wrench, 
  Compass, 
  Hammer, 
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Maximize2,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Play
} from 'lucide-react';

interface OngoingProject {
  id: string;
  title: string;
  client: string;
  location: string;
  category: 'drilling' | 'rehabilitation' | 'installation' | 'resistivity' | 'maintenance';
  categories?: ('drilling' | 'rehabilitation' | 'installation' | 'resistivity' | 'maintenance')[];
  status: string;
  progress: number; // percentage
  startDate: string;
  targetCompletion: string;
  description: string;
  specs: { label: string; value: string }[];
  currentPhase: string;
  image: string;
  gallery: string[];
  scopeOfWork: string[];
  milestones: { phase: string; status: 'completed' | 'active' | 'upcoming' }[];
  videoEmbedUrl?: string;
}

const ONGOING_PROJECTS_DATA: OngoingProject[] = [
  {
    id: 'op1',
    title: 'Deep Well Drilling & Structural Pump House Construction',
    client: 'San Fernando Water District',
    location: 'San Nicolas, San Fernando, Pampanga',
    category: 'drilling',
    categories: ['drilling', 'installation'],
    status: 'In Progress (Re-touching of Paint)',
    progress: 98,
    startDate: 'March 2026',
    targetCompletion: 'July 2026',
    description: 'This project involved the rotary drilling and construction of a deep water well designed to provide a reliable and sustainable water source for the community of San Nicolas, San Fernando, Pampanga. Executed with precision engineering and industry-standard drilling techniques, the project enhances access to clean groundwater while supporting the areas long-term water infrastructure needs.',
    currentPhase: 'Re-touching of paint',
    videoEmbedUrl: 'https://www.youtube.com/embed/N5gqsZYcHqU?si=Q9svEi39yxmZHTRl',
    image: '/images/drilling_1.jpg',
    gallery: [

    ],
    scopeOfWork: [
      'Mobilization of heavy-duty crawler-rotary drilling rig & support equipment',
      'Pilot hole drilling with bentonite-polymer mud circulation',
      'Geophysical logging and electric correlation to determine target aquifer strata',
      'Borehole reaming & enlargement',
      'Installation of casing pipes',
      'Well-development using high-pressure surging and continuous multi-stage pumping yield tests',
      'Construction of complete reinforced concrete pump housing with state-of-the-art VFD controls',
      'Cleaning of Site - Demobilization'
    ],
    milestones: [
      { phase: 'Mobilization & Rig Setup', status: 'completed' },
      { phase: 'Pilot Hole Completion', status: 'completed' },
      { phase: 'Borehole Reaming & Enlargement', status: 'completed' },
      { phase: 'Casing & Screen Installation', status: 'completed' },
      { phase: 'Well Development & Yield Testing', status: 'completed' },
      { phase: 'Construction of Pump House with VFD controls', status: 'completed' },
      { phase: 'Cleaning of Site - Demobilization', status: 'completed' },
      { phase: 'Re-touching of Paint', status: 'active' }
    ],
    specs: [
      { label: 'Equipment Deployed', value: 'Crawler - Rotary Drilling Rig' },
      { label: 'Contract Project', value: 'Design and Build' }
    ]
  },
  {
    id: 'op2',
    title: 'Construction of a Deep Water Well in Capijana Village',
    client: 'Capijana Village',
    location: 'San Rafael, Bulacan',
    category: 'drilling',
    categories: ['drilling', 'installation'],
    status: 'In Progress (Test Pumping)',
    progress: 80,
    startDate: 'June 2026',
    targetCompletion: 'August 2026',
    description: 'The project involved the construction of a deep water well in Capijana Village using percussion drilling techniques. Designed to provide a reliable and sustainable source of groundwater, the project supports the communitys long-term water supply needs while ensuring efficient, safe, and high-quality construction standards.',
    currentPhase: 'Test Pumping',
    image: '/images/Capijana Village.mp4',
    gallery: [
        '/images/Capijana Village.mp4',
    ],
    scopeOfWork: [
      'Mobilization of heavy-duty Percussion drilling rig & support equipment',
      'Pilot hole drilling', 
      'Installation of casing pipes',
      'Well-development using high-pressure surging and continuous multi-stage pumping yield tests',
      'Installation and Supply of Electro - Mechanical',
      'Cleaning of Site - Demobilization'
    ],
    milestones: [
      { phase: 'Mobilization & Rig Setup', status: 'completed' },
      { phase: 'Pilot Hole Completion', status: 'completed' },
      { phase: 'Casing & Screen Installation', status: 'completed' },
      { phase: 'Well Development & Yield Testing', status: 'active' },
      { phase: 'Installation and Supply of Electro-Mechanical', status: 'upcoming' },
      { phase: 'Cleaning of Site - Demobilization', status: 'upcoming' }
    ],
    specs: [
      { label: 'Equipment Deployed', value: 'Percussion Drilling Rig' },
      { label: 'Contract Project', value: 'Drilling and Supply of Materials' }
    ]
  },
  {
    id: 'op3',
    title: 'Construction of Deep Well Drilling for Calumpit Water District',
    client: 'Calumpit Water District',
    location: 'Calumpit, Bulacan',
    category: 'drilling',
    status: 'In Progress (Drilling of Pilot Hole)',
    progress: 25,
    startDate: 'June - Mid 2026',
    targetCompletion: 'September - Mid 2026',
    description: 'This project involved the construction of a deep water well for Calumpit Water District, utilizing advanced rotary drilling methods to develop a reliable and sustainable groundwater source. Executed in accordance with industry standards, the project enhances water supply capacity while ensuring long-term performance, efficiency, and dependable service for the communities served by the district.',
    currentPhase: 'Drilling of Pilot Hole',
    image: '/images/CalumpitWD.mp4',
    gallery: [
        '/images/CalumpitWD.mp4',
    ],
    scopeOfWork: [
      'Mobilization of heavy-duty crawler-rotary drilling rig & support equipment',
      'Pilot hole drilling with bentonite-polymer mud circulation',
      'Geophysical logging and electric correlation to determine target aquifer strata',
      'Borehole reaming & enlargement',
      'Installation of casing pipes',
      'Well-development using high-pressure surging and continuous multi-stage pumping yield tests',
      'Cleaning of Site - Demobilization'
    ],
    milestones: [
      { phase: 'Mobilization & Rig Setup', status: 'completed' },
      { phase: 'Pilot Hole Completion', status: 'active' },
      { phase: 'Borehole Reaming & Enlargement', status: 'upcoming' },
      { phase: 'Casing & Screen Installation', status: 'upcoming' },
      { phase: 'Well Development & Yield Testing', status: 'upcoming' },
      { phase: 'Cleaning of Site - Demobilization', status: 'upcoming' },
    ],
    specs: [
      { label: 'Equipment Deployed', value: 'Crawler - Rotary Drilling Rig' },
      { label: 'Contract Project', value: 'Drilling' }
    ]
  }
];

const getCategoryIcon = (cat: 'drilling' | 'rehabilitation' | 'installation' | 'resistivity' | 'maintenance') => {
  switch (cat) {
    case 'drilling': return <Compass className="w-4 h-4 shrink-0" />;
    case 'installation': return <Wrench className="w-4 h-4 shrink-0" />;
    case 'resistivity': return <Activity className="w-4 h-4 shrink-0" />;
    default: return <Hammer className="w-4 h-4 shrink-0" />;
  }
};

const getCategoryLabel = (cat: 'drilling' | 'rehabilitation' | 'installation' | 'resistivity' | 'maintenance') => {
  switch (cat) {
    case 'drilling': return 'Deep Well Drilling';
    case 'installation': return 'Electro-Mech';
    case 'resistivity': return 'Resistivity Survey';
    default: return 'Maintenance';
  }
};

const getCategoryBadgeStyles = (cat: 'drilling' | 'rehabilitation' | 'installation' | 'resistivity' | 'maintenance') => {
  switch (cat) {
    case 'drilling': return 'bg-blue-50 text-blue-700 border-blue-200';
    case 'installation': return 'bg-indigo-50 text-indigo-700 border-indigo-200';
    case 'resistivity': return 'bg-rose-50 text-rose-700 border-rose-200';
    default: return 'bg-amber-50 text-amber-700 border-amber-200';
  }
};

const getVideoId = (url?: string) => {
  if (!url) return '';
  const match = url.match(/\/embed\/([^/?]+)/);
  return match ? match[1] : '';
};

interface OngoingProjectsProps {
  onBackToHome: () => void;
  onConsult?: () => void;
}

export const OngoingProjects: React.FC<OngoingProjectsProps> = ({ onBackToHome, onConsult }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const openProjectModal = (id: string) => {
    setExpandedProjectId(id);
    setActiveImageIndex(0);
  };

  const closeProjectModal = () => {
    setExpandedProjectId(null);
  };

  const activeProject = ONGOING_PROJECTS_DATA.find(p => p.id === expandedProjectId);

  const nextImage = (project: OngoingProject) => {
    const totalCount = project.videoEmbedUrl ? project.gallery.length + 1 : project.gallery.length;
    setActiveImageIndex((prev) => (prev + 1) % totalCount);
  };

  const prevImage = (project: OngoingProject) => {
    const totalCount = project.videoEmbedUrl ? project.gallery.length + 1 : project.gallery.length;
    setActiveImageIndex((prev) => (prev - 1 + totalCount) % totalCount);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!expandedProjectId) return;
      const project = ONGOING_PROJECTS_DATA.find(p => p.id === expandedProjectId);
      if (!project) return;

      if (e.key === 'Escape') {
        closeProjectModal();
      } else if (e.key === 'ArrowRight') {
        nextImage(project);
      } else if (e.key === 'ArrowLeft') {
        prevImage(project);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expandedProjectId, activeImageIndex]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-slate-900 text-slate-100 pt-36 pb-24 relative overflow-hidden flex flex-col"
      id="ongoing-projects-view"
    >
      {/* Background Decorative Tech Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />
 
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10 mb-12">
        
        {/* Navigation / Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-8">
          <div className="space-y-2">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-[#FACC15] transition-colors uppercase tracking-wider group cursor-pointer"
              id="back-home-button"
            >
              <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
              Back to Homepage
            </button>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Active & Ongoing <span className="text-[#FACC15]">Contracts</span>
            </h1>
            <p className="text-slate-400 text-sm max-w-2xl font-medium leading-relaxed">
              We maintain transparent, real-time accountability on our current national operations. See below for our live projects undergoing drilling, development, and system integrations.
            </p>
          </div>
          <div className="flex items-center gap-4 self-start sm:self-center bg-slate-900 border border-slate-800 px-6 py-4 rounded-2xl shadow-xl">
            <Activity className="w-7 h-7 text-emerald-400 animate-pulse shrink-0" />
            <div>
              <span className="text-xs uppercase font-extrabold text-slate-400 block tracking-wider mb-0.5">System Status</span>
              <span className="text-sm sm:text-base text-white font-black tracking-tight">3 Major Contracts Active</span>
            </div>
          </div>
        </div>

      </div>

      {/* Projects List Grid Section with Full-width White Background */}
      <div className="w-full bg-white py-16 md:py-24 px-4 md:px-8 border-y border-slate-200/50 shadow-inner relative z-10" id="projects-list-container">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch transition-all duration-500" id="ongoing-projects-grid">
            {ONGOING_PROJECTS_DATA.map((project, index) => {
              const projectCategories = project.categories || [project.category];

              return (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  key={project.id}
                  onClick={() => openProjectModal(project.id)}
                  className="bg-white border border-slate-200 hover:border-slate-300 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:shadow-2xl shadow-md transition-all duration-300 relative overflow-hidden cursor-pointer group"
                  id={`ongoing-${project.id}`}
                >
                  {/* Visual Glow Indicator */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-yellow-500/10 transition-all duration-500" />

                  <div className="space-y-6">
                    
                    {/* Card Visual Banner */}
                    <div className="relative w-full h-48 md:h-60 overflow-hidden rounded-2xl bg-slate-950 shrink-0 flex items-center justify-center border border-slate-800">
                      {project.videoEmbedUrl ? (
                        <div className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden bg-black">
                          <iframe
                            className="w-full h-full scale-[1.3] border-0 pointer-events-none select-none"
                            src={`${project.videoEmbedUrl}${project.videoEmbedUrl.includes('?') ? '&' : '?'}autoplay=1&mute=1&controls=0&loop=1&playlist=${getVideoId(project.videoEmbedUrl)}&showinfo=0&rel=0`}
                            title={project.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            referrerPolicy="strict-origin-when-cross-origin"
                          ></iframe>
                        </div>
                      ) : project.image?.toLowerCase().endsWith('.mp4') ? (
                        <div className="absolute inset-0 w-full h-full z-10 overflow-hidden bg-black flex items-center justify-center">
                          <video
                            className="w-full h-full object-cover"
                            src={project.image}
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls={false}
                          />
                        </div>
                      ) : (
                        <>
                          <img 
                            src={project.image} 
                            alt=""
                            referrerPolicy="no-referrer"
                            className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40 scale-110 pointer-events-none" 
                          />
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            referrerPolicy="no-referrer"
                            className="relative max-w-full max-h-full object-contain z-10 group-hover:scale-102 transition-transform duration-500 ease-out" 
                          />
                        </>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 z-20 pointer-events-none" />
                      
                      {/* Category badge absolute on banner */}
                      <div className="absolute top-4 left-4 z-30 flex flex-wrap gap-2 max-w-[85%]">
                        {projectCategories.map((cat) => {
                          const icon = getCategoryIcon(cat);
                          const styles = getCategoryBadgeStyles(cat);
                          const label = getCategoryLabel(cat);
                          return (
                            <span key={cat} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider border shadow-lg ${styles}`}>
                              {icon}
                              {label}
                            </span>
                          );
                        })}
                      </div>

                      <div className="absolute bottom-4 right-4 bg-slate-900/95 text-white backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold border border-slate-700/50 flex items-center gap-1.5 shadow-lg z-30">
                        <Clock className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                        {project.startDate} — {project.targetCompletion}
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-black text-slate-900 group-hover:text-amber-500 transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-bold uppercase text-slate-500">
                        <span className="flex items-center gap-1">
                          <Building2 className="w-4 h-4 text-slate-400 shrink-0" /> {project.client}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-slate-400 shrink-0" /> {project.location}
                        </span>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed pt-2 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Progress Section */}
                    <div className="space-y-3 bg-slate-50/50 border border-slate-100 p-5 rounded-2xl relative overflow-hidden group/progress">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">Project Progress</span>
                        <span className="font-black text-amber-600 text-sm flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                          {project.progress}%
                        </span>
                      </div>
                      <div className="w-full h-3 bg-slate-200/70 rounded-full relative overflow-visible mt-1">
                        {/* Premium Ambient Glow Effect Layer */}
                        <div 
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full filter blur-[5px] opacity-70 transition-all duration-1000 ease-out"
                          style={{ width: `${project.progress}%` }}
                        />
                        
                        {/* Main Bar Wrapper */}
                        <div className="absolute inset-0 w-full h-full bg-slate-200/50 rounded-full overflow-hidden border border-slate-200/30">
                          <div 
                            className="h-full bg-gradient-to-r from-yellow-400 via-amber-400 to-amber-500 rounded-full transition-all duration-1000 ease-out relative"
                            style={{ width: `${project.progress}%` }}
                          >
                            {/* Inner pulsing diagonal stripe pattern */}
                            <div className="absolute inset-0 bg-white/20 bg-[linear-gradient(45deg,rgba(255,255,255,0.25)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.25)_75%,transparent_75%,transparent)] bg-[size:24px_24px] animate-[pulse_2s_infinite]" />
                          </div>
                        </div>

                        {/* Leading edge light node (glowing dynamic point) */}
                        <div 
                          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-amber-500 shadow-[0_0_12px_#f59e0b] flex items-center justify-center transition-all duration-1000 ease-out z-10"
                          style={{ left: `calc(${project.progress}% - 8px)` }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                        </div>
                      </div>
                    </div>

                    {/* Key Specs Grid */}
                    <div className="grid grid-cols-2 gap-3.5 pt-2">
                      {project.specs.slice(0, 2).map((spec, sIdx) => (
                        <div key={sIdx} className="bg-slate-50/60 border border-slate-100 p-3 rounded-xl">
                          <span className="text-[10px] font-bold text-slate-500 uppercase block tracking-wider leading-none mb-1">{spec.label}</span>
                          <span className="text-xs text-slate-900 font-black">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Card Footer Accent decoration */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-[10px] uppercase font-black tracking-wider text-slate-400">
                    <span className="flex items-center gap-1.5 text-slate-500 hover:text-amber-500 transition-colors">
                      View Project Details & Live Photos
                      <Maximize2 className="w-3.5 h-3.5 text-amber-500 group-hover:scale-110 transition-transform" />
                    </span>
                    <span className="text-emerald-600 flex items-center gap-1 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      Live Operations
                    </span>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fullscreen Premium Project Modal Window (Pop Up) */}
        {isMounted && createPortal(
          <AnimatePresence>
            {expandedProjectId && activeProject && (
              <motion.div
                key="project-modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={closeProjectModal}
                className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[99999] flex items-center justify-center p-4 md:p-6 overflow-hidden cursor-default"
                style={{ willChange: 'opacity' }}
              >
              <motion.div
                initial={{ scale: 0.96, y: 15, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.96, y: 15, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
                className="relative bg-white text-slate-800 rounded-3xl shadow-2xl w-full max-w-6xl h-[92vh] md:h-[85vh] max-h-[820px] flex flex-col md:flex-row overflow-hidden border border-slate-200"
                style={{ willChange: 'transform, opacity' }}
              >
                {/* Left Column: Visual Center / Carousel */}
                <div className="w-full md:w-[55%] bg-slate-950 h-[40%] md:h-full flex flex-col justify-between p-4 md:p-6 relative text-white select-none shrink-0 border-r border-slate-800">
                  
                  {/* Background layer blur of current image */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                    {(() => {
                      const currentMediaUrl = activeProject.videoEmbedUrl && activeImageIndex === 0
                        ? activeProject.image
                        : activeProject.videoEmbedUrl
                        ? activeProject.gallery[activeImageIndex - 1]
                        : activeProject.gallery[activeImageIndex];
                      
                      if (currentMediaUrl?.toLowerCase().endsWith('.mp4')) {
                        return (
                          <video
                            src={currentMediaUrl}
                            className="w-full h-full object-cover blur-2xl scale-110"
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        );
                      }
                      return (
                        <img
                          src={currentMediaUrl}
                          alt=""
                          className="w-full h-full object-cover blur-2xl scale-110"
                          style={{ willChange: 'transform' }}
                        />
                      );
                    })()}
                  </div>

                  {/* Main Carousel Display Box */}
                  <div className="flex-1 flex items-center justify-center relative overflow-hidden rounded-2xl bg-slate-950/40 border border-slate-800/40 z-10 w-full h-full animate-fade-in">
                    {(() => {
                      const currentMediaUrl = activeProject.videoEmbedUrl && activeImageIndex === 0
                        ? activeProject.image
                        : activeProject.videoEmbedUrl
                        ? activeProject.gallery[activeImageIndex - 1]
                        : activeProject.gallery[activeImageIndex];

                      if (activeProject.videoEmbedUrl && activeImageIndex === 0) {
                        return (
                          <div className="w-full h-full p-2 flex items-center justify-center bg-black/40 z-10">
                            <iframe
                              className="w-full h-full rounded-xl aspect-video border-0 shadow-2xl"
                              src={`${activeProject.videoEmbedUrl}${activeProject.videoEmbedUrl.includes('?') ? '&' : '?'}autoplay=1&mute=1`}
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                            ></iframe>
                          </div>
                        );
                      }

                      if (currentMediaUrl?.toLowerCase().endsWith('.mp4')) {
                        return (
                          <div className="w-full h-full p-2 flex items-center justify-center bg-black/40 z-10">
                            <video
                              src={currentMediaUrl}
                              className="w-full h-full rounded-xl object-contain shadow-2xl"
                              autoPlay
                              muted
                              loop
                              playsInline
                              controls
                            />
                          </div>
                        );
                      }

                      return (
                        <img
                          src={currentMediaUrl}
                          alt={activeProject.title}
                          referrerPolicy="no-referrer"
                          className="relative max-w-full max-h-full object-contain z-10 rounded-lg p-2"
                        />
                      );
                    })()}

                    {/* Left Carousel Arrow */}
                    <button
                      onClick={() => prevImage(activeProject)}
                      className="absolute left-4 z-20 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800/95 text-white backdrop-blur-md border border-slate-700/50 transition-all hover:scale-105 shadow-lg flex items-center justify-center cursor-pointer"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5 text-amber-400" />
                    </button>

                    {/* Right Carousel Arrow */}
                    <button
                      onClick={() => nextImage(activeProject)}
                      className="absolute right-4 z-20 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800/95 text-white backdrop-blur-md border border-slate-700/50 transition-all hover:scale-105 shadow-lg flex items-center justify-center cursor-pointer"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5 text-amber-400" />
                    </button>

                    {/* Slide Counter Indicator */}
                    <div className="absolute top-4 right-4 bg-slate-900/90 text-amber-400 text-[10px] font-black px-2.5 py-1 rounded-full border border-slate-700/50 backdrop-blur-md z-20">
                      {activeImageIndex + 1} / {activeProject.videoEmbedUrl ? activeProject.gallery.length + 1 : activeProject.gallery.length}
                    </div>
                  </div>

                  {/* Thumbnails Row */}
                  <div className="flex items-center justify-center gap-2 mt-4 overflow-x-auto py-1 px-1 z-10 shrink-0 scrollbar-none w-full">
                    {/* Video Thumbnail (if exists) */}
                    {activeProject.videoEmbedUrl && (
                      <button
                        onClick={() => setActiveImageIndex(0)}
                        className={`h-12 w-16 md:h-14 md:w-20 rounded-lg overflow-hidden border-2 bg-slate-900/90 transition-all shrink-0 flex items-center justify-center cursor-pointer relative ${
                          activeImageIndex === 0 ? 'border-amber-400 ring-2 ring-amber-400/20 scale-105 shadow-md' : 'border-slate-800 hover:border-slate-600'
                        }`}
                      >
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/80 z-10">
                          <Play className="w-5 h-5 text-amber-400 fill-amber-400/20" />
                        </div>
                        {activeProject.image && (
                          <img src={activeProject.image} alt="Video thumbnail background" className="w-full h-full object-cover opacity-45" />
                        )}
                        <span className="absolute bottom-0.5 right-0.5 text-[8px] bg-slate-950/80 text-white px-1 rounded font-bold z-20">VIDEO</span>
                      </button>
                    )}

                    {activeProject.gallery.map((imgUrl, idx) => {
                      const buttonIdx = activeProject.videoEmbedUrl ? idx + 1 : idx;
                      const isVideo = imgUrl?.toLowerCase().endsWith('.mp4');
                      return (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIndex(buttonIdx)}
                          className={`h-12 w-16 md:h-14 md:w-20 rounded-lg overflow-hidden border-2 bg-slate-900 transition-all shrink-0 flex items-center justify-center cursor-pointer relative ${
                            activeImageIndex === buttonIdx ? 'border-amber-400 ring-2 ring-amber-400/20 scale-105 shadow-md' : 'border-slate-800 hover:border-slate-600'
                          }`}
                        >
                          {isVideo ? (
                            <>
                              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 z-10">
                                <Play className="w-5 h-5 text-amber-400 fill-amber-400/20" />
                              </div>
                              <video src={imgUrl} className="w-full h-full object-cover opacity-60" muted />
                              <span className="absolute bottom-0.5 right-0.5 text-[8px] bg-slate-950/80 text-white px-1 rounded font-bold z-20">VIDEO</span>
                            </>
                          ) : (
                            <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                </div>

                {/* Right Column: Specifications & Deliverables */}
                <div className="w-full md:w-[45%] bg-slate-50 h-[60%] md:h-full flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Floating Close Button in Content Panel */}
                  <button
                    onClick={closeProjectModal}
                    className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 shadow-md transition-all hover:scale-110 flex items-center justify-center cursor-pointer z-30"
                    title="Close (ESC)"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Scrollable Content Container */}
                  <div className="p-6 md:p-8 flex-1 overflow-y-auto space-y-6 scrollbar-thin pr-6">
                    
                    {/* Category & Status badges */}
                    <div className="flex flex-wrap items-center gap-2 pr-12">
                      {activeProject && (activeProject.categories || [activeProject.category]).map((cat) => {
                        const icon = getCategoryIcon(cat);
                        const label = getCategoryLabel(cat);
                        const styles = getCategoryBadgeStyles(cat);
                        return (
                          <span key={cat} className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 border shadow-sm ${styles}`}>
                            {icon}
                            {label}
                          </span>
                        );
                      })}
                      <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Live Operation
                      </span>
                    </div>

                    {/* Project Title */}
                    <div className="space-y-1">
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight tracking-tight">
                        {activeProject.title}
                      </h3>
                    </div>

                    {/* Core Metadata Info Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm text-left">
                      <div className="space-y-1">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">LOCATION</span>
                        <span className="text-xs font-bold text-slate-800 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          {activeProject.location}
                        </span>
                      </div>
                      <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-slate-100 pt-2 sm:pt-0 sm:pl-3">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">CLIENT</span>
                        <span className="text-xs font-bold text-slate-800 flex items-center gap-1">
                          <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          {activeProject.client}
                        </span>
                      </div>
                      <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-slate-100 pt-2 sm:pt-0 sm:pl-3">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">TIMELINE</span>
                        <span className="text-xs font-bold text-slate-800 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          {activeProject.startDate} — {activeProject.targetCompletion}
                        </span>
                      </div>
                    </div>

                    {/* Project Progress bar inside modal */}
                    <div className="space-y-2.5 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-500 uppercase tracking-wider text-[9px]">Contract Completion</span>
                        <span className="font-black text-amber-600 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                          {activeProject.progress}%
                        </span>
                      </div>
                      <div className="w-full h-3 bg-slate-200/70 rounded-full relative overflow-visible mt-1">
                        {/* Premium Ambient Glow Effect Layer */}
                        <div 
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full filter blur-[5px] opacity-70 transition-all duration-1000 ease-out"
                          style={{ width: `${activeProject.progress}%` }}
                        />
                        
                        {/* Main Bar Wrapper */}
                        <div className="absolute inset-0 w-full h-full bg-slate-200/50 rounded-full overflow-hidden border border-slate-200/30">
                          <div 
                            className="h-full bg-gradient-to-r from-yellow-400 via-amber-400 to-amber-500 rounded-full transition-all duration-1000 ease-out relative"
                            style={{ width: `${activeProject.progress}%` }}
                          >
                            {/* Inner pulsing diagonal stripe pattern */}
                            <div className="absolute inset-0 bg-white/20 bg-[linear-gradient(45deg,rgba(255,255,255,0.25)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.25)_75%,transparent_75%,transparent)] bg-[size:24px_24px] animate-[pulse_2s_infinite]" />
                          </div>
                        </div>

                        {/* Leading edge light node (glowing dynamic point) */}
                        <div 
                          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-amber-500 shadow-[0_0_12px_#f59e0b] flex items-center justify-center transition-all duration-1000 ease-out z-10"
                          style={{ left: `calc(${activeProject.progress}% - 8px)` }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                        </div>
                      </div>
                    </div>

                    {/* Project Description */}
                    <div className="space-y-1.5 text-left">
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">PROJECT OVERVIEW</h4>
                      <p className="text-xs md:text-sm text-slate-600 font-semibold leading-relaxed">
                        {activeProject.description}
                      </p>
                    </div>

                    {/* Scope of deliverables */}
                    <div className="space-y-2 pt-1 text-left">
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5 border-b border-slate-100 pb-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        Engineering Deliverables
                      </h4>
                      <ul className="space-y-2.5">
                        {activeProject.scopeOfWork.map((scope, sIndex) => (
                          <li key={sIndex} className="flex items-start gap-2.5 text-xs text-slate-600 font-semibold leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{scope}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Chronological Milestones */}
                    <div className="space-y-3 pt-2 text-left pb-4">
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5 border-b border-slate-100 pb-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        Stage-by-Stage Milestones
                      </h4>
                      <div className="relative pl-4 space-y-4 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                        {activeProject.milestones.map((milestone, mIdx) => {
                          const isComp = milestone.status === 'completed';
                          const isActive = milestone.status === 'active';

                          return (
                            <div key={mIdx} className="relative flex items-start gap-3">
                              <div className={`absolute -left-[13px] w-4 h-4 rounded-full border-2 bg-white z-10 flex items-center justify-center ${
                                isComp ? 'border-emerald-500' : isActive ? 'border-amber-500 animate-pulse' : 'border-slate-300'
                              }`}>
                                <div className={`w-1.5 h-1.5 rounded-full ${
                                  isComp ? 'bg-emerald-500' : isActive ? 'bg-amber-500' : 'bg-transparent'
                                }`} />
                              </div>
                              
                              <div className="pl-4">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className={`text-xs font-black ${
                                    isComp ? 'text-emerald-700' : isActive ? 'text-amber-600' : 'text-slate-400'
                                  }`}>
                                    {milestone.phase}
                                  </span>
                                </div>
                                {isActive && (
                                  <span className="text-[9px] font-black text-emerald-600 flex items-center gap-1 mt-0.5 uppercase tracking-wide">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                                    Active Field Operations
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                  </div>

                  {/* Footer Controls */}
                  <div className="bg-slate-100 border-t border-slate-200/60 px-6 py-4 flex items-center justify-between text-[10px] uppercase font-bold text-slate-500 shrink-0">
                    <span>NGC INDUSTRIAL PUMP</span>
                    <div className="flex items-center gap-4">
                      <span className="hidden sm:inline-block">PRESS ESC TO CLOSE</span>
                      <button
                        onClick={closeProjectModal}
                        className="hover:text-amber-600 flex items-center gap-1 font-black cursor-pointer"
                      >
                        <span>CLOSE WINDOW</span>
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Bottom CTA to get estimate or schedule */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10 pt-16 pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 bg-slate-950 border border-slate-800 rounded-3xl text-center space-y-4 max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
          id="ongoing-cta-block"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl" />
          <span className="text-xs font-black text-[#FACC15] uppercase tracking-widest block mb-2">PROJECT INQUIRY</span>
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            Have an Upcoming Project Ready to Launch?
          </h2>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto font-medium">
            Join our esteemed list of municipal, agricultural, and industrial partners. Send us your parameters and let our accredited engineers configure the ideal solution.
          </p>
          <div className="pt-4 flex flex-col items-center gap-4">
            <button
              onClick={onConsult || onBackToHome}
              className="px-6 py-3.5 bg-[#FACC15] hover:bg-yellow-500 text-slate-950 text-xs font-black uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 shadow-lg cursor-pointer"
            >
              Consult with our Team
              <TrendingUp className="w-4 h-4" />
            </button>
            <div className="text-xs sm:text-sm font-extrabold text-slate-200 pt-2">
              Email request briefs to: <span className="text-[#FACC15] font-black">chris_ngcindustrial@yahoo.com</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Fullscreen Premium Lightbox Modal overlay */}
      {isMounted && createPortal(
        <AnimatePresence>
          {lightboxImage && (
            <motion.div 
              key="lightbox-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="fixed inset-0 bg-slate-950/90 backdrop-blur-xl z-[99999] flex items-center justify-center p-4 cursor-zoom-out"
            >
            <button 
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative max-w-5xl max-h-[80vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={lightboxImage} 
                alt="Enlarged Project Preview" 
                className="w-full h-full max-h-[80vh] object-contain" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    )}

    </motion.div>
  );
};
export default OngoingProjects;
