import { useI18nContext } from '@/i18n/i18n-react';
import { Translation } from '@/i18n/i18n-types';
import Image from '../Image';

type CardKeys = keyof Translation['blocks']['oneMoreThing']['cards'];

type ThingCardProps = {
  type: CardKeys;
  meta?: boolean;
};

export default function ThingCard({ meta, type }: ThingCardProps) {
  const { LL } = useI18nContext();

  return (
    <div className='flex flex-col gap-9 overflow-hidden rounded-[20px] border border-[#ffffff1e] p-[50px]'>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-6'>
          <h1 className='text-[28px] font-bold whitespace-pre-wrap'>{LL.blocks.oneMoreThing.cards[type].title()}</h1>
          <div className='flex flex-col'>
            <p className='text'>{LL.blocks.oneMoreThing.cards[type].category()}</p>
            {'TODO: add DateRange'}
            <p></p>
          </div>
        </div>
        <div className='relative size-[100px]'>
          <Image src={`${type}.png`} className='rounded-full' />
          <Image
            src={`${type}.png`}
            className='absolute -top-2/3 -right-2/3 -z-10 min-h-60 min-w-60 opacity-50 blur-3xl'
          />
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        <p className='text-white/80'>{LL.blocks.oneMoreThing.cards[type].description()}</p>
        {meta && <p className='text-xs text-white/50'>{LL.blocks.oneMoreThing.meta()}</p>}
      </div>
    </div>
  );
}
