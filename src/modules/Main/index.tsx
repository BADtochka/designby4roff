import { useHashSetter } from '@/hooks/useHashSetter';
import { useResolution } from '@/hooks/useResolution';
import { useI18nContext } from '@/i18n/i18n-react';
import { lazy } from 'react';

const CopyButton = lazy(() => import('@/components/CopyButton'));
const Block = lazy(() => import('@/components/Block'));
const Button = lazy(() => import('@/components/Button'));
const DesignBy = lazy(() => import('@/components/DesignBy'));
const GridBackground = lazy(() => import('@/components/GridBackground'));
const Icon = lazy(() => import('@/components/Icons'));
const SocLinks = lazy(() => import('@/components/SocLinks'));
const Time = lazy(() => import('@/components/Time'));

export default function Main() {
  const { LL } = useI18nContext();
  const { isDesktop } = useResolution();
  const { ref } = useHashSetter({ hash: 'main' });

  return (
    <Block ref={ref} id='main' className='relative flex h-[calc(100vh-60px)] flex-col justify-between max-md:pb-8'>
      <div className='flex w-full items-center justify-between'>
        <Icon name='logo' className='size-10' />
        <div className='items-cente flex gap-4'>
          <CopyButton className='h-[54px]' iconRight='copy'>
            4roffdesign@gmail.com
          </CopyButton>
          <Button
            iconSize={!isDesktop ? '24' : undefined}
            className='h-[54px] border-0 bg-[#08C] hover:bg-[#006DA3] max-md:h-[50px] max-md:w-[50px]'
            iconRight='telegram'
          >
            {isDesktop && LL.buttons.contact()}
          </Button>
        </div>
      </div>
      <div className='flex items-center justify-between max-md:flex-col max-md:gap-10'>
        <Time />
        <SocLinks />
      </div>
      <div
        className='pointer-events-none absolute top-1/2 left-1/2 flex size-full max-h-[800px] max-w-[1000px] -translate-1/2 items-center
          justify-center'
      >
        <p className='absolute bottom-24 font-extrabold uppercase max-md:bottom-44'>{LL.blocks.main.description()}</p>
        <DesignBy />
        <GridBackground />
      </div>
    </Block>
  );
}
