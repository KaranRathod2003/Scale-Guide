'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DOC_NAV, DEPLOYMENT_NAV } from '@/lib/constants';

export default function Sidebar() {
  const pathname = usePathname();
  const isDeploymentSection = pathname.startsWith('/deployment-strategies');

  return (
    <aside className="hidden w-64 shrink-0 border-r border-zinc-600/40 lg:block">
      <div className="sticky top-16 space-y-8 p-6">
        {/* Autoscaling section */}
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-300">
            {DOC_NAV.title}
          </h3>
          <nav className="flex flex-col gap-1">
            {DOC_NAV.items.map((item) => {
              const href = `/docs/${item.slug}`;
              const isActive = pathname === href;
              return (
                <Link
                  key={item.slug}
                  href={href}
                  className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? 'bg-brand-500/10 font-medium text-brand-400'
                      : 'text-zinc-300 hover:bg-zinc-600/30 hover:text-white'
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Deployment Strategies section */}
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-300">
            {DEPLOYMENT_NAV.title}
          </h3>
          <nav className="flex flex-col gap-1">
            {DEPLOYMENT_NAV.items.map((item) => {
              const href = `/deployment-strategies/${item.slug}`;
              const isActive = pathname === href;
              return (
                <Link
                  key={item.slug}
                  href={href}
                  className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? 'bg-brand-500/10 font-medium text-brand-400'
                      : 'text-zinc-300 hover:bg-zinc-600/30 hover:text-white'
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
}
