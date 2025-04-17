import { useSystemStore } from '@/stores/system';
import { useLenis } from 'lenis/react';
import { useEffect } from 'react';

export const useStickyScroll = () => {
  const currentHash = useSystemStore((state) => state.currentHash);
  const setCurrentHash = useSystemStore((state) => state.setCurrentHash);
  const lenis = useLenis();

  const scrollToBlock = (blockId: string) => {
    const element = document.querySelector(`#${blockId}`) as HTMLDivElement;
    lenis?.scrollTo(element, { offset: -30 });
    setCurrentHash(blockId);
  };

  useEffect(() => {
    const onContentLoaded = () => {
      if (!currentHash) return;
      const targetFromHash = document.querySelector<HTMLElement>(`#${currentHash}`);
      if (!targetFromHash) return;
      targetFromHash.scrollIntoView({ block: 'start', inline: 'end', behavior: 'instant' });
    };

    onContentLoaded();

    return () => {};
  }, []);

  return { currentHash, scrollToBlock };
};
