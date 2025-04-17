import { cn } from '@/utils/cn';
import { AnimatePresence, motion } from 'framer-motion';
import { Children, HTMLAttributes, PropsWithChildren, ReactElement } from 'react';

type TabsProps = HTMLAttributes<HTMLDivElement>;

interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  customId: string;
}

interface TabsTabProps extends HTMLAttributes<HTMLDivElement> {
  ['data-size']?: string;
  active?: boolean;
}

export const Tabs = ({ className, children, ...props }: TabsProps) => {
  return (
    <div className={cn('flex items-center select-none', className)} {...props}>
      {children}
    </div>
  );
};

export const TabsContent = ({ customId, children, className }: PropsWithChildren<TabsContentProps>) => {
  return Children.map(children, (child) => {
    const isActiveChild = (child as ReactElement<TabsTabProps>).props.active;
    const childSize = (child as ReactElement<TabsTabProps>).props['data-size'];

    return (
      <div className={cn('relative flex h-[60px] items-center', className)}>
        <AnimatePresence>
          {isActiveChild && (
            <motion.div
              layoutId={`active-tab-${customId}`}
              className='black absolute inset-1.5 rounded-full bg-white'
              style={{ width: childSize, height: childSize }}
              transition={{ duration: 0.2, ease: 'circOut' }}
            />
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
        `flex w-full min-w-10 shrink cursor-pointer items-center justify-center p-8 py-3.5 mix-blend-difference max-md:px-3
        max-md:text-ellipsis`,
        className,
      )}
      {...props}
    >
      <p className='text-white max-md:overflow-hidden max-md:text-ellipsis max-md:whitespace-nowrap'>{children}</p>
    </div>
  );
};
