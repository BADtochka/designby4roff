import { CaseData, CasesCategory } from '@/types/Cases';
import { createCustomStore } from '@/utils/createStore';

export interface CaseOptions extends Pick<CaseData, 'background' | 'borderColor' | 'scheme'> {
  open: boolean;
}

type CasesStates = {
  selectedCategory: CasesCategory;
  caseOptions: CaseOptions;
  newCaseOptions: CaseOptions;
};

type CasesActions = {
  setSelectedCategory: (category: CasesCategory) => void;
  setCaseOptions: (options: Partial<CaseOptions>) => void;
};

const initialCaseOptions: CaseOptions = { open: false, background: '#000', scheme: 'dark' };

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
}));
