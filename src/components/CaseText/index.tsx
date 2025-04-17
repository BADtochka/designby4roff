import { useCasesStore } from '@/stores/cases';
import { cn } from '@/utils/cn';
import Block from '../Block';

export type CaseTextProps = {
  title: string;
  description?: string;
  direction?: 'row' | 'column';
  className?: string;
  uppercase?: boolean;
};

export default function CaseText({ title, description, className, uppercase, direction = 'row' }: CaseTextProps) {
  const caseOption = useCasesStore((state) => state.caseOption);

  return (
    <Block
      className={cn(
        'flex flex-wrap gap-4 py-[100px]',
        {
          'border-black/10': caseOption.scheme === 'light',
          'justify-center text-center': !description,
          'justify-between': description && direction === 'row',
          uppercase: uppercase,
        },
        className,
      )}
      style={{ flexDirection: direction }}
    >
      <h1 className={cn('h-fit text-[32px] font-extrabold', { 'text-[64px]': !description })}>{title}</h1>
      {description && (
        <p
          className={cn('max-w-[900px] shrink text-xl whitespace-pre-wrap text-white/50', {
            'text-black/50': caseOption.scheme === 'light',
          })}
        >
          {description}
        </p>
      )}
    </Block>
  );
}
