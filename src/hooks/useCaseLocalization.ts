import { useSystemStore } from '@/stores/system';
import { Localization, LocalizationObject } from '@/types/Localization';

// type HookOptions<Main extends LocalizationObject = LocalizationObject> = {
// routeData: RouteData<Main>;
// };

export const useLocalization = <Main extends LocalizationObject = LocalizationObject>(
  localization?: Localization<Main>,
) => {
  const language = useSystemStore((state) => state.language);

  return { L: (localization ? localization[language] : {}) as Localization<Main>['ru'] };
};
