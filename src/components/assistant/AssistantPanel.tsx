'use client';

import { motion, AnimatePresence } from 'framer-motion';
import ChatInterface from './ChatInterface';

interface AssistantPanelProps {
  open: boolean;
  onClose: () => void;
}

export default function AssistantPanel({ open, onClose }: AssistantPanelProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />
          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full flex-col border-l border-zinc-700 bg-surface sm:w-[420px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-700 px-4 py-3">
              <h2 className="text-sm font-semibold text-white">
                Scale<span className="text-brand-400">Guide</span> AI
              </h2>
              <button
                onClick={onClose}
                className="rounded-lg p-1.5 text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            {/* Chat */}
            <ChatInterface onNavigate={onClose} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
