import { makeAutoObservable } from "mobx"

class AutoCompleteStore {
    autocomplete = [
        {id: 1, inputValue: '', maxCount: 3},
        {id: 2, inputValue: '', maxCount: 10}
    ]

    constructor() {
        makeAutoObservable(this)
    }

    updateInputValue = (id: number, value: string) => {
        this.autocomplete = this.autocomplete.map((it) => it.id === id ? {...it, inputValue: value} : it)
    }

    updateMaxCount = (id: number, count: number) => {
        this.autocomplete = this.autocomplete.map((it) => it.id === id ? {...it, maxCount: count} : it)
    }

    getMaxCount = (id: number) => {
        return this.autocomplete.find((it) => it.id === id)?.maxCount
    }

    getInputValue = (id: number) => {
        return this.autocomplete.find((it) => it.id === id)?.inputValue
    }
}

export default new AutoCompleteStore()