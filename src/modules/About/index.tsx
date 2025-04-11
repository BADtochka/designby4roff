import Block from '@/components/Block';
import Button from '@/components/Button';
import Image from '@/components/Image';
import { useHashSetter } from '@/hooks/useHashSetter';
import { useI18nContext } from '@/i18n/i18n-react';

export default function About() {
  const { LL } = useI18nContext();
  const { ref } = useHashSetter({ hash: 'about' });

  return (
    <div ref={ref} id='about' className='flex flex-col gap-[50px] max-md:gap-5'>
      <Block className='flex h-[720px] flex-col items-center justify-center gap-5 max-md:h-[370px]'>
        <h1 className='text-[80px] font-extrabold uppercase max-md:text-[40px]'>{LL.about()}</h1>
        <p className='text-base text-white/30'>{LL.blocks.about.description()}</p>
      </Block>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-10'>
          <div className='flex gap-10 max-md:flex-col'>
            <Block className='flex min-h-64 w-fit items-center p-16 text-xl leading-8 text-white/70 max-md:p-8 max-md:text-base'>
              {LL.blocks.about.personalInfo()}
            </Block>
            <Image src='portrait.jpg' className='aspect-square rounded-[20px] object-cover max-lg:w-full md:max-w-64' />
          </div>
        </div>
        <div className='grid grid-cols-2 grid-rows-[1fr_1fr_72px] place-items-start gap-x-10 gap-y-3 max-xl:flex max-xl:flex-col max-xl:gap-5'>
          <Image
            src='portrait2.png'
            className='object-cover'
            parentClassName='row-span-3 overflow-hidden h-full w-full rounded-[20px] max-xl:col-span-2'
          />
          <Block className='row-span-2 flex h-full items-center p-16 text-xl leading-8 text-white/70 max-xl:-order-1 max-md:p-8 max-md:text-base'>
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
    </div>
  );
}
