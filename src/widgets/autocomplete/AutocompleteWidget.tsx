import { AutoComplete } from 'components/autocomplete'
import AutoCompleteStore from 'mobx/viewModels/autocopmlete/AutoCompleteViewModel'
import s from './style.module.css'

const AutocompleteWidget = () => {
    return (
        <div className={s.main}>
            {AutoCompleteStore.autocomplete.map((it) => 
                <AutoComplete 
                    key={it.id}
                    id={it.id}
                />
            )}
        </div>
    )
}

export default AutocompleteWidget