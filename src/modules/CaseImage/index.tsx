import Image, { ImageProps } from '@/components/Image';
import { cn } from '@/utils/cn';

export type CaseImageProps = Pick<ImageProps, 'src' | 'parentClassName' | 'className'>;

export default function CaseImage({ parentClassName, className, ...props }: CaseImageProps) {
  return (
    <Image
      className={cn('max-h-[800px] rounded-[20px] object-cover', className)}
      parentClassName={parentClassName}
      {...props}
    />
  );
}
