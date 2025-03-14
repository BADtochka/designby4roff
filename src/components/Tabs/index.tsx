import { cn } from '@/utils/cn';
import { AnimatePresence, motion } from 'framer-motion';
import { Children, HTMLAttributes, PropsWithChildren, ReactElement } from 'react';

type TabsProps = HTMLAttributes<HTMLDivElement>;

interface TabsTabProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

export const Tabs = ({ children, className, ...props }: TabsProps) => {
  return (
    <div
      className={cn('inline-flex items-center rounded-full border border-[#ffffff]/[.16] bg-black p-1.5', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const TabsContent = ({ children }: PropsWithChildren) => {
  return Children.map(children, (child, index) => {
    const isActiveChild = (child as ReactElement<TabsTabProps>).props.active;

    return (
      <div className='relative'>
        <AnimatePresence>
          {isActiveChild && (
            <motion.div
              layoutId='active-tab'
              className='absolute inset-0 rounded-4xl bg-white'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut', type: 'spring' }}
            ></motion.div>
          )}
        </AnimatePresence>
        {child}
      </div>
    );
  });
};

export const TabsTab = ({ active, children, className, ...props }: TabsTabProps) => {
  return (
    <div
      data-active={active}
      className={cn(
        'flex h-[43px] items-center justify-center rounded-4xl px-12 text-center text-white mix-blend-exclusion',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
