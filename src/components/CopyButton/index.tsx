import Button, { ButtonProps } from '@/components/Button';
import Icon from '@/components/Icon';
import { GLOBAL_LOCALIZATION } from '@/constants/globalLocalization';
import { useLocalization } from '@/hooks/useCaseLocalization';
import { CaseOptions } from '@/stores/cases';
import { cn } from '@/utils/cn';
import { delay } from '@/utils/delay';
import { motion, useAnimation, Variants } from 'framer-motion';
import { memo } from 'react';

interface CopyButtonProps extends ButtonProps {
  content?: string;
  mode?: CaseOptions['scheme'];
}

export const CopyButton = ({ content, children, className, mode = 'dark', ...props }: CopyButtonProps) => {
  const { L: GL } = useLocalization(GLOBAL_LOCALIZATION);
  const controls = useAnimation();

  const tooltipVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const onCopyClick = async () => {
    if (!children) return;
    navigator.clipboard.writeText(content ?? String(children));
    controls.start('visible');
    await delay(1000);
    controls.start('hidden');
  };

  return (
    <div className='relative'>
      <Button
        className={cn(className, {
          'border-[#00000029] hover:border-black/50': mode === 'light',
        })}
        {...props}
        onClick={onCopyClick}
      >
        {children}
      </Button>
      <motion.div
        initial='hidden'
        variants={tooltipVariants}
        animate={controls}
        className={cn(
          `pointer-events-none absolute left-1/2 flex -translate-x-1/2 translate-y-2 items-center gap-1.5 rounded-[8px]
          bg-[#525252] px-3.5 py-1.5`,
          {
            'bg-[#9c9c9c] text-white': mode === 'light',
          },
        )}
      >
        <Icon name='check' />
        <p>{GL.buttons.copyTooltip}</p>
      </motion.div>
    </div>
  );
};

export default memo(CopyButton);
