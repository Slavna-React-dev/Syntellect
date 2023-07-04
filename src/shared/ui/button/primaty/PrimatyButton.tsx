import s from './style.module.css'
import main from '../style.module.css'

interface IProps {
    title: string;
    onClick: () => void
}

const PrimatyButton = ({title, onClick}: IProps) => {
    return (
        <button className={`${main.button} ${s.primaty}`} onClick={onClick}>{title}</button>
    )
}

export default PrimatyButton
