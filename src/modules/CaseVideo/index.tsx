import Icon from '@/components/Icon';
import { useCasesStore } from '@/stores/cases';
import { cn } from '@/utils/cn';
import { tryCatch } from '@/utils/tryCatch';
import { HTMLMotionProps, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface CaseVideoProps extends HTMLMotionProps<'video'> {
  noBorder?: boolean;
}

export default function CaseVideo({ src, className, noBorder, ...props }: CaseVideoProps) {
  const [paused, setPaused] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const caseOption = useCasesStore((state) => state.caseOptions);
  const { ref, inView } = useInView({ threshold: 0.5 });

  const onPlay = () => {
    if (!videoRef.current || !paused) return;
    tryCatch(videoRef.current.play());
  };

  useEffect(() => {
    if (!inView) return;
    onPlay();
  }, [inView]);

  const onPlaying = () => setPaused(false);

  return (
    <motion.div
      ref={ref}
      className={cn(
        className,
        'relative max-h-[900px] overflow-hidden rounded-[40px] border border-[#383838]/25 object-cover max-md:rounded-4xl',
        {
          '!border-transparent': noBorder,
        },
      )}
      style={{ borderColor: caseOption.borderColor }}
    >
      <motion.video
        ref={videoRef}
        className='w-full bg-black'
        muted
        loop
        playsInline
        preload='auto'
        onPlaying={onPlaying}
        {...props}
      >
        <source className='bg-black' src={src} />
      </motion.video>
      <motion.div
        animate={{ opacity: paused ? 1 : 0 }}
        onClick={onPlay}
        className={cn('absolute inset-0 z-10 flex items-center justify-center bg-black/25', {
          'bg-[#383838]/25': caseOption.scheme === 'light',
        })}
      >
        <Icon name='play' className='size-16 text-white' />
      </motion.div>
    </motion.div>
  );
}
