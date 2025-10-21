import { cn } from '@/utils/cn';
import { HTMLMotionProps, motion, Variants } from 'framer-motion';
import { CSSProperties, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export interface ImageProps extends HTMLMotionProps<'img'> {
  maxWidth?: CSSProperties['maxWidth'];
  minHeight?: CSSProperties['maxHeight'];
  parentClassName?: string;
}

export default function Image({ src, maxWidth, minHeight, className, parentClassName, ...props }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  const imageVariants: Variants = {
    loading: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
    loaded: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div
      ref={ref}
      className={cn('flex', parentClassName)}
      style={{ maxWidth, minHeight, width: maxWidth && '100%', height: minHeight && '100%' }}
    >
      <motion.img
        className={cn('h-auto w-full', className)}
        src={src}
        initial='loading'
        animate={isLoaded ? 'loaded' : 'loading'}
        variants={imageVariants}
        fetchPriority='high'
        decoding='async'
        loading='lazy'
        onLoad={() => setIsLoaded(true)}
        alt={`${src?.slice(0, 6)}... image`}
        transition={{ bounce: 0 }}
        {...props}
      />
    </div>
  );
}
