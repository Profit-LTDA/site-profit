import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { Expandable, ExpandableContent, useExpandable } from '../expandable';
import robotChat from '../../assets/robot/robot_chat.png';
import logoIcon from '../../assets/logo/profit_Plogo.png';

function ChatWidgetInner() {
  const { isExpanded, toggleExpand } = useExpandable();

  return (
    <div className="flex flex-col items-end gap-3">
      
      {/* Expandable card — grows upward above the trigger */}
      <ExpandableContent preset="slide-up" keepMounted={false}>
        <div className="w-80 bg-white border border-slate-200/80 rounded-2xl shadow-[0_20px_60px_-12px_rgba(0,0,0,0.18)] overflow-hidden mb-1">
          {/* Dark header */}
          <div className="bg-slate-950 px-5 pt-5 pb-4 flex items-start gap-3 relative">
            {/* Subtle blue glow in header */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1E50FF] rounded-full blur-[60px] opacity-20 pointer-events-none" />
            <img src={robotChat} alt="Profit Bot" className="w-11 h-11 object-contain flex-shrink-0 relative z-10" />
            <div className="flex-1 min-w-0 relative z-10">
              <p className="text-white font-bold text-sm leading-snug">
                Olá! 👋 Sou o Profit, como posso te ajudar?
              </p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-slate-400 text-xs">Geralmente responde em instantes</p>
              </div>
            </div>
            <button
              onClick={toggleExpand}
              className="text-slate-500 hover:text-white transition-colors mt-0.5 relative z-10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Action buttons */}
          <div className="p-3 flex flex-col gap-1.5 bg-slate-50">
            {[
              { label: 'Falar com especialista', icon: '💬' },
              { label: 'Ver nossas soluções',    icon: '🚀' },
              { label: 'Suporte técnico',        icon: '🛠️' },
            ].map(({ label, icon }) => (
              <motion.button
                key={label}
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="flex items-center justify-between w-full px-4 py-3 bg-white hover:bg-blue-50 border border-slate-100 hover:border-[#1E50FF]/30 rounded-xl text-left text-sm font-semibold text-slate-700 hover:text-[#1E50FF] transition-colors group/btn"
              >
                <span className="flex items-center gap-2.5">
                  <span>{icon}</span>
                  {label}
                </span>
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              </motion.button>
            ))}
          </div>

          {/* Footer strip */}
          <div className="px-4 py-3 border-t border-slate-100 bg-white flex items-center justify-center gap-1.5">
            <img src={logoIcon} alt="" className="h-3.5 w-auto object-contain opacity-50" />
            <span className="text-[10px] text-slate-400 font-semibold tracking-wide">Profit · Soluções de Software</span>
          </div>
        </div>
      </ExpandableContent>

      {/* Trigger button */}
      <motion.button
        onClick={toggleExpand}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative w-16 h-16 rounded-full bg-slate-900 shadow-[0_8px_30px_rgba(30,80,255,0.35)] overflow-visible"
        aria-label="Abrir chat"
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center text-white"
            >
              <X className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.img
              key="robot"
              src={robotChat}
              alt="Assistente Profit"
              className="w-14 h-14 object-contain absolute inset-1"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: [1, 1.07, 1] }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ opacity: { duration: 0.2 }, scale: { repeat: Infinity, duration: 2.8, ease: 'easeInOut' } }}
            />
          )}
        </AnimatePresence>

        {/* Pulse rings — only when closed */}
        {!isExpanded && (
          <>
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-[#1E50FF]"
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeOut' }}
            />
            <motion.span
              className="absolute inset-0 rounded-full border border-[#1E50FF]"
              animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeOut', delay: 0.5 }}
            />
          </>
        )}
      </motion.button>
    </div>
  );
}

export function ChatWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Expandable
        expandDirection="vertical"
        transitionDuration={0.35}
        easeType="easeInOut"
      >
        <ChatWidgetInner />
      </Expandable>
    </div>
  );
}
