import { useLocalization } from '@/hooks/useLocalization';
import AboutCase from '@/modules/AboutCase';
import AboutCaseInfo from '@/modules/AboutCaseInfo';
import CaseImage from '@/modules/CaseImage';
import CaseImages from '@/modules/CaseImages';
import CaseText from '@/modules/CaseText';
import CaseTextImage from '@/modules/CaseTextImage';
import CaseVideo from '@/modules/CaseVideo';
import { CaseData } from '@/types/Cases';
import { T } from '@/utils/defineLocalization';

export const Route = createFileRoute({
  component: RouteComponent,
});

export const routeData = {
  config: {
    image: 'card.png',
    startDate: '11.2011',
    background: '#232c3d',
  } as CaseData,
  localization: T({
    ru: {
      caseTitle: 'Названи ещё одного продуктового кейса',
      caseDescription: 'Описание кейса',
      hello: 'Привет',
      name: 'Никита',
      info1Title: 'Пункт 1',
      info1Description: 'Описание пункта 1',
      info2Title: 'Пункт 2',
      info2Description: 'Описание пункта 2',
      heading: 'ЗАГОЛОВОК',
      bigHeading: 'Это отличный крупный заголовок.',
      textDescription:
        'С другой стороны, консультации с широким кругом специалистов требуют определения и уточнения модели развития. Таким образом, укрепление и развитие структуры позволяет широкому кругу (специалистов) участвовать в формировании направлений прогрессивного развития.',
    },
    en: {
      caseTitle: 'Game case title',
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
      <AboutCase title={L.caseTitle} description={L.caseDescription}>
        <AboutCaseInfo title={L.hello} description={L.name} />
        <AboutCaseInfo title={L.info1Title} description={L.info1Description} />
        <AboutCaseInfo title={L.info2Title} description={L.info2Description} url='https://google.com' />
      </AboutCase>
      <CaseImage src='/cases/card.png' />
      <CaseText title={L.heading} description={L.textDescription} />
      <CaseText title={L.bigHeading} uppercase />
      <CaseTextImage title={L.heading} description={L.textDescription} direction='column' src='/cases/card.png' />
      <CaseTextImage title={L.heading} description={L.textDescription} direction='column' src='/cases/card.png' />
      <CaseImages layout='gallery'>
        <CaseImage src='/cases/card.png' />
        <CaseImage src='/cases/card.png' />
        <CaseImage src='/cases/card.png' />
      </CaseImages>
      <CaseVideo src='https://www.sample-videos.com/video321/mp4/720/big_buck_bunny_720p_2mb.mp4' />
    </>
  );
}
