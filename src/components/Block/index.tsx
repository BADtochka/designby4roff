import { cn } from '@/utils/cn';
import { HTMLAttributes } from 'react';

interface BlockProps extends HTMLAttributes<HTMLDivElement> {}

export default function Block({ className, children, ...props }: BlockProps) {
  return (
    <div className={cn('w-full rounded-[20px] border border-[#ffffff28] p-[50px]', className)} {...props}>
      {children}
    </div>
  );
}
