import { useEffect } from 'react';

export const useHtmlLoader = () => {
  useEffect(() => {
    document.body.setAttribute('data-hidden', 'false');
    document.body.setAttribute('data-no-scroll', 'false');
  }, []);
};
