import Button from '@/components/Button';
import Icon from '@/components/Icon';
import Image from '@/components/Image';
import { useCaseRoutes } from '@/hooks/useCaseRoutes';
import { useDevice } from '@/hooks/useDevice';
import { useLocalization } from '@/hooks/useLocalization';
import { useCasesStore } from '@/stores/cases';
import { cn } from '@/utils/cn';
import { useNavigate } from '@tanstack/react-router';
import { RefObject, useEffect, useState } from 'react';

type CaseHeaderProps = {
  containerRef: RefObject<HTMLDivElement | null>;
};

export const CaseHeader = ({ containerRef }: CaseHeaderProps) => {
  const { currentCase } = useCaseRoutes();
  const navigate = useNavigate();
  const caseOptions = useCasesStore((state) => state.caseOptions);
  const { isMobile } = useDevice();
  const { L } = useLocalization(currentCase?.localization);
  const [scrolled, setScrolled] = useState(false);

  const onCloseCase = () => {
    navigate({ to: '/' });
  };

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.addEventListener('scroll', () => {
      setScrolled(containerRef.current!.scrollTop > 100);
    });
  }, []);

  return (
    <div
      className='sticky top-0 left-0 z-100 mb-10 flex w-full transition-colors duration-300'
      style={{ background: scrolled ? caseOptions.background : 'transparent' }}
    >
      <div className='flex w-full items-center justify-between py-5 max-md:mb-5'>
        <Icon
          onClick={onCloseCase}
          name='logo'
          className='size-10 min-w-10 transition-transform hover:scale-110 max-md:size-8'
        />
        <div className='mx-4 flex items-center gap-2'>
          <Image src={caseOptions.logo} className='size-7 min-w-7 max-md:hidden' />
          <h1 className='font-extrabold break-all uppercase max-sm:line-clamp-1'>{L.caseTitle as string}</h1>
        </div>
        <Button
          iconLeft='close'
          animation={false}
          onClick={onCloseCase}
          iconSize={isMobile ? '16px' : '20px'}
          className={cn(
            'size-[60px] bg-transparent p-[18px] text-white max-md:size-10 max-md:p-2 max-sm:size-8 max-sm:p-1',
            {
              'bg-[#29292951] hover:border-black/20': caseOptions.scheme === 'light',
            },
          )}
        />
      </div>
    </div>
  );
};
