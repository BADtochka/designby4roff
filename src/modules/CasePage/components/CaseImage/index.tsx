import Image, { ImageProps } from '@/components/Image';
import { cn } from '@/utils/cn';

export type CaseImageProps = Pick<ImageProps, 'src' | 'parentClassName' | 'className'>;

export default function CaseImage({ parentClassName, className, ...props }: CaseImageProps) {
  return (
    <Image
      className={cn('rounded-[20px] object-cover', className)}
      parentClassName={cn(parentClassName, 'max-h-[900px]')}
      {...props}
    />
  );
}
