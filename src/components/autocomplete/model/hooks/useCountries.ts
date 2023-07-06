import { CountryInfo, getCountryByName } from 'api/apiService';
import { useEffect, useState } from 'react'


const useCountries = (value: string, max?: number) => {
    const [countries, setCountries] = useState<CountryInfo[]>([])
    const [status, setStatus] = useState<'loading' | 'error' | 'success' | null>(null)
    const [errors, setErrors] = useState<string | null>(null)

    useEffect(() => {
        const getCountries = async () => {
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
        
        if (value.length > 0) {
            getCountries();
        }
    }, [value, max]);
    
    return {
        countries,
        status,
        errors,
    }
}

export default useCountries
