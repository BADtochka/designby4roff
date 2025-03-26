import { cn } from '@/utils/cn';
import { HTMLMotionProps, motion, Variants } from 'framer-motion';
import { CSSProperties, useState } from 'react';

interface ImageProps extends HTMLMotionProps<'img'> {
  maxWidth?: CSSProperties['maxWidth'];
  minHeight?: CSSProperties['maxHeight'];
  parentClassName?: string;
}

export default function Image({ src, maxWidth, minHeight, className, parentClassName, ...props }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const imageVariants: Variants = {
    loading: {
      opacity: 0,
    },
    loaded: {
      opacity: 1,
      // transitionEnd: {
      //   opacity: 'revert-layer',
      // },
    },
  };

  src?.includes('card') && console.log(src, isLoaded);

  return (
    <div
      className={cn('flex', parentClassName)}
      style={{ maxWidth, minHeight, width: maxWidth && '100%', height: minHeight && '100%' }}
    >
      <motion.img
        className={cn('h-auto w-full', className)}
        src={src}
        initial='loading'
        animate={isLoaded ? 'loaded' : 'loading'}
        variants={imageVariants}
        loading='lazy'
        onLoad={() => setIsLoaded(true)}
        alt={`${src!.slice(0, 6)}... image`}
        {...props}
      />
    </div>
  );
}
