import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FormFieldProps {
  label: string;
  children: ReactNode;
  className?: string;
  labelClassName?: string;
  required?: boolean;
}

export function FormField({ 
  label, 
  children, 
  className, 
  labelClassName,
  required 
}: FormFieldProps) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <label className={cn('text-xs text-text-label', labelClassName)}>
        {label}
        {required && <span className="text-danger ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}
