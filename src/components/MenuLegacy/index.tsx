import Button from '@/components/Button';
import { TabsContentLegacy, TabsLegacy, TabsTabLegacy } from '@/components/TabsLegacy';
import { useSystemStore } from '@/stores/system';
import { getObjectKeys } from '@/utils/getObjectKeys';

type TabName = 'cases' | 'about' | 'experience';
type Tabs = Record<TabName, string>;

export default function MenuLegacy() {
  // const { currentHash, scrollToBlock } = useStickyScroll();
  const clientLang = useSystemStore((state) => state.language);
  const setClientLang = useSystemStore((state) => state.setLanguage);
  const { LL, setLocale } = useI18nContext();
  const tabs: Tabs = {
    cases: LL.cases(),
    about: LL.about(),
    experience: LL.experiense(),
  };
  const tabsKeys = getObjectKeys(tabs);

  const toggleLanguage = () => {
    const newLang = clientLang === 'en' ? 'ru' : 'en';
    setClientLang(newLang);
    setLocale(newLang);
  };

  return (
    <div className='fixed bottom-[65px] left-1/2 h-[60px] -translate-x-1/2'>
      <TabsLegacy className='gap-1.5'>
        <TabsContentLegacy customId='menu'>
          <Button
            // active={currentHash === 'main'}
            data-size='60px'
            iconLeft='logo'
            className='z-10 size-[60px] p-[18px] mix-blend-exclusion data-[active="true"]:bg-black data-[active="true"]:text-white'
            // onClick={() => scrollToBlock('main')}
          />
          {tabsKeys.map((tab, index) => {
            const lastSide = index === 2 && 'rounded-r-4xl';
            const firstSide = index === 0 ? 'rounded-l-4xl' : '-ml-[7px]';

            return (
              <TabsTabLegacy
                key={index}
                className={`h-[60px] rounded-none bg-black px-8 max-md:max-w-[80px] ${firstSide} ${lastSide}`}
                // active={tab === currentHash}
                // onClick={() => scrollToBlock(tab)}
              >
                {tabs[tab]}
              </TabsTabLegacy>
            );
          })}
          <Button iconLeft='language2' className='size-[60px] p-[18px]' onClick={toggleLanguage} />
        </TabsContentLegacy>
      </TabsLegacy>
    </div>
  );
}
