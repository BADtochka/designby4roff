import { FileRoutesByFullPath } from '@/routeTree.gen';
import { LocalizationObject } from './Localization';
import { RouteData } from './RouteData';

export type GlobCaseName = `/src/routes${keyof FileRoutesByFullPath}.tsx`;

export type GlobModule<Main extends LocalizationObject = LocalizationObject> = Record<GlobCaseName, RouteData<Main>>;
