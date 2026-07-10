import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { InquiryForm } from './components/InquiryForm';
import { Certifications } from './components/Certifications';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { Check, X } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [inquiryService, setInquiryService] = useState<'drilling' | 'supply' | 'maintenance'>('drilling');
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' | 'error' } | null>(null);

  // Update intersection observer to highlight navbar links on scroll
  useEffect(() => {
    const handleScrollObserver = () => {
      const sections = ['hero', 'about', 'services', 'portfolio', 'inquiry', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section === 'contact' ? 'contact' : section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollObserver);
    return () => window.removeEventListener('scroll', handleScrollObserver);
  }, []);

  const triggerToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  // Anchor links smooth navigation
  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // When clicking inquiry inside the tabs
  const handleSelectServiceAndScroll = (serviceType: 'drilling' | 'supply' | 'maintenance') => {
    setInquiryService(serviceType);
    handleNavigation('inquiry');
    triggerToast(`Directing you to our specialized ${serviceType.toUpperCase()} department inquiry desk.`, 'info');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans" id="applet-viewport">
      {/* 1. Main Navigation Header */}
      <Header onNavigate={handleNavigation} activeSection={activeSection} />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* 2. Hero Presentation */}
        <Hero onScrollTo={handleNavigation} />

        {/* About Us Presentation */}
        <AboutUs />

        {/* 3. Core engineering Services */}
        <Services onSelectServiceAndScroll={handleSelectServiceAndScroll} />

        {/* 4. Portfolio Completed Gallery */}
        <Portfolio />

        {/* 5. Live Professional Project Inquiry Form */}
        <InquiryForm 
          initialService={inquiryService} 
        />

        {/* 6. Professional Certifications Section */}
        <Certifications />
      </main>

      {/* 7. Responsive Footer */}
      <Footer onNavigate={handleNavigation} />

      {/* 8. Floating Contact Action Widget */}
      <FloatingContact />

      {/* 9. Floating Custom Responsive Toast Alerts */}
      {toast && (
        <div 
          className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl shadow-2xl flex items-center gap-3 border animate-in slide-in-from-bottom-5 duration-300 bg-slate-900 border-slate-800 text-white"
          id="toast-notification"
        >
          <div className={`p-1.5 rounded-full ${
            toast.type === 'success' 
              ? 'bg-emerald-500 text-white' 
              : toast.type === 'error'
              ? 'bg-red-500 text-white'
              : 'bg-blue-500 text-white'
          }`}>
            <Check className="w-4 h-4" />
          </div>
          <div className="text-xs font-bold leading-normal pr-4">
            {toast.message}
          </div>
          <button 
            onClick={() => setToast(null)} 
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
export { App };
