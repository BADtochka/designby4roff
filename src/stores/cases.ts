import { CaseKeys, CasesCategory } from '@/types/Cases';
import { createCustomStore } from '@/utils/createStore';

type PageOptions = {
  key?: CaseKeys;
  open: boolean;
  link: string;
  background: string;
  scheme: 'dark' | 'light';
};

type CasesStates = {
  selectedCategory: CasesCategory;
  caseOption: PageOptions;
};

type CasesActions = {
  setSelectedCategory: (category: CasesCategory) => void;
  setCaseOptions: (options: Partial<PageOptions>) => void;
};

export const useCasesStore = createCustomStore({
  name: 'cases',
  persistEnable: false,
})<CasesStates & CasesActions>((set) => ({
  selectedCategory: 'product',
  openCasePage: false,
  caseOption: { open: false, background: '#000', link: '', scheme: 'dark' },
  setSelectedCategory: (selectedCategory) => set({ selectedCategory }),
  setCaseOptions: (options) => set(({ caseOption }) => ({ caseOption: { ...caseOption, ...options } })),
}));
