import { ChangeEvent, useEffect, useState } from 'react'
import { IAutocompleteProps } from '../model/helpers/type'
import { useCountries } from '../model/hooks'

import s from './style.module.css'
import { Search } from 'shared/ui/search'
import { MenuItem } from 'shared/ui/menuItem'
import { SelectButton } from 'shared/ui/selectButton'
import { availableCounts } from '../model/helpers/helpers'

import AutoCompleteStore from 'store/autocomplete/autocomplete'
import { observer } from 'mobx-react-lite'

const AutoComplete = observer(({ id }: IAutocompleteProps) => {
    const {
        updateInputValue,
        updateMaxCount,
        getMaxCount,
        getInputValue,
    } = AutoCompleteStore

    const {
        countries,
        errors,
        status,
        getCountries,
    } = useCountries(getMaxCount(id))

    const [InitialValue, setInitialValue] = useState(getInputValue(id) ?? '')
    const [inititalCount, setInititalCount] = useState(getMaxCount(id))
    
    useEffect(() => {
        if (InitialValue.length > 0) getCountries(InitialValue)
    }, [InitialValue, inititalCount])


    const handleCountChange = (e: ChangeEvent<HTMLSelectElement>) => {
        updateMaxCount(id, Number(e.target.value))
        setInititalCount(Number(e.target.value))
	}

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        updateInputValue(id, e.target.value)
        setInitialValue(e.target.value)
	}

    const handleSelectCountry = (countryName: string) => {
        updateInputValue(id, countryName)
	}

    return (
        <div className={s.main}>
            <Search
                value={getInputValue(id)}
                placeholder='Type country name'
                loading={status === 'loading'}
                error={status === 'error' ? errors : null}
                options={InitialValue.length > 0 ? countries : []}
                onChange={handleChange}
            >
                {countries.map((it) => (
                    <MenuItem
                        key={it.name}
                        mainValue={it.fullName}
                        addtValue={it.name}
                        img={it.flag}
                        onClick={handleSelectCountry}
                    />
                ))}
            </Search>
            <SelectButton
                onChange={handleCountChange}
                defaultValue={getMaxCount(id)}
                className={s.select}
            >
                {[...new Set([inititalCount, ...availableCounts])].map((count) => (
					<option key={count} value={count}>
						{count}
					</option>
				))}
            </SelectButton>
        </div>
    )
})

export default AutoComplete