import Button from '@/components/Button';
import { Tabs, TabsContent, TabsTab } from '@/components/Tabs';
import { getObjectKeys } from '@/utils/getObjectKeys';
import { useState } from 'react';

type TabName = 'cases' | 'about' | 'experience';
type Tabs = Record<TabName, string>;

export default function Menu() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabs: Tabs = {
    cases: 'Кейсы',
    about: 'О себе',
    experience: 'Опыт',
  };

  return (
    <div className='gap fixed bottom-[65px] left-1/2 flex h-[60px] -translate-x-1/2 items-center gap-1.5'>
      <Button
        active={activeTab === -1}
        iconLeft='logo'
        className='size-[60px] p-[18px]'
        onClick={() => setActiveTab(-1)}
      />
      <Tabs>
        <TabsContent>
          {getObjectKeys(tabs).map((tab, index) => (
            <TabsTab
              key={index}
              className='max-w-[120px] px-8'
              active={index === activeTab}
              onClick={() => setActiveTab(index)}
            >
              {tabs[tab]}
            </TabsTab>
          ))}
        </TabsContent>
      </Tabs>
      <Button iconLeft='language2' className='size-[60px] p-[18px]' />
    </div>
  );
}
