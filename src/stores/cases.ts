import { CasesCategory } from '@/types/Cases';
import { createCustomStore } from '@/utils/createStore';

type CasesStates = {
  selectedCategory: CasesCategory;
};

type CasesActions = {
  setSelectedCategory: (category: CasesCategory) => void;
};

export const useCasesStore = createCustomStore({
  name: 'cases',
  persistEnable: false,
})<CasesStates & CasesActions>((set) => ({
  selectedCategory: 'product',
  setSelectedCategory: (selectedCategory) => set({ selectedCategory }),
}));
