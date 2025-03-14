import Blobity from 'blobity';
import useBlobity from 'blobity/lib/react/useBlobity';
import { createContext, PropsWithChildren, RefObject } from 'react';

export const BlobityContext = createContext<RefObject<Blobity | null>>({ current: null });

export default function BlobityProvider({ children }: PropsWithChildren) {
  const blobity = useBlobity({
    licenseKey: 'opensource',
    zIndex: 1,
    dotColor: 'rgb(202, 202, 202)',
    color: 'rgb(255, 255, 255)',
    focusableElements: '[data-blobity], [data-blobity-tooltip]',
    magnetic: false,
    kineticMorphing: false,
  });

  return <BlobityContext.Provider value={blobity}>{children}</BlobityContext.Provider>;
}
