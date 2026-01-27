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
    logo: '/cases/walltime/wt-logo.png',
    image: '/walltime/preview.jpg',
    startDate: '11.2020',
    endDate: '01.2023',
    scheme: 'dark',
    background: '#000',
    borderColor: '#161616',
    gap: 64,
  } as CaseData,
  localization: T({
    ru: {
      caseTitle: 'walltime',
      caseShortDescription:
        'Установите живые обои в формате timelapse и создавайте собственные подборки, меняйте время, делитесь с друзьями и настраивайте экран под себя.',
      caseDescription:
        'Приложение walltime позволит установить на экран смартфона уникальные динамические обои в timelapse и не только. Вы можете создать свои коллекции или использовать готовые – выбрать есть из чего! Меняйте время, добавляйте новые коллекции, обменивайтесь ими с друзьями - персонализируйте экран как пожелаете!',
      hello: 'Участие в разработке',
      name: 'Ноябрь 2020 - Январь 2023',
      info1Title: 'Роль',
      info1Description: 'Design Lead, Product Design',
      info2Title: 'url',
      info2Description: 'walltime.ru',

      headingProduct: 'О ПРОДУКТЕ',
      textDescriptionProduct:
        'Мобильное приложение, которое превращает обои на экране устройства в живое визуальное повествование. Здесь не просто меняются картинки — смена фонов становится частью настроения, времени суток и эстетики пользователя. walltime предлагает тщательно подобранные коллекции, а также даёт свободу создавать и делиться своими собственными. Приложение было выпущено только под платформу Android, а версия визуала которая используется в кейсе, создавалась под iOS и является лишь выдумкой автора.',

      headingOnboarding: 'ОНБОРДИНГ',
      textDescriptionOnbording:
        'При первом запуске пользователь видит серию слайдов с описанием ключевых возможностей walltime — смена обоев по времени, загрузка собственных наборов, публикация и обмен. Это быстро вводит пользователя в суть.',

      headingHome: 'ИСТОРИИ',
      textDescriptionHome:
        'Главный экран построен по принципу визуального фида. Вверху — «сторис» с новостями, ниже — карточки коллекций, которые можно листать свайпом вверх-вниз. Переключение между глобальными и личными наборами — одним нажатием.',

      headingMainPage: 'ГЛАВНАЯ СТРАНИЦА',
      textDescriptionMainPage:
        'Все коллекции собраны в одном потоке — листайте, выбирайте и запускайте понравившиеся. Интерфейс позволяет быстро переключаться между личными наборами и готовыми подборками, чтобы находить вдохновение за секунды.',

      headingMainMyCollection: 'СОЗДАНИЕ И УПРАВЛЕНИЕ СВОИМИ КОЛЛЕКЦИЯМИ',
      textDescriptionMyCollection:
        'Раздел создан специально для работы с личными подборками: здесь можно создавать новые коллекции, редактировать существующие и управлять уже опубликованными. Вся структура интуитивна — достаточно пары касаний, чтобы внести изменения или поделиться коллекцией с другими.',

      headingMainSeeCollection: 'ПРОСМОТР КОЛЛЕКЦИИ',
      textDescriptionSeeCollection:
        'Страница, где каждая коллекция раскрывается полностью — с изображениями, автором, категорией и атмосферой. Отсюда легко установить её на экран или мгновенно поделиться с другими.',

      headingMainPublicCollection: 'ПУБЛИКАЦИЯ КОЛЛЕКЦИИ',
      textDescriptionPublicCollection:
        'Перед публикацией достаточно выбрать обложку, указать категорию, добавить описание и задать формат доступа — бесплатный или платный. После оформления и подтверждения ваша коллекция станет доступна другим пользователям в магазине приложения.',

      headingMainSharewall: 'SHAREWALL',
      textDescriptionSharewall:
        'Один пользователь создаёт QR-код для своей коллекции, а другому достаточно просто навести камеру — и подборка мгновенно окажется у него в приложении. Всё происходит без лишних действий, будто по волшебству. При желании доступ можно отключить в любой момент.',

      headingMainFeed: 'ПОЛЬЗОВАТЕЛЬСКАЯ ЛЕНТА КОЛЛЕКЦИЙ',
      textDescriptionFeed:
        'Живая галерея, где пользователи делятся своими визуальными мирами. Каждый набор — это чей-то взгляд на стиль, настроение или момент, которым можно вдохновиться и сразу установить себе.',

      headingMainStore: 'МАГАЗИН',
      textDescriptionStore:
        'Пространство с подборками от авторов со всего мира и самой команды приложения, доступными бесплатно или за небольшую плату. Здесь легко найти уникальные визуальные коллекции и установить их в один клик.',

      headingMainProfile: 'ПРОФИЛЬ',
      textDescriptionProfile:
        'Пространство, где собраны твои коллекции, лайки и подписчики — всё, что говорит о тебе через визуальный стиль. Профиль становится отражением вкуса и местом, откуда легко делиться вдохновением с другими.',

      headingMainSettings: 'НАСТРОЙКИ',
      textDescriptionSettings:
        'Раздел настроек позволяет управлять памятью устройства, языком интерфейса, дополнительными функциями, оплатами и поддержкой. Здесь собраны все необходимые инструменты для комфортного использования приложения.',

      headingMainPopup: 'ДИАЛОГОВЫЕ ОКНА',
      textDescriptionPopup:
        'Каждое важное действие сопровождается понятным и лаконичным диалогом — будь то удаление коллекции, оценка приложения или выход. Интерфейс построен так, чтобы пользователь всегда чувствовал контроль и понимание происходящего.',

      headingMainTypo: 'ТИПОГРАФИКА И СТИЛИ',
      textDescriptionTypo:
        'В основе интерфейса лежит шрифт SF Pro — современный, технологичный и легко читаемый. Цветовая палитра выстроена на контрасте света и тени, где акцентный градиент оттеняет важные детали, а базовые тона создают глубокую и выразительную визуальную среду.',
    },
    en: {
      caseTitle: 'walltime',
      caseShortDescription:
        'Set dynamic timelapse wallpapers, build custom collections, adjust the time, share with friends, and make your screen truly personal.',
      caseDescription:
        'The walltime app will allow you to install unique dynamic timelapse wallpapers on your smartphone screen and more. You can create your own collections or use ready–made ones - there is plenty to choose from! Change the time, add new collections, share them with friends - personalize the screen as you wish!',
      hello: 'Involvement in development',
      name: 'November 2020 - January 2023',
      info1Title: 'Role',
      info1Description: 'Design Lead, Product Design',
      info2Title: 'url',
      info2Description: 'walltime.ru',

      headingProduct: 'ABOUT THE PRODUCT',
      textDescriptionProduct:
        'A mobile application that turns the wallpaper on the device screen into a live visual narrative. The images dont just change here — changing backgrounds becomes part of the users mood, time of day, and aesthetics. Walltime offers carefully selected collections, as well as the freedom to create and share your own. The application was released only for the Android platform, and the visual version used in the case was created for iOS and is only an invention of the author.',

      headingOnboarding: 'ONBOARDING',
      textDescriptionOnbording:
        'At the first launch, the user sees a series of slides describing the key features of walltime — changing wallpapers in time, uploading their own sets, publishing and sharing. This quickly introduces the user to the point.',

      headingHome: 'STORIES',
      textDescriptionHome:
        'The main screen is based on the principle of a visual feed. At the top is a "story" with news, below are collection cards that can be scrolled up and down. Switch between global and personal sets with a single tap.',

      headingMainPage: 'MAIN PAGE',
      textDescriptionMainPage:
        'All collections are collected in one stream — scroll through, select and launch the ones you like. The interface allows you to quickly switch between personal sets and ready-made collections to find inspiration in seconds.',

      headingMainMyCollection: 'CREATE AND MANAGE YOUR OWN COLLECTIONS',
      textDescriptionMyCollection:
        'This section was created specifically for working with personal collections: here you can create new collections, edit existing ones, and manage those that have already been published. The whole structure is intuitive — just a couple of taps are enough to make changes or share the collection with others.',

      headingMainSeeCollection: 'VIEWING THE COLLECTION',
      textDescriptionSeeCollection:
        'A page where each collection is fully revealed — with images, author, category, and atmosphere. From here, its easy to install it on the screen or instantly share it with others.',

      headingMainPublicCollection: 'PUBLISHING A COLLECTION',
      textDescriptionPublicCollection:
        'Before publishing, it is enough to select a cover, specify a category, add a description and set the access format — free or paid. After registration and confirmation, your collection will be available to other users in the app store.',

      headingMainSharewall: 'SHAREWALL',
      textDescriptionSharewall:
        'One user creates a QR code for his collection, and another just needs to point the camera and the collection will instantly appear in his application. Everything happens without unnecessary actions, as if by magic. If desired, access can be disabled at any time.',

      headingMainFeed: 'CUSTOM COLLECTIONS FEED',
      textDescriptionFeed:
        'A live gallery where users share their visual worlds. Each set is someones take on a style, mood, or moment that you can be inspired by and immediately set for yourself.',

      headingMainStore: 'STORE',
      textDescriptionStore:
        'A space with collections from authors from all over the world and the app team itself, available for free or for a small fee. Its easy to find unique visual collections here and install them in one click.',

      headingMainProfile: 'PROFILE',
      textDescriptionProfile:
        'The space where your collections, likes, and followers are collected is everything that speaks about you through a visual style. The profile becomes a reflection of taste and a place from where it is easy to share inspiration with others.',

      headingMainSettings: 'SETTINGS',
      textDescriptionSettings:
        'The settings section allows you to manage the devices memory, interface language, additional functions, payments, and support. Here you will find all the necessary tools for comfortable use of the application.',

      headingMainPopup: 'POPUP',
      textDescriptionPopup:
        'Every important action is accompanied by a clear and concise dialogue, whether its deleting a collection, evaluating an app, or exiting. The interface is designed so that the user always feels in control and understands what is happening.',

      headingMainTypo: 'TYPOGRAPHY & STYLES',
      textDescriptionTypo:
        'The interface is based on the SF Pro font, which is modern, technological and easy to read. The color palette is based on the contrast of light and shadow, where the accent gradient highlights important details, and the base tones create a deep and expressive visual environment.',
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
        <AboutCaseInfo title={L.info2Title} description={L.info2Description} url='https://play.google.com/store/apps/details?id=com.eddention.walltime' />
      </AboutCase>

      <CaseImage src='/cases/walltime/hello-walltime.jpg' />

      <CaseText title={L.headingProduct} description={L.textDescriptionProduct} noBorder />

      <CaseMedia layout='gallery'>
        <CaseImage src='/cases/walltime/product-1.jpg' />
        <CaseImage src='/cases/walltime/product-2.jpg' />
      </CaseMedia>

      <CaseImage src='/cases/walltime/product-3.jpg' />

      <CaseText title={L.headingOnboarding} description={L.textDescriptionOnbording} noBorder />

      <CaseMedia layout='gallery'>
        <CaseImage src='/cases/walltime/onboarding-1.jpg' />
        <CaseImage src='/cases/walltime/onboarding-2.jpg' />
      </CaseMedia>

      <CaseText title={L.headingHome} description={L.textDescriptionHome} noBorder />

      <CaseMedia layout='gallery'>
        <CaseImage src='/cases/walltime/home-1.jpg' />
        <CaseImage src='/cases/walltime/home-2.jpg' />
      </CaseMedia>

      <CaseText title={L.headingMainPage} description={L.textDescriptionMainPage} noBorder />

      <CaseImage src='/cases/walltime/mainpage-1.jpg' />

      <CaseMedia layout='gallery'>
        <CaseImage src='/cases/walltime/mainpage-2.jpg' />
        <CaseImage src='/cases/walltime/mainpage-3.jpg' />
      </CaseMedia>

      <CaseText title={L.headingMainMyCollection} description={L.textDescriptionMyCollection} noBorder />

      <CaseImage src='/cases/walltime/homepage-1.jpg' />

      <CaseMedia layout='gallery'>
        <CaseImage src='/cases/walltime/homepage-2.jpg' />
        <CaseImage src='/cases/walltime/homepage-3.jpg' />
      </CaseMedia>

      <CaseMedia layout='row'>
        <CaseImage src='/cases/walltime/homepage-4.jpg' />
        <CaseImage src='/cases/walltime/homepage-5.jpg' />
        <CaseImage src='/cases/walltime/homepage-6.jpg' />
      </CaseMedia>

      <CaseText title={L.headingMainSeeCollection} description={L.textDescriptionSeeCollection} noBorder />

      <CaseVideo src='/cases/walltime/wlt.webm' />

      <CaseMedia layout='gallery'>
        <CaseImage src='/cases/walltime/seecollection-1.jpg' />
        <CaseImage src='/cases/walltime/seecollection-2.jpg' />
      </CaseMedia>

      <CaseText title={L.headingMainPublicCollection} description={L.textDescriptionPublicCollection} noBorder />

      <CaseMedia layout='row'>
        <CaseImage src='/cases/walltime/publiccollection-1.jpg' />
        <CaseImage src='/cases/walltime/publiccollection-2.jpg' />
        <CaseImage src='/cases/walltime/publiccollection-3.jpg' />
      </CaseMedia>

      <CaseText title={L.headingMainSharewall} description={L.textDescriptionSharewall} noBorder />

      <CaseImage src='/cases/walltime/sharewall-1.jpg' />

      <CaseMedia layout='gallery'>
        <CaseImage src='/cases/walltime/sharewall-2.jpg' />
        <CaseImage src='/cases/walltime/sharewall-3.jpg' />
      </CaseMedia>

      <CaseImage src='/cases/walltime/sharewall-4.jpg' />

      <CaseText title={L.headingMainFeed} description={L.textDescriptionFeed} noBorder />

      <CaseMedia layout='gallery'>
        <CaseImage src='/cases/walltime/feed-1.jpg' />
        <CaseImage src='/cases/walltime/feed-2.jpg' />
      </CaseMedia>

      <CaseImage src='/cases/walltime/feed-3.jpg' />

      <CaseText title={L.headingMainStore} description={L.textDescriptionStore} noBorder />

      <CaseImage src='/cases/walltime/store-1.jpg' />

      <CaseMedia layout='gallery'>
        <CaseImage src='/cases/walltime/store-2.jpg' />
        <CaseImage src='/cases/walltime/store-3.jpg' />
      </CaseMedia>

      <CaseText title={L.headingMainProfile} description={L.textDescriptionProfile} noBorder />

      <CaseImage src='/cases/walltime/profile-1.jpg' />

      <CaseMedia layout='gallery'>
        <CaseImage src='/cases/walltime/profile-2.jpg' />
        <CaseImage src='/cases/walltime/profile-3.jpg' />
      </CaseMedia>

      <CaseText title={L.headingMainSettings} description={L.textDescriptionSettings} noBorder />

      <CaseImage src='/cases/walltime/settings-1.jpg' />

      <CaseMedia layout='gallery'>
        <CaseImage src='/cases/walltime/settings-2.jpg' />
        <CaseImage src='/cases/walltime/settings-3.jpg' />
      </CaseMedia>

      <CaseText title={L.headingMainPopup} description={L.textDescriptionPopup} noBorder />

      <CaseImage src='/cases/walltime/dialogs-1.jpg' />

      <CaseText title={L.headingMainTypo} description={L.textDescriptionTypo} noBorder />

      <CaseImage src='/cases/walltime/typo-1.jpg' />

      <CaseImage src='/cases/walltime/typo-2.jpg' />

      <CaseImage src='/cases/walltime/final.jpg' />
    </>
  );
}
