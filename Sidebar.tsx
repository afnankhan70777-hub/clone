import { Cloud, Play } from 'lucide-react';
import { sidebarNavItems } from '@/data/mockData';
import { cn } from '@/lib/utils';

interface SidebarProps {
  activeItem?: string;
  onNavClick?: (path: string) => void;
}

export function Sidebar({ activeItem = 'home', onNavClick }: SidebarProps) {
  return (
    <aside className="w-[200px] bg-bg-sidebar border-r border-border-custom flex flex-col h-full">
      {/* Logo Area */}
      <div className="p-4 border-b border-border-custom">
        <div className="flex items-center justify-center mb-2">
          <div className="relative">
            <Cloud className="w-16 h-16 text-[#1e88e5]" strokeWidth={1.5} />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-10 h-10 text-black" fill="currentColor">
                <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.5L18.5 8 12 11.5 5.5 8 12 4.5zM5 9.5l6 3.5v6.5l-6-3.75V9.5zm14 0v6.25l-6 3.75v-6.5l6-3.5z"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-white font-bold text-lg leading-tight">AFROZ</h1>
          <h1 className="text-white font-bold text-lg leading-tight">SWIFT</h1>
          <h1 className="text-white font-bold text-lg leading-tight">FINANCIALS</h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-2">
        {sidebarNavItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavClick?.(item.path)}
            className={cn(
              'w-full text-left px-4 py-2 text-sm text-text-primary transition-colors duration-100',
              'hover:bg-bg-tertiary border-l-2 border-transparent',
              activeItem === item.id && 'bg-accent-orange text-white border-l-2 border-accent-cyan'
            )}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Company Info */}
      <div className="p-3 border-t border-border-custom text-xs">
        <p className="text-text-secondary italic mb-2">A Project of</p>
        <p className="text-white font-semibold mb-2">AFROZ<br/>TECHNOLOGIES</p>
        <div className="text-text-secondary space-y-1">
          <p>+92 333 4216468</p>
          <p>+92 322 4691977</p>
          <p className="text-accent-cyan">sales@afroztech.com</p>
          <p className="text-accent-cyan">www.afroztech.com</p>
        </div>
      </div>

      {/* Tutorial Videos */}
      <div className="p-3 border-t border-border-custom">
        <button className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors">
          <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center">
            <Play className="w-3 h-3 text-white fill-white" />
          </div>
          <span className="text-xs underline">Tutorial Videos</span>
        </button>
      </div>
    </aside>
  );
}
