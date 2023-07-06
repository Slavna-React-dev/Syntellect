import { makeObservable, observable, action } from "mobx"
import { AutoCompleteModel } from "mobx/models/autocomplete/AutocompleteModel";

class AutoCompleteStore {
    autocomplete = [
        new AutoCompleteModel(1, '', 3),
        new AutoCompleteModel(2, '', 10),
    ];

    constructor() {
        makeObservable(this, {
            autocomplete: observable,
            updateInputValue: action,
            updateMaxCount: action,
            getMaxCount: action,
            getInputValue: action,
            getCountries: action,
        });
    }

    updateInputValue = (id: number, value: string) => {
        this.findAutoCompleteById(id)?.updateInputValue(value);
    }

    updateMaxCount = (id: number, count: number) => {
        this.findAutoCompleteById(id)?.updateMaxCount(count);
    }

    getMaxCount = (id: number) => {
        return this.findAutoCompleteById(id)?.maxCount;
    }

    getInputValue = (id: number) => {
        return this.findAutoCompleteById(id)?.inputValue;
    }

    getCountries = (id: number) => {
        this.findAutoCompleteById(id)?.getCountries();
    }

    private findAutoCompleteById = (id: number) => {
        return this.autocomplete.find(autocomplete => autocomplete.id === id);
    }
}

export default new AutoCompleteStore();


