import { cn } from '@/utils/cn';
import { AnimatePresence } from 'framer-motion';
import { cloneElement, lazy } from 'react';
import { useLocation, useOutlet } from 'react-router';
import { AnimatedTranslation } from '../AnimatedTranslation';

const Menu = lazy(() => import('@/components/Menu'));
const Main = lazy(() => import('@/modules/Main'));
const About = lazy(() => import('@/modules/About'));
const Cases = lazy(() => import('@/modules/Cases'));
const Experience = lazy(() => import('@/modules/Experience'));
const Footer = lazy(() => import('@/modules/Footer'));
const OneMoreThing = lazy(() => import('@/modules/OneMoreThing'));

export default function Wrapper() {
  const { pathname } = useLocation();
  const element = useOutlet();

  return (
    <div id='page-wrapper' className={cn('flex w-full flex-col gap-20 p-[30px] max-md:gap-5 max-md:p-4')}>
      <Main />
      <Cases />
      <About />
      <Experience />
      <OneMoreThing />
      <Footer />
      <Menu />
      <AnimatePresence mode='wait' initial={true}>
        {element && cloneElement(element, { key: pathname })}
      </AnimatePresence>
      <AnimatedTranslation />
    </div>
  );
}
