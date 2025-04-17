import Button from '@/components/Button';
import Icon from '@/components/Icons';
import { casesList } from '@/contants/casesList';
import { useI18nContext } from '@/i18n/i18n-react';
import { useCasesStore } from '@/stores/cases';
import { CasesCategory } from '@/types/Cases';
import { motion, Variants } from 'framer-motion';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';

export default function CaseOutlet() {
  const caseOption = useCasesStore((state) => state.caseOption);
  const selectedCategory = useCasesStore((state) => state.selectedCategory);
  const setCaseOptions = useCasesStore((state) => state.setCaseOptions);
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

  return (
    <motion.div
      variants={casePageVariants}
      initial={caseOption.open ? 'closed' : false}
      animate='opened'
      exit='toClose'
      style={{ background: caseOption.background ?? 'black', color: caseOption.scheme === 'dark' ? 'white' : 'black' }}
      className='fixed top-0 left-0 z-20 h-full w-full overflow-auto px-20 pb-10 max-md:px-4'
      transition={{ bounce: false, duration: 0.8, ease: 'easeInOut' }}
      data-lenis-prevent
    >
      <div className='flex items-center justify-between py-5'>
        <Icon name='logo' className='size-10' />
        {caseOption.key && (
          <h1 className='font-extrabold uppercase'>
            {LL.blocks.casesList[selectedCategory][caseOption.key as SelectedCategoryKeys].name()}
          </h1>
        )}
        <Button iconLeft='close' className={'size-[60px] p-[18px] text-white'} link='/' />
      </div>
      <div className='flex flex-col gap-[120px]'>
        <Outlet />
      </div>
    </motion.div>
  );
}
