'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { TOPICS } from '@/lib/constants';

export default function Header({ onAssistantToggle }: { onAssistantToggle?: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    };
  }, []);

  const handleMouseEnter = (index: number) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-600/50 bg-[#16181d]/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold text-white">
          Scale<span className="text-brand-400">Guide</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {TOPICS.map((topic, i) => (
            <div
              key={topic.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  openDropdown === i ? 'bg-zinc-700/60 text-white' : 'text-zinc-300 hover:text-white'
                }`}
              >
                {topic.label}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className={`transition-transform ${openDropdown === i ? 'rotate-180' : ''}`}
                >
                  <path d="M3 5l3 3 3-3" />
                </svg>
              </button>

              {openDropdown === i && (
                <div className="absolute left-0 top-full z-50 mt-1 w-64 rounded-xl border border-zinc-600/50 bg-[#1e2028] p-2 shadow-2xl shadow-black/40">
                  {topic.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpenDropdown(null)}
                      className="group flex flex-col gap-0.5 rounded-lg px-3 py-2.5 transition-colors hover:bg-zinc-700/60"
                    >
                      <span className="text-sm font-medium text-zinc-200 group-hover:text-white">
                        {item.label}
                      </span>
                      <span className="text-xs text-zinc-400 group-hover:text-zinc-300">
                        {item.description}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <button
            onClick={onAssistantToggle}
            className="ml-4 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-600"
          >
            AI Assistant
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-zinc-400 transition-transform ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-zinc-400 transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-zinc-400 transition-transform ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-zinc-600/50 bg-[#16181d] px-4 py-4 md:hidden">
          {TOPICS.map((topic) => (
            <div key={topic.label} className="mb-4">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                {topic.label}
              </span>
              {topic.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-700/60 hover:text-white"
                >
                  {item.label}
                  <span className="ml-2 text-xs text-zinc-400">{item.description}</span>
                </Link>
              ))}
            </div>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              onAssistantToggle?.();
            }}
            className="mt-2 w-full rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-600"
          >
            AI Assistant
          </button>
        </div>
      )}
    </header>
  );
}
