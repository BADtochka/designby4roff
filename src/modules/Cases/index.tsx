import Block from '@/components/Block';
import { Tabs, TabsContent, TabsTab } from '@/components/Tabs';
import { useI18nContext } from '@/i18n/i18n-react';
import { useState } from 'react';

export default function Cases() {
  const { LL } = useI18nContext();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Block className='flex h-[720px] flex-col items-center justify-center gap-6'>
      <div className='flex flex-col items-center gap-5'>
        <h1 className='text-[80px] font-extrabold uppercase'>{LL.cases()}</h1>
        <Tabs className='h-[55px]'>
          <TabsContent>
            <TabsTab active={activeTab === 0} className='w-[164px]'>
              {LL.blocks.cases.product()}
            </TabsTab>
            <TabsTab active={activeTab === 1} className='w-[164px]'>
              {LL.blocks.cases.gaming()}
            </TabsTab>
          </TabsContent>
        </Tabs>
      </div>
      <p className='text-base text-white/30'>{LL.blocks.cases.worksUpdate()}: 01.03.2025</p>
    </Block>
  );
}
