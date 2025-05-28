import { useSystemStore } from '@/stores/system';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type UseHashSetter = {
  hash: string;
};

export const useHashSetter = ({ hash }: UseHashSetter) => {
  const setCurrentBlock = useSystemStore((state) => state.setCurrentHash);
  const { ref, inView } = useInView({
    delay: 0,
    threshold: 0.5,
  });

  useEffect(() => {
    if (!inView) return;
    // location.hash = hash;
    setCurrentBlock(hash);
  }, [inView]);

  return { ref };
};
