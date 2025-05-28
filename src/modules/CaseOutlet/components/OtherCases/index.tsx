import { casesList } from '@/contants/casesList';
import { useCasesStore } from '@/stores/cases';
import { getObjectKeys } from '@/utils/getObjectKeys';
import { lazy } from 'react';
const CaseCard = lazy(() => import('@/components/CaseCard'));

export default function OtherCases() {
  const selectedCategory = useCasesStore((state) => state.selectedCategory);
  const caseOption = useCasesStore((state) => state.caseOptions);
  const casesKeys = getObjectKeys(casesList[selectedCategory])
    .filter((key) => key !== caseOption.key)
    .slice(0, 2);

  return (
    <div className='flex flex-col gap-6'>
      <h1 className='px-2.5 text-center text-[32px] font-extrabold'>ДРУГИЕ РАБОТЫ</h1>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))] gap-[30px] max-md:grid-cols-1'>
        {casesKeys.map((key) => (
          <CaseCard
            key={key}
            keyName={key}
            mode={caseOption.scheme}
            category={selectedCategory}
            style={{ borderColor: caseOption.borderColor }}
            {...casesList[selectedCategory][key]}
          />
        ))}
      </div>
    </div>
  );
}
