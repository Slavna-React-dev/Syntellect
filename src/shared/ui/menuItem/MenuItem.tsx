import s from './style.module.css'
import { IMenuItemProps } from './type'

const MenuItem = ({mainValue, addtValue, img, onClick}: IMenuItemProps) => {
    return (
        <div className={s.main}>
            <button onClick={() => onClick(mainValue)}>
                <div className={s.values}>
                    <p>{mainValue}</p>
                    <p>{addtValue}</p>
                </div>
                <img 
                src={img} 
                alt={addtValue}
                className={s.countryIcon}
                />
            </button>
        </div>
    )
}

export default MenuItem