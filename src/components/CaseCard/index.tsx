import { casesList } from '@/contants/casesList';
import { useResolution } from '@/hooks/useResolution';
import { useI18nContext } from '@/i18n/i18n-react';
import { useCasesStore } from '@/stores/cases';
import { useCursorStore } from '@/stores/cursor';
import { CaseData, CasesCategory, GameKeys, ProductKeys, SelectedCategoryKeys } from '@/types/Cases';
import { cn } from '@/utils/cn';
import { HTMLMotionProps, motion, Variants } from 'framer-motion';
import { useState } from 'react';
import DateRange from '../DateRange';
import Image from '../Image';

type CaseCardProps = HTMLMotionProps<'div'> &
  CaseData & {
    keyName: SelectedCategoryKeys;
    category: CasesCategory;
  };

export default function CaseCard({ keyName, category, image, startDate, endDate, className, ...props }: CaseCardProps) {
  const { LL } = useI18nContext();
  const [isHovered, setIsHovered] = useState(false);
  const { isDesktop } = useResolution();
  const selectedCategory = useCasesStore((state) => state.selectedCategory);
  const setNewCaseOptions = useCasesStore((state) => state.setNewCaseOptions);
  const setCursorOptions = useCursorStore((state) => state.setOptions);

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

  const onOpenCase = async () => {
    const selectedCase = casesList[selectedCategory][keyName];
    setNewCaseOptions({
      key: keyName,
      open: true,
      link: `cases/${selectedCategory}/${keyName}`,
      background: selectedCase.background ?? 'black',
      scheme: selectedCase.scheme ?? 'dark',
    });
    setCursorOptions({ expanded: false });
  };

  return (
    <motion.div
      className={cn('relative flex overflow-hidden rounded-[20px] border border-white/15 max-md:flex-col', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
      variants={caseCardVariants}
      initial='hidden'
      animate='visible'
      exit='hidden'
      transition={{ bounce: false }}
      cursor-content={LL.blocks.cases.open()}
      onClick={onOpenCase}
    >
      <Image
        className='h-full w-full object-cover'
        animate={{ scale: isHovered && isDesktop ? 1.1 : 1, opacity: isHovered && isDesktop ? 0.4 : 1 }}
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
        <div className='flex flex-col max-md:gap-2.5'>
          <h1 className='text-[40px] font-bold max-md:text-2xl'>{caseGame}</h1>
          <DateRange className='text-white/65' startDate={startDate} endDate={endDate} />
        </div>
        <p className='text-xl text-white/65 max-md:text-base'>{caseDescription}</p>
      </motion.div>
    </motion.div>
  );
}
