import { useCasesStore } from '@/stores/cases';
import { delay } from '@/utils/delay';
import { AnimationDefinition, motion, Variants } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router';

export const AnimatedTranslation = ({ children }: PropsWithChildren) => {
  const newCaseOptions = useCasesStore((state) => state.newCaseOptions);
  const setCaseOptions = useCasesStore((state) => state.setCaseOptions);
  const navigate = useNavigate();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      transitionEnd: {
        y: '100%',
      },
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const onAnimationStart = async (def: AnimationDefinition) => {
    if (def !== 'visible') return;
    await delay(750);
    setCaseOptions(newCaseOptions);
    navigate(newCaseOptions.link);
  };

  return (
    <motion.div
      initial={false}
      animate={newCaseOptions.open ? 'visible' : 'hidden'}
      variants={variants}
      style={{ background: newCaseOptions.background }}
      onAnimationStart={onAnimationStart}
      transition={{ bounce: false, duration: 0.8, ease: 'easeInOut' }}
      className='fixed top-0 left-0 z-100 h-full w-full'
    >
      {children}
    </motion.div>
  );
};
