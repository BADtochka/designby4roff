import { StringDate } from '@/types/StringDate';
import { format, parse } from 'date-fns';

export const formatDate = (date: StringDate, dateFormat: string = 'LLLL yyyy') => {
  return format(parse(date, 'MM.yyyy', new Date()), dateFormat);
};
