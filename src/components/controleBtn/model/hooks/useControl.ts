import { useState, ChangeEvent } from 'react'
import ControlStore from 'store/control/control'
import { TButton } from "../types"

const useControl = (id: number, leftButtons?: TButton[], rightButtons?: TButton[]) => {
    // const [control, setControl] = useState('')
    const [leftBtn, setLeftBtn] = useState<TButton[]>(leftButtons ?? [])
    const [rightBtn, setRightBtn] = useState<TButton[]>(rightButtons ?? [])
    const [errors, setErrors] = useState<string | null>(null)

    const {updateInputValue, getInputValue} = ControlStore

    const clearControl = () => updateInputValue(id, '')

    const clearErrors = () => setErrors(null)

    const changeInputValue = () => updateInputValue(id, 'Hello, World!')

    const handleChangeBtnSide = (side: 'left' | 'right', idx: number, newTitle: TButton) => {
        if (side === 'left') {
            const changes = leftBtn.map((prev, it) => (it === idx ? newTitle : prev))
            setLeftBtn(changes)
        } else {
            const changes = rightBtn.map((prev, it) => (it === idx ? newTitle : prev))
            setRightBtn(changes)
        }
    }

    const handleChangeControlValue = (e: ChangeEvent<HTMLInputElement>) => {
        clearErrors()
        // setControl(e.target.value)
        updateInputValue(id, e.target.value)
    }

    const getText = () => {
        if (getInputValue(id)) {
            clearErrors()
            alert(getInputValue(id))
        } else {
            setErrors('Fill in the field!')
        }
    }

    const getNumber = () => {
        if (Number(getInputValue(id))) {
            clearErrors()
            alert(getInputValue(id))
        } else {
            setErrors('The value is not a number!')
        }
    }

    const defaultButtons = [
        {
            id: 0,
            title: 'Get text',
            func: getText,
        },
        {
            id: 1,
            title: 'Get number',
            func: getNumber,
        },
        {
            id: 2,
            title: 'Set default text',
            func: changeInputValue,
        },
        {
            id: 3,
            title: 'Clear',
            func: clearControl,
        },
    ]

    return {
        control: getInputValue(id),
        leftBtn,
        rightBtn,
        handleChangeControlValue,
        handleChangeBtnSide,
        errors,
        defaultButtons,
    }
}

export default useControl