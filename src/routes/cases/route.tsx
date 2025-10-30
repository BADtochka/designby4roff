import { useCaseRoutes } from '@/hooks/useCaseRoutes';
import { useDevice } from '@/hooks/useDevice';
import { CaseHeader } from '@/modules/CaseHeader';
import Footer from '@/modules/Footer';
import OtherCases from '@/modules/OtherCases';
import { useCasesStore } from '@/stores/cases';
import { CasesCategory } from '@/types/Cases';
import { cn } from '@/utils/cn';
import { Outlet, useLocation } from '@tanstack/react-router';
import { useEffect, useRef } from 'react';

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  const setCaseOptions = useCasesStore((state) => state.setCaseOptions);
  const setSelectedCategory = useCasesStore((state) => state.setSelectedCategory);
  const { isMobile } = useDevice();
  const caseOptions = useCasesStore((state) => state.caseOptions);
  const { currentCase } = useCaseRoutes();
  const { pathname } = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!currentCase) return;
    setCaseOptions({
      background: currentCase.config.background ?? 'black',
      scheme: currentCase.config.scheme ?? 'dark',
      borderColor: currentCase.config.borderColor,
      logo: currentCase.config.logo ?? '/cases/exampleLogo.png',
      gap: currentCase.config.gap ?? 64,
    });

    setSelectedCategory(pathname.split('/')[2] as CasesCategory);
  }, [currentCase]);

  useEffect(() => {
    if (!containerRef.current || pathname === '/') return;
    containerRef.current.scroll(0, 0);
  }, [pathname]);

  return (
    <div
      ref={containerRef}
      style={{
        background: caseOptions.background,
        color: caseOptions.scheme === 'dark' ? 'white' : 'black',
      }}
      className={cn('fixed top-0 left-0 z-20 h-full w-full overflow-auto px-[150px] pb-10 max-md:px-4', {
        'overflow-hidden max-md:!pr-6': pathname === '/',
      })}
      data-lenis-prevent
    >
      <CaseHeader containerRef={containerRef} />
      <div className='flex flex-col' style={{ gap: isMobile ? 40 : (caseOptions.gap ?? 64) }}>
        <Outlet />
        <OtherCases />
        <Footer borderColor={caseOptions.borderColor} mode={caseOptions.scheme} inCase />
      </div>
    </div>
  );
}
