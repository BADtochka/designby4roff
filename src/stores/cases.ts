import { CaseData, CasesCategory } from '@/types/Cases';
import { createCustomStore } from '@/utils/createStore';

export interface CaseOptions extends Pick<CaseData, 'background' | 'borderColor' | 'scheme' | 'logo' | 'gap'> {}

type CasesStates = {
  selectedCategory: CasesCategory;
  caseOptions: CaseOptions;
};

type CasesActions = {
  setSelectedCategory: (category: CasesCategory) => void;
  setCaseOptions: (options: Partial<CaseOptions>) => void;
};

const initialCaseOptions: CaseOptions = { background: '#000', scheme: 'dark', logo: '/cases/exampleLogo.png', gap: 64 };

export const useCasesStore = createCustomStore({
  name: 'cases',
  persistEnable: false,
})<CasesStates & CasesActions>((set) => ({
  selectedCategory: 'product',
  caseOptions: initialCaseOptions,
  setSelectedCategory: (selectedCategory) => set({ selectedCategory }),
  setCaseOptions: (options) => set(({ caseOptions: caseOption }) => ({ caseOptions: { ...caseOption, ...options } })),
}));
