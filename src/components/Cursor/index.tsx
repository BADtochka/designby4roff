import { useDevice } from '@/hooks/useDevice';
import { useMouse } from '@/hooks/useMouse';
import { useCursorStore } from '@/stores/cursor';
import { cn } from '@/utils/cn';
import { motion, Variants } from 'framer-motion';

export default function Cursor() {
  const cursorOptions = useCursorStore((state) => state.options);
  const { state, ref } = useMouse();
  const { isDesktop } = useDevice();

  const cursorVariants: Variants = {
    default: {
      width: 10,
      height: 10,
      opacity: 1,
    },
    withText: {
      width: 124,
      height: 124,
      transition: {
        delayChildren: 0.5,
      },
    },
    hide: {
      width: 0,
      height: 0,
      padding: 0,
      opacity: 0,
    },
    scale: {
      width: 10 * Number(cursorOptions.scale),
      height: 10 * Number(cursorOptions.scale),
    },
  };

  const cursorTextVariants: Variants = {
    default: {
      opacity: 0,
    },
    withText: {
      opacity: 1,
    },
  };

  const currentCursorVariant = cursorOptions.hide
    ? 'hide'
    : cursorOptions.expanded
      ? 'withText'
      : cursorOptions.scale !== 1
        ? 'scale'
        : 'default';
  if (!isDesktop) return;

  return (
    <div className='pointer-events-none fixed inset-0 z-20 overflow-hidden mix-blend-difference'>
      <motion.div
        ref={ref}
        animate={currentCursorVariant}
        variants={cursorVariants}
        style={{
          left: `${state.x}px`,
          top: `${state.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
        transition={{
          delayChildren: 0.5,
        }}
        className={cn('absolute flex items-center justify-center rounded-full bg-white text-black', {
          'p-4': cursorOptions.expanded,
        })}
      >
        <motion.p
          className='text-[18px]'
          variants={cursorTextVariants}
          animate={cursorOptions.expanded ? 'withText' : 'default'}
        >
          {cursorOptions.content}
        </motion.p>
      </motion.div>
    </div>
  );
}
