import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Copy, Check, ExternalLink, MessageCircle, Mail, ArrowRight } from 'lucide-react';

interface FloatingContactProps {
  onSendInquiry?: () => void;
}

export function FloatingContact({ onSendInquiry }: FloatingContactProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const viberNumber = '0915 421 4421';
  const cleanNumber = '09154214421';
  const formattedViberLink = 'viber://chat?number=%2B639154214421';

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(cleanNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3" 
      id="floating-contact-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Contact Options Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-2xl p-4 shadow-2xl w-72 text-slate-100 mr-1 overflow-hidden"
            id="contact-popup-card"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FACC15] via-amber-500 to-emerald-500" />
            
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
              <div>
                <h4 className="text-sm font-bold text-white">Direct Engineering Line</h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Technical Support Active</span>
                </div>
              </div>
            </div>

            <div className="space-y-2.5">
              {/* Messenger Button */}
              <a
                href="https://business.facebook.com/latest/inbox/all/?nav_ref=manage_page_ap_plus_inbox_message_button&asset_id=1054942651355263&business_id="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-500 text-white shadow-md shadow-blue-500/30 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.9 1.15 5.51 3.03 7.42V22l2.72-1.49c1.3.36 2.7.56 4.15.56 5.64 0 10-4.13 10-9.7C22 6.13 17.64 2 12 2zm1.09 12.3l-2.43-2.6-4.74 2.6 5.21-5.54 2.47 2.64 4.7-2.64-5.21 5.54z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors">Chat on Messenger</div>
                    <div className="text-[10px] text-slate-400 font-medium">Instant FB Business Support</div>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-400 transition-colors" />
              </a>

              {/* Viber Chat Button */}
              <a
                href={formattedViberLink}
                className="flex items-center justify-between p-2.5 rounded-xl bg-violet-600/10 hover:bg-violet-600/20 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-violet-600 text-white shadow-md shadow-violet-600/30">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white group-hover:text-violet-300 transition-colors">Chat on Viber</div>
                    <div className="text-[10px] text-slate-400 font-mono">{viberNumber}</div>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-violet-400 transition-colors" />
              </a>

              {/* Send Online Inquiry */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                  if (onSendInquiry) {
                    onSendInquiry();
                  } else {
                    document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-200 group text-left cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">Send Inquiry</div>
                    <div className="text-[10px] text-slate-400 font-medium">Get a Free Engineering Quote</div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 transform group-hover:translate-x-0.5 transition-all duration-200" />
              </button>

              {/* Copy Number Action */}
              <button
                onClick={handleCopy}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 transition-all duration-200 group text-left"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-slate-700 text-slate-300">
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-200">Copy Phone Number</div>
                    <div className="text-[10px] text-slate-400 font-mono">Copy to clipboard</div>
                  </div>
                </div>
                {copied && (
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    Copied
                  </span>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        id="floating-phone-trigger"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: isOpen ? 0 : [0, -8, 0],
        }}
        transition={{
          y: isOpen
            ? {}
            : {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              },
        }}
        className={`relative flex items-center gap-2.5 p-3.5 rounded-full shadow-2xl transition-all duration-300 cursor-pointer ${
          isOpen
            ? 'bg-slate-900 text-[#FACC15] border border-slate-700 shadow-slate-950/50'
            : 'bg-gradient-to-r from-[#FACC15] to-amber-500 text-slate-950 shadow-amber-500/20 border border-amber-400'
        }`}
      >
        {/* Dynamic Notification Dot */}
        {!isOpen && (
          <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white shadow-sm flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
            </span>
          </span>
        )}

        {/* Dynamic Pulse Ring */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#FACC15]/20 animate-pulse -z-10 scale-125" />
        )}

        <div className="relative">
          <Phone className={`w-5.5 h-5.5 ${isOpen ? 'rotate-135' : 'animate-wiggle'} transition-transform duration-300`} />
        </div>
        
        <span className="text-xs font-bold tracking-tight pr-1.5 hidden sm:inline">
          {isOpen ? 'Close Options' : 'Inquire 24/7'}
        </span>
      </motion.button>
    </div>
  );
}
