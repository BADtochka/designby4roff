import { useLocalization } from '@/hooks/useLocalization';
import { StringDate } from '@/types/StringDate';
import { T } from '@/utils/defineLocalization';
import DateRange from '../DateRange';
import Image from '../Image';

type ThingCardProps = {
  title: string;
  description: string;
  category: string;
  type: 'photoshop' | 'premiere' | 'afterEffects';
  meta?: boolean;
  startDate: StringDate;
  endDate?: StringDate;
};

const localization = T({
  ru: {
    meta: '*Продукт признан экстремистским и запрещен на территории России.',
  },
  en: {
    meta: '*The product is considered extremist and banned in Russia.',
  },
});

export default function ThingCard({ title, description, category, meta, type, startDate, endDate }: ThingCardProps) {
  const { L } = useLocalization(localization);

  return (
    <div className='flex flex-col gap-9 overflow-hidden rounded-[20px] border border-[#ffffff1e] p-[50px]'>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-6'>
          <h1 className='text-[28px] font-bold whitespace-pre-wrap'>{title}</h1>
          <div className='flex flex-col gap-2.5'>
            <p className='text'>{category}</p>
            <DateRange startDate={startDate} endDate={endDate} />
          </div>
        </div>
        <div className='relative size-[100px]'>
          <Image src={`/${type}.png`} className='rounded-full' />
          <Image
            src={`/${type}.png`}
            className='absolute -top-2/3 -right-2/3 -z-10 min-h-60 min-w-60 opacity-50 blur-3xl'
          />
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        <p className='text-white/80'>{description}</p>
        {meta && <p className='text-xs text-white/50'>{L.meta}</p>}
      </div>
    </div>
  );
}
