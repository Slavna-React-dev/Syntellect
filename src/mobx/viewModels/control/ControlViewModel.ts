import { makeAutoObservable } from 'mobx'
import { ChangeEvent } from 'react'
import { Control, Controls } from 'mobx/models/control/ControlModel'
import { TButton } from 'components/controleBtn/model/types'

class ControlViewModel {
    controlStore: Control[] = Controls;
    leftBtn: TButton[] = [];
    rightBtn: TButton[] = [];
    errors: { [key: number]: string[] } = {};

    constructor() {
        makeAutoObservable(this)
    }

    updateInputValue = (id: number, value: string) => {
        this.controlStore = this.controlStore.map((it) => it.id === id ? {...it, inputValue: value} : it)
    }

    getInputValue = (id: number) => {
        return this.controlStore.find((it) => it.id === id)?.inputValue
    }

    clearControl = (id: number) => {
        this.updateInputValue(id, '');
    }

    clearErrors = (id: number) => {
        this.errors[id] = [];
    }

    changeInputValue = (id: number) => {
        this.clearErrors(id);
        this.updateInputValue(id, 'Hello, World!');
    }

    handleChangeBtnSide = (side: 'left' | 'right', idx: number, newTitle: TButton) => {
        if (side === 'left') {
            const changes = this.leftBtn.map((prev, it) => (it === idx ? newTitle : prev));
            this.leftBtn = changes;
        } else {
            const changes = this.rightBtn.map((prev, it) => (it === idx ? newTitle : prev));
            this.rightBtn = changes;
        }
    }

    handleChangeControlValue = (id: number, e: ChangeEvent<HTMLInputElement>) => {
        this.clearErrors(id);
        this.updateInputValue(id, e.target.value);
    }

    getText = (id: number) => {
        if (this.getInputValue(id)) {
            this.clearErrors(id);
            alert(this.getInputValue(id));
        } else {
            const errorMessage = 'Fill in the field!';
            if (!this.errors[id]?.includes(errorMessage)) {
                this.errors[id] = [...(this.errors[id] || []), errorMessage];
            }
        }
    }

    getNumber = (id: number) => {
        if (Number(this.getInputValue(id))) {
            this.clearErrors(id);
            alert(this.getInputValue(id));
        } else {
            const errorMessage = 'The value is not a number!';
            if (!this.errors[id]?.includes(errorMessage)) {
                this.errors[id] = [...(this.errors[id] || []), errorMessage];
            }
        }
    }

    defaultButtons = (id: number) => [
        {
            id: 0,
            title: 'Get text',
            func: () => this.getText(id),
        },
        {
            id: 1,
            title: 'Get number',
            func: () => this.getNumber(id),
        },
        {
            id: 2,
            title: 'Set default text',
            func: () => this.changeInputValue(id),
        },
        {
            id: 3,
            title: 'Clear',
            func: () => this.clearControl(id),
        },
    ]

    setButtons = (id: number, leftButtons?: TButton[], rightButtons?: TButton[]) => {
        this.leftBtn = leftButtons ?? [];
        this.rightBtn = rightButtons ?? [];
    }

    getControl = (id: number) => {
        return {
            control: this.getInputValue(id),
            leftBtn: this.leftBtn,
            rightBtn: this.rightBtn,
            handleChangeControlValue: this.handleChangeControlValue,
            handleChangeBtnSide: this.handleChangeBtnSide,
            errors: this.errors[id],
            defaultButtons: this.defaultButtons(id),
        }
    }
}

export default new ControlViewModel();
