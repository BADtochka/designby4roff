import { ImageProps } from '@/components/Image';
import { cn } from '@/utils/cn';
import { lazy } from 'react';
const Image = lazy(() => import('@/components/Image'));

export type CaseImageProps = Pick<ImageProps, 'src' | 'parentClassName' | 'className'>;

export default function CaseImage({ parentClassName, className, ...props }: CaseImageProps) {
  return (
    <Image className={cn('rounded-[20px] object-cover', className)} parentClassName={cn(parentClassName)} {...props} />
  );
}
