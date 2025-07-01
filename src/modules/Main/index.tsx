import Block from '@/components/Block';
import Button from '@/components/Button';
import CopyButton from '@/components/CopyButton';
import DesignBy from '@/components/DesignBy';
import GridBackground from '@/components/GridBackground';
import Icon from '@/components/Icon';
import Package from '@/components/Package';
import SocLinks from '@/components/SocLinks';
import Time from '@/components/Time';
import { GLOBAL_LOCALIZATION } from '@/constants/globalLocalization';
import { useLocalization } from '@/hooks/useCaseLocalization';
import { useDevice } from '@/hooks/useDevice';
import { useHashSetter } from '@/hooks/useHashSetter';
import { T } from '@/utils/defineLocalization';

export type TempLightSource = {
  color?: string;
  intensity: number;
};

const localization = T({
  ru: {
    description: 'Продуктовый & игровой дизайн',
  },
  en: {
    description: 'Product & Game Design',
  },
});

export function Main() {
  const { L } = useLocalization(localization);
  const { L: GL } = useLocalization(GLOBAL_LOCALIZATION);
  const { isDesktop } = useDevice();
  const { ref } = useHashSetter({ hash: 'main' });

  return (
    <Block ref={ref} id='main' className='relative flex h-[calc(100vh-60px)] flex-col justify-between max-md:pb-8'>
      <div className='flex w-full items-center justify-between'>
        <Icon name='logo' className='size-10' />
        <div className='flex items-center gap-4'>
          <CopyButton className='h-[54px]' iconRight='copy'>
            4roffdesign@gmail.com
          </CopyButton>
          <Button
            iconSize={!isDesktop ? '24' : undefined}
            className='h-[54px] border-0 bg-[#08C] hover:bg-[#006DA3] max-md:h-[50px] max-md:w-[50px]'
            iconRight='telegram'
          >
            {isDesktop && GL.buttons.contact}
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
        <p className='absolute bottom-24 font-extrabold uppercase max-md:bottom-44'>{L.description}</p>
        <DesignBy />
        <GridBackground />
        <Package />
      </div>
    </Block>
  );
}
