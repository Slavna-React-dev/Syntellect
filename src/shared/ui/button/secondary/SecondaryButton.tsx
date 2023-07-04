import s from './style.module.css'
import { ISecondaryButton } from './type'

const SecondaryButton = ({children, option, ...attributes}: ISecondaryButton) => {
    return (
        <button className={`${s.main} ${s[option]}`} {...attributes}>
            {children}
        </button>
    )
}

export default SecondaryButton