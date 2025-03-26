import Block from '@/components/Block';
import CaseCard from '@/components/CaseCard';
import { Tabs, TabsContent, TabsTab } from '@/components/Tabs';
import { casesList } from '@/contants/casesList';
import { useHashSetter } from '@/hooks/useHashSetter';
import { useI18nContext } from '@/i18n/i18n-react';
import { useCasesStore } from '@/stores/cases';
import { CaseKeys, GameKeys, ProductKeys } from '@/types/Cases';
import { getObjectKeys } from '@/utils/getObjectKeys';
import { isOdd } from '@/utils/isOdd';

export default function Cases() {
  const { ref } = useHashSetter({ hash: 'cases' });
  const { LL } = useI18nContext();
  const selectedCategory = useCasesStore((state) => state.selectedCategory);
  const setSelectedCategory = useCasesStore((state) => state.setSelectedCategory);
  const casesKeys = () => {
    if (selectedCategory === 'game') return getObjectKeys(casesList.game);
    return getObjectKeys(casesList.product);
  };
  const secondGroupIndex = casesKeys().length - 3;
  const isCountOdd = isOdd(casesKeys().length);

  return (
    <div ref={ref} id='cases' className='flex flex-col gap-[50px] max-md:gap-5'>
      <Block className='flex h-[720px] flex-col items-center justify-center gap-6 max-md:h-[370px]'>
        <div className='flex flex-col items-center gap-5'>
          <h1 className='text-[80px] font-extrabold uppercase max-md:text-[40px]'>{LL.cases()}</h1>
          <Tabs className='flex h-[55px] items-center rounded-full border border-[#ffffff]/[.16] bg-black p-1.5'>
            <TabsContent customId='cases'>
              <TabsTab
                active={selectedCategory === 'product'}
                className='w-[164px]'
                onClick={() => setSelectedCategory('product')}
              >
                {LL.blocks.cases.product()}
              </TabsTab>
              <TabsTab
                active={selectedCategory === 'game'}
                className='w-[164px]'
                onClick={() => setSelectedCategory('game')}
              >
                {LL.blocks.cases.gaming()}
              </TabsTab>
            </TabsContent>
          </Tabs>
        </div>
        <p className='text-base text-white/30'>{LL.blocks.cases.worksUpdate()}: 01.03.2025</p>
      </Block>
      <div className='flex flex-col gap-10 max-md:gap-6'>
        {casesKeys().length - 3 !== 0 && (
          <div className='grid grid-cols-2 gap-10 max-md:flex max-md:flex-col max-md:gap-6'>
            {casesKeys().map(
              (key, index) =>
                index < secondGroupIndex && (
                  <CaseCard
                    key={`${selectedCategory}-${index}`}
                    keyName={key}
                    category={selectedCategory}
                    className={`${!isCountOdd && index + 1 === secondGroupIndex && 'col-span-2 h-[500px] max-md:h-fit'}`}
                    {...(selectedCategory === 'game'
                      ? casesList.game[key as GameKeys]
                      : casesList.product[key as ProductKeys])}
                  />
                ),
            )}
          </div>
        )}
        <div
          className='grid grid-cols-3 gap-10 *:col-start-1 *:col-end-2 *:last:col-start-2 *:last:col-end-4 *:last:row-span-2
            *:last:row-start-1 max-md:flex max-md:flex-col max-md:gap-6'
        >
          {casesKeys().map(
            (key, index) =>
              index >= secondGroupIndex && (
                <CaseCard
                  key={`${selectedCategory}-${index}`}
                  category={selectedCategory}
                  keyName={key as CaseKeys}
                  {...(selectedCategory === 'game'
                    ? casesList.game[key as GameKeys]
                    : casesList.product[key as ProductKeys])}
                />
              ),
          )}
        </div>
      </div>
    </div>
  );
}
