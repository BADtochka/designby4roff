import { useI18nContext } from '@/i18n/i18n-react';
import { ExpericenceKeys, ExperienceData } from '@/types/Cases';
import DateRange from '../DateRange';
import Image from '../Image';

interface ExperienceProjectProps extends ExperienceData {
  keyName: ExpericenceKeys;
}

export default function ExperienceProject({ keyName, post, image, startDate, endDate }: ExperienceProjectProps) {
  const { LL } = useI18nContext();

  return (
    <div className='flex justify-between gap-10 border-b border-[#ffffff28] px-16 py-[50px] max-md:flex-col max-md:gap-10 max-md:p-8'>
      <div className='flex gap-8 max-md:flex-col'>
        <Image src={`experiences/${image}`} alt='' className='size-20 rounded-full object-cover' loading='lazy' />
        <div className='flex flex-col gap-3'>
          <h1 className='text-xl font-bold'>{LL.blocks.experienceList[keyName].name()}</h1>
          <div className='flex flex-col gap-2.5'>
            <p className='font-semibold'>{post}</p>
            <DateRange startDate={startDate} endDate={endDate} />
          </div>
        </div>
      </div>
      <p className='w-full max-w-[936px] text-white/70'>{LL.blocks.experienceList[keyName].description()}</p>
    </div>
  );
}
