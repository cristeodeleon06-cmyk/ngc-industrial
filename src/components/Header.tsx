import React, { useState, useEffect } from 'react';
import { NGCLogo } from './NGCLogo';
import { Phone, Mail, Clock, Menu, X, ArrowRight, ShieldCheck, ChevronDown, Grid, Globe, Building2 } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'inquiry', label: 'Project Inquiry' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full flex flex-col z-50 fixed top-0 left-0" id="main-header">
      {/* 1. Top Mini-Banner Bar */}
      <div className="bg-slate-900 text-white py-2 px-4 md:px-8 text-xs border-b border-slate-800 transition-all duration-300 flex flex-wrap gap-4 justify-between items-center" id="top-info-bar">
        <div className="flex flex-wrap gap-4 items-center">
          <span className="flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-[#FACC15]" />
            Mon - Sat: 8:00 AM - 5:00 PM
          </span>
          <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
            <Mail className="w-3.5 h-3.5 text-[#FACC15]" />
            chris_ngcindustrial@yahoo.com/ngc.headoffice2003@gmail.com
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <Phone className="w-3.5 h-3.5 text-[#FACC15]" />
             +63917 623 2574/0968 855 8232
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#FACC15]/10 border border-[#FACC15]/20 text-yellow-400 rounded font-semibold text-[10px] uppercase tracking-wider animate-pulse">
            <ShieldCheck className="w-3 h-3 text-[#FACC15]" />
            Licensed & Accredited
          </span>
        </div>
      </div>

      {/* 2. Main Sticky Glassmorphism Header */}
      <div 
        className={`w-full py-4 px-4 md:px-8 transition-all duration-300 flex items-center justify-between ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100' 
            : 'bg-slate-900/90 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none border-b border-white/5'
        }`}
        id="navbar-container"
      >
        <div className="cursor-pointer" onClick={() => handleNavClick('hero')} id="logo-trigger">
          <NGCLogo textColor={isScrolled ? 'text-slate-800' : 'text-white'} size={62} />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
          {navItems.map((item) => {
            const isPortfolio = item.id === 'portfolio';
            if (isPortfolio) {
              return (
                <div key={item.id} className="relative group py-4">
                  <button
                    onClick={() => handleNavClick('portfolio')}
                    className={`text-sm font-semibold tracking-wide transition-colors relative py-1 hover:text-[#FACC15] flex items-center gap-1 cursor-pointer ${
                      activeSection === item.id || activeSection === 'ongoing-projects' || activeSection === 'trusted-clients-section'
                        ? isScrolled ? 'text-[#0F172A] font-extrabold' : 'text-[#FACC15] font-extrabold'
                        : isScrolled ? 'text-slate-600' : 'text-slate-300'
                    }`}
                    id={`nav-${item.id}`}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                    {(activeSection === item.id || activeSection === 'ongoing-projects' || activeSection === 'trusted-clients-section') && (
                      <span className="absolute bottom-3 left-0 w-full h-0.5 bg-[#FACC15] rounded-full" />
                    )}
                  </button>
                  
                  {/* Submenu Dropdown Card */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 hidden group-hover:block w-72 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="bg-slate-950/95 border border-slate-800 text-white rounded-2xl shadow-2xl p-2.5 flex flex-col gap-1 backdrop-blur-md">
                      <button
                        onClick={() => handleNavClick('portfolio')}
                        className="w-full text-left py-2 px-3 rounded-xl hover:bg-slate-900 transition-colors flex items-start gap-2.5 group/item cursor-pointer"
                      >
                        <div className="p-1.5 rounded-lg bg-slate-900 text-[#FACC15] group-hover/item:bg-[#FACC15] group-hover/item:text-slate-950 transition-colors shrink-0">
                          <Grid className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-black text-white group-hover/item:text-[#FACC15] transition-colors leading-none mb-1">
                            Major Completed Projects
                          </div>
                          <div className="text-[10px] text-slate-400 font-medium">
                            Browse our multi-site engineering portfolio
                          </div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleNavClick('ongoing-projects')}
                        className="w-full text-left py-2 px-3 rounded-xl hover:bg-slate-900 transition-colors flex items-start gap-2.5 group/item cursor-pointer"
                      >
                        <div className="p-1.5 rounded-lg bg-slate-900 text-[#FACC15] group-hover/item:bg-[#FACC15] group-hover/item:text-slate-950 transition-colors shrink-0">
                          <Clock className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-black text-white group-hover/item:text-[#FACC15] transition-colors leading-none mb-1">
                            On Going Projects
                          </div>
                          <div className="text-[10px] text-slate-400 font-medium">
                            Live active client installations & contracts
                          </div>
                        </div>
                      </button>
                      <button
                        onClick={() => handleNavClick('trusted-clients-section')}
                        className="w-full text-left py-2 px-3 rounded-xl hover:bg-slate-900 transition-colors flex items-start gap-2.5 group/item cursor-pointer"
                      >
                        <div className="p-1.5 rounded-lg bg-slate-900 text-[#FACC15] group-hover/item:bg-[#FACC15] group-hover/item:text-slate-950 transition-colors shrink-0">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-black text-white group-hover/item:text-[#FACC15] transition-colors leading-none mb-1">
                            Trusted Clients
                          </div>
                          <div className="text-[10px] text-slate-400 font-medium">
                            See our corporate and water district partners
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-semibold tracking-wide transition-colors relative py-1 hover:text-[#FACC15] cursor-pointer ${
                  activeSection === item.id
                    ? isScrolled ? 'text-[#0F172A] font-extrabold' : 'text-[#FACC15] font-extrabold'
                    : isScrolled ? 'text-slate-600' : 'text-slate-300'
                }`}
                id={`nav-${item.id}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FACC15] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Header Right Side CTA */}
        <div className="hidden sm:flex items-center gap-4" id="header-cta">
          <button
            onClick={() => handleNavClick('inquiry')}
            className={`px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
              isScrolled 
                ? 'bg-[#0F172A] hover:bg-slate-800 text-white shadow-md hover:shadow-lg' 
                : 'bg-[#FACC15] hover:bg-yellow-500 text-[#0F172A] shadow'
            }`}
            id="header-quote-btn"
          >
            Send Inquiry
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-slate-800'
          }`}
          aria-label="Toggle Menu"
          id="mobile-menu-toggle"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* 3. Mobile Navigation Menu Overlay (Slide Down) */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden w-full bg-slate-950 text-white border-b border-slate-800 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-4"
          id="mobile-nav-panel"
        >
          <div className="flex flex-col p-6 gap-4" id="mobile-nav-list">
            {navItems.map((item) => {
              const isPortfolio = item.id === 'portfolio';
              return (
                <div key={item.id} className="flex flex-col gap-1">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left py-2 px-3 rounded-md text-base font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                      activeSection === item.id || (isPortfolio && ['ongoing-projects', 'trusted-clients-section'].includes(activeSection))
                        ? 'bg-[#FACC15]/10 text-yellow-400 border-l-4 border-[#FACC15] pl-2'
                        : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                    }`}
                    id={`mobile-nav-${item.id}`}
                  >
                    {item.label}
                    <ArrowRight className="w-4 h-4 opacity-40" />
                  </button>
                  {isPortfolio && (
                    <div className="pl-6 pr-2 py-1 flex flex-col gap-2 mt-1 border-l-2 border-slate-800 ml-3">
                      <button
                        onClick={() => handleNavClick('portfolio')}
                        className="text-left py-1 text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-2 cursor-pointer"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                        Major Completed Projects
                      </button>
                      <button
                        onClick={() => handleNavClick('ongoing-projects')}
                        className="text-left py-1 text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-2 cursor-pointer"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600 animate-pulse bg-yellow-400" />
                        On Going Projects
                      </button>
                      
                      <button
                        onClick={() => handleNavClick('trusted-clients-section')}
                        className="text-left py-1 text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-2 cursor-pointer"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                        Trusted Clients
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
            <div className="h-px bg-slate-800 my-2" />
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleNavClick('inquiry')}
                className="w-full bg-[#FACC15] hover:bg-yellow-500 text-[#0F172A] py-3 rounded-lg text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2"
                id="mobile-quote-cta"
              >
                Send Inquiry Now
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center text-xs text-slate-400 mt-2 flex flex-col gap-1">
                <span>Emergency Support 24/7:</span>
                <span className="font-bold text-[#FACC15] text-sm">+63915 421 4421</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
