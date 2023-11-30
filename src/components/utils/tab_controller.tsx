import DefaultButton from '@/components/utils/default_button';
import React, { ReactNode, useState } from 'react';

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabControllerProps {
  tabs: Tab[];
}

const TabController: React.FC<TabControllerProps> = ({ tabs }) => {
    const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  
    const handleTabClick = (index: number) => {
      setActiveTabIndex(index);
    };
  
    return (
      <div>
        <div className='flex'>
          {tabs.map((tab, index) => (
            <div
                className={`p-3 cursor-pointer ${index === activeTabIndex ? 'bg-white' : 'bg-transparent'}`}
                key={index}
                onClick={() => handleTabClick(index)}
                style={{ fontWeight: index === activeTabIndex ? 'normal' : 'bold' }}
            >
              {tab.label}
            </div>
          ))}
        </div>
        <div>
          {tabs[activeTabIndex].content}
        </div>
      </div>
    );
  };
  

interface TabllerProps {
  tabContents: ReactNode[];
  tabLabels: string[];
}

const Tabller: React.FC<TabllerProps> = ({ tabContents, tabLabels }) => {
    const tabs: Tab[] = tabContents.map((content, index) => ({
      label: tabLabels[index] || `Aba ${index + 1}`,
      content: content,
    }));

  return (
    <div className='bg-zinc-100'>
      <TabController tabs={tabs} />
    </div>
  );
};

export default Tabller;
