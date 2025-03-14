import { useSafeLocalization } from '@/hooks/useSafeLocalization';
import TypesafeI18n from '@/i18n/i18n-react';
import BlobityProvider from './providers/BlobityProvider';
import Router from './Router';

export const App = () => {
  const { locale, localesLoaded } = useSafeLocalization();

  if (!localesLoaded) return;

  return (
    <TypesafeI18n locale={locale}>
      <BlobityProvider>
        <Router />
      </BlobityProvider>
    </TypesafeI18n>
  );
};
