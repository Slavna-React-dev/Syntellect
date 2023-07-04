import { useState } from 'react'
import s from './style.module.css'
import { AutocompleteWidget, ControlWidget } from 'widgets';


const Tabs = () => {
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: '1',
            tabTitle: 'Control with buttons',
            content: <ControlWidget />
        },
        {
            id: '2',
            tabTitle: 'Control-autocomplete',
            content: <AutocompleteWidget />
        },
    ];

    const handleTabClick = (e: any) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className={s.container}>
            <div className={s.tabs}>
                {tabs.map((tab, i) =>
                    <button 
                        key={i} 
                        id={tab.id} 
                        disabled={currentTab === `${tab.id}`}
                        className={s.btnTab}
                        onClick={(handleTabClick)}
                    >
                        {tab.tabTitle}
                    </button>
                )}
            </div>
            <div className={s.content}>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <p>{tab.content}</p>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tabs;