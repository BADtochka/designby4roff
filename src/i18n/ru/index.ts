import type { BaseTranslation } from '../i18n-types.js';

const ru = {
  cases: 'Кейсы',
  about: 'О себе',
  experiense: 'Опыт',
  now: 'н.в.',
  buttons: {
    contact: 'Связаться',
    copyTooltip: 'Скопировано',
  },
  blocks: {
    main: {
      description: 'Продуктовый & Игровой дизайн',
      moscow: 'Москва',
    },
    cases: {
      product: 'Продуктовые',
      gaming: 'Игровые',
      worksUpdate: 'Обновил работы',
      open: 'Открыть',
    },
    casesList: {
      product: {
        case1: {
          name: 'Кейс1',
          description: 'Описание кейса насколько он крут.',
          header1: 'Русский язык',
        },
        case2: {
          name: 'Кейс2',
          description: 'Описание кейса насколько он крут.',
        },
        case3: {
          name: 'Кейс3',
          description: 'Описание кейса насколько он крут.',
        },
      },
      game: {
        case1: {
          name: 'Кейс1',
          description: 'Описание кейса насколько он крут.',
        },
        case2: {
          name: 'Кейс2',
          description: 'Описание кейса насколько он крут.',
        },
        test: {
          name: 'Тестовый кейс',
          description: 'Тестовое описание',
        },
        test2: {
          name: 'Тестовый кейс',
          description: 'Тестовое описание',
        },
        case4: {
          name: 'Кейс4',
          description: 'Описание кейса насколько он крут.',
        },
      },
    },
    about: {
      description: 'Живу дизайном с 2018.',
      personalInfo:
        'Привет! Я Никита — дизайнер создающий интуитивные веб-сервисы, мобильные приложения и уникальные игровые веб-интерфейсы. Моя работа — это сочетание творческого подхода и технической экспертизы, позволяющее мне разрабатывать продукты, которые не только решают задачи бизнеса, но и дарят пользователям удовольствие от взаимодействия. В настоящее время проживаю в Москве, Россия.',
      personalInfo2:
        'Ранее работал над проектом проектом Волна — сервисом для взаимодействия заказчиков с тендерными специалистами. Провел анализ рынка, определил уникальность продукта, проработал более 100 экранов и создал детализированную дизайн-систему. Из-за большого объема работ привлек еще одного дизайнера и координировал его деятельность. Помимо этого занимался созданием игровых интерфейсов для более чем 15 проектов, разрабатывая структуру окон, визуальное оформление и UI-Kit. Благодаря публикациям на Behance мои работы начали привлекать внимание зарубежных заказчиков.',
      blogButton: 'Веду свой блог в Telegram',
    },
    experience: {
      description: 'Или для кого создавались продукты.',
      andMore: 'И больше',
    },
    experienceList: {
      project1: {
        name: 'Фриланс',
        description:
          'Проводил исследования, проектировал интерфейсы, сайты и мобильные приложения. Занимался их упаковкой и сопровождал на этапе разработки.',
      },
      project2: {
        name: 'Фриланс',
        description:
          'Проводил исследования, проектировал интерфейсы, сайты и мобильные приложения. Занимался их упаковкой и сопровождал на этапе разработки.',
      },
      project3: {
        name: 'Фриланс',
        description:
          'Проводил исследования, проектировал интерфейсы, сайты и мобильные приложения. Занимался их упаковкой и сопровождал на этапе разработки.',
      },
    },
    oneMoreThing: {
      title: 'И ещё кое-что',
      description: 'Тоже считаю достижением, которым стоит поделиться.',
      meta: '*Продукт признан экстремистским и запрещен на территории России.',
      cards: {
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
    },
    footer: {
      title: 'Есть идея?',
      description: 'Давайте создавать красоту вместе ^_^',
      copyRight: 'Все права защищены.',
    },
  },
} satisfies BaseTranslation;

export default ru;
