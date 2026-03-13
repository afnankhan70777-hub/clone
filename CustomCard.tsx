import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
}

export function CustomCard({ title, children, className, titleClassName }: CardProps) {
  return (
    <div className={cn('bg-bg-secondary border border-border-custom', className)}>
      {title && (
        <div className={cn('px-3 py-2 text-sm font-semibold text-accent-orange border-b border-border-custom', titleClassName)}>
          {title}
        </div>
      )}
      <div className="p-3">
        {children}
      </div>
    </div>
  );
}
