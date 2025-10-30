import Icon from '@/components/Icon';
import { useCasesStore } from '@/stores/cases';
import { CaseInfo } from '@/types/CaseInfo';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import { useState } from 'react';

export type AboutCaseInfoProps = CaseInfo;

export default function AboutCaseInfo({ title, description, url }: AboutCaseInfoProps) {
  const caseOption = useCasesStore((state) => state.caseOptions);
  const [hovered, setHovered] = useState(false);

  const onOpenUrl = () => {
    if (!url) return;
    window.open(url, '_blank');
  };

  return (
    <div className='flex w-fit flex-col gap-3'>
      <p
        className={cn('whitespace-nowrap text-white/30 max-md:text-xs', {
          'text-black/30': caseOption.scheme === 'light',
        })}
      >
        {title}
      </p>
      <div
        className='relative flex w-fit items-center gap-2 max-2xl:justify-center'
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onClick={onOpenUrl}
      >
        <p className='text-xl max-md:text-base'>{description}</p>
        {url && (
          <>
            <motion.div
              animate={{ width: hovered ? '100%' : 0 }}
              transition={{ duration: 0.3 }}
              className={cn('absolute bottom-0 left-0 h-px bg-white', {
                'bg-black': caseOption.scheme === 'light',
              })}
            />
            <Icon name='url' />
          </>
        )}
      </div>
    </div>
  );
}
