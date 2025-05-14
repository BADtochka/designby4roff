import Button from '@/components/Button';
import Icon from '@/components/Icons';
import { casesList } from '@/contants/casesList';
import { useI18nContext } from '@/i18n/i18n-react';
import { useCasesStore } from '@/stores/cases';
import { CasesCategory } from '@/types/Cases';
import { cn } from '@/utils/cn';
import { delay } from '@/utils/delay';
import { AnimationDefinition, motion, Variants } from 'framer-motion';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Footer';
import OtherCases from './components/OtherCases';

export default function CaseOutlet() {
  const caseOptions = useCasesStore((state) => state.caseOptions);
  const selectedCategory = useCasesStore((state) => state.selectedCategory);
  const setCaseOptions = useCasesStore((state) => state.setCaseOptions);
  const setNewCaseOptions = useCasesStore((state) => state.setNewCaseOptions);
  const setSelectedCategory = useCasesStore((state) => state.setSelectedCategory);
  const { LL } = useI18nContext();
  const { pathname } = useLocation();
  const caseKey = pathname.split('/').findLast((item) => item) as SelectedCategoryKeys;
  const categoryName = pathname.split('/')[2];
  const selectedCase = caseKey && casesList[selectedCategory][caseKey];
  type SelectedCategoryKeys = keyof (typeof casesList)[typeof selectedCategory];

  const casePageVariants: Variants = {
    closed: {
      opacity: 0,
    },
    opened: {
      opacity: 1,
    },
    toClose: {
      y: '100%',
      opacity: 0,
    },
  };

  useEffect(() => {
    document.body.setAttribute('data-no-scroll', 'true');

    return () => {
      document.body.setAttribute('data-no-scroll', 'false');
    };
  }, []);

  useEffect(() => {
    pathname === '/' && setCaseOptions({ open: false });
  }, [pathname]);

  useEffect(() => {
    if (categoryName) setSelectedCategory(categoryName as CasesCategory);
    if (!selectedCase) return;

    setCaseOptions({
      key: caseKey,
      background: selectedCase.background ?? 'black',
      scheme: selectedCase.scheme ?? 'dark',
    });
  }, [categoryName, caseKey]);

  const onAnimationStart = async (def: AnimationDefinition) => {
    if (def === 'opened') {
      await delay(200);
      setNewCaseOptions({ open: false });
    }
  };

  return (
    <motion.div
      variants={casePageVariants}
      initial={caseOptions.open ? 'closed' : false}
      animate='opened'
      exit='toClose'
      style={{
        background: caseOptions.background ?? 'black',
        color: caseOptions.scheme === 'dark' ? 'white' : 'black',
      }}
      className='fixed top-0 left-0 z-20 h-full w-full overflow-auto px-20 pb-10 max-md:px-4'
      transition={{ bounce: false, duration: 0.5, ease: 'easeInOut' }}
      onAnimationStart={onAnimationStart}
      data-lenis-prevent
    >
      <div className='mb-10 flex items-center justify-between py-5 max-md:mb-5'>
        <Icon name='logo' className='size-10 max-md:size-8' />
        {caseOptions.key && (
          <h1 className='font-extrabold uppercase'>
            {LL.blocks.casesList[selectedCategory][caseOptions.key as SelectedCategoryKeys].name()}
          </h1>
        )}
        <Button
          iconLeft='close'
          className={cn(
            'size-[60px] bg-transparent p-[18px] text-white max-md:size-10 max-md:p-2 max-sm:size-8 max-sm:p-1',
            {
              'bg-[#29292951]': caseOptions.scheme === 'light',
            },
          )}
          link='/'
        />
      </div>
      <div className='flex flex-col gap-[120px] max-md:gap-[70px] max-sm:gap-10'>
        <Outlet />
        <OtherCases />
        <Footer mode={caseOptions.scheme} />
      </div>
    </motion.div>
  );
}
