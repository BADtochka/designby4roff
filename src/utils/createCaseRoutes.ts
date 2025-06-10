import { casesList } from '@/constants/casesList';
import { getObjectKeys } from './getObjectKeys';

export const createCaseRoutes = () => {
  const gameCategory = getObjectKeys(casesList.game).map((item) => ({
    name: `game/${item}`,
    element: casesList.game[item].page,
  }));
  const productCategory = getObjectKeys(casesList.product).map((item) => ({
    name: `product/${item}`,
    element: casesList.product[item].page,
  }));

  return [...gameCategory, ...productCategory];
};
