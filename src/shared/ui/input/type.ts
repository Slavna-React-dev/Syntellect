import { InputHTMLAttributes, PropsWithChildren } from 'react'

export interface ICustomInput extends PropsWithChildren, InputHTMLAttributes<HTMLInputElement> {
	option: 'primary' | 'secondary';
	error?: string | null;
}
