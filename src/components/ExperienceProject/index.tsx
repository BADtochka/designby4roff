import { useI18nContext } from '@/i18n/i18n-react';
import { ExpericenceKeys, ExperienceData } from '@/types/Cases';

interface ExperienceProjectProps extends ExperienceData {
  keyName: ExpericenceKeys;
}

export default function ExperienceProject({ keyName, post, image, startDate, endDate }: ExperienceProjectProps) {
  const { LL } = useI18nContext();

  return (
    <div className='flex justify-between border-b border-[#ffffff28] px-16 py-[50px]'>
      <div className='flex gap-8'>
        <img src={`experiences/${image}`} alt='' className='size-20 rounded-full object-cover' />
        <div className='flex flex-col gap-3'>
          <h1 className='text-xl font-bold'>{LL.blocks.experienceList[keyName].name()}</h1>
          <div className='flex flex-col gap-2.5'>
            <p className='font-semibold'>{post}</p>
            <p className='text-sm text-white/65'>{`${startDate.toString()} - ${endDate?.toString()}`}</p>
          </div>
        </div>
      </div>
      <p className='max-w-[936px] text-white/70'>{LL.blocks.experienceList[keyName].description()}</p>
    </div>
  );
}
