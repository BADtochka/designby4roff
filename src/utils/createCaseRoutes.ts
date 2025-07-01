import { GlobCaseName, GlobModule } from '@/types/GlobModule';
import { RouteData } from '@/types/RouteData';
import { ModuleNamespace } from 'vite/types/hot.js';

export const createCaseRoutes = async () => {
  const allCases = import.meta.glob('/src/routes/cases/**/*.tsx', { query: '?inline' });
  const newRouteList: GlobModule | Record<string, RouteData> = {};

  await Promise.all(
    Object.entries(allCases).flatMap(async ([path, loader]) => {
      const mod = (await loader()) as ModuleNamespace;
      if (!mod.routeData) return;
      const formattedPath = path.replace('/src/routes', '').replace('.tsx', '');
      newRouteList[formattedPath as GlobCaseName] = mod.routeData;
    }),
  );

  return newRouteList;
};
