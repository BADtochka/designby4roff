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
    logo: '/cases/rics/RicsLogo.png',
    image: '/rics/preview.png',
    startDate: '07.2024',
    endDate: '02.2025',
    scheme: 'light',
    background: '#ffffff',
    borderColor: '#D6D6D6',
    gap: 64,
  } as CaseData,


  localization: T({
    ru: {
      caseTitle: 'РИКС',
      caseShortDescription:'Сервис на базе ИИ анализирует кредитную историю, находит слабые места и предлагает пути их улучшения. Решения формируются быстрее и точнее, чем при ручной проверке.',
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
  
      headingOrder3: 'ОБРАБОТКА ЗАЯВКИ',
      textDescriptionOrder3: 'После загрузки документов заявка автоматически отправляется на обработку. Статус можно отследить в разделе «История заказов», где также доступна оплата и готовый отчёт.',
      
      headingProfile: 'РЕДАКТИРОВАНИЕ ПРОФИЛЯ',
      textDescriptionProfile: 'Редактирование профиля реализовано через простой и интуитивный интерфейс: доступ к действиям — прямо с главного экрана, форма включает ключевые поля для обновления данных пользователя и организации. Предусмотрена загрузка фотографии и возможность смены номера телефона с обязательным подтверждением по СМС, что обеспечивает персонализацию и дополнительную защиту аккаунта.',
      
      headingBranding: 'БРЕНДИНГ',
      textDescriptionBranding: 'Визуальный стиль РИКС построен на сочетании технологичности и доверия. Интерфейс оформлен с использованием шрифта OneSt — лаконичного и функционального, а на сайте используется выразительный TT Travels Next, добавляющий характер и динамику. Цветовая палитра с акцентным бирюзовым, светло-серым и глубоким тёмным оттенками усиливает ощущение прозрачности и надёжности, а логотип в свою очередь — простой и символичный — легко масштабируется и может быть узнаваем как в цифровой среде, так и в приложениях.',

      headingResult: 'РЕЗУЛЬТАТ',
      textDescriptionResult:'Проект объединил аналитические возможности сервиса с лаконичным и продуманным интерфейсом, что сделало взаимодействие с отчётами простым и наглядным. Чёткая визуальная система и структурированный пользовательский путь помогают быстрее ориентироваться в данных и принимать обоснованные решения.',

    },



    en: {
      caseTitle: 'RICS',
      caseShortDescription:'AI-powered service analyzes your credit history, detects weak points, and suggests ways to improve. Results are delivered faster and more accurately than manual review.',
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

        headingOrder1: 'BASIC DATA',
      textDescriptionOrder1: 'At the first stage, the user needs to enter basic personal data — full name, date of birth, passport information, and also specify information about bankruptcy, if it is relevant.',
      
      headingOrder2: 'UPLOADING DOCUMENTS',
      textDescriptionOrder2: 'На втором этапе загружаются три документа: отчёты из ОКБ, НБКИ и скоринг-бюро. На их основе система формирует персональный анализ кредитной истории.',
      
      headingOrder3: 'APPLICATION PROCESSING',
      textDescriptionOrder3: 'At the second stage, three documents are uploaded: reports from the Design Bureau, NBKI and the scoring bureau. Based on them, the system generates a personal credit history analysis.',

      headingProfile: 'PROFILE EDITING',
      textDescriptionProfile: 'Profile editing is implemented through a simple and intuitive interface: access to actions is available directly from the main screen, and the form includes key fields for updating user and organization data. It provides for uploading photos and the ability to change the phone number with mandatory SMS confirmation, which provides personalization and additional account protection.',

      headingBranding: 'BRANDING',
      textDescriptionBranding: 'The visual style of RIKS is based on a combination of technology and trust. The interface is designed using the OneSt font, which is concise and functional, and the site uses the expressive TT Travels Next, which adds character and dynamics. The color palette with accent turquoise, light gray and deep dark shades enhances the feeling of transparency and reliability, while the logo, in turn, is simple and symbolic, easily scaled and can be recognized both in the digital environment and in applications.',

      headingResult: 'RESULT',
      textDescriptionResult:'The project combined the analytical capabilities of the service with a concise and thoughtful interface, which made interaction with reports simple and visual. A clear visual system and a structured user path help you navigate data faster and make informed decisions.',

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

      <CaseImage src='/cases/rics/slide1.jpg' noBorder/>

      <CaseText title={L.heading} description={L.textDescription} noBorder/>

      <CaseImages layout='gallery'>
      <CaseImage src='/cases/rics/phone-icon.jpg' noBorder/>
      <CaseImage src='/cases/rics/doc-icon.jpg' noBorder/>
      </CaseImages>

      <CaseText title={L.headingAuth} description={L.textDescriptionAuth} noBorder/>

      <CaseImage src='/cases/rics/auth-1.jpg' noBorder />

      <CaseImages layout='gallery'>
      <CaseImage src='/cases/rics/auth-2.jpg' noBorder/>
      <CaseImage src='/cases/rics/auth-3.jpg' noBorder/>
      </CaseImages>

      <CaseImage src='/cases/rics/auth-4.jpg' noBorder/>

      <CaseText title={L.headingOrders} description={L.textDescriptionOrders} noBorder/>

      <CaseImage src='/cases/rics/order-1.jpg' noBorder/>

      <CaseTextImage
      title={L.headingOrder1}
      description={L.textDescriptionOrder1}
      direction='column'
      src='/cases/rics/order-2.jpg' noImageBorder
      noBorder reverse/>

      <CaseTextImage
      title={L.headingOrder2}
      description={L.textDescriptionOrder2}
      direction='column'
      src='/cases/rics/order-3.jpg' noBorder noImageBorder/>

      <CaseTextImage
      title={L.headingOrder3}
      description={L.textDescriptionOrder3}
      direction='column'
      src='/cases/rics/order-4.jpg' noBorder reverse noImageBorder/>
     
      <CaseImage src='/cases/rics/order-5.jpg' noBorder />

      <CaseText title={L.headingProfile} description={L.textDescriptionProfile} noBorder/>

      <CaseImages layout='gallery'>
      <CaseImage src='/cases/rics/profile-1.jpg' noBorder/>
      <CaseImage src='/cases/rics/profile-2.jpg' noBorder/>
      </CaseImages>

      <CaseImage src='/cases/rics/profile-3.jpg' noBorder/>

      <CaseText title={L.headingBranding} description={L.textDescriptionBranding} noBorder/>

      <CaseImage src='/cases/rics/branding-1.jpg' noBorder/>

      <CaseImages layout='gallery'>
      <CaseImage src='/cases/rics/branding-2.jpg' noBorder/>
      <CaseImage src='/cases/rics/branding-3.jpg' noBorder/>
      </CaseImages>

      <CaseImage src='/cases/rics/branding-4.jpg' noBorder/>

      <CaseVideo src='/cases/rics/rics-teaser.webm' noBorder/>

      <CaseText title={L.headingResult} description={L.textDescriptionResult} noBorder/>

      <CaseImage src='/cases/rics/result-1.jpg' noBorder/>    

      </>
      
  );
}
