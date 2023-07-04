import { ChangeEvent, useEffect, useState } from 'react'
import { IAutocompleteProps } from '../model/helpers/type'
import { useCountries } from '../model/hooks'

import s from './style.module.css'
import { Search } from 'shared/ui/search'
import { MenuItem } from 'shared/ui/menuItem'
import { SelectButton } from 'shared/ui/selectButton'
import { availableCounts } from '../model/helpers/helpers'

const AutoComplete = ({ inititalCount }: IAutocompleteProps) => {
    const [count, setCount] = useState(inititalCount)
    const [controlValue, setControlValue] = useState('')
    const {
        countries,
        errors,
        status,
        getCountries,
    } = useCountries(count)

    useEffect(() => {
        if (controlValue.length > 0) getCountries(controlValue)
    }, [controlValue, count])

    const handleCountChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setCount(Number(e.target.value));
	}

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setControlValue(value);
	}

    const handleSelectCountry = (countryName: string) => {
		setControlValue(countryName);
	}

    return (
        <div className={s.main}>
            <Search
                value={controlValue}
                placeholder='Type country name'
                loading={status === 'loading'}
                error={status === 'error' ? errors : null}
                options={controlValue.length > 0 ? countries : []}
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
                defaultValue={count}
            >
                {[...new Set([inititalCount, ...availableCounts])].map((count) => (
					<option key={count} value={count}>
						{count}
					</option>
				))}
            </SelectButton>
        </div>
    )
}

export default AutoComplete