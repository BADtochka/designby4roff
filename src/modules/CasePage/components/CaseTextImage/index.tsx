import CaseImage, { CaseImageProps } from '@/modules/CasePage/components/CaseImage';
import CaseText, { CaseTextProps } from '../CaseText';

type CaseTextImageProps = Omit<CaseTextProps, 'className'> &
  Omit<CaseImageProps, 'parentClassName'> & {
    reverse?: boolean;
  };

export default function CaseTextImage({ title, description, direction, reverse, src }: CaseTextImageProps) {
  return (
    <div className='flex h-[800px] grow gap-[30px] max-md:h-auto max-md:flex-col'>
      <CaseText
        title={title}
        description={description}
        direction={direction}
        className='w-1/2 justify-center max-md:w-full'
      />
      <CaseImage
        src={src}
        parentClassName={`${reverse ? `-order-1` : 'order-0'} w-1/2 max-md:h-[372px] max-md:w-full`}
      />
    </div>
  );
}
