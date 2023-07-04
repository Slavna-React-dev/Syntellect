import { IButton, findByProps } from "components/controleBtn/model/types"
import { SecondaryButton } from "shared/ui/button"

export const createButtons = (title: string, btns: IButton[]) => {
    const button = findByProps(btns, 'title', title)
    if (!button) return
    return (
        <SecondaryButton 
            key={button.id}
            onClick={button.func}
            option="primary"
        >
            {button.title}
        </SecondaryButton>
    )
}
