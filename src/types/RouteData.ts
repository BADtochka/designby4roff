import { CaseData } from './Cases';
import { Localization, LocalizationObject } from './Localization';

export type RouteData<Main extends LocalizationObject = LocalizationObject> = {
  config: CaseData;
  localization: Localization<Main>;
};
