import Block from '@/components/Block';
import Button from '@/components/Button';
import CopyButton from '@/components/CopyButton';
import LongLogo from '@/components/LongLogo';
import SocLinks from '@/components/SocLinks';
import { GLOBAL_LOCALIZATION } from '@/constants/globalLocalization';
import { useLocalization } from '@/hooks/useCaseLocalization';
import { CaseOptions } from '@/stores/cases';
import { cn } from '@/utils/cn';
import { T } from '@/utils/defineLocalization';
import { format } from 'date-fns';

type FooterProps = {
  mode?: CaseOptions['scheme'];
  inCase?: boolean;
  borderColor?: CaseOptions['borderColor'];
};

const localization = T({
  en: {
    title: 'Have an idea?',
    description: "Let's create beauty together ^_^",
    copyRight: 'All rights reserved.',
  },
  ru: {
    title: 'Есть идея?',
    description: 'Давайте создавать красоту вместе ^_^',
    copyRight: 'Все права защищены.',
  },
});

export default function Footer({ mode = 'dark', inCase = false, borderColor }: FooterProps) {
  const { L } = useLocalization(localization);
  const { L: GL } = useLocalization(GLOBAL_LOCALIZATION);

  return (
    <Block
      borderColor={borderColor}
      className={cn('flex flex-col gap-[50px] max-md:p-8', {
        'border-black/10': mode === 'light',
        'max-md:mb-22': !inCase,
      })}
    >
      <div className='flex justify-between gap-8 max-md:flex-col'>
        <div>
          <h1 className='text-[85px] font-extrabold uppercase max-md:text-center max-md:text-[32px]'>{L.title}</h1>
          <p
            className={cn('text-white/65 max-md:text-center', {
              'text-black/30': mode === 'light',
            })}
          >
            {L.description}
          </p>
        </div>
        <div className='flex flex-col gap-5'>
          <Button
            className={cn('h-[54px] border-0 bg-[#08C] hover:bg-[#006DA3]', {
              'text-white': mode === 'light',
            })}
            iconRight='telegram'
          >
            {GL.buttons.contact}
          </Button>
          <CopyButton mode={mode} className='h-[54px] w-full' iconRight='copy'>
            4roffdesign@gmail.com
          </CopyButton>
        </div>
      </div>
      <div
        style={{ background: borderColor }}
        className={cn('h-[1px] w-full bg-white/15', {
          'bg-black/10': mode === 'light',
        })}
      />
      <div
        className={cn('flex items-center justify-between gap-[50px] max-md:flex-col max-md:p-0', {
          'pb-27': !inCase,
        })}
      >
        <LongLogo />
        <SocLinks mode={mode} />
        <p
          className={cn('text-white/30', {
            'text-black/30': mode === 'light',
          })}
        >
          ©{format(new Date(), 'yyyy')} {L.copyRight}
        </p>
      </div>
    </Block>
  );
}
