import { Localization, LocalizationObject } from '@/types/Localization';

export const defineLocalization = <Main extends LocalizationObject = LocalizationObject>(
  input: Localization<Main>,
): Localization<Main> => {
  return input;
};

export const T = defineLocalization;
