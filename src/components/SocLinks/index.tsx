import { socLinks } from '@/constants/socLinks';
import { useDevice } from '@/hooks/useDevice';
// import { BlobityContext } from '@/providers/BlobityProvider';
import { CaseOptions } from '@/stores/cases';
import { cn } from '@/utils/cn';
import { memo } from 'react';
import { AnimatedLink } from '../AnimatedLink';
import Button from '../Button';
import { IconName } from '../Icon';

type SocLinksProps = {
  mode?: CaseOptions['scheme'];
};

const SocLinks = ({ mode = 'dark' }: SocLinksProps) => {
  const { isDesktop } = useDevice();

  return (
    <div className='flex items-center gap-2.5 text-white/30 max-md:-order-1'>
      {isDesktop
        ? socLinks.map((link, index) => (
            <AnimatedLink key={link.name} showDot={index > 0 && index < socLinks.length} name={link.name} />
          ))
        : socLinks.map((link) => (
            <Button
              key={link.name}
              link={link.url}
              className={cn('text-[#F7F7F7]', {
                'border-[#00000029] text-black hover:border-[#00000029]': mode === 'light',
              })}
              iconLeft={link.name.toLowerCase() as IconName}
              animation={true}
            />
          ))}
    </div>
  );
};

export default memo(SocLinks);
