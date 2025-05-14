import { cn } from '@/utils/cn';
import { Children, PropsWithChildren } from 'react';

interface CaseImagesProps extends PropsWithChildren {
  layout?: 'gallery' | 'row';
}

export default function CaseImages({ children, layout = 'row' }: CaseImagesProps) {
  const imagesCount = Children.count(children);

  return (
    <div
      className={cn('grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-[30px] *:h-[800px] max-md:*:h-[372px]', {
        'grid-cols-[repeat(auto-fit,minmax(500px,1fr))] *:nth-1:row-span-2 2xl:*:nth-1:col-span-2 2xl:*:nth-3:col-start-3':
          imagesCount > 2 && layout === 'gallery',
        'max-2xl:grid-cols-2 max-2xl:*:last:col-span-2': imagesCount > 2 && layout === 'row',
      })}
    >
      {children}
    </div>
  );
}
