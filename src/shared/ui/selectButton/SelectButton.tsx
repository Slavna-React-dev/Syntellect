import s from './style.module.css'
import { ISelectButton } from './type'

const SelectButton = ({children, className, ...attributes}: ISelectButton) => {
    return (
        <select className={`${s.main} ${className}`} {...attributes}>
            {children}
        </select>
    )
}

export default SelectButton