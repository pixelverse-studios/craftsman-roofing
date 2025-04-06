import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const CONTACT = {
    PHONE: '(123) 456-7890',
    EMAIL: 'info@craftsman.com',
    ADDRESS: '123 Roofing Lane, Hackensack NJ 07000'
}
