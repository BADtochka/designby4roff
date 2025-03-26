import { lazy } from 'react';

const Menu = lazy(() => import('@/components/MenuLegacy'));
const Main = lazy(() => import('@/modules/Main'));
const About = lazy(() => import('@/modules/About'));
const Cases = lazy(() => import('@/modules/Cases'));
const Experience = lazy(() => import('@/modules/Experience'));
const Footer = lazy(() => import('@/modules/Footer'));
const OneMoreThing = lazy(() => import('@/modules/OneMoreThing'));

export default function Wrapper() {
  return (
    <div id='page-wrapper' className='flex w-full flex-col gap-20 p-[30px] max-md:gap-5 max-md:p-4'>
      <Main />
      <Cases />
      <About />
      <Experience />
      <OneMoreThing />
      <Footer />
      <Menu />
    </div>
  );
}
