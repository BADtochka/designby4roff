import Block from '@/components/Block';
import { useI18nContext } from '@/i18n/i18n-react';

export default function About() {
  const { LL } = useI18nContext();

  return (
    <Block className='flex h-[720px] flex-col items-center justify-center gap-5'>
      <h1 className='text-[80px] font-extrabold uppercase'>{LL.about()}</h1>
      <p className='text-base text-white/30'>{LL.blocks.about.description()}</p>
    </Block>
  );
}
