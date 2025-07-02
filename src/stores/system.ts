import { Locales } from '@/types/Localization';
import { createCustomStore } from '@/utils/createStore';

type SystemStates = {
  language: Locales;
  currentHash: string;
};

type SystemAction = {
  setLanguage: (lang: Locales) => void;
  setCurrentHash: (block: string) => void;
};

const isClientRussian = window.navigator.language.includes('ru');

export const useSystemStore = createCustomStore({
  name: 'system',
})<SystemStates & SystemAction>((set) => ({
  language: isClientRussian ? 'ru' : 'en',
  currentHash: location.hash.replace('#', ''),
  setLanguage: (lang) => set({ language: lang }),
  setCurrentHash: (block) => set({ currentHash: block }),
}));
