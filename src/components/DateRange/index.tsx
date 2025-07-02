import { GLOBAL_LOCALIZATION } from '@/constants/globalLocalization';
import { useLocalization } from '@/hooks/useLocalization';
import { StringDate } from '@/types/StringDate';
import { cn } from '@/utils/cn';
import { formatDate } from '@/utils/formatDate';

type DateRange = {
  startDate: StringDate;
  endDate?: StringDate;
  className?: string;
};

export default function DateRange({ startDate, endDate, className }: DateRange) {
  const { L: GL } = useLocalization(GLOBAL_LOCALIZATION);

  const formatedStartDate = formatDate(startDate);
  const formatedEndDate = endDate ? formatDate(endDate) : GL.now;

  return (
    <p className={cn('text-sm text-white/35 uppercase', className)}>{`${formatedStartDate} - ${formatedEndDate}`}</p>
  );
}
