import { detectLocale } from '@/i18n/i18n-util';
import { loadLocaleAsync } from '@/i18n/i18n-util.async';
import { useEffect, useState } from 'react';
import { navigatorDetector } from 'typesafe-i18n/detectors';

export const useSafeLocalization = () => {
  const locale = detectLocale(navigatorDetector);
  const [localesLoaded, setLocalesLoaded] = useState(false);

  useEffect(() => {
    loadLocaleAsync(locale).then(() => setLocalesLoaded(true));
  }, [locale]);

  return { locale, localesLoaded };
};
