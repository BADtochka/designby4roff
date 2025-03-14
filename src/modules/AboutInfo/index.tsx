import Block from '@/components/Block';
import Button from '@/components/Button';
import { useI18nContext } from '@/i18n/i18n-react';

export default function AboutInfo() {
  const { LL } = useI18nContext();

  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col gap-10'>
        <div className='flex gap-10 max-md:flex-col'>
          <Block className='flex min-h-64 w-fit items-center p-16 text-xl leading-8 text-white/70'>
            {LL.blocks.about.personalInfo()}
          </Block>
          <img src='portrait.jpg' className='aspect-square rounded-[20px] object-cover max-lg:w-full md:max-w-64' />
        </div>
      </div>
      <div className='grid grid-cols-2 grid-rows-[1fr_1fr_72px] place-items-start gap-x-10 gap-y-3 max-xl:flex max-xl:flex-col max-xl:gap-5'>
        <img src='portrait2.png' className='row-span-3 h-full w-full rounded-[20px] object-cover max-xl:col-span-2' />
        <Block className='row-span-2 flex h-full items-center p-16 text-xl leading-8 text-white/70 max-xl:-order-1'>
          {LL.blocks.about.personalInfo2()}
        </Block>
        <div className='col-start-2 row-start-3 flex w-full items-center gap-2.5 max-xl:flex-col'>
          <Button className='w-full gap-4 border-0 bg-[#08C] hover:bg-[#006DA3]' iconLeft='telegram'>
            {LL.blocks.about.blogButton()}
          </Button>
          <div className='flex items-center gap-2.5'>
            <Button className='shrink-0' iconLeft='behance' />
            <Button className='shrink-0' iconLeft='dprofile' />
            <Button className='shrink-0' iconLeft='dribble' />
          </div>
        </div>
      </div>
    </div>
  );
}
