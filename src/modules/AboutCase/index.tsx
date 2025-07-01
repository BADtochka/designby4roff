import Block from '@/components/Block';
import { useCasesStore } from '@/stores/cases';
import { cn } from '@/utils/cn';
import { PropsWithChildren } from 'react';

type AboutCaseProps = {
  title: string;
  description: string;
};

export default function AboutCase({ title, description, children }: PropsWithChildren<AboutCaseProps>) {
  const caseOption = useCasesStore((state) => state.caseOptions);

  return (
    <Block
      borderColor={caseOption.borderColor}
      className={cn('flex flex-col items-center gap-16 px-16 py-[120px] text-center max-md:p-8')}
    >
      <div className='flex flex-col gap-5'>
        <h1 className='text-[132px] font-extrabold uppercase max-md:text-[32px]'>{title}</h1>
        <p
          className={cn('text-xl text-white/50 max-md:text-base', {
            'text-black/50': caseOption.scheme === 'light',
          })}
        >
          {description}
        </p>
      </div>
      <div className='flex w-full max-w-[906px] flex-wrap items-center justify-center gap-[120px] max-md:flex-col max-md:gap-4'>
        {children}
      </div>
    </Block>
  );
}
