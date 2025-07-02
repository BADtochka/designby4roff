export type Locales = 'ru' | 'en';

export type LocalizationObject = Record<string, string | Record<string, string>>;

export type Localization<Main extends LocalizationObject = LocalizationObject> = {
  ru: Main;
  en: { [K in keyof Main]: Main[K] };
};
