import { useSafeLocalization } from '@/hooks/useSafeLocalization';
import TypesafeI18n from '@/i18n/i18n-react';
import ReactLenis from 'lenis/react';
import Router from './Router';

export const App = () => {
  const { clientLang, localesLoaded } = useSafeLocalization();

  if (!localesLoaded) return;

  return (
    <TypesafeI18n locale={clientLang}>
      <ReactLenis root options={{ duration: 0.8 }}>
        <Router />
      </ReactLenis>
    </TypesafeI18n>
  );
};
