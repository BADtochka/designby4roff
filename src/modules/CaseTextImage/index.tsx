import CaseImage, { CaseImageProps } from '@/modules/CaseImage';
import CaseText, { CaseTextProps } from '../CaseText';

type CaseTextImageProps = Omit<CaseTextProps, 'className'> &
  Omit<CaseImageProps, 'parentClassName'> & {
    reverse?: boolean;
    noImageBorder?: boolean;
  };

export default function CaseTextImage({
  title,
  description,
  direction,
  reverse,
  noBorder,
  noImageBorder,
  src,
}: CaseTextImageProps) {
  return (
    <div className='flex grow gap-[30px] max-md:flex-col'>
      <CaseText
        title={title}
        description={description}
        direction={direction}
        className='justify-center md:w-1/2'
        noBorder={noBorder}
      />
      <CaseImage
        src={src}
        parentClassName={`${reverse ? `-order-1` : 'order-0'} aspect-square md:w-1/2`}
        noBorder={noImageBorder}
      />
    </div>
  );
}
