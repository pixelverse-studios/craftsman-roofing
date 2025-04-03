'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import AutocompleteWidget from './AutocompleteWidget'
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
    showServiceSelect?: boolean
    submitLabel?: string
    onSubmit?: (data: any) => void
}

const formSchema = z.object({
    fullName: z.string().min(1, 'Full name is required'),
    email: z.string().email(),
    phone: z
        .string()
        .min(10, 'Phone number must be at least 10 digits')
        .regex(/^\d+$/, 'Phone number must contain only numbers'),
    address: z.string().min(1),
    city: z.string().min(1),
    state: z.string().min(1),
    zip: z
        .string()
        .min(5, 'ZIP must be at least 5 digits')
        .regex(/^\d+$/, 'ZIP code must contain only numbers'),
    service: z.string().optional(),
    privacy: z.boolean().refine(val => val, {
        message: 'You must agree to the privacy policy'
    })
})

type FormData = z.infer<typeof formSchema>

export const ContactForm: React.FC<ContactFormProps> = ({
    className,
    showServiceSelect = true,
    submitLabel = 'Submit',
    onSubmit
}) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        mode: 'onChange'
    })

    // const {
    //     value,
    //     setValue: setAutocompleteValue,
    //     predictions,
    //     loading,
    //     handleSelect
    // } = usePlaceAutocomplete({
    //     onSelect: details => {
    //         setValue('address', details.fullAddress)
    //         setValue('city', details.city || '')
    //         setValue('state', details.state || '')
    //         setValue('zip', details.zip || '')
    //     }
    // })

    const submitHandler = (data: FormData) => {
        onSubmit?.(data)
    }

    return (
        <form
            onSubmit={handleSubmit(submitHandler)}
            className={cn('space-y-6 bg-primary', className)}
        >
            <div className="space-y-2">
                <Label htmlFor="fullName" className="text-white">
                    Full name
                </Label>
                <Input
                    id="fullName"
                    {...register('fullName')}
                    placeholder="Full name"
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
                {errors.fullName && (
                    <p className="text-secondary text-sm">
                        {errors.fullName.message}
                    </p>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                        Email
                    </Label>
                    <Input
                        id="email"
                        {...register('email')}
                        placeholder="you@company.com"
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                    />
                    {errors.email && (
                        <p className="text-secondary text-sm">
                            {errors.email.message}
                        </p>
                    )}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">
                        Phone number
                    </Label>
                    <Input
                        id="phone"
                        {...register('phone')}
                        placeholder="+1 (555) 000-0000"
                        className="text-white bg-gray-800 border-gray-700 placeholder:text-gray-400"
                    />
                    {errors.phone && (
                        <p className="text-secondary text-sm">
                            {errors.phone.message}
                        </p>
                    )}
                </div>
            </div>

            <div className="space-y-2 relative z-50">
                <Label htmlFor="address" className="text-white">
                    Street Address
                </Label>
                {/* <Input
                    id="address"
                    placeholder="123 Main St"
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                    value={value}
                    onChange={e => setAutocompleteValue(e.target.value)}
                /> */}
                {/* {!loading && predictions.length > 0 && (
                    <ul className="absolute mt-1 w-full bg-gray-800 text-white shadow-lg rounded-lg z-50 border border-gray-200 max-h-60 overflow-auto">
                        {predictions.map(prediction => (
                            <li
                                key={prediction.place_id}
                                onClick={() => handleSelect(prediction)}
                                className="px-4 py-2 hover:bg-gray-100 text-white hover:text-black cursor-pointer text-sm"
                            >
                                {prediction.description}
                            </li>
                        ))}
                    </ul>
                )} */}
                {errors.address && (
                    <p className="text-secondary text-sm">
                        {errors.address.message}
                    </p>
                )}
            </div>

            <AutocompleteWidget />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="city" className="text-white">
                        City
                    </Label>
                    <Input
                        id="city"
                        {...register('city')}
                        placeholder="City"
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                    />
                    {errors.city && (
                        <p className="text-secondary text-sm">
                            {errors.city.message}
                        </p>
                    )}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="state" className="text-white">
                        State
                    </Label>
                    <Input
                        id="state"
                        {...register('state')}
                        placeholder="State"
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                    />
                    {errors.state && (
                        <p className="text-secondary text-sm">
                            {errors.state.message}
                        </p>
                    )}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="zip" className="text-white">
                        ZIP
                    </Label>
                    <Input
                        id="zip"
                        {...register('zip')}
                        placeholder="ZIP"
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                    />
                    {errors.zip && (
                        <p className="text-secondary text-sm">
                            {errors.zip.message}
                        </p>
                    )}
                </div>
            </div>

            {showServiceSelect && (
                <div className="space-y-2">
                    <Label htmlFor="service" className="text-white">
                        Service needed
                    </Label>
                    <Select onValueChange={value => setValue('service', value)}>
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

            <div className="flex items-center space-x-2">
                <Checkbox
                    id="privacy"
                    {...register('privacy')}
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
            {errors.privacy && (
                <p className="text-secondary text-sm">
                    {errors.privacy.message}
                </p>
            )}

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
