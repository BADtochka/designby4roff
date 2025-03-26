import { loadLocaleAsync } from '@/i18n/i18n-util.async';
import { useSystemStore } from '@/stores/system';
import { useEffect, useState } from 'react';

export const useSafeLocalization = () => {
  const clientLang = useSystemStore((state) => state.language);

  const [localesLoaded, setLocalesLoaded] = useState(false);

  useEffect(() => {
    const loadLanguages = async () => {
      await loadLocaleAsync('ru');
      await loadLocaleAsync('en');
      setLocalesLoaded(true);
    };
    loadLanguages();
  }, [clientLang]);

  return { clientLang, localesLoaded };
};
