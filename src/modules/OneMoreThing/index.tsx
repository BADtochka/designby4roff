import Block from '@/components/Block';
import ThingCard from '@/components/ThingCard';
import { useLocalization } from '@/hooks/useCaseLocalization';
import { T } from '@/utils/defineLocalization';

const localization = T({
  ru: {
    title: 'И ещё кое-что',
    description: 'Тоже считаю достижением, которым стоит поделиться.',
    photoshop: {
      title: `Оформление \nсоц.сетей`,
      category: 'Графический дизайн',
      description:
        'Разрабатывал дизайн в Adobe Photoshop для игровых форумов, иначе они назывались подписи, которые игроки размещали под своими ответами. Так же реализовал более 20 оформлений для социальных групп в соц.сетях ВКонтакте, Instagram* и YouTube.',
    },
    premiere: {
      title: `YouTube \nканал`,
      category: 'Видеомонтаж',
      description:
        'Монтировал видео в Adobe Premiere Pro для своего YouTube-канала, посвященного игровой тематике. Мой контент отличался уникальностью, так как я фокусировался на визуальной составляющей, вдохновляясь киноиндустрией. В результате мне удалось набрать 3000 подписчиков и достичь отличных показателей по просмотрам.',
    },
    afterEffects: {
      title: `Создание JSON \nанимаций`,
      category: 'Моушен дизайнер',
      description:
        'Разрабатывал анимации для мною созданных графических иллюстраций, анимируя их в Adobe After Effects, в дальнейшем с использованием плагина Bodymovin переводил их в JSON, после чего они использовались в собственных проектах. Один из таких - приложение «walltime» для OS Android .',
    },
  },
  en: {
    title: 'And something else',
    description: 'I also consider it an achievement worth sharing.',
    photoshop: {
      title: `Design of social \nnetworks`,
      category: 'Graphic design',
      description:
        'I developed the design in Adobe Photoshop for game forums, otherwise they were called signatures, which players placed under their answers. He also implemented more than 20 designs for social groups in social networks.the VKontakte, Instagram* and YouTube networks.',
    },
    premiere: {
      title: `YouTube \nchannel`,
      category: 'Video Editing',
      description:
        'I edited a video in Adobe Premiere Pro for my game-themed YouTube channel. My content was unique because I focused on the visual component, inspired by the film industry. As a result, I managed to gain 3,000 subscribers and achieved excellent viewing figures.',
    },
    afterEffects: {
      title: `Creating JSON \nanimations`,
      category: 'Motion designer',
      description:
        'He developed animations for graphic illustrations I created, animating them in Adobe After Effects, then using the Bodymovin plugin, he translated them into JSON, after which they were used in his own projects. One of these is the walltime application for Android OS.',
    },
  },
});

export default function OneMoreThing() {
  const { L } = useLocalization(localization);

  return (
    <div id='oneMoreThing' className='flex flex-col gap-[50px] max-md:gap-5'>
      <Block className='flex h-[720px] flex-col items-center justify-center gap-5 max-md:h-[370px]'>
        <h1 className='text-center text-[80px] font-extrabold uppercase max-md:text-[40px]'>{L.title}</h1>
        <p className='text-center text-base text-white/30'>{L.description}</p>
      </Block>
      <div
        className='grid grid-cols-[repeat(auto-fit,minmax(372px,1fr))] justify-center gap-6 max-xl:*:last:col-span-2 max-md:flex
          max-md:flex-col'
      >
        <ThingCard
          type='photoshop'
          title={L.photoshop.title}
          category={L.photoshop.category}
          description={L.photoshop.description}
          startDate='09.2023'
          endDate='11.2023'
          meta
        />
        <ThingCard
          type='premiere'
          title={L.premiere.title}
          category={L.premiere.category}
          description={L.premiere.description}
          startDate='09.2024'
          endDate='11.2023'
        />
        <ThingCard
          type='afterEffects'
          title={L.afterEffects.title}
          category={L.afterEffects.category}
          description={L.afterEffects.description}
          startDate='09.2024'
          endDate='11.2023'
        />
      </div>
    </div>
  );
}
