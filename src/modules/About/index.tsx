import { Block } from '@/components/Block';
import Button from '@/components/Button';
import { IconName } from '@/components/Icon';
import Image from '@/components/Image';
import { GLOBAL_LOCALIZATION } from '@/constants/globalLocalization';
import { socLinks } from '@/constants/socLinks';
import { useHashSetter } from '@/hooks/useHashSetter';
import { useLocalization } from '@/hooks/useLocalization';
import { T } from '@/utils/defineLocalization';

export const localization = T({
  ru: {
    description: 'Живу дизайном с 2018.',
    personalInfo:
      'Привет! Я Никита — дизайнер создающий интуитивные веб-сервисы, мобильные приложения и уникальные игровые веб-интерфейсы. Моя работа — это сочетание творческого подхода и технической экспертизы, позволяющее мне разрабатывать продукты, которые не только решают задачи бизнеса, но и дарят пользователям удовольствие от взаимодействия. В настоящее время проживаю в Москве, Россия.',
    personalInfo2:
      'Ранее работал над проектом проектом Волна — сервисом для взаимодействия заказчиков с тендерными специалистами. Провел анализ рынка, определил уникальность продукта, проработал более 100 экранов и создал детализированную дизайн-систему. Из-за большого объема работ привлек еще одного дизайнера и координировал его деятельность. Помимо этого занимался созданием игровых интерфейсов для более чем 15 проектов, разрабатывая структуру окон, визуальное оформление и UI-Kit. Благодаря публикациям на Behance мои работы начали привлекать внимание зарубежных заказчиков.',
    blogButton: 'Веду свой блог в Telegram',
  },
  en: {
    description: 'I live by design in 2018.',
    personalInfo:
      'Hi! I am Nikita, a designer who creates intuitive web services, mobile applications, and unique gaming web interfaces. My work is a combination of creativity and technical expertise that allows me to develop products that not only solve business problems, but also give users pleasure from interaction. I currently live in Moscow, Russia.',
    personalInfo2:
      'Previously, he worked on the Volna project, a service for customer interaction with tender specialists. He conducted a market analysis, determined the uniqueness of the product, worked on more than 100 screens and created a detailed design system. Due to the large volume of work, I brought in another designer and coordinated his activities. In addition, he created game interfaces for more than 15 projects, developing the window structure, visual design and UI Kit. Thanks to the publications on Behance, my work began to attract the attention of foreign customers.',
    blogButton: 'I keep my blog on Telegram',
  },
});

const socIconMap: Record<string, IconName> = {
  Behance: 'behance',
  DProfile: 'dprofile',
  Dribbble: 'dribbble',
  Telegram: 'telegram',
  'Telegram Blog': 'telegram',
};

export default function About() {
  const { L: GL } = useLocalization(GLOBAL_LOCALIZATION);
  const { L } = useLocalization(localization);
  const { ref } = useHashSetter({ hash: 'about' });
  const telegramBlog = socLinks.find((link) => link.name === 'Telegram Blog');
  return (
    <div ref={ref} id='about' className='flex flex-col gap-[50px] max-md:gap-5'>
      <Block className='flex h-[720px] flex-col items-center justify-center gap-5 max-md:h-[370px]'>
        <h1 className='text-[80px] font-extrabold uppercase max-md:text-[40px]'>{GL.about}</h1>
        <p className='text-base text-white/30'>{L.description}</p>
      </Block>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-10'>
          <div className='flex gap-10 max-md:flex-col'>
            <Block className='flex min-h-64 w-fit items-center p-16 text-xl leading-8 text-white/70 max-md:p-8 max-md:text-base'>
              {L.personalInfo}
            </Block>
            <Image
              src='/portrait.jpg'
              className='aspect-square rounded-[20px] object-cover max-lg:w-full lg:max-h-64 lg:max-w-64'
            />
          </div>
        </div>
        <div className='grid grid-cols-2 grid-rows-[1fr_1fr_72px] place-items-start gap-x-10 gap-y-3 max-xl:flex max-xl:flex-col max-xl:gap-5'>
          <Image
            src='/portrait2.png'
            className='object-cover'
            parentClassName='row-span-3 overflow-hidden h-full w-full rounded-[20px] max-xl:col-span-2'
          />
          <Block className='row-span-2 flex h-full items-center p-16 text-xl leading-8 text-white/70 max-xl:-order-1 max-md:p-8 max-md:text-base'>
            {L.personalInfo2}
          </Block>
          <div className='col-start-2 row-start-3 flex w-full items-center gap-2.5 max-xl:flex-col'>
            <Button
              className='w-full gap-4 border-0 bg-[#08C] whitespace-nowrap hover:bg-[#006DA3]'
              iconLeft='telegram'
              link={telegramBlog?.url}
              target='_blank'
              animation
            >
              {L.blogButton}
            </Button>
            <div className='flex items-center gap-2.5'>
              {socLinks
                .filter((link) => ['Behance', 'DProfile', 'Dribbble'].includes(link.name))
                .map((link) => (
                  <Button
                    key={link.name}
                    className='shrink-0'
                    iconLeft={socIconMap[link.name]}
                    link={link.url}
                    target='_blank'
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
