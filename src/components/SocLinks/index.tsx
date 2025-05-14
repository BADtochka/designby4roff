import { socLinks } from '@/contants/socLinks';
import { useResolution } from '@/hooks/useResolution';
// import { BlobityContext } from '@/providers/BlobityProvider';
import { CaseOptions } from '@/stores/cases';
import { cn } from '@/utils/cn';
import { Fragment } from 'react';
import { Link } from 'react-router';
import Button from '../Button';
import { IconName } from '../Icons';

type SocLinksProps = {
  mode?: CaseOptions['scheme'];
};

export default function SocLinks({ mode = 'dark' }: SocLinksProps) {
  const { isDesktop } = useResolution();

  return (
    <div className='flex items-center gap-2.5 text-white/30 max-md:-order-1'>
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
              className={cn('text-[#F7F7F7]', {
                'border-[#00000029] text-black hover:border-[#00000029]': mode === 'light',
              })}
              iconLeft={link.name.toLowerCase() as IconName}
            />
          ))}
    </div>
  );
}
