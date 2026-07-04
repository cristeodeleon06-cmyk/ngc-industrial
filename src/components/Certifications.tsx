import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, Shield, FileText, CheckCircle, Scale, Building, 
  Layers, HardHat, ClipboardCheck, ArrowRight, Sparkles 
} from 'lucide-react';

interface CertificateItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  badges: string[];
  description: string;
  scope?: string;
  details: { label: string; desc: string }[];
  icon: React.ReactNode;
  image: string;
  stat: string;
  classifications?: string[];
  kindsOfProject?: { name: string; range: string }[];
}

export const Certifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'iso' | 'pcab' | 'nwrb'>('all');

  const certificatesData: CertificateItem[] = [
    {
      id: 'iso-9001',
      category: 'iso',
      title: 'ISO 9001:2015 (QMS)',
      subtitle: 'Quality Management System',
      badges: ['QMS Certified', 'Certificate No: 25110701', 'A-MARK Ratings'],
      description: "This certificate has been awarded to NGC INDUSTRIAL PUMP TRADING & SERVICES (#187 Purok 6, Brgy. Dampol, Plaridel, Bulacan, Philippines - 3004) in recognition of the Organization's Quality Management Systems which complies with the rigorous standards of ISO 9001:2015.",
      scope: "TRADING OF MOTOR PUMPS AND WATER WELL DRILLING SERVICES; TRADING OF SOLAR ENERGY PRODUCTS AND SOLAR INSTALLATION SERVICES, AND THE PROVISION OF GENERAL CONSTRUCTION SERVICES INCLUDING SITE DEVELOPMENT, CIVIL WORKS, STRUCTURAL ERECTION, ARCHITECTURAL FINISHING, AND MEP INSTALLATIONS FOR RESIDENTIAL, COMMERCIAL, AND INDUSTRIAL PROJECTS. THE SCOPE INCLUDES EXECUTION OF PROJECTS ACROSS ROADWAYS, HIGHWAYS, PAVEMENTS, RAILWAYS, AIRPORT HORIZONTAL WORKS; STRUCTURES AND BRIDGES; IRRIGATION AND FLOOD CONTROL SYSTEMS; WATER SUPPLY INFRASTRUCTURE; BUILDINGS AND INDUSTRIAL PLANTS; AND PARKS, PLAYGROUNDS, AND RECREATIONAL FACILITIES.",
      details: [
        { label: 'Accreditation Body', desc: 'A-Mark Ratings Limited / United Accreditation Foundation (UAF) / IAF MLA Signatory' },
        { label: 'Key Registration Milestones', desc: 'Initial Registration: 07 Nov 2025 | Current Certificate Date: 07 Nov 2025' },
        { label: 'Audit & Expiry Cycle', desc: 'Surveillance audit due on/before 06 Nov 2026. Recertification is set for 06 Nov 2028.' }
      ],
      icon: <Award className="w-5 h-5 text-yellow-400" />,
      image: '/images/iso_9001_qms_cert_1782710044655.jpg',
      stat: 'QMS ISO 9001'
    },
    {
      id: 'iso-14001',
      category: 'iso',
      title: 'ISO 14001:2015 (EMS)',
      subtitle: 'Environmental Management System',
      badges: ['EMS Certified', 'Certificate No: 10083-EMS-1083', 'Bluestar Management Systems'],
      description: "This is to certify that the Environmental Management System of NGC INDUSTRIAL PUMP TRADING AND SERVICES has been assessed and conforms to the requirements of the international standard ISO 14001:2015.",
      scope: "Trading of Motor Pumps and Water Well Drilling Services.",
      details: [
        { label: 'Accreditation Body', desc: 'Bluestar Management Systems / United Accreditation Foundation (UAF) / IAF' },
        { label: 'Key Registration Milestones', desc: 'Original Issue Date: 18-Apr-2022 | Current Issue Date: 26-Feb-2025' },
        { label: 'Audit & Expiry Cycle', desc: 'Expiration Date: 17-Apr-2028. Surveillance audits: 1st before 17-Apr-2026, 2nd before 16-Apr-2027.' }
      ],
      icon: <Award className="w-5 h-5 text-blue-400" />,
      image: '/images/iso_14001_ems_cert_1782710059897.jpg',
      stat: 'EMS ISO 14001'
    },
    {
      id: 'iso-45001',
      category: 'iso',
      title: 'ISO 45001:2018 (OHSM)',
      subtitle: 'Occupational Health and Safety Management System',
      badges: ['OHSM Certified', 'Certificate No: 10079-OHSMS-1079', 'Bluestar Management Systems'],
      description: "This is to certify that the Occupational Health and Safety Management System of NGC INDUSTRIAL PUMP TRADING AND SERVICES conforms to the global safety parameters of ISO 45001:2018.",
      scope: "Trading of Motor Pumps and Water Well Drilling Services.",
      details: [
        { label: 'Accreditation Body', desc: 'Bluestar Management Systems / United Accreditation Foundation (UAF) / IAF' },
        { label: 'Key Registration Milestones', desc: 'Original Issue Date: 18-Apr-2022 | Current Issue Date: 26-Feb-2025' },
        { label: 'Audit & Expiry Cycle', desc: 'Expiration Date: 17-Apr-2028. Surveillance audits: 1st before 17-Apr-2026, 2nd before 16-Apr-2027.' }
      ],
      icon: <Award className="w-5 h-5 text-emerald-400" />,
      image: '/images/iso_45001_ohsms_cert_1782710082348.jpg',
      stat: 'OHSM ISO 45001'
    },
    {
      id: 'pcab',
      category: 'pcab',
      title: "PCAB Regular Contractor's License",
      subtitle: 'Philippine Contractors Accreditation Board',
      badges: ['General Category A', 'License No: 47113', 'DTI & CIAP Registered'],
      description: "NGC INDUSTRIAL PUMP TRADING & SERVICES is fully accredited under the Philippine Contractors Accreditation Board (PCAB), conforming to strict national standards for contracting engineering projects.",
      details: [
        { label: 'Principal Classification', desc: 'General Category A' },
        { label: 'Other Classification', desc: 'General Engineering | Specialty - Mechanical Work | Specialty - Air Conditioning or Refrigeration | Specialty - Well Drilling Work' },
        { label: 'Authorized Managing Officer', desc: 'Crisanto De Afria De Leon' },
        { label: 'Validity Period', desc: 'January 05, 2026 to October 24, 2026 (Registration No. 0274-2026 valid until Jan 29, 2029)' }
      ],
      classifications: [
        'General Engineering',
        'Specialty - Mechanical Work',
        'Specialty - Air Conditioning or Refrigeration',
        'Specialty - Well Drilling Work'
      ],
      kindsOfProject: [
        { name: 'Road, Highway, Pavements, Railways, Airport Horizontal', range: 'Small B' },
        { name: 'Structures and Bridges', range: 'Small B' },
        { name: 'Irrigation and Flood Control', range: 'Small B' },
        { name: 'Dam, Reservoir and Tunneling', range: 'Small B' },
        { name: 'Water Supply', range: 'Small B' },
        { name: 'Port, Harbor and Offshore Engineering', range: 'Small B' },
        { name: 'Building and Industrial Plant', range: 'Small B' },
        { name: 'Sewerage and Sewage Treatment/Disposal Plant', range: 'Small B' },
        { name: 'Water Treatment Plant and System', range: 'Small B' },
        { name: 'Park, Playground and Recreational Work', range: 'Small B' },
        { name: 'Well-Drilling Work', range: 'Small B' }
      ],
      icon: <Shield className="w-5 h-5 text-sky-400" />,
      image: '/images/pcab_license_official_1782710345102.jpg',
      stat: 'PCAB Category A'
    },
    {
      id: 'nwrb',
      category: 'nwrb',
      title: 'NWRB Certificate of Well Driller Registration',
      subtitle: 'National Water Resources Board (Pambansang Lupon Sa Mga Yamang Tubig)',
      badges: ['Registration No. 591', 'Valid until July 19, 2028', 'Groundwater Extraction Approved'],
      description: "Be it known that NGC INDUSTRIAL PUMP TRADING & SERVICES (187 Purok 6, Dampol, Plaridel, Bulacan) has satisfactorily complied with the standard qualifications / requirements provided by existing laws and rules, and is therefore qualified to undertake drilling works / activities for the purpose of extracting groundwater throughout the country.",
      scope: "Qualified to undertake drilling works / activities for the purpose of extracting groundwater throughout the country, issued under the authority of the National Water Resources Board, Republic of the Philippines.",
      details: [
        { label: 'Registration / Certificate No.', desc: 'No. 591' },
        { label: 'Authority of the Board', desc: 'ATTY. RICKY A. ARZADON, CESO IV (OIC, Executive Director)' },
        { label: 'Key Registration Milestones', desc: 'Given on 17th day of July, 2025 at Quezon City, Philippines' },
        { label: 'Validity Period', desc: 'Valid until July 19, 2028' }
      ],
      icon: <Scale className="w-5 h-5 text-teal-400" />,
      image: '/images/nwrb_registration_official_1782710640988.jpg',
      stat: 'NWRB No. 591'
    }
  ];

  const filteredData = activeTab === 'all' 
    ? certificatesData 
    : certificatesData.filter(item => item.category === activeTab);

  return (
    <section className="py-24 px-4 md:px-8 bg-slate-900 text-white relative overflow-hidden" id="certifications">
      {/* Decorative light elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10" id="certifications-container">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4" id="certifications-title-block">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0F172A] text-[#FACC15] border border-[#FACC15]/20 font-bold text-xs uppercase tracking-wide">
            <Award className="w-3.5 h-3.5 text-[#FACC15]" /> Official Accreditations
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Accredited Engineering Credentials
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            NGC Industrial operates with full compliance, certified by leading national boards and international agencies. We stand by our high safety parameters and premium quality.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto" id="cert-tab-controls">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
              activeTab === 'all'
                ? 'bg-[#FACC15] text-[#0F172A] border-[#FACC15] shadow-lg shadow-[#FACC15]/15'
                : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
            }`}
          >
            All Credentials
          </button>
          <button
            onClick={() => setActiveTab('iso')}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 border flex items-center gap-2 ${
              activeTab === 'iso'
                ? 'bg-[#FACC15] text-[#0F172A] border-[#FACC15] shadow-lg shadow-[#FACC15]/15'
                : 'bg-slate-950 text-slate-400 border-slate-850 hover:border-slate-700'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>ISO Certificates</span>
          </button>
          <button
            onClick={() => setActiveTab('pcab')}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 border flex items-center gap-2 ${
              activeTab === 'pcab'
                ? 'bg-[#FACC15] text-[#0F172A] border-[#FACC15] shadow-lg shadow-[#FACC15]/15'
                : 'bg-slate-950 text-slate-400 border-slate-850 hover:border-slate-700'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>PCAB License</span>
          </button>
          <button
            onClick={() => setActiveTab('nwrb')}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 border flex items-center gap-2 ${
              activeTab === 'nwrb'
                ? 'bg-[#FACC15] text-[#0F172A] border-[#FACC15] shadow-lg shadow-[#FACC15]/15'
                : 'bg-slate-950 text-slate-400 border-slate-850 hover:border-slate-700'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>NWRB Registration</span>
          </button>
        </div>

        {/* Responsive Certifications Grid */}
        <div className="space-y-12" id="certifications-grid-list">
          <AnimatePresence mode="popLayout">
            {filteredData.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="bg-slate-950/80 border border-slate-800/80 p-6 md:p-8 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                id={`cert-card-${cert.id}`}
              >
                {/* Text Details Panel (7 Columns) */}
                <div className="lg:col-span-7 space-y-6 order-2 lg:order-1" id={`cert-text-${cert.id}`}>
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {cert.badges.map((badge, idx) => (
                        <span 
                          key={idx} 
                          className="px-2.5 py-0.5 rounded text-[10px] uppercase font-black tracking-wide bg-slate-900 border border-slate-800 text-slate-300"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
                      {cert.icon} {cert.title}
                    </h3>
                    <p className="text-slate-400 text-xs md:text-sm font-semibold italic text-yellow-400/90">
                      {cert.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-medium">
                    {cert.description}
                  </p>

                  {/* Render Scope of activities if it exists */}
                  {cert.scope && (
                    <div className="p-4 bg-slate-900/50 border border-slate-800/80 rounded-2xl space-y-1.5">
                      <span className="block text-[10px] font-black uppercase text-yellow-400 tracking-wider">
                        Scope of Registered Activities:
                      </span>
                      <p className="text-[11px] text-slate-300 leading-relaxed font-medium">
                        {cert.scope}
                      </p>
                    </div>
                  )}

                  {/* Render PCAB other classifications if they exist */}
                  {cert.classifications && (
                    <div className="p-4 bg-slate-900/50 border border-slate-800/80 rounded-2xl space-y-2">
                      <span className="block text-[10px] font-black uppercase text-[#FACC15] tracking-wider">
                        Other Licensed Classifications:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.classifications.map((cls, idx) => (
                          <span 
                            key={idx} 
                            className="px-2.5 py-1 rounded bg-slate-950 text-[10px] font-bold text-slate-200 border border-slate-800/85 shadow-sm"
                          >
                            {cls}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Render PCAB kindsOfProject if they exist */}
                  {cert.kindsOfProject && (
                    <div className="p-4 bg-slate-900/50 border border-slate-800/80 rounded-2xl space-y-2.5">
                      <span className="block text-[10px] font-black uppercase text-[#FACC15] tracking-wider">
                        Kinds of Projects & Respective Size Ranges:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] max-h-48 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-800">
                        {cert.kindsOfProject.map((proj, idx) => (
                          <div 
                            key={idx} 
                            className="flex justify-between items-center p-2 rounded bg-slate-950 border border-slate-800/60"
                          >
                            <span className="text-slate-300 font-medium truncate pr-2" title={proj.name}>
                              {proj.name}
                            </span>
                            <span className="px-1.5 py-0.5 rounded bg-[#FACC15]/10 text-[#FACC15] text-[9px] font-black tracking-wider uppercase shrink-0">
                              {proj.range}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bullet Points Grid */}
                  <div className="space-y-3 pt-2" id={`cert-sub-points-${cert.id}`}>
                    {cert.details.map((detail, idx) => (
                      <div key={idx} className="flex gap-3 items-start text-xs text-slate-400">
                        <CheckCircle className="w-4 h-4 text-[#FACC15] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-200 font-bold block">{detail.label}</strong>
                          <span className="leading-relaxed block mt-0.5">{detail.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Photo Preview Panel (5 Columns) */}
                <div className="lg:col-span-5 order-1 lg:order-2" id={`cert-image-pane-${cert.id}`}>
                  <div className="relative group rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-900 shadow-xl shadow-slate-950/40">
                    <img 
                      src={cert.image} 
                      alt={`${cert.title} Document`}
                      className="w-full h-auto aspect-[3/4] object-contain bg-white group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Absolute float badge */}
                    <span className="absolute bottom-4 left-4 bg-slate-950/90 border border-[#FACC15]/20 text-[#FACC15] px-3 py-1.5 rounded-lg text-[10px] uppercase font-black tracking-widest flex items-center gap-1.5 shadow-lg">
                      <Sparkles className="w-3 h-3 text-[#FACC15]" />
                      {cert.stat}
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Support callout box */}
        <div className="p-8 bg-slate-950 border border-slate-800 rounded-3xl text-center space-y-4 max-w-3xl mx-auto relative overflow-hidden" id="certifications-callout">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl" />
          <span className="text-xs font-black text-[#FACC15] uppercase tracking-widest block">AUDIT DIRECTORY</span>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-xl mx-auto font-medium">
            Need physical copies of our ISO manuals, active PCAB licenses, NWRB certificates, or sanitary engineering profiles for municipal bidding pre-qualification files?
          </p>
          <div className="text-xs sm:text-sm font-extrabold text-slate-200 pt-2">
            Email request briefs to: <span className="text-[#FACC15] font-black">chris_ngcindustrial@yahoo.com</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
