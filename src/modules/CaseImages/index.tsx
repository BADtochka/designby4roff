import { cn } from '@/utils/cn';
import { Children, PropsWithChildren } from 'react';

interface CaseImagesProps extends PropsWithChildren {
  layout?: 'gallery' | 'row';
}

export default function CaseMedia({ children, layout = 'row' }: CaseImagesProps) {
  const imagesCount = Children.count(children);

  return (
    <div
      className={cn('grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-[30px] *:max-h-full! max-md:grid-cols-1', {
        'grid-cols-3 justify-items-center *:w-full md:*:nth-1:col-span-2 md:*:nth-1:row-span-2 2xl:*:aspect-square':
          imagesCount > 2 && layout === 'gallery',
        'grid-cols-[repeat(auto-fit,minmax(200px,1fr))]': imagesCount > 2 && layout === 'row',
      })}
    >
      {children}
    </div>
  );
}
