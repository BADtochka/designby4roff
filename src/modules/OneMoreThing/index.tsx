import Block from '@/components/Block';
import ThingCard from '@/components/ThingCard';
import { useHashSetter } from '@/hooks/useHashSetter';
import { useI18nContext } from '@/i18n/i18n-react';

export default function OneMoreThing() {
  const { LL } = useI18nContext();
  const { ref } = useHashSetter({ hash: 'oneMoreThing' });

  return (
    <div ref={ref} id='oneMoreThing' className='flex flex-col gap-[50px] max-md:gap-5'>
      <Block className='flex h-[720px] flex-col items-center justify-center gap-5 max-md:h-[370px]'>
        <h1 className='text-center text-[80px] font-extrabold uppercase max-md:text-[40px]'>
          {LL.blocks.oneMoreThing.title()}
        </h1>
        <p className='text-center text-base text-white/30'>{LL.blocks.oneMoreThing.description()}</p>
      </Block>
      <div
        className='grid grid-cols-[repeat(auto-fit,minmax(372px,1fr))] justify-center gap-6 max-xl:*:last:col-span-2 max-md:flex
          max-md:flex-col'
      >
        <ThingCard type='photoshop' meta />
        <ThingCard type='premiere' />
        <ThingCard type='afterEffects' />
      </div>
    </div>
  );
}
