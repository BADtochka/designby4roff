import DesignBy from '@/components/DesignBy';
import GridBackground from '@/components/GridBackground';
import { useHashSetter } from '@/hooks/useHashSetter';
import { useResolution } from '@/hooks/useResolution';
import { useI18nContext } from '@/i18n/i18n-react';
import { lazy, useState } from 'react';
import { useLocation } from 'react-router';

const CopyButton = lazy(() => import('@/components/CopyButton'));
const Block = lazy(() => import('@/components/Block'));
const Button = lazy(() => import('@/components/Button'));
const Icon = lazy(() => import('@/components/Icons'));
const SocLinks = lazy(() => import('@/components/SocLinks'));
const Time = lazy(() => import('@/components/Time'));
const Package = lazy(() => import('@/components/Package'));

export type TempLightSource = {
  color?: string;
  intensity: number;
};

export default function Main() {
  const location = useLocation();
  const { LL } = useI18nContext();
  const { isDesktop } = useResolution();
  const { ref } = useHashSetter({ hash: 'main' });
  const defaultLightSources: TempLightSource[] = [{ intensity: 5, color: '#FFFFFF' }];
  const [lightSources, setLightSources] = useState<TempLightSource[]>([...defaultLightSources]);

  const updateLightSource = (sourceIndex: number, options: Partial<TempLightSource>) => {
    const updatedSources = lightSources.map((lightOptions, index) =>
      index === sourceIndex ? { ...lightOptions, ...options } : lightOptions,
    );
    setLightSources(updatedSources);
  };

  const addLightSource = () => setLightSources((prev) => [...prev, { intensity: 5, color: '#FFFFFF' }]);
  const removeLightSource = (sourceIndex: number) =>
    setLightSources((prev) => prev.filter((_, index) => sourceIndex !== index));

  return (
    <Block ref={ref} id='main' className='relative flex h-[calc(100vh-60px)] flex-col justify-between max-md:pb-8'>
      <div className='flex w-full items-center justify-between'>
        <Icon name='logo' className='size-10' />
        <div className='flex items-center gap-4'>
          <CopyButton className='h-[54px]' iconRight='copy'>
            4roffdesign@gmail.com
          </CopyButton>
          <Button
            iconSize={!isDesktop ? '24' : undefined}
            className='h-[54px] border-0 bg-[#08C] hover:bg-[#006DA3] max-md:h-[50px] max-md:w-[50px]'
            iconRight='telegram'
          >
            {isDesktop && LL.buttons.contact()}
          </Button>
        </div>
      </div>
      <div className='flex items-center justify-between max-md:flex-col max-md:gap-10'>
        <Time />
        <SocLinks />
      </div>
      <div
        className='pointer-events-none absolute top-1/2 left-1/2 flex size-full max-h-[800px] max-w-[1000px] -translate-1/2 items-center
          justify-center'
      >
        <p className='absolute bottom-24 font-extrabold uppercase max-md:bottom-44'>{LL.blocks.main.description()}</p>
        <DesignBy />
        <GridBackground />
        {location.pathname === '/' && <Package lightSources={lightSources} />}
      </div>
      <div className='fixed bottom-10 left-10 z-10 flex flex-col items-center gap-2 bg-gray-900 p-3 max-md:top-10 max-md:bottom-auto'>
        {lightSources.map((light, index) => (
          <div key={index} className='flex flex-col gap-2'>
            <h1 onClick={() => removeLightSource(index)}>Свет #{index + 1} (нажми, чтобы удалить)</h1>
            <div className='flex flex-col items-center'>
              <label>Интенсивность (яркость)</label>
              <input
                max={10}
                min={0.5}
                type='range'
                step={0.01}
                name='volume'
                onChange={(e) => updateLightSource(index, { intensity: Number(e.currentTarget.value) })}
              />
            </div>
            <div className='flex flex-col items-center'>
              <label>Цвет</label>
              <input
                max={10}
                min={0.5}
                value={light.color}
                type='color'
                step={0.01}
                name='volume'
                onChange={(e) => updateLightSource(index, { color: String(e.currentTarget.value) })}
              />
            </div>
          </div>
        ))}
        <div className='mt-2 flex items-center gap-1'>
          <CopyButton content={JSON.stringify(lightSources)} className='h-fit p-4' onClick={addLightSource}>
            Скопировать конфиг
          </CopyButton>
          <Button className='h-fit p-4' onClick={addLightSource}>
            Добавить
          </Button>
        </div>
      </div>
    </Block>
  );
}
