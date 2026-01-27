import Block from '@/components/Block';
import Button from '@/components/Button';
import CopyButton from '@/components/CopyButton';
import DesignBy from '@/components/DesignBy';
import GridBackground from '@/components/GridBackground';
import Icon from '@/components/Icon';
import { MobileCopyButton } from '@/components/MobileCopyButton';
import Package from '@/components/Package';
import SocLinks from '@/components/SocLinks';
import Time from '@/components/Time';
import { GLOBAL_LOCALIZATION } from '@/constants/globalLocalization';
import { socLinks } from '@/constants/socLinks';
import { useDevice } from '@/hooks/useDevice';
import { useHashSetter } from '@/hooks/useHashSetter';
import { useLocalization } from '@/hooks/useLocalization';
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
  const telegramLink = socLinks.find((link) => link.name === 'Telegram')?.url;
  return (
    <Block ref={ref} id='main' className='relative flex h-[calc(100vh-60px)] flex-col justify-between max-md:pb-8'>
      <div className='flex w-full items-center justify-between'>
        <Icon name='logo' className='size-10 transition-transform hover:scale-110 max-md:size-8' />
        <div className='flex items-center gap-4'>
          {isDesktop ? (
            <CopyButton iconRight='copy' className='h-13.5'>
              4roffdesign@gmail.com
            </CopyButton>
          ) : (
            <MobileCopyButton className='size-12.5 shrink-0' iconSize={!isDesktop ? '24px' : undefined}>
              4roffdesign@gmail.com
            </MobileCopyButton>
          )}
          <Button
            iconSize={!isDesktop ? '24px' : undefined}
            className='h-[54px] border-0 bg-[#08C] hover:bg-[#006DA3] max-md:h-[50px] max-md:w-[50px]'
            iconRight='telegram'
            link={telegramLink}
            target='_blank'
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
        <p className='absolute bottom-24 text-center font-extrabold uppercase max-md:bottom-44'>{L.description}</p>
        <DesignBy />
        <GridBackground />
        <Package />
      </div>
    </Block>
  );
}
