import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const ContactForm = () => (
    <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" placeholder="First name" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" placeholder="Last name" />
            </div>
        </div>
        <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
        </div>
        <div className="space-y-2">
            <Label htmlFor="phone">Phone number</Label>
            <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
        </div>
        <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <textarea
                id="message"
                rows={4}
                className="w-full p-2 rounded-md border border-input bg-background"
                placeholder="Tell us about your investment goals..."
            />
        </div>
        <Button type="submit" className="w-full">
            Submit
        </Button>
    </form>
)

const CTASection = () => {
    return (
        <section className="relative w-full bg-[#0A0F29] py-16">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjkuNzUgMGwtMjUgNDMuM2g1MGwtMjUtNDMuM3oiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] bg-repeat" />
            </div>

            <Card className="relative max-w-4xl mx-auto bg-transparent border-0 shadow-none">
                <CardContent className="p-6 text-center text-white space-y-8">
                    {/* Icon */}
                    <div className="mx-auto w-16 h-16">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="w-full h-full text-red-500"
                        >
                            <path
                                d="M3 21h18L12 3 3 21z"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                        </svg>
                    </div>

                    {/* Text content */}
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold">
                            Talk to us about your next investment
                        </h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Let's discuss your investment goals and find the
                            perfect opportunity for you. Our team of experts is
                            ready to help you make informed decisions.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">
                                Contact Us
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                                <DialogTitle>Contact Us</DialogTitle>
                            </DialogHeader>
                            <ContactForm />
                        </DialogContent>
                    </Dialog>
                </CardContent>
            </Card>
        </section>
    )
}

export default CTASection
