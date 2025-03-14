import { BlobityContext } from '@/providers/BlobityProvider';
import { useContext } from 'react';
import { Link } from 'react-router';

export default function SocLinks() {
  const blobity = useContext(BlobityContext);

  const onHover = (hover: boolean) => {
    blobity.current?.updateOptions({ invert: hover, dotSize: hover ? 1 : 8 });
  };

  return (
    <div
      className='flex items-center gap-2.5 text-white/30'
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <Link to='https://www.behance.net/laforoff' target='_blank' className='hover:text-white'>
        Behance
      </Link>
      <span>•</span>
      <Link to='https://dprofile.ru/4roff' target='_blank' className='hover:text-white'>
        DProfile
      </Link>
      <span>•</span>
      <Link to='https://dribbble.com/designby4roff' target='_blank' className='hover:text-white'>
        Dribble
      </Link>
    </div>
  );
}
