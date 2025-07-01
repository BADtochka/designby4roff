import Block from '@/components/Block';
import ExperienceProject from '@/components/ExperienceProject';
import { useLocalization } from '@/hooks/useCaseLocalization';
import { useHashSetter } from '@/hooks/useHashSetter';
import { Experiences } from '@/types/Cases';
import { T } from '@/utils/defineLocalization';
import { getObjectKeys } from '@/utils/getObjectKeys';

const experienceData = {
  config: {
    project1: {
      post: 'UI/UX Designer · Product Designer',
      image: 'freelance.png',
      startDate: '10.2025',
    },
  } as Experiences,
  localization: T({
    ru: {
      title: 'Опыт',
      description: 'Или для кого создавались продукты.',
      andMore: 'И другое',
      project1: {
        title: 'Фриланс',
        description:
          'Проводил исследования, проектировал интерфейсы, сайты и мобильные приложения. Занимался их упаковкой и сопровождал на этапе разработки.',
      },
    },
    en: {
      title: 'Experience',
      description: 'Or who the products were created for.',
      andMore: 'And more',
      project1: {
        title: 'Freelance',
        description:
          'Conducted research, designed interfaces, websites, and mobile applications. Handled their packaging and accompanied them during the development phase.',
      },
    },
  }),
};

export default function Experience() {
  const { L } = useLocalization(experienceData.localization);

  const experienceKeys = getObjectKeys(experienceData.config);
  const { ref } = useHashSetter({ hash: 'experience' });

  return (
    <div ref={ref} id='experience' className='flex flex-col gap-[50px] max-md:gap-5'>
      <Block className='flex h-[720px] flex-col items-center justify-center gap-5 max-md:h-[370px]'>
        <h1 className='text-[80px] font-extrabold uppercase max-md:text-[40px]'>{L.title}</h1>
        <p className='text-base text-white/30'>{L.description}</p>
      </Block>
      <Block className='p-0 *:last:border-0 max-md:p-0'>
        {experienceKeys.map((key) => {
          return (
            <ExperienceProject
              key={key}
              // @ts-ignore
              title={L[key].title}
              // @ts-ignore
              description={L[key].description}
              {...experienceData.config[key]}
            />
          );
        })}
        <p className='px-16 py-[50px] text-center'>{L.andMore}</p>
      </Block>
    </div>
  );
}
