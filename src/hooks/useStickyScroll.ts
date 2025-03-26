import { useSystemStore } from '@/stores/system';
import { useLenis } from 'lenis/react';
import { useEffect } from 'react';

export const useStickyScroll = () => {
  const currentBlock = useSystemStore((state) => state.currentBlock);
  const setCurrentBlock = useSystemStore((state) => state.setCurrentBlock);
  const lenis = useLenis();

  const scrollToBlock = (blockId: string) => {
    const element = document.querySelector(`#${blockId}`) as HTMLDivElement;
    lenis?.scrollTo(element);
    setCurrentBlock(blockId);
  };

  useEffect(() => {
    const onContentLoaded = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const targetFromHash = document.querySelector<HTMLElement>(`${window.location.hash}`);
      if (!targetFromHash) return;
      // scroll.scrollTo(targetFromHash);
      targetFromHash.scrollIntoView({ block: 'start', inline: 'end', behavior: 'instant' });
    };

    onContentLoaded();

    return () => {};
  }, []);

  return { currentBlock, scrollToBlock };
};
