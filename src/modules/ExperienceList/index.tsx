import Block from '@/components/Block';
import ExperienceProject from '@/components/ExperienceProject';
import { experienceList } from '@/contants/experienceList';
import { ExpericenceKeys } from '@/types/Cases';
import { getObjectKeys } from '@/utils/getObjectKeys';

export default function ExperienceList() {
  const experienceKeys = getObjectKeys(experienceList);
  return (
    <Block className='p-0 *:last:border-0'>
      {experienceKeys.map((key) => (
        <ExperienceProject key={key} keyName={key as ExpericenceKeys} {...experienceList[key]} />
      ))}
    </Block>
  );
}
