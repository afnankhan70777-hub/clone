import type { ReactNode } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';

interface AppLayoutProps {
  children: ReactNode;
  activeNavItem?: string;
  onNavClick?: (path: string) => void;
  onMenuClick?: (path: string) => void;
}

export function AppLayout({ 
  children, 
  activeNavItem = 'home', 
  onNavClick,
  onMenuClick 
}: AppLayoutProps) {
  return (
    <div className="h-screen flex flex-col bg-bg-primary overflow-hidden">
      {/* Header */}
      <Header onMenuClick={onMenuClick} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <Sidebar activeItem={activeNavItem} onNavClick={onNavClick} />
        
        {/* Content */}
        <main className="flex-1 overflow-auto bg-bg-primary">
          {children}
        </main>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
