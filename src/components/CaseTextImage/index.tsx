import CaseImage, { CaseImageProps } from '@/modules/CaseImage';
import CaseText, { CaseTextProps } from '../CaseText';

type CaseTextImageProps = Omit<CaseTextProps, 'className'> &
  Omit<CaseImageProps, 'parentClassName'> & {
    reverse?: boolean;
  };

export default function CaseTextImage({ title, description, direction, reverse, src }: CaseTextImageProps) {
  return (
    <div className='flex h-screen max-h-[800px] grow gap-[30px] max-md:flex-col'>
      <CaseText title={title} description={description} direction={direction} className='w-1/2 justify-center' />
      <CaseImage src={src} parentClassName={`${reverse ? `-order-1` : 'order-0'} w-1/2`} />
    </div>
  );
}
