import { useLocalization } from '@/hooks/useLocalization';
import AboutCase from '@/modules/AboutCase';
import AboutCaseInfo from '@/modules/AboutCaseInfo';
import CaseImage from '@/modules/CaseImage';
import { CaseData } from '@/types/Cases';
import { T } from '@/utils/defineLocalization';

export const Route = createFileRoute({
  component: RouteComponent,
});

export const routeData = {
  config: {
    logo: '/cases/atom/a-logo.png',
    image: '/atomv2/atom2-preview.jpg',
    startDate: '06.2021',
    endDate: '02.2023',
    scheme: 'dark',
    background: '#0F070A',
    borderColor: '#3D393A',
    gap: 64,
  } as CaseData,
  localization: T({
    ru: {
      caseTitle: 'ATOM COMMUNITY Vol.2',
      caseShortDescription:
        'Игровой проект на платформе RAGE:MP, объединяющий игроков как в виртуальном мире, так и за его пределами. В нём сотни сюжетных линий, авторский автопарк и тщательно проработанные интерфейсы, создающие цельный игровой опыт.',
      caseDescription:
        'Игровой проект на платформе RAGE:MP, объединяющий игроков как в виртуальном мире, так и за его пределами. В нём сотни сюжетных линий, авторский автопарк и тщательно проработанные интерфейсы, создающие цельный игровой опыт.',
      hello: 'Участие в разработке',
      name: 'Июнь 2021 - Февраль 2023',
      info1Title: 'Роль',
      info1Description: 'UI/UX Designer',
      info2Title: 'url',
      info2Description: 'atomrp.ru',
      heading: 'ЗАГОЛОВОК',
      bigHeading: 'Это отличный крупный заголовок.',
      textDescription:
        'С другой стороны, консультации с широким кругом специалистов требуют определения и уточнения модели развития. Таким образом, укрепление и развитие структуры позволяет широкому кругу (специалистов) участвовать в формировании направлений прогрессивного развития.',
    },
    en: {
      caseTitle: 'Game case title',
      caseShortDescription: 'Short case description',
      caseDescription: 'Case description',
      hello: 'Hello',
      name: 'Nikita',
      info1Title: 'Item 1',
      info1Description: 'Item 1 description',
      info2Title: 'Item 2',
      info2Description: 'Item 2 description',
      heading: 'HEADING',
      bigHeading: "It's a great big headline.",
      textDescription:
        'On the other hand, consulting with a broad asset requires defining and clarifying a development model. Thus, the strengthening and development of the structure provides a wide range of (specialists) to participate in shaping the directions of progressive development.',
    },
  }),
} as const;

function RouteComponent() {
  const { L } = useLocalization(routeData.localization);

  return (
    <>
      <AboutCase title={L.caseTitle} description={L.caseDescription} noBorder>
        <AboutCaseInfo title={L.hello} description={L.name} />
        <AboutCaseInfo title={L.info1Title} description={L.info1Description} />
        <AboutCaseInfo title={L.info2Title} description={L.info2Description} url='https://google.com' />
      </AboutCase>

      <CaseImage src='/cases/atom/review.jpg' />
    </>
  );
}
