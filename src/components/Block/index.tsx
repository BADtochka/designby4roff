import { cn } from '@/utils/cn';
import { HTMLAttributes, Ref } from 'react';

interface BlockProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
}

export default function Block({ className, children, ref, ...props }: BlockProps) {
  return (
    <div
      ref={ref}
      className={cn('w-full rounded-[20px] border border-[#ffffff28] p-[50px] max-md:p-5', className)}
      {...props}
    >
      {children}
    </div>
  );
}
