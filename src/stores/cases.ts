import { CaseKeys, CasesCategory } from '@/types/Cases';
import { createCustomStore } from '@/utils/createStore';

export type CaseOptions = {
  key?: CaseKeys;
  open: boolean;
  link: string;
  background: string;
  scheme: 'dark' | 'light';
};

type CasesStates = {
  selectedCategory: CasesCategory;
  caseOptions: CaseOptions;
  newCaseOptions: CaseOptions;
};

type CasesActions = {
  setSelectedCategory: (category: CasesCategory) => void;
  setCaseOptions: (options: Partial<CaseOptions>) => void;
  setNewCaseOptions: (options: Partial<CaseOptions>) => void;
};

const initialCaseOptions: CaseOptions = { open: false, background: '#000', link: '', scheme: 'dark' };

export const useCasesStore = createCustomStore({
  name: 'cases',
  persistEnable: false,
})<CasesStates & CasesActions>((set) => ({
  selectedCategory: 'product',
  openCasePage: false,
  caseOptions: initialCaseOptions,
  newCaseOptions: initialCaseOptions,
  setSelectedCategory: (selectedCategory) => set({ selectedCategory }),
  setCaseOptions: (options) => set(({ caseOptions: caseOption }) => ({ caseOptions: { ...caseOption, ...options } })),
  setNewCaseOptions: (options) =>
    set(({ caseOptions: caseOption }) => ({ newCaseOptions: { ...caseOption, ...options } })),
}));
