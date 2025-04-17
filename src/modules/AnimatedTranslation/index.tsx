import { useCasesStore } from '@/stores/cases';
import { AnimationDefinition, motion, Variants } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router';

export const AnimatedTranslation = ({ children }: PropsWithChildren) => {
  const pageOptions = useCasesStore((state) => state.caseOption);
  const navigate = useNavigate();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: '100%',
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const onAnimationComplete = (def: AnimationDefinition) => {
    if (def !== 'visible') return;
    navigate(pageOptions.link);
  };

  return (
    <motion.div
      initial={false}
      animate={pageOptions.open ? 'visible' : 'hidden'}
      variants={variants}
      style={{ background: pageOptions.background }}
      onAnimationComplete={onAnimationComplete}
      transition={{ bounce: false, duration: 0.8, ease: 'easeInOut' }}
      className='fixed top-0 left-0 h-full w-full'
    >
      {children}
    </motion.div>
  );
};
