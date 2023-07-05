import { makeAutoObservable } from "mobx"

class ControlStore {
    controlStore = [
        {
            id: 1,
            inputValue: '',
        },
        {
            id: 2,
            inputValue: '',
        }
    ]

    constructor() {
        makeAutoObservable(this)
    }

    updateInputValue = (id: number, value: string) => {
        this.controlStore = this.controlStore.map((it) => it.id === id ? {...it, inputValue: value} : it)
    }

    // updateMaxCount = (id: number, count: number) => {
    //     this.autocomplete = this.autocomplete.map((it) => it.id === id ? {...it, maxCount: count} : it)
    // }

    // getMaxCount = (id: number) => {
    //     return this.autocomplete.find((it) => it.id === id)?.maxCount
    // }

    getInputValue = (id: number) => {
        return this.controlStore.find((it) => it.id === id)?.inputValue
    }
}

export default new ControlStore()