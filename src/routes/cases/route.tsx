import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { useCaseRoutes } from '@/hooks/useCaseRoutes';
import { useLocalization } from '@/hooks/useLocalization';
import Footer from '@/modules/Footer';
import OtherCases from '@/modules/OtherCases';
import { useCasesStore } from '@/stores/cases';
import { cn } from '@/utils/cn';
import { Navigate, Outlet, useLocation, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';

export const Route = createFileRoute({
  component: RouteComponent,
  errorComponent: () => <Navigate to='/' />,
});

function RouteComponent() {
  const setCaseOptions = useCasesStore((state) => state.setCaseOptions);
  const caseOptions = useCasesStore((state) => state.caseOptions);
  const navigate = useNavigate();
  const { currentCase } = useCaseRoutes();
  const { L } = useLocalization(currentCase?.localization);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!currentCase) return;
    setCaseOptions({
      background: currentCase.config.background ?? 'black',
      scheme: currentCase.config.scheme ?? 'dark',
      borderColor: currentCase.config.borderColor,
    });
  }, [currentCase]);

  const onCloseCase = () => {
    navigate({ to: '/' });
  };

  return (
    <div
      style={{
        background: caseOptions.background,
        color: caseOptions.scheme === 'dark' ? 'white' : 'black',
      }}
      className={cn('fixed top-0 left-0 z-20 h-full w-full overflow-auto px-20 pb-10 max-md:px-4', {
        'overflow-hidden max-md:!pr-6': pathname === '/',
      })}
      data-lenis-prevent
    >
      <div className='mb-10 flex items-center justify-between py-5 max-md:mb-5'>
        <Icon
          onClick={onCloseCase}
          name='logo'
          className='size-10 transition-transform hover:scale-110 max-md:size-8'
        />
        <h1 className='font-extrabold uppercase'>{L.caseTitle as string}</h1>
        <Button
          iconLeft='close'
          animation={false}
          onClick={onCloseCase}
          className={cn(
            'size-[60px] bg-transparent p-[18px] text-white max-md:size-10 max-md:p-2 max-sm:size-8 max-sm:p-1',
            {
              'bg-[#29292951] hover:border-black/20': caseOptions.scheme === 'light',
            },
          )}
        />
      </div>
      <div className='flex flex-col gap-[120px] max-md:gap-[70px] max-sm:gap-10'>
        <Outlet />
        <OtherCases />
        <Footer borderColor={caseOptions.borderColor} mode={caseOptions.scheme} inCase />
      </div>
    </div>
  );
}
