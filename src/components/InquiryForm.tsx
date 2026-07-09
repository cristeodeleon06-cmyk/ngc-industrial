import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, Phone, Mail, MapPin, Clock, Building, User, Check, 
  Loader2, ShieldCheck, FileText, Send, HelpCircle, ArrowRight, AlertCircle
} from 'lucide-react';

interface InquiryFormProps {
  initialService?: 'drilling' | 'supply' | 'maintenance';
}

export const InquiryForm: React.FC<InquiryFormProps> = ({ initialService = 'drilling' }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Define service options mapping
  const serviceOptions = [
    { id: 'drilling', label: '💦 Water Well Drilling', value: 'Water Well Drilling & Exploration' },
    { id: 'supply', label: '⚡ Electro-Mechanical Supply', value: 'Electro-Mechanical Supply & Installation' },
    { id: 'maintenance', label: '🛠️ Water Services & Repair', value: 'Deep Well Rehabilitation & Repair Services' }
  ];

  // Set default subject on load or when initialService changes
  useEffect(() => {
    const matched = serviceOptions.find(opt => opt.id === initialService);
    if (matched) {
      setSubject(matched.value);
    } else {
      setSubject('General Project Inquiry');
    }
  }, [initialService]);

  const handleServiceSelect = (val: string) => {
    setSubject(val);
  };

  const validateForm = () => {
    if (!name.trim()) return 'Full Name is required.';
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) return 'A valid Email Address is required.';
    if (!phone.trim()) return 'Contact Number is required.';
    if (!location.trim()) return 'Site Location/Municipality is required.';
    if (!subject.trim()) return 'Please select a Service Department.';
    if (!message.trim() || message.length < 10) return 'Inquiry Message must be at least 10 characters long.';
    return '';
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const err = validateForm();

  if (err) {
    setErrorMsg(err);
    setTimeout(() => setErrorMsg(""), 4000);
    return;
  }

  setIsSubmitting(true);
  setErrorMsg("");

  const form = e.currentTarget;
  const formData = new FormData(form);

  try {
    await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData as any).toString(),
    });

    setIsSubmitted(true);
    form.reset();
  } catch (error) {
    setErrorMsg("Unable to send your inquiry. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setLocation('');
    setMessage('');
    setIsSubmitted(false);
    const matched = serviceOptions.find(opt => opt.id === initialService);
    setSubject(matched ? matched.value : 'Water Well Drilling & Exploration');
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-[#0B0F19] text-white relative overflow-hidden" id="inquiry">
      {/* Visual background accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#FACC15]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10" id="inquiry-container">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in" id="inquiry-header">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-900 border border-[#FACC15]/20 text-yellow-400 font-bold text-xs uppercase tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-[#FACC15]" /> Project Inquiry Portal
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Send Professional Project Requirements
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed">
            Submit your technical specifications or service request directly to our headquarters. Your inquiry will be logged directly into our system for immediate engineer dispatch and review.
          </p>
        </div>

        {/* Responsive Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch" id="inquiry-layout-grid">
           {/* Left Column: Headquarters Google Map & Direct Contact (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8" id="inquiry-specs-sidebar">
            <div className="space-y-6 flex-1 flex flex-col">
              <div className="space-y-1.5">
                <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
                  Our Office Headquarters
                </h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  Get real-time coordinates and navigation directions to our primary service center and engineering hub.
                </p>
              </div>

              {/* Beautiful Embedded Google Map Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/40 flex-1 min-h-[300px] lg:min-h-[340px] shadow-2xl group" id="office-map-canvas">
                <iframe
                  src="https://maps.google.com/maps?q=14.898959,120.815018&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1) opacity(0.95)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  title="NGC Dampol Headquarters Map"
                  className="absolute inset-0 w-full h-full"
                />
                <a
                  href="https://www.google.com/maps/place/14%C2%B053'56.3%22N+120%C2%B048'54.1%22E/@14.898959,120.815018,17z/data=!4m4!3m3!8m2!3d14.898959!4d120.815018?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 bg-slate-950/95 text-slate-200 hover:text-slate-950 hover:bg-[#FACC15] border border-slate-800 text-[10px] font-black tracking-wider uppercase px-3 py-2 rounded-xl transition-all duration-300 shadow-2xl flex items-center gap-1.5 backdrop-blur cursor-pointer z-20"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Get Directions ↗</span>
                </a>
              </div>
            </div>

            {/* Direct Contacts Summary */}
            <div className="p-6 bg-slate-950/80 border border-slate-800 rounded-2xl space-y-4" id="quick-office-info">
              <span className="text-[10px] uppercase tracking-widest text-[#FACC15] font-black block">NGC Headquarters Direct Details</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 text-xs">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#FACC15] shrink-0" />
                  <span className="font-semibold text-slate-200">+63917 623 2574 / 0968 855 8232</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#FACC15] shrink-0" />
                  <span className="font-semibold text-slate-200 truncate">chris_ngcindustrial@yahoo.com</span>
                </div>
                <a
                  href="https://www.google.com/maps/place/14%C2%B053'56.3%22N+120%C2%B048'54.1%22E/@14.898959,120.815018,17z/data=!4m4!3m3!8m2!3d14.898959!4d120.815018?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#FACC15] transition-colors group cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-[#FACC15] shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-slate-200 group-hover:text-[#FACC15] transition-colors underline decoration-slate-600/50 hover:decoration-[#FACC15]">187 purok 6 Dampol, Plaridel, Bulacan ↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Form Integration Component (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-950/80 border border-slate-800/80 p-6 md:p-8 rounded-3xl backdrop-blur-md flex flex-col justify-between" id="inquiry-form-card">
            
            {/* 1. Normal/Submitting Form View */}
            {!isSubmitted ? (
              <form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  data-netlify-honeypot="bot-field"
  onSubmit={handleFormSubmit}
  className="space-y-6"
>
    <input type="hidden" name="form-name" value="contact" />

    <p hidden>
        <label>
            Don't fill this out:
            <input name="bot-field" />
        </label>
    </p>
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Configure Specifications</span>
                  <span className="text-[10px] bg-[#0F172A] text-[#FACC15] border border-[#FACC15]/20 px-2.5 py-1 rounded font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#FACC15]" /> Syncs to Google Sheets
                  </span>
                </div>

                {/* Form Warning / Errors */}
                {errorMsg && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-950/50 border border-red-900/60 text-red-200 rounded-xl text-xs flex items-center gap-2.5 font-semibold"
                    id="form-error-callout"
                  >
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMsg}</span>
                  </motion.div>
                )}

                {/* Grid Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-[#FACC15]" /> Full Name *
                    </label>
                    <input 
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Juan Dela Cruz"
                      required
                      className="w-full bg-slate-900 border border-slate-800 focus:border-[#FACC15] focus:outline-none rounded-xl px-4 py-3 text-sm font-medium text-white placeholder:text-slate-500"
                    />
                  </div>

                  {/* Company Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1">
                      <Building className="w-3.5 h-3.5 text-[#FACC15]" /> Company / Organization *
                    </label>
                    <input 
                      type="text"
                      name="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Juan Corp. / N/A"
                      required
                      className="w-full bg-slate-900 border border-slate-800 focus:border-[#FACC15] focus:outline-none rounded-xl px-4 py-3 text-sm font-medium text-white placeholder:text-slate-500"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-[#FACC15]" /> Email Address *
                    </label>
                    <input 
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. juan@Corp.com"
                      required
                      className="w-full bg-slate-900 border border-slate-800 focus:border-[#FACC15] focus:outline-none rounded-xl px-4 py-3 text-sm font-medium text-white placeholder:text-slate-500"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-[#FACC15]" /> Contact Number *
                    </label>
                    <input 
                      type="tel"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +63 917 123 4567"
                      required
                      className="w-full bg-slate-900 border border-slate-800 focus:border-[#FACC15] focus:outline-none rounded-xl px-4 py-3 text-sm font-medium text-white placeholder:text-slate-500"
                    />
                  </div>
                </div>

                {/* Location Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#FACC15]" /> Site Location / Municipality *
                  </label>
                  <input 
                    type="text"
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Any place around Philippines"
                    required
                    className="w-full bg-slate-900 border border-slate-800 focus:border-[#FACC15] focus:outline-none rounded-xl px-4 py-3 text-sm font-medium text-white placeholder:text-slate-500"
                  />
                </div>

                {/* Beautiful Custom Subject Selector Cards */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    Required Service Department *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5" id="service-options-grid">
                    {serviceOptions.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleServiceSelect(opt.value)}
                        className={`p-3 rounded-xl border text-left transition-all duration-300 ${
                          subject === opt.value
                            ? 'border-[#FACC15] bg-[#FACC15]/10 text-yellow-400 font-extrabold shadow'
                            : 'border-slate-850 bg-slate-900/50 hover:border-slate-700 text-slate-400 font-medium'
                        }`}
                      >
                        <span className="block text-xs leading-snug">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                  {/* Hidden Input field carrying the active subject value for Google Form posting */}
                  <input 
                    type="hidden" 
                    name="subject" 
                    value={subject} 
                  />
                </div>

                {/* Detailed Specifications / Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-[#FACC15]" /> Inquiry Description & Project Specifications *
                  </label>
                  <textarea 
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Please specify geological conditions, depth requirement (for drilling), horsepower rating, motor power, or urgent issues (for repairs)."
                    required
                    className="w-full bg-slate-900 border border-slate-800 focus:border-[#FACC15] focus:outline-none rounded-xl px-4 py-3.5 text-sm font-medium text-white placeholder:text-slate-500 min-h-[120px]"
                  />
                </div>

                {/* Submission CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FACC15] hover:bg-yellow-500 disabled:bg-yellow-600 text-[#0F172A] font-black uppercase tracking-wider text-xs md:text-sm py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  id="inquiry-submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Logging Project Dossier...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Technical Inquiry Request
                    </>
                  )}
                </button>
              </form>
            ) : (
              // 2. Beautiful Professional Success View
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-8 py-8 text-center"
                id="submission-success-dashboard"
              >
                {/* Checkmark animation */}
                <div className="w-16 h-16 bg-emerald-500/10 border-2 border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                  <Check className="w-8 h-8 font-black" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-black text-white">Inquiry Successfully Logged!</h3>
                  <p className="text-slate-400 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-bold">{name}</span>. Your technical dossier has been successfully synchronized to our Google Form database.
                  </p>
                </div>

                {/* Brief Summary of Logged Specs */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-left text-xs max-w-md mx-auto space-y-3">
                  <span className="block text-[10px] uppercase font-black text-[#FACC15] border-b border-slate-800 pb-1.5">
                    Logged Technical Blueprint:
                  </span>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                    <div>
                      <span className="text-slate-500 block text-[10px]">Client / Contact:</span>
                      <span className="font-bold text-slate-200">{name}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">Organization:</span>
                      <span className="font-bold text-slate-200 truncate block">{company || 'Private'}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">Assigned Service:</span>
                      <span className="font-bold text-yellow-400">{subject}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">Site Location:</span>
                      <span className="font-bold text-slate-200">{location}</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-800/80">
                    <span className="text-slate-500 block text-[10px] mb-0.5">Contact Line:</span>
                    <span className="font-semibold text-slate-300">{phone} | {email}</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 font-semibold max-w-sm mx-auto leading-normal">
                  Our dispatch coordinator is already assigning this file to a senior mechanical engineer. Expect a direct callback or email brief shortly.
                </p>

                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-all text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 mx-auto"
                >
                  Submit Another Inquiry
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            )}

            
          </div>

        </div>

      </div>
    </section>
  );
};

export default InquiryForm;
