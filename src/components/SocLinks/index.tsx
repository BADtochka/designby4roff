import { socLinks } from '@/contants/socLinks';
import { useResolution } from '@/hooks/useResolution';
// import { BlobityContext } from '@/providers/BlobityProvider';
import { Fragment } from 'react';
import { Link } from 'react-router';
import Button from '../Button';
import { IconName } from '../Icons';

export default function SocLinks() {
  // const blobity = useContext(BlobityContext);
  const { isDesktop } = useResolution();

  const onHover = (hover: boolean) => {
    // blobity.current?.updateOptions({ invert: hover, dotSize: hover ? 1 : 8 });
  };

  return (
    <div
      className='flex items-center gap-2.5 text-white/30 max-md:-order-1'
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      {isDesktop
        ? socLinks.map((link, index) => (
            <Fragment key={link.name}>
              {index > 0 && index < socLinks.length && <span>•</span>}
              <Link to={link.url} target='_blank' className='hover:text-white' cursor-invert='true'>
                {link.name}
              </Link>
            </Fragment>
          ))
        : socLinks.map((link) => (
            <Button
              key={link.name}
              link={link.url}
              className='text-[#F7F7F7]'
              iconLeft={link.name.toLowerCase() as IconName}
            />
          ))}
    </div>
  );
}
