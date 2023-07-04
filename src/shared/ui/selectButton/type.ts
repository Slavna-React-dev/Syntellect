import { PropsWithChildren, ReactNode, SelectHTMLAttributes } from 'react'

export interface ISelectButton extends PropsWithChildren, SelectHTMLAttributes<HTMLSelectElement> {
    children: ReactNode,
}