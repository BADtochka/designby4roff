import Block from '@/components/Block';
import Button from '@/components/Button';
import CopyButton from '@/components/CopyButton';
import LongLogo from '@/components/LongLogo';
import SocLinks from '@/components/SocLinks';
import { useI18nContext } from '@/i18n/i18n-react';
import { format } from 'date-fns';

export default function Footer() {
  const { LL } = useI18nContext();

  return (
    <Block className='flex flex-col gap-[50px] max-md:p-8'>
      <div className='flex justify-between gap-8 max-md:flex-col'>
        <div>
          <h1 className='text-[85px] font-extrabold uppercase max-md:text-center max-md:text-[32px]'>
            {LL.blocks.footer.title()}
          </h1>
          <p className='text-white/65 max-md:text-center'>{LL.blocks.footer.description()}</p>
        </div>
        <div className='flex flex-col gap-5'>
          <Button className='h-[54px] border-0 bg-[#08C] hover:bg-[#006DA3]' iconRight='telegram'>
            {LL.buttons.contact()}
          </Button>
          <CopyButton className='h-[54px] w-full' iconRight='copy'>
            4roffdesign@gmail.com
          </CopyButton>
        </div>
      </div>
      <div className='h-[1px] w-full bg-white/15' />
      <div className='flex items-center justify-between gap-[50px] pb-27 max-md:flex-col max-md:p-0'>
        <LongLogo />
        <SocLinks />
        <p className='text-white/15'>
          ©{format(new Date(), 'yyyy')} {LL.blocks.footer.copyRight()}
        </p>
      </div>
    </Block>
  );
}
