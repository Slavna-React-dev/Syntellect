import s from './style.module.css'
import { ICustomInput } from './type'


const CustomInput = ({option, error, className, ...attributes}: ICustomInput) => {
    
    return (
        <div className={s.main}>
			<input className={`${s[option]} ${s.input} ${className}`} {...attributes} />
			{error && <p className={s.error}>{error}</p>}
		</div>
    )
}

export default CustomInput