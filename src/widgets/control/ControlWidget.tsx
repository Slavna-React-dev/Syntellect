import CustomInputWithControls from 'components/controleBtn/ui/CustomInputWithControls'
import s from './style.module.css'

const ControlWidget = () => {
    return (
        <section className={s.main}>
            <CustomInputWithControls rightButtons={['Clear', 'Set default text']} />
            <CustomInputWithControls leftButtons={['Get number']} rightButtons={['Get text']}/>
        </section>
    )
}

export default ControlWidget