import { useI18nContext } from '@/i18n/i18n-react';
import { CaseData, CaseKeys } from '@/types/Cases';
import { cn } from '@/utils/cn';
import { motion, Variants } from 'framer-motion';
import { HTMLAttributes, useState } from 'react';

type CaseCardProps = HTMLAttributes<HTMLDivElement> &
  CaseData & {
    keyName: CaseKeys;
  };

export default function CaseCard({ keyName, image, startDate, endDate, className, ...props }: CaseCardProps) {
  const { LL } = useI18nContext();
  const [isHovered, setIsHovered] = useState(false);

  const cardTextVariants: Variants = {
    default: {
      y: 100,
      opacity: 0,
    },
    hovered: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div
      className={cn('relative flex overflow-hidden rounded-[20px] border border-white/15', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <motion.img
        className={cn(
          'h-full w-full object-cover transition-all duration-500 ease-out hover:scale-110 hover:opacity-40',
        )}
        src={`/cases/${image}`}
      />
      <motion.div
        initial='default'
        className='pointer-events-none absolute bottom-[50px] left-[50px] flex flex-col gap-7'
        variants={cardTextVariants}
        animate={isHovered ? 'hovered' : 'default'}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className='flex flex-col'>
          <h1 className='text-[40px] font-bold'>{LL.blocks.casesList[keyName].name()}</h1>
          <p className='text-sm text-white/65'>{`${startDate.toString()} - ${endDate?.toString()}`}</p>
        </div>
        <p className='text-xl text-white/65'>{LL.blocks.casesList[keyName].description()}</p>
      </motion.div>
    </div>
  );
}
