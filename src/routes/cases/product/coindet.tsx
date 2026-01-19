import { useLocalization } from '@/hooks/useLocalization';
import AboutCase from '@/modules/AboutCase';
import AboutCaseInfo from '@/modules/AboutCaseInfo';
import CaseImage from '@/modules/CaseImage';
import CaseMedia from '@/modules/CaseImages';
import CaseText from '@/modules/CaseText';
import CaseVideo from '@/modules/CaseVideo';
import { CaseData } from '@/types/Cases';
import { T } from '@/utils/defineLocalization';

export const Route = createFileRoute({
  component: RouteComponent,
});

export const routeData = {
  config: {
    logo: '/cases/coindet/coindet-logo.png',
    image: '/coindet/preview.jpg',
    startDate: '05.2022',
    endDate: '08.2022',
    scheme: 'light',
    background: '#ffffff',
    borderColor: '#E1E3E5',
    gap: 64,
  } as CaseData,
  localization: T({
    ru: {
      caseTitle: 'COINDET',
      caseShortDescription:
        'Приложение, задействующее обученный искусственный интеллект, позволяющее узнать информацию и примерную стоимость своей коллекции монет.',
      caseDescription:
        'Приложение, задействующее обученный искусственный интеллект, позволяющее узнать информацию и примерную стоимость своей коллекции монет.',
      hello: 'Участие в разработке',
      name: 'Май 2022 - Август 2022',
      info1Title: 'Роль',
      info1Description: 'Product Design',
      heading: 'ЗАГОЛОВОК',
      bigHeading: 'Это отличный крупный заголовок.',
      textDescription:
        'С другой стороны, консультации с широким кругом специалистов требуют определения и уточнения модели развития. Таким образом, укрепление и развитие структуры позволяет широкому кругу (специалистов) участвовать в формировании направлений прогрессивного развития.',

      headingProduct: 'О ПРОДУКТЕ',
      textDescriptionProduct:
        'Приложение основано на технологии искусственного интеллекта и позволяет по фотографии определить российскую монету, её год выпуска и примерную стоимость. Проект реализован в рамках студенческой работы, где я занимался созданием интуитивной структуры взаимодействия и разработкой визуальной системы, отражающей простоту и точность продукта.',

      headingStructure: 'СТРУКТУРА ПРИЛОЖЕНИЯ',
      textDescriptionStructure:
        'Пользователь выбирает одно из трёх направлений — поиск монеты, просмотр каталога или настройки. Процесс поиска разделён на простые шаги: съёмка лицевой и оборотной сторон и ввод года выпуска. Навигация выстроена последовательно и обеспечивает быстрое достижение результата.',

      headingSearchPhoto: 'ПОИСК ПО ФОТО',
      textDescriptionSearchPhoto:
        'Основной способ определения монеты — съёмка лицевой и оборотной сторон. Приложение анализирует изображения, определяет номинал, год выпуска и примерную стоимость. Процесс занимает всего несколько секунд и не требует дополнительных действий со стороны пользователя.',

      headingCatalog: 'ПОИСК В КАТАЛОГЕ',
      textDescriptionCatalog:
        'Функция ручного поиска позволяет находить монеты без использования камеры. Пользователь выбирает номинал, задаёт год выпуска и получает список соответствующих экземпляров с краткой информацией о каждом. Такой формат даёт возможность изучить коллекцию и быстро перейти к детальному описанию выбранной монеты.',

      headingResult: 'РЕЗУЛЬТАТЫ',
      textDescriptionResult:
        'В ходе работы удалось выстроить простой и логичный процесс определения монеты — от съёмки до получения результата. Интерфейс оформлен так, чтобы каждая деталь поддерживала быстрые действия и не перегружала пользователя. Получившийся инструмент демонстрирует, как технологии распознавания могут работать естественно и помогать в решении повседневных задач.',
    },
    en: {
      caseTitle: 'ATHAYOGA',
      caseShortDescription: '',
      caseDescription: 'Case description',
      hello: 'Hello',
      name: 'Nikita',
      info1Title: 'Item 1',
      info1Description: 'Item 1 description',
      heading: 'HEADING',
      bigHeading: "It's a great big headline.",
      textDescription:
        'On the other hand, consulting with a broad asset requires defining and clarifying a development model. Thus, the strengthening and development of the structure provides a wide range of (specialists) to participate in shaping the directions of progressive development.',

      headingProduct: 'ABOUT THE PRODUCT',
      textDescriptionProduct:
        'The application is based on artificial intelligence technology and allows you to determine the Russian coin, its year of issue and approximate value from a photo. The project was implemented as part of my student work, where I worked on creating an intuitive interaction structure and developing a visual system that reflects the simplicity and accuracy of the product.',

      headingStructure: 'APPLICATION STRUCTURE',
      textDescriptionStructure:
        'The user chooses one of three directions — coin search, catalog browsing or settings. The search process is divided into simple steps: taking pictures of the front and back sides and entering the year of manufacture. Navigation is consistent and ensures quick results.',

      headingSearchPhoto: 'PHOTO SEARCH',
      textDescriptionSearchPhoto:
        'The main way to identify a coin is by taking pictures of the obverse and reverse sides. The application analyzes the images, determines the face value, the year of manufacture and the approximate cost. The process takes only a few seconds and does not require any additional actions on the part of the user.',

      headingCatalog: 'CATALOG SEARCH',
      textDescriptionCatalog:
        'The manual search function allows you to find coins without using a camera. The user selects the denomination, sets the year of manufacture and receives a list of relevant copies with brief information about each. This format makes it possible to explore the collection and quickly go to a detailed description of the selected coin.',

      headingResult: 'RESULTS',
      textDescriptionResult:
        'In the course of the work, we managed to build a simple and logical process for determining the coin — from shooting to getting the result. The interface is designed so that every detail supports quick actions and does not overload the user. The resulting tool demonstrates how recognition technologies can work naturally and help with everyday tasks.',
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
      </AboutCase>

      <CaseImage src='/cases/coindet/sb-1.jpg' />

      <CaseText title={L.headingProduct} description={L.textDescriptionProduct} noBorder />

      <CaseMedia layout='gallery'>
        <CaseImage src='/cases/coindet/sb-2.jpg' />
        <CaseImage src='/cases/coindet/sb-3.jpg' />
      </CaseMedia>

      <CaseText title={L.headingStructure} description={L.textDescriptionStructure} noBorder />

      <CaseImage src='/cases/coindet/sb-4.jpg'/>

      <CaseText title={L.headingSearchPhoto} description={L.textDescriptionSearchPhoto} noBorder />

      <CaseMedia layout='gallery'>
        <CaseImage src='/cases/coindet/sb-5.jpg' />
        <CaseImage src='/cases/coindet/sb-6.jpg' />
      </CaseMedia>

      <CaseMedia layout='gallery'>
        <CaseImage src='/cases/coindet/sb-7.jpg' />
        <CaseImage src='/cases/coindet/sb-8.jpg' />
      </CaseMedia>

      <CaseText title={L.headingCatalog} description={L.textDescriptionCatalog} noBorder />

      <CaseMedia layout='row'>
        <CaseImage src='/cases/coindet/sb-9.jpg' />
        <CaseImage src='/cases/coindet/sb-10.jpg' />
        <CaseImage src='/cases/coindet/sb-11.jpg' />
      </CaseMedia>

      <CaseVideo src='/cases/coindet/cndt.webm' />

      <CaseText title={L.headingResult} description={L.textDescriptionResult} noBorder />

      <CaseImage src='/cases/coindet/sb-12.jpg' />
    </>
  );
}
