import Block from '@/components/Block';
import Button from '@/components/Button';
import CopyButton from '@/components/CopyButton';
import Icon from '@/components/Icons';
import SocLinks from '@/components/SocLinks';
import { useI18nContext } from '@/i18n/i18n-react';
import DesignBy from '@/components/DesignBy';
import GridBackground from '@/components/GridBackground';
import Time from '@/components/Time';

export default function Main() {
  const { LL } = useI18nContext();

  return (
    <Block className='relative flex h-[calc(100vh-60px)] flex-col justify-between'>
      <div className='flex w-full items-center justify-between'>
        <Icon name='logo' className='size-10' />
        <div className='items-cente flex gap-4'>
          <CopyButton className='h-[54px]' iconRight='copy'>
            4roffdesign@gmail.com
          </CopyButton>
          <Button className='h-[54px] border-0 bg-[#08C] hover:bg-[#006DA3]' iconRight='telegram'>
            {LL.buttons.contact()}
          </Button>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <Time />
        <SocLinks />
      </div>
      <div
        className='pointer-events-none absolute top-1/2 left-1/2 flex size-full max-h-[800px] max-w-[1000px] -translate-1/2 items-center
          justify-center'
      >
        <p className='absolute bottom-24 font-extrabold uppercase'>{LL.blocks.main.description()}</p>
        <DesignBy />
        <GridBackground />
      </div>
    </Block>
  );
}
