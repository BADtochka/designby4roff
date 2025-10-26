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
    logo: '/cases/riks/RiksLogo.png',
    image: 'card.png',
    startDate: '07.2024',
    endDate: '02.2025',
    scheme: 'light',
    background: '#ffffff',
    borderColor: '#ffffff',
    gap: 64,
  } as CaseData,


  localization: T({
    ru: {
      caseTitle: 'РИКС',
      caseDescription: 'Основанный на искусственном интеллекте сервис РИКС анализирует кредитную историю, выявляет слабые места и предлагает персональные шаги для их устранения. ИИ-алгоритмы обрабатывают отчёты из трёх бюро за считанные секунды, обеспечивая решения быстрее, точнее и надёжнее ручной проверки.',
      hello: 'Участие в разработке',
      name: 'Июль 2024 - Февраль 2025',
      info1Title: 'Роль',
      info1Description: 'Product Design',
      info2Title: 'url',
      info2Description: 'landing.ricsfix.ru',
      
      heading: 'О ПРОДУКТЕ',
      textDescription: 'Сервис помогает пользователю загрузить кредитные отчёты, провести их автоматический анализ и получить персональные рекомендации по улучшению своей кредитной истории. Процесс разбит на понятные шаги, что делает сложную финансовую информацию доступной и наглядной. Решение особенно полезно для МФО, банков и финансовых специалистов, работающих с большим потоком заявок.',
      
      headingAuth: 'АВТОРИЗАЦИЯ',
      textDescriptionAuth:
      'Первый шаг к работе с персональными финансовыми данными, и мы уделили ему особое внимание. Процесс выстроен так, чтобы быть одновременно простым для пользователя и надёжным с точки зрения безопасности. Все передаваемые данные зашифрованы, а доступ возможен только после подтверждения личности. Такой подход позволяет защитить чувствительную информацию и исключить посторонний доступ.',
    
      headingOrders: 'ИСТОРИЯ ЗАКАЗОВ И СОЗДАНИЕ ЗАЯВКИ',
      textDescriptionOrders:
      'Процесс создания заявки состоит из двух простых шагов и занимает всего несколько минут. Пользователь последовательно заполняет необходимые поля, прикладывает отчёты из кредитных бюро и отправляет данные на анализ. Интерфейс интуитивно понятен — на каждом этапе есть подсказки. Всё сделано так, чтобы даже первый опыт прошёл без затруднений.',
    
      headingOrder1: 'ОСНОВНЫЕ ДАННЫЕ',
      textDescriptionOrder1: 'На первом этапе пользователю необходимо ввести основные персональные данные — ФИО, дату рождения, паспортные сведения, а также указать информацию о банкротстве, если она актуальна.',
      
      headingOrder2: 'ЗАГРУЗКА ДОКУМЕНТОВ',
      textDescriptionOrder2: 'На втором этапе загружаются три документа: отчёты из ОКБ, НБКИ и скоринг-бюро. На их основе система формирует персональный анализ кредитной истории.',
  
      
    
    },



    en: {
      caseTitle: 'RIKS',
      caseDescription: 'The RICS service, based on artificial intelligence, analyzes credit history, identifies weaknesses and suggests personal steps to eliminate them. AI algorithms process reports from three bureaus in a matter of seconds, providing solutions faster, more accurate and more reliable than manual verification.',
      hello: 'Involvement in development',
      name: 'July 2024 - February 2025',
      info1Title: 'Role',
      info1Description: 'Product Design',
      info2Title: 'url',
      info2Description: 'landing.ricsfix.ru',

      heading: 'ABOUT THE PRODUCT',
      textDescription: 'The service helps users download credit reports, perform automatic analysis, and receive personalized recommendations for improving their credit history. The process is broken down into clear steps, which makes complex financial information accessible and visual. The solution is especially useful for MFIs, banks, and financial professionals dealing with a large flow of applications.',
    
      headingAuth: 'AUTHORIZATION',
      textDescriptionAuth: 'The first step to working with personal financial data, and we paid special attention to it. The process is designed to be both simple for users and secure from a data protection standpoint. All transmitted data is encrypted, and access is granted only after identity verification. This approach ensures sensitive information remains safe and protected from unauthorized access.',

      headingOrders: 'ORDER HISTORY AND APPLICATION CREATION',
      textDescriptionOrders: 'The application process consists of two simple steps and takes only a few minutes. The user sequentially fills in the required fields, attaches credit bureau reports, and sends the data for analysis. The interface is intuitive — each step provides helpful tips. Everything is designed to ensure even the first experience goes smoothly.',
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
        <AboutCaseInfo title={L.info2Title} description={L.info2Description} url='https://landing.ricsfix.ru' />
      </AboutCase>

      <CaseImage src='/cases/riks/slide1.jpg' />

      <CaseText title={L.heading} description={L.textDescription} noBorder />

      <CaseImages layout='gallery'>
      <CaseImage src='/cases/riks/phone-icon.jpg' />
      <CaseImage src='/cases/riks/doc-icon.jpg' />
      </CaseImages>

      <CaseText title={L.headingAuth} description={L.textDescriptionAuth} noBorder/>

      <CaseImage src='/cases/riks/auth-1.jpg' />

      <CaseImages layout='gallery'>
      <CaseImage src='/cases/riks/auth-2.jpg' />
      <CaseImage src='/cases/riks/auth-3.jpg' />
      </CaseImages>

      <CaseImage src='/cases/riks/auth-4.jpg' />

      <CaseText title={L.headingOrders} description={L.textDescriptionOrders} noBorder/>

      <CaseImage src='/cases/riks/order-1.jpg' />

      <CaseTextImage
      title={L.headingOrder1}
      description={L.textDescriptionOrder1}
      direction='column'
      src='/cases/riks/order-2.jpg'
      noBorder/>

      <CaseTextImage
      title={L.headingOrder2}
      description={L.textDescriptionOrder2}
      direction='column'
      src='/cases/riks/order-3.jpg'
      noBorder/>
    </>
  );
}
