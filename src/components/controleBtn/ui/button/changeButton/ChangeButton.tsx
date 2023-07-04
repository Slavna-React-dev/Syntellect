import { IChangeButtonProps, TButton } from 'components/controleBtn/model/types'
import { useState, ChangeEvent } from 'react'

import s from './style.module.css'
import { SecondaryButton } from 'shared/ui/button'
import { SelectButton } from 'shared/ui/selectButton'
import { createButtons } from '../createButton/createButtons'


const ChangeButton = ({btns, buttonSide, changeSide, side}: IChangeButtonProps) => {
    const [idx, setIdx] = useState<number | null>(null)

    const hanldeChangeIdx = (index: number) => setIdx(index)

    const handleChangeBtn = (index: number, e: ChangeEvent<HTMLSelectElement>) => {
        const text = e.target.value as TButton
        changeSide(side, index, text)
        setIdx(null)
    }

    return (
        <div className={s.main}>
            {buttonSide.map((title, i) => (
                <div key={i} className={s.buttons}>
                    {side === 'left' && (
                        <SecondaryButton 
                            option='secondary' 
                            onClick={() => hanldeChangeIdx(i)}
                        >
                            Change button type
                        </SecondaryButton>
                    )}
                    {idx === i 
                        ? (
                            <SelectButton
                                className={s.select}
                                defaultValue={title}
                                onChange={(e) => handleChangeBtn(i, e)}
                            >
                                {btns.map(({id, title}) => (
                                    <option
                                        key={id}
                                        value={title}
                                    >
                                        {title}
                                    </option>
                                ))}
                            </SelectButton>
                        )
                        : (
                            createButtons(title, btns)
                        )
                    }
                    {side === 'right' && (
                        <SecondaryButton 
                        option='secondary' 
                        onClick={() => hanldeChangeIdx(i)}
                    >
                        Change button type
                    </SecondaryButton>
                    )}
                </div>
            ))}
        </div>
    )
}

export default ChangeButton