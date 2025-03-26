import { Locales } from '@/i18n/i18n-types';
import { createCustomStore } from '@/utils/createStore';

type SystemStates = {
  language: Locales;
  currentBlock: string;
};

type SystemAction = {
  setLanguage: (lang: Locales) => void;
  setCurrentBlock: (block: string) => void;
};

const isClientRussian = window.navigator.language.includes('ru');

export const useSystemStore = createCustomStore({
  name: 'system',
})<SystemStates & SystemAction>((set) => ({
  language: isClientRussian ? 'ru' : 'en',
  currentBlock: location.hash.replace('#', ''),
  setLanguage: (lang) => set({ language: lang }),
  setCurrentBlock: (block) => set({ currentBlock: block }),
}));
