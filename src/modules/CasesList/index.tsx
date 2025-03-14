import CaseCard from '@/components/CaseCard';
import { casesList } from '@/contants/casesList';
import { CaseKeys } from '@/types/Cases';
import { getObjectKeys } from '@/utils/getObjectKeys';
import { isOdd } from '@/utils/isOdd';

export default function CasesList() {
  const casesKeys = getObjectKeys(casesList);
  const secondGroupIndex = casesKeys.length - 3;
  const isCountOdd = isOdd(casesKeys.length);

  return (
    <div className='flex flex-col gap-10'>
      <div className='grid grid-cols-2 gap-10'>
        {casesKeys.map(
          (key, index) =>
            index < secondGroupIndex && (
              <CaseCard
                key={index}
                keyName={key as CaseKeys}
                className={`${!isCountOdd && index + 1 === secondGroupIndex && 'col-span-2 h-[500px]'}`}
                {...casesList[key]}
              />
            ),
        )}
      </div>
      <div
        className='grid grid-cols-3 gap-10 *:col-start-1 *:col-end-2 *:last:col-start-2 *:last:col-end-4 *:last:row-span-2
          *:last:row-start-1'
      >
        {casesKeys.map(
          (key, index) =>
            index >= secondGroupIndex && <CaseCard key={key} keyName={key as CaseKeys} {...casesList[key]} />,
        )}
      </div>
    </div>
  );
}
