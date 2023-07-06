import { CountryInfo, getCountryByName } from 'api/apiService';
import { action, makeObservable, observable } from 'mobx';

export class AutoCompleteModel {
    id: number;
    inputValue: string;
    maxCount: number;
    countries: CountryInfo[] = [];
    status: 'loading' | 'error' | 'success' | null = null;
    errors: string | null = null;

    constructor(id: number, inputValue: string, maxCount: number) {
        this.id = id;
        this.inputValue = inputValue;
        this.maxCount = maxCount;

        makeObservable(this, {
            id: observable,
            inputValue: observable,
            maxCount: observable,
            countries: observable,
            status: observable,
            errors: observable,
            updateInputValue: action,
            updateMaxCount: action,
            getCountries: action,
        });
    }

    updateInputValue(value: string) {
        this.inputValue = value;
    }

    updateMaxCount(count: number) {
        this.maxCount = count;
    }

    async getCountries() {
        try {
            this.status = 'loading';
            const countryList = await getCountryByName(this.inputValue);
            if (countryList.length > 0) {
                this.countries = countryList.slice(0, this.maxCount);
                this.status = 'success';
            } else {
                throw new Error('Countries not found!');
            }
        } catch (error) {
            this.status = 'error';
            this.countries = [];
            if (error instanceof Error) {
                this.errors = error.message;
            } else {
                this.errors = 'Something went wrong :(';
            }
        }
    }
}

