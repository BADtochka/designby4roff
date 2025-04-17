import { useI18nContext } from '@/i18n/i18n-react';
import { StringDate } from '@/types/StringDate';
import { cn } from '@/utils/cn';
import { formatDate } from '@/utils/formatDate';

type DateRange = {
  startDate: StringDate;
  endDate?: StringDate;
  className?: string;
};

export default function DateRange({ startDate, endDate, className }: DateRange) {
  const { LL } = useI18nContext();

  const formatedStartDate = formatDate(startDate);
  const formatedEndDate = endDate ? formatDate(endDate) : LL.now();

  return (
    <p className={cn('text-sm text-white/35 uppercase', className)}>{`${formatedStartDate} - ${formatedEndDate}`}</p>
  );
}
