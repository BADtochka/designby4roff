import { useI18nContext } from '@/i18n/i18n-react';
import { StringDate } from '@/types/StringDate';
import { cn } from '@/utils/cn';
import { format, parse } from 'date-fns';

type DateRange = {
  startDate: StringDate;
  endDate?: StringDate;
  className?: string;
};

export default function DateRange({ startDate, endDate, className }: DateRange) {
  const formatDate = (date: StringDate) => format(parse(date, 'MM.yyyy', new Date()), 'MMMM yyyy');
  const { LL } = useI18nContext();

  const formatedStartDate = formatDate(startDate);
  const formatedEndDate = endDate ? formatDate(endDate) : LL.now();

  return (
    <p className={cn('text-sm text-white/35 uppercase', className)}>{`${formatedStartDate} - ${formatedEndDate}`}</p>
  );
}
