import Block from '@/components/Block';
import ExperienceProject from '@/components/ExperienceProject';
import { experienceList } from '@/contants/experienceList';
import { useHashSetter } from '@/hooks/useHashSetter';
import { useI18nContext } from '@/i18n/i18n-react';
import { ExpericenceKeys } from '@/types/Cases';
import { getObjectKeys } from '@/utils/getObjectKeys';

export default function Experience() {
  const { LL } = useI18nContext();
  const experienceKeys = getObjectKeys(experienceList);
  const { ref } = useHashSetter({ hash: 'experience' });

  return (
    <div ref={ref} id='experience' className='flex flex-col gap-[50px] max-md:gap-5'>
      <Block className='flex h-[720px] flex-col items-center justify-center gap-5 max-md:h-[370px]'>
        <h1 className='text-[80px] font-extrabold uppercase max-md:text-[40px]'>{LL.experiense()}</h1>
        <p className='text-base text-white/30'>{LL.blocks.experience.description()}</p>
      </Block>
      <Block className='p-0 *:last:border-0 max-md:p-0'>
        {experienceKeys.map((key) => (
          <ExperienceProject key={key} keyName={key as ExpericenceKeys} {...experienceList[key]} />
        ))}
        <p className='px-16 py-[50px] text-center'>{LL.blocks.experience.andMore()}</p>
      </Block>
    </div>
  );
}
