import { cn } from '@/utils/cn';
import { HTMLAttributes, memo, Ref } from 'react';

interface BlockProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  borderColor?: string;
}

export const Block = ({ className, children, ref, borderColor, style, ...props }: BlockProps) => {
  return (
    <div
      ref={ref}
      style={{ borderColor: borderColor ?? '#ffffff28', ...style }}
      className={cn('w-full rounded-[40px] border p-[50px] max-md:rounded-4xl max-md:p-5', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default memo(Block);
