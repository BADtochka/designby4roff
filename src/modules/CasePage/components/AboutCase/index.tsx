import Block from '@/components/Block';
import { casesList } from '@/contants/casesList';
import { useI18nContext } from '@/i18n/i18n-react';
import { useCasesStore } from '@/stores/cases';
import { cn } from '@/utils/cn';
import { PropsWithChildren } from 'react';

export default function AboutCase({ children }: PropsWithChildren) {
  const { LL } = useI18nContext();
  const caseOption = useCasesStore((state) => state.caseOptions);
  const selectedCategory = useCasesStore((state) => state.selectedCategory);
  type SelectedCategoryKeys = keyof (typeof casesList)[typeof selectedCategory];

  return (
    <Block
      className={cn('flex flex-col items-center gap-16 px-16 py-[120px] text-center max-md:p-8', {
        'border-black/10': caseOption.scheme === 'light',
      })}
    >
      <div className='flex flex-col gap-5'>
        <h1 className='text-[132px] font-extrabold uppercase max-md:text-[32px]'>
          {LL.blocks.casesList[selectedCategory][caseOption.key as SelectedCategoryKeys].name()}
        </h1>
        <p className={cn('text-xl text-white/50 max-md:text-base', { 'text-black/50': caseOption.scheme === 'light' })}>
          {LL.blocks.casesList[selectedCategory][caseOption.key as SelectedCategoryKeys].description()}
        </p>
      </div>
      <div className='flex w-full max-w-[906px] flex-wrap items-center justify-center gap-[120px] max-md:flex-col max-md:gap-4'>
        {children}
      </div>
    </Block>
  );
}
