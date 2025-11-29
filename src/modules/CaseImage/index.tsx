import Image, { ImageProps } from '@/components/Image';
import { useCasesStore } from '@/stores/cases';
import { cn } from '@/utils/cn';

export interface CaseImageProps extends Pick<ImageProps, 'src' | 'parentClassName' | 'className'> {
  noBorder?: boolean;
  maxHeight?: number;
}

export default function CaseImage({ parentClassName, className, noBorder, maxHeight, ...props }: CaseImageProps) {
  const caseOptions = useCasesStore((state) => state.caseOptions);

  return (
    <Image
      style={{ borderColor: caseOptions.borderColor, maxHeight }}
      className={cn('rounded-[40px] border object-cover max-md:rounded-4xl', className, {
        '!border-transparent': noBorder,
      })}
      parentClassName={cn(parentClassName)}
      {...props}
    />
  );
}
