import Block from '@/components/Block';
import Image from '@/components/Image';
import { useCasesStore } from '@/stores/cases';
import { cn } from '@/utils/cn';
import { PropsWithChildren } from 'react';

type AboutCaseProps = {
  title: string;
  description: string;
  noBorder: boolean;
};

export default function AboutCase({
  title,
  description,
  noBorder = false,
  children,
}: PropsWithChildren<AboutCaseProps>) {
  const caseOption = useCasesStore((state) => state.caseOptions);

  return (
    <Block
      borderColor={caseOption.borderColor}
      className={cn(
        `flex items-end justify-between gap-8 px-[150px] py-[164px] max-2xl:flex-col max-2xl:items-center max-2xl:text-center
        max-md:p-[50px]`,
        {
          '!border-transparent': noBorder,
        },
      )}
    >
      <div className='flex flex-col gap-5'>
        <Image src={caseOption.logo} className='h-[70px] w-[70px] max-md:hidden' />
        <h1 className='text-[132px] font-extrabold uppercase max-[1832px]:text-7xl max-md:text-[32px]'>{title}</h1>
        <p
          className={cn('text-xl text-white/50 max-md:text-base', {
            'text-black/50': caseOption.scheme === 'light',
          })}
        >
          {description}
        </p>
      </div>
      <div className='flex flex-col flex-wrap gap-10 whitespace-nowrap max-md:flex-col max-md:gap-4'>{children}</div>
    </Block>
  );
}
