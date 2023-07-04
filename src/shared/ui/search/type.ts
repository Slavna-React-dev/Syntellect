import { InputHTMLAttributes, ReactNode } from 'react'

export interface ISearchProps extends InputHTMLAttributes<HTMLInputElement> {
	options: unknown[];
	loading: boolean;
	error: string | null;
	children: ReactNode;
}