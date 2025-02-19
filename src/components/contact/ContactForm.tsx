import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'

interface ContactFormProps {
    className?: string
    showPhoneNumber?: boolean
    showServiceSelect?: boolean
    submitLabel?: string
    onSubmit?: (data: any) => void
}

export const ContactForm: React.FC<ContactFormProps> = ({
    className,
    showPhoneNumber = true,
    showServiceSelect = true,
    submitLabel = 'Submit',
    onSubmit
}) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (onSubmit) {
            onSubmit(e)
        }
    }

    return (
        <form onSubmit={handleSubmit} className={cn('space-y-6', className)}>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white">
                        First name
                    </Label>
                    <Input
                        id="firstName"
                        type="text"
                        placeholder="First name"
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white">
                        Last name
                    </Label>
                    <Input
                        id="lastName"
                        type="text"
                        placeholder="Last name"
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                    Email
                </Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
            </div>

            {showServiceSelect && (
                <div className="space-y-2">
                    <Label htmlFor="service" className="text-white">
                        Service needed
                    </Label>
                    <Select>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                            <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700 text-white">
                            <SelectItem value="roofing">Roofing</SelectItem>
                            <SelectItem value="siding">Siding</SelectItem>
                            <SelectItem value="gutters">Gutters</SelectItem>
                            <SelectItem value="masonry">Masonry</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            )}

            {showPhoneNumber && (
                <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">
                        Phone number
                    </Label>
                    <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="text-white"
                    />
                </div>
            )}

            <div className="flex items-center space-x-2">
                <Checkbox
                    id="privacy"
                    className="border-gray-700 bg-gray-800 data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600"
                />
                <Label
                    htmlFor="privacy"
                    className="text-sm leading-none text-white"
                >
                    You agree to our friendly{' '}
                    <a
                        href="/privacy-policy"
                        className="text-red-600 hover:underline"
                    >
                        privacy policy
                    </a>
                    .
                </Label>
            </div>

            <Button
                type="submit"
                className="w-full bg-red-700 hover:bg-red-800 text-white"
            >
                {submitLabel}
            </Button>
        </form>
    )
}

export default ContactForm
