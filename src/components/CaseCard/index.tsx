import { useResolution } from '@/hooks/useResolution';
import { useI18nContext } from '@/i18n/i18n-react';
import { CaseData, CaseKeys, CasesCategory, GameKeys, ProductKeys } from '@/types/Cases';
import { cn } from '@/utils/cn';
import { HTMLMotionProps, motion, Variants } from 'framer-motion';
import { useState } from 'react';
import Image from '../Image';

type CaseCardProps = HTMLMotionProps<'div'> &
  CaseData & {
    keyName: CaseKeys;
    category: CasesCategory;
  };

export default function CaseCard({ keyName, category, image, startDate, endDate, className, ...props }: CaseCardProps) {
  const { LL } = useI18nContext();
  const [isHovered, setIsHovered] = useState(false);
  const { isDesktop } = useResolution();
  const caseGame =
    category === 'game'
      ? LL.blocks.casesList.game[keyName as GameKeys].name()
      : LL.blocks.casesList.product[keyName as ProductKeys].name();

  const caseDescription =
    category === 'game'
      ? LL.blocks.casesList.game[keyName as GameKeys].description()
      : LL.blocks.casesList.product[keyName as ProductKeys].description();

  const caseCardVariants: Variants = {
    hidden: {
      y: 100,
    },
    visible: {
      y: 0,
    },
  };

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
    <motion.div
      className={cn('relative flex overflow-hidden rounded-[20px] border border-white/15 max-md:flex-col', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // initial={false}
      // animate='visible'
      // exit='hidden'
      variants={caseCardVariants}
      transition={{ bounce: false, ease: 'easeInOut' }}
      {...props}
    >
      <Image
        className='h-full w-full object-cover transition-all duration-500 ease-out md:hover:scale-110 md:hover:opacity-40'
        src={`/cases/${image}`}
        maxWidth='100%'
        minHeight={isDesktop ? '37vh' : '67vw'}
      />
      <motion.div
        initial={false}
        className='flex flex-col gap-7 max-md:gap-4 max-md:bg-[#141414] max-md:p-8 md:pointer-events-none md:absolute md:bottom-[50px]
          md:left-[50px]'
        variants={cardTextVariants}
        animate={isHovered || !isDesktop ? 'hovered' : 'default'}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className='flex flex-col gap-2 max-md:gap-2.5'>
          <h1 className='text-[40px] font-bold max-md:text-2xl'>{caseGame}</h1>
          <p className='text-sm text-white/65 max-md:text-xs'>{`${startDate.toString()} - ${endDate?.toString()}`}</p>
        </div>
        <p className='text-xl text-white/65 max-md:text-base'>{caseDescription}</p>
      </motion.div>
    </motion.div>
  );
}
