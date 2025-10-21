import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import { useState } from 'react';

type AnimatedLinkProps = {
  name: string;
  showDot?: boolean;
};

export const AnimatedLink = ({ showDot, name }: AnimatedLinkProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      key={name}
      className='flex items-center gap-2.5'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      cursor-scale={2}
    >
      {showDot && <span>•</span>}
      <div className={cn('relative flex overflow-hidden transition-colors duration-300', { 'text-white': hovered })}>
        <motion.div
          initial={false}
          transition={{ duration: 0.3 }}
          className={cn('absolute flex items-center gap-1.5')}
          animate={{ y: hovered ? -30 : 0 }}
        >
          {name}
        </motion.div>
        <motion.div
          initial={false}
          transition={{ duration: 0.3 }}
          className={cn('flex items-center gap-1.5')}
          animate={{ y: hovered ? 0 : 30 }}
        >
          {name}
        </motion.div>
      </div>
    </div>
  );
};
