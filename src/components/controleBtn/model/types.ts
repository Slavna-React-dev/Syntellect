export interface IButton {
    id: number,
    title: string,
    func: () => void,
}

export type TButton = 'Get number' | 'Get text' | 'Set default text' | 'Clear'

export const findByProps = <T, K extends keyof T> (arr: T[], prop: K, value: T[K]) => arr.find((it) => it[prop] === value) 

export interface IProps {
    leftButtons?: TButton[],
    rightButtons?: TButton[],
}

export interface IChangeButtonProps {
    btns: IButton[],
    buttonSide: TButton[],
    side: 'left' | 'right',
    changeSide: (side: 'left' | 'right', index: number, title: TButton) => void,
}