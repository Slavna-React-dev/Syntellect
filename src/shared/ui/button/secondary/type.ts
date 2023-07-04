import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react'

export interface ISecondaryButton extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
    option: 'primary' | 'secondary',
    children: ReactNode,
}