import { cn } from '@/utils/cn';
import { Children, PropsWithChildren } from 'react';

interface CaseImagesProps extends PropsWithChildren {
  layout?: 'gallery' | 'row';
}

export default function CaseImages({ children, layout = 'row' }: CaseImagesProps) {
  const imagesCount = Children.count(children);

  return (
    <div
      className={cn('grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-[30px] max-md:grid-cols-1', {
        'grid-cols-3 justify-items-center max-md:*:aspect-square md:*:nth-1:col-span-2 md:*:nth-1:row-span-2':
          imagesCount > 2 && layout === 'gallery',
        'grid-cols-[repeat(auto-fit,minmax(200px,1fr))] *:aspect-square': imagesCount > 2 && layout === 'row',
      })}
    >
      {children}
    </div>
  );
}
