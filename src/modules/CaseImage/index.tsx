import Image, { ImageProps } from '@/components/Image';
import { cn } from '@/utils/cn';

export type CaseImageProps = Pick<ImageProps, 'src' | 'parentClassName' | 'className'>;

export default function CaseImage({ parentClassName, className, ...props }: CaseImageProps) {
  return (
    <Image
      className={cn('rounded-[40px] object-cover max-md:rounded-4xl', className)}
      parentClassName={cn(parentClassName)}
      {...props}
    />
  );
}
