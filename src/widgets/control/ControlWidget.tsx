import CustomInputWithControls from 'components/controleBtn/ui/CustomInputWithControls'
import s from './style.module.css'

const ControlWidget = () => {
    return (
        <div className={s.main}>
            <CustomInputWithControls id={1} rightButtons={['Clear', 'Set default text']} />
            <CustomInputWithControls id={2} leftButtons={['Get number']} rightButtons={['Get text']}/>
        </div>
    )
}

export default ControlWidget