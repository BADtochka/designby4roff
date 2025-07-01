import { GlobModule } from '@/types/GlobModule';
import { RouteData } from '@/types/RouteData';
import { createCaseRoutes } from '@/utils/createCaseRoutes';
import { useLocation } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

export const useCaseRoutes = () => {
  const { pathname } = useLocation();
  const [cases, setCases] = useState<GlobModule | Record<string, RouteData>>({});
  const [currentCase, setCurrentCase] = useState<RouteData>();

  const reloadRoutes = async () => {
    const newRoutes = await createCaseRoutes();
    setCases(newRoutes);
    // setCases(Object.values(newRoutes));
    // console.log(newRoutes, `/src/routes${pathname}`);
    setCurrentCase(newRoutes[`${pathname}`]);
  };

  useEffect(() => {
    reloadRoutes();
  }, []);

  return { cases, currentCase };
};
