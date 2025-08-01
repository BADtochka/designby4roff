import CaseCard from '@/components/CaseCard';
import { useCaseRoutes } from '@/hooks/useCaseRoutes';
import { useCasesStore } from '@/stores/cases';

export default function OtherCases() {
  const selectedCategory = useCasesStore((state) => state.selectedCategory);
  const caseOption = useCasesStore((state) => state.caseOptions);
  const { cases, currentCaseKey } = useCaseRoutes();
  const categoryCases = Object.entries(cases)
    .filter(([key]) => key.includes(`/cases/${selectedCategory}/`) && key !== currentCaseKey)
    .slice(0, 2);

  return (
    <div className='flex flex-col gap-6'>
      <h1 className='px-2.5 text-center text-[32px] font-extrabold'>ДРУГИЕ РАБОТЫ</h1>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))] gap-[30px] max-md:grid-cols-1'>
        {categoryCases.map(([key, { config, localization }]) => (
          <CaseCard
            key={key}
            link={key}
            style={{ borderColor: caseOption.borderColor }}
            localization={localization}
            {...config}
          />
        ))}
      </div>
    </div>
  );
}
