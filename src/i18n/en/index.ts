import type { Translation } from '../i18n-types.js';

const en = {
  cases: 'Cases',
  about: 'About',
  experiense: 'Experience',
  buttons: {
    contact: 'Contact',
    copyTooltip: 'Скопировано',
  },
  blocks: {
    main: {
      description: 'Product & Game Design',
      moscow: 'Moscow',
    },
    cases: {
      product: 'Product',
      gaming: 'Game',
      worksUpdate: 'Updated the work',
      open: 'Open',
    },
    casesList: {
      product: {
        case1: {
          name: 'Кейс1',
          description: 'Описание кейса насколько он крут.',
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
      description: 'I live by design in 2018.',
      personalInfo:
        'Hi! I am Nikita, a designer who creates intuitive web services, mobile applications, and unique gaming web interfaces. My work is a combination of creativity and technical expertise that allows me to develop products that not only solve business problems, but also give users pleasure from interaction. I currently live in Moscow, Russia.',
      personalInfo2:
        'Previously, he worked on the Volna project, a service for customer interaction with tender specialists. He conducted a market analysis, determined the uniqueness of the product, worked on more than 100 screens and created a detailed design system. Due to the large volume of work, I brought in another designer and coordinated his activities. In addition, he created game interfaces for more than 15 projects, developing the window structure, visual design and UI Kit. Thanks to the publications on Behance, my work began to attract the attention of foreign customers.',
      blogButton: 'I keep my blog on Telegram',
    },
    experience: {
      description: 'Or who the products were created for.',
      andMore: 'And more',
    },
    experienceList: {
      project1: {
        name: 'Freelance',
        description:
          'He conducted research, designed interfaces, websites, and mobile applications. He handled their packaging and accompanied them during the development phase.',
      },
      project2: {
        name: 'Freelance',
        description:
          'He conducted research, designed interfaces, websites, and mobile applications. He handled their packaging and accompanied them during the development phase.',
      },
      project3: {
        name: 'Freelance',
        description:
          'He conducted research, designed interfaces, websites, and mobile applications. He handled their packaging and accompanied them during the development phase.',
      },
    },
    oneMoreThing: {
      title: 'One more thing',
      description: 'I also consider it an achievement worth sharing.',
      meta: '*The product is considered extremist and banned in Russia.',
      cards: {
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
    },
    footer: {
      title: 'Have an idea?',
      description: "Let's create beauty together ^_^",
      copyRight: 'All rights reserved.',
    },
  },
} satisfies Translation;

export default en;
