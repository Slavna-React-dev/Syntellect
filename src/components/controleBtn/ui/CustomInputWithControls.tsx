import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import controlStore from 'mobx/viewModels/control/ControlViewModel';
import { CustomInput } from "shared/ui/input";
import { IProps } from "../model/types";
import { ChangeButton } from "./button";
import s from './style.module.css';

const ControlView: React.FC<IProps> = observer(({id, leftButtons, rightButtons}) => {

    useEffect(() => {
        controlStore.setButtons(id, leftButtons, rightButtons);
    }, [id, leftButtons, rightButtons]);

    const {
        control,
        defaultButtons,
        errors,
        handleChangeBtnSide,
        handleChangeControlValue,
        leftBtn,
        rightBtn,
    } = controlStore.getControl(id)
    
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
                    onChange={(e) => handleChangeControlValue(id, e)}
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

export default ControlView;
