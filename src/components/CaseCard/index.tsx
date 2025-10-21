import { GLOBAL_LOCALIZATION } from '@/constants/globalLocalization';
import { useDevice } from '@/hooks/useDevice';
import { useLocalization } from '@/hooks/useLocalization';
import { CaseOptions, useCasesStore } from '@/stores/cases';
import { CaseData } from '@/types/Cases';
import { Localization } from '@/types/Localization';
import { cn } from '@/utils/cn';
import { Link } from '@tanstack/react-router';
import { HTMLMotionProps, motion, Variants } from 'framer-motion';
import { useState } from 'react';
import DateRange from '../DateRange';
import Image from '../Image';

type CaseCardProps = HTMLMotionProps<'div'> &
  CaseData & {
    localization: Localization;
    scheme?: CaseOptions['scheme'];
    link: string;
  };

export default function CaseCard({
  image,
  startDate,
  endDate,
  className,
  borderColor,
  localization,
  background,
  scheme,
  link,
  logo,
  gap,
  ...props
}: CaseCardProps) {
  const { L } = useLocalization(localization);
  const [isHovered, setIsHovered] = useState(false);
  const { isDesktop } = useDevice();
  const setCaseOptions = useCasesStore((state) => state.setCaseOptions);
  const { L: GL } = useLocalization(GLOBAL_LOCALIZATION);

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
    setCaseOptions({
      background: background ?? 'black',
      scheme: scheme ?? 'dark',
      borderColor: borderColor,
      logo: logo ?? '/cases/exampleLogo.png',
      gap: gap ?? 64,
    });
  };

  return (
    <Link
      to={link}
      className={cn(
        'relative flex overflow-hidden rounded-[40px] border border-white/15 max-md:flex-col max-md:rounded-4xl',
        className,
        {
          'border-black/15': scheme === 'light',
        },
      )}
      from='/'
    >
      <motion.div
        className='h-full w-full'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        transition={{ bounce: 0 }}
        cursor-content={GL.open}
        onClick={onOpenCase}
        {...props}
      >
        <Image
          className='w-full object-cover'
          parentClassName='bg-black'
          animate={{
            scale: isHovered && isDesktop ? 1.1 : 1,
            filter: isHovered && isDesktop ? 'blur(10px)' : 'blur(0px)',
            opacity: isHovered && isDesktop ? 0.5 : 1,
          }}
          src={`/cases/${image}`}
          maxWidth='100%'
          minHeight={isDesktop ? '37vh' : '67vw'}
        />
        <motion.div
          initial={false}
          className={cn(
            `flex w-full flex-col gap-7 p-[50px] max-md:gap-4 max-md:bg-[#141414]/0 max-md:p-8 md:pointer-events-none md:absolute
            md:bottom-0`,
            {
              'max-md:bg-[#F2F2F2]/0': scheme === 'light',
            },
          )}
          variants={cardTextVariants}
          animate={isHovered || !isDesktop ? 'hovered' : 'default'}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className='flex flex-col max-md:gap-2.5'>
            <h1 className='text-[40px] font-bold max-md:text-2xl'>{L.caseTitle as string}</h1>
            <DateRange
              className={scheme === 'light' ? 'text-black/65' : 'text-white/65'}
              startDate={startDate}
              endDate={endDate}
            />
          </div>
          <p
            className={cn('text-xl text-white/65 max-md:text-base', {
              'text-black/65': scheme === 'light',
            })}
          >
            {L.caseDescription as string}
          </p>
        </motion.div>
      </motion.div>
    </Link>
  );
}
