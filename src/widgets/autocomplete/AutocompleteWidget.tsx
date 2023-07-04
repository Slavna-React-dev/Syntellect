import { AutoComplete } from 'components/autocomplete'
import s from './style.module.css'

const AutocompleteWidget = () => {
    return (
        <section className={s.main}>
            <AutoComplete inititalCount={3} />
            <AutoComplete inititalCount={10} />
        </section>
    )
}

export default AutocompleteWidget