import Case1 from '@/cases/Case1';
import { Cases } from '@/types/Cases';

export const casesList: Cases = {
  product: {
    case1: {
      image: 'card.png',
      startDate: '11.2025',
      page: <Case1 />,
      background: '#201550',
      scheme: 'dark',
    },
    case2: {
      image: 'card.png',
      startDate: '11.2025',
      page: <Case1 />,
      scheme: 'light',
      background: '#FFF',
    },
    case3: {
      image: 'card.png',
      startDate: '11.2025',
      page: <Case1 />,
    },
  },
  game: {
    case1: {
      image: 'card.png',
      startDate: '11.2025',
      page: <Case1 />,
    },
    case2: {
      image: 'card.png',
      startDate: '11.2025',
      page: <Case1 />,
    },
    case4: {
      image: 'card.png',
      startDate: '11.2025',
      page: <Case1 />,
    },
    test: {
      image: 'card.png',
      startDate: '11.2025',
      page: <Case1 />,
    },
    test2: {
      image: 'card.png',
      startDate: '11.2025',
      page: <Case1 />,
    },
  },
};
