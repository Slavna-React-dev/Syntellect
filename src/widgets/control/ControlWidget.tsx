import CustomInputWithControls from 'components/controleBtn/ui/CustomInputWithControls'
import s from './style.module.css'

const ControlWidget = () => {
    return (
        <div className={s.main}>
            <CustomInputWithControls rightButtons={['Clear', 'Set default text']} />
            <CustomInputWithControls leftButtons={['Get number']} rightButtons={['Get text']}/>
        </div>
    )
}

export default ControlWidget