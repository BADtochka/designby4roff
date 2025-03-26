import { cn } from '@/utils/cn';
import { AnimatePresence, motion } from 'framer-motion';
import { Children, HTMLAttributes, PropsWithChildren, ReactElement } from 'react';

type TabsProps = HTMLAttributes<HTMLDivElement>;
interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  customId: string;
}

interface TabsTabProps extends HTMLAttributes<HTMLDivElement> {
  'data-size'?: string;
  active?: boolean;
}

export const Tabs = ({ children, className, ...props }: TabsProps) => {
  return (
    <div className={cn('flex items-center', className)} {...props}>
      {children}
    </div>
  );
};

export const TabsContent = ({ customId, children, className }: PropsWithChildren<TabsContentProps>) => {
  return Children.map(children, (child, index) => {
    const isActiveChild = (child as ReactElement<TabsTabProps>).props.active;
    const childSize = (child as ReactElement<TabsTabProps>).props['data-size'];

    return (
      <div className={cn('relative flex h-[60px] items-center justify-between', className)}>
        <AnimatePresence>
          {isActiveChild && (
            <motion.div
              layoutId={`active-tab-${customId}`}
              className='absolute inset-0 rounded-full bg-white'
              style={{ width: childSize, height: childSize }}
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
        `z-10 overflow-hidden rounded-4xl text-center text-ellipsis whitespace-nowrap text-white mix-blend-exclusion max-md:px-2
        md:flex md:items-center md:justify-center`,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
