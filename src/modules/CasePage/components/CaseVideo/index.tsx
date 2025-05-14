import Icon from '@/components/Icons';
import { useCasesStore } from '@/stores/cases';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import { useRef, useState, VideoHTMLAttributes } from 'react';

interface CaseVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {}

export default function CaseVideo({ src, className, ...props }: CaseVideoProps) {
  const [paused, setPaused] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const caseOption = useCasesStore((state) => state.caseOptions);

  const onPlay = () => {
    if (!videoRef.current || !paused) return;
    videoRef.current.play();
  };

  const onPlaying = () => setPaused(false);
  const onLoaded = () => setLoaded(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded ? 1 : 0 }}
      className={cn(className, 'relative max-h-[900px] overflow-hidden rounded-[20px] object-cover')}
    >
      <video
        ref={videoRef}
        className='w-full bg-black'
        autoPlay
        muted
        loop
        preload='auto'
        onPlaying={onPlaying}
        onLoadedData={onLoaded}
        {...props}
      >
        <source className='bg-black' src={src} />
      </video>
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
