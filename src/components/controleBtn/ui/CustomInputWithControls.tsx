import { CustomInput } from "shared/ui/input"
import { useControl } from "../model/hooks"
import { IProps } from "../model/types"
import { ChangeButton } from "./button"
import s from './style.module.css'
import { observer } from "mobx-react-lite"

const CustomInputWithControls = observer(({id, leftButtons, rightButtons} :IProps) => {
    const {
        control,
        defaultButtons,
        errors,
        handleChangeBtnSide,
        handleChangeControlValue,
        leftBtn,
        rightBtn,
    } = useControl(id, leftButtons, rightButtons)
    
    return (
        <div className={s.main}>
            <div className={s.side}>
                <ChangeButton
                    btns={defaultButtons}
                    buttonSide={leftBtn}
                    side="left"
                    changeSide={handleChangeBtnSide}
                />
            </div>
            <div className={s.control}>
                <CustomInput
                    option="secondary"
                    value={control}
                    error={errors}
                    placeholder="Print whatever you want"
                    onChange={handleChangeControlValue}
                />
            </div>
            <div className={s.side}>
                <ChangeButton
                    btns={defaultButtons}
                    buttonSide={rightBtn}
                    side="right"
                    changeSide={handleChangeBtnSide}
                />
            </div>
        </div>
    )
})

export default CustomInputWithControls