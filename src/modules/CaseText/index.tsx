import Block from '@/components/Block';
import { useCasesStore } from '@/stores/cases';
import { cn } from '@/utils/cn';

export type CaseTextProps = {
  title: string;
  noBorder: boolean;
  description?: string;
  direction?: 'row' | 'column';
  className?: string;
  uppercase?: boolean;
};

export default function CaseText({
  title,
  description,
  className,
  uppercase,
  direction = 'row',
  noBorder = false,
}: CaseTextProps) {
  const caseOption = useCasesStore((state) => state.caseOptions);

  return (
    <Block
      borderColor={caseOption.borderColor}
      className={cn(
        'flex flex-wrap gap-4 max-md:p-8',
        {
          'border-black/10': caseOption.scheme === 'light',
          'justify-center text-center': !description,
          'justify-between': description && direction === 'row',
          uppercase: uppercase,
          '!border-transparent': noBorder,
        },
        className,
      )}
      style={{ flexDirection: direction }}
    >
      <h1 className={cn('h-fit text-xl font-extrabold max-md:text-xl', { 'text-[64px]': !description })}>{title}</h1>
      {description && (
        <p
          className={cn('max-w-[900px] shrink text-xl whitespace-pre-wrap text-white/50 max-md:text-base', {
            'text-black/50': caseOption.scheme === 'light',
          })}
        >
          {description}
        </p>
      )}
    </Block>
  );
}
