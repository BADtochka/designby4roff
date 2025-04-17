import { useCasesStore } from '@/stores/cases';
import { CaseInfo } from '@/types/CaseInfo';
import { cn } from '@/utils/cn';
import Icon from '../Icons';

export type AboutCaseInfoProps = CaseInfo;

export default function AboutCaseInfo({ title, description, url }: AboutCaseInfoProps) {
  const caseOption = useCasesStore((state) => state.caseOption);

  const onOpenUrl = () => {
    if (!url) return;
    window.open(url, '_blank');
  };

  return (
    <div className='flex flex-col gap-3'>
      <p className={cn('whitespace-nowrap text-white/30', { 'text-black/30': caseOption.scheme === 'light' })}>
        {title}
      </p>
      <div className='flex items-center gap-2' onClick={onOpenUrl}>
        <p className='text-xl'>{description}</p>
        {url && <Icon name='url' />}
      </div>
    </div>
  );
}
