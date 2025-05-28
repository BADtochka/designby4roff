import { useStickyScroll } from '@/hooks/useStickyScroll';
import { useI18nContext } from '@/i18n/i18n-react';
import { useSystemStore } from '@/stores/system';
import { getObjectKeys } from '@/utils/getObjectKeys';
import { useEffect } from 'react';
import Button from '../Button';
import { Tabs, TabsContent, TabsTab } from '../Tabs';

type TabName = 'cases' | 'about' | 'experience';
type Tabs = Record<TabName, string>;

export default function Menu() {
  const { LL, setLocale } = useI18nContext();
  const { currentHash, scrollToBlock } = useStickyScroll();
  const setClientLang = useSystemStore((state) => state.setLanguage);
  const clientLang = useSystemStore((state) => state.language);

  const TABS: Tabs = {
    cases: LL.cases(),
    about: LL.about(),
    experience: LL.experiense(),
  };
  const tabsKeys = getObjectKeys(TABS);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // setTest((prev) => !prev);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const toggleLanguage = () => {
    const newLang = clientLang === 'en' ? 'ru' : 'en';
    setClientLang(newLang);
    setLocale(newLang);
  };

  return (
    <Tabs
      className='fixed bottom-[65px] left-[calc(50%-4px)] mx-1 h-[60px] w-[calc(100%-8px)] max-w-[504px] -translate-x-1/2 gap-2
        max-md:bottom-[20px]'
    >
      <TabsContent customId='menu' className='rounded-full backdrop-blur-md nth-[2]:w-full'>
        <Button
          active={currentHash === 'main'}
          data-size='48px'
          iconSize='24px'
          iconLeft='logo'
          className='z-10 size-[60px] bg-[#0a0a0aa3]/60 p-[18px] mix-blend-difference data-[active="true"]:bg-black
            data-[active="true"]:text-white'
          onClick={() => scrollToBlock('main')}
          animation={false}
        />
        <div className='flex w-full items-center rounded-[64px] border border-[#ffffff28] bg-[#0a0a0aa3]/60'>
          <TabsContent customId='menu' className='w-full min-w-[42px] shrink'>
            {tabsKeys.map((tab, index) => {
              return (
                <TabsTab key={index} active={currentHash === tab} onClick={() => scrollToBlock(tab)}>
                  {TABS[tab]}
                </TabsTab>
              );
            })}
          </TabsContent>
        </div>
        <Button
          iconLeft={clientLang === 'ru' ? 'ru' : 'en'}
          className='size-[60px] bg-[#0a0a0aa3]/60 p-[18px]'
          iconSize='25px'
          onClick={toggleLanguage}
          animation={false}
        />
      </TabsContent>
    </Tabs>
  );
}
