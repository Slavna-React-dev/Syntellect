import { CountryInfo, getCountryByName } from 'api/apiService';
import { useState } from 'react'


const useCountries = (max?: number) => {
    const [countries, setCountries] = useState<CountryInfo[]>([])
    const [status, setStatus] = useState<'loading' | 'error' | 'success' | null>(null)
    const [errors, setErrors] = useState<string | null>(null)

    const getCountries = async (value: string) => {
        try {
            setStatus('loading')
            const countryList = await getCountryByName(value);
			if (countryList.length > 0) {
				setCountries(countryList.slice(0, max));
				setStatus('success');
			} else {
				throw new Error('Countries not found!');
			}
        } catch (error) {
            setStatus('error');
			setCountries([]);
			if (error instanceof Error) {
				setErrors(error.message);
			} else setErrors('Something went wrong :(');
        }
    }
    
    return {
        getCountries,
        countries,
        status,
        errors,
    }
}

export default useCountries