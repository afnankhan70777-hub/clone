import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { menuItems } from '@/data/mockData';

interface HeaderProps {
  onMenuClick?: (path: string) => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleMenuClick = (label: string, items?: { label: string; path: string }[]) => {
    if (items && items.length > 0) {
      setOpenMenu(openMenu === label ? null : label);
    }
  };

  const handleSubmenuClick = (path: string) => {
    setOpenMenu(null);
    onMenuClick?.(path);
  };

  return (
    <header className="h-[35px] bg-bg-secondary border-b border-border-custom flex items-center px-0 select-none z-50">
      <nav className="flex items-center h-full">
        {menuItems.map((item, index) => (
          <div key={index} className="relative">
            <button
              onClick={() => handleMenuClick(item.label, item.items)}
              className={`
                px-3 py-1 text-xs text-text-primary hover:bg-bg-tertiary transition-colors duration-100
                flex items-center gap-1 h-[34px] border-r border-border-custom
                ${openMenu === item.label ? 'bg-bg-tertiary' : ''}
              `}
            >
              {item.label}
              {item.items && <ChevronDown className="w-3 h-3" />}
            </button>
            
            {openMenu === item.label && item.items && (
              <div 
                className="absolute top-full left-0 bg-bg-secondary border border-border-custom shadow-lg z-50 min-w-[180px]"
                onMouseLeave={() => setOpenMenu(null)}
              >
                {item.items.map((subItem, subIndex) => (
                  <button
                    key={subIndex}
                    onClick={() => handleSubmenuClick(subItem.path)}
                    className="w-full text-left px-4 py-2 text-xs text-text-primary hover:bg-bg-tertiary transition-colors duration-100"
                  >
                    {subItem.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}
