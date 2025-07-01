import { useCursorStore } from '@/stores/cursor';
import { useLocation } from '@tanstack/react-router';
import { useLenis } from 'lenis/react';
import { useEffect } from 'react';

export const useHtmlLoader = () => {
  const setCursorOptions = useCursorStore((state) => state.setOptions);
  const lenis = useLenis();
  const { pathname } = useLocation();

  useEffect(() => {
    document.querySelector<HTMLDivElement>('#loader')?.setAttribute('data-hidden', 'true');
    document.body.setAttribute('data-no-scroll', String(pathname !== '/'));
    pathname === '/' ? lenis?.start() : lenis?.stop();
    setCursorOptions({ expanded: false });
  }, [pathname]);
};
