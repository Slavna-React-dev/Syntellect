import { ISearchProps } from "./type"
import s from './style.module.css'
import { CustomInput } from "../input"

const Search = ({children, error, loading, options, value, ...attributes}: ISearchProps) => {
    return (
        <div className={s.main}>
            <CustomInput
                option="primary"
                value={value}
                className={s.search}
                {...attributes}
            />
            <div className={s.menu}>
                {options.length > 0 
                    ? (
                        children
                    )
                    : (
                        <div className={s.subComp}>
                            {loading && <p>loading...</p>}
                            {value && error && <p>{error}</p>}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Search