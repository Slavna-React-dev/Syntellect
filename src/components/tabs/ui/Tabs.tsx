import { useState } from 'react'
import s from './style.module.css'
import { AutocompleteWidget } from 'widgets';
import CustomInputWithControls from 'components/controleBtn/ui/CustomInputWithControls'


const Tabs = () => {
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: '1',
            tabTitle: 'Control with buttons on the right side',
            content: <CustomInputWithControls id={1} rightButtons={['Clear', 'Set default text']} />
        },
        {
            id: '2',
            tabTitle: 'Control with buttons on both sides',
            content: <CustomInputWithControls id={2} leftButtons={['Get number']} rightButtons={['Get text']}/>
        },
        {
            id: '3',
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
                        {currentTab === `${tab.id}` && <section>{tab.content}</section>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tabs;