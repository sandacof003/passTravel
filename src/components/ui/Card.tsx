import { CardProps } from '@/types';
import { cn } from '@/utils/cn';

export default function Card({ className, children }: CardProps) {
  return (
    <div className={cn(
      'rounded-lg border border-gray-200 bg-white shadow-sm',
      className
    )}>
      {children}
    </div>
  );
}
