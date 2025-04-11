import Button, { ButtonProps } from '@/components/Button';
import Icon from '@/components/Icons';
import { useI18nContext } from '@/i18n/i18n-react';
import { delay } from '@/utils/delay';
import { motion, useAnimation, Variants } from 'framer-motion';

interface CopyButtonProps extends ButtonProps {
  content?: string;
}

export default function CopyButton({ content, children, ...props }: CopyButtonProps) {
  const { LL } = useI18nContext();
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
      <Button {...props} onClick={onCopyClick}>
        {children}
      </Button>
      <motion.div
        initial='hidden'
        variants={tooltipVariants}
        animate={controls}
        className='pointer-events-none absolute left-1/2 flex -translate-x-1/2 translate-y-2 items-center gap-1.5 rounded-[8px]
          bg-[#525252] px-3.5 py-1.5'
      >
        <Icon name='check' />
        <p>{LL.buttons.copyTooltip()}</p>
      </motion.div>
    </div>
  );
}
