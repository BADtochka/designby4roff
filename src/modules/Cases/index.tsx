import Block from '@/components/Block';
import CaseCard from '@/components/CaseCard';
import { Tabs, TabsContent, TabsTab } from '@/components/Tabs';
import { GLOBAL_LOCALIZATION } from '@/constants/globalLocalization';
import { useCaseRoutes } from '@/hooks/useCaseRoutes';
import { useHashSetter } from '@/hooks/useHashSetter';
import { useLocalization } from '@/hooks/useLocalization';
import { useCasesStore } from '@/stores/cases';
import { cn } from '@/utils/cn';
import { T } from '@/utils/defineLocalization';
import { isOdd } from '@/utils/isOdd';
import { useMemo } from 'react';

const localization = T({
  ru: {
    product: 'Продуктовые',
    gaming: 'Игровые',
    worksUpdate: 'Обновил работы',
  },
  en: {
    product: 'Product',
    gaming: 'Game',
    worksUpdate: 'Updated the work',
  },
});

export default function Cases() {
  const { ref } = useHashSetter({ hash: 'cases' });
  const selectedCategory = useCasesStore((state) => state.selectedCategory);
  const setSelectedCategory = useCasesStore((state) => state.setSelectedCategory);
  const { cases } = useCaseRoutes();
  const { L } = useLocalization(localization);
  const { L: GL } = useLocalization(GLOBAL_LOCALIZATION);

  const categoryCases = useMemo(
    () => Object.entries(cases).filter(([key]) => key.includes(`/cases/${selectedCategory}/`)),
    [selectedCategory, cases],
  );
  const secondGroupIndex = useMemo(() => (categoryCases.length < 2 ? 1 : categoryCases.length - 3), [categoryCases]);
  const isCountOdd = useMemo(() => isOdd(categoryCases.length), [categoryCases]);
  const firstGridCases = useMemo(() => categoryCases.filter((_, index) => index < secondGroupIndex), [categoryCases]);
  const secondGridCases = useMemo(() => categoryCases.filter((_, index) => index >= secondGroupIndex), [categoryCases]);

  console.log('rerender');

  return (
    <div ref={ref} id='cases' className='flex flex-col gap-[50px] max-md:gap-5'>
      <Block className='flex h-[720px] flex-col items-center justify-center gap-6 max-md:h-[370px]'>
        <div className='flex flex-col items-center gap-5'>
          <h1 className='text-[80px] font-extrabold uppercase max-md:text-[40px]'>{GL.cases}</h1>
          <Tabs className='flex h-[55px] items-center rounded-full border border-[#ffffff]/[.16]'>
            <TabsContent customId='cases'>
              <TabsTab
                active={selectedCategory === 'product'}
                className='w-[164px]'
                onClick={() => setSelectedCategory('product')}
              >
                {L.product}
              </TabsTab>
              <TabsTab
                active={selectedCategory === 'game'}
                className='w-[164px]'
                onClick={() => setSelectedCategory('game')}
              >
                {L.gaming}
              </TabsTab>
            </TabsContent>
          </Tabs>
        </div>
        <p className='text-base text-white/30'>{L.worksUpdate}: 01.03.2025</p>
      </Block>
      <div className='flex flex-col gap-10 max-md:gap-6'>
        {!!firstGridCases.length && (
          <div className='grid grid-cols-2 gap-10 max-md:flex max-md:flex-col max-md:gap-6'>
            {firstGridCases.map(([key, { config, localization }], index) => (
              <CaseCard
                key={key}
                link={key}
                localization={localization}
                className={`${!isCountOdd && index + 1 === secondGroupIndex && 'col-span-2 h-[700px] max-md:h-fit'}`}
                {...config}
              />
            ))}
          </div>
        )}
        {!!secondGridCases.length && (
          <div
            className={cn(
              `grid grid-cols-2 gap-10 *:col-start-1 *:col-end-2 *:last:col-start-2 *:last:col-end-4 *:last:row-start-1 max-md:flex
              max-md:flex-col max-md:gap-6`,
              { 'grid-cols-3 *:last:row-span-2': secondGridCases.length !== 2 },
            )}
          >
            {secondGridCases.map(([key, { config, localization }], index) => (
              <CaseCard key={key} link={key} localization={localization} {...config} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
