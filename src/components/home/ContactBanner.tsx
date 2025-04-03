import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog'
import ContactForm from '../contact/ContactForm'

const ContactBanner = () => {
    return (
        <div className="bg-white py-8 px-4 md:px-8">
            <div className="max-w-[var(--max-width)] mx-auto">
                <div className="bg-zinc-800 rounded-lg text-white p-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Contact Us
                    </h2>
                    <p className="mb-6 text-lg">
                        Ready to start your project? Get in touch with us today!
                    </p>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="bg-red-700 hover:bg-red-800 text-white px-8 py-2 rounded">
                                Get Started
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                                <DialogTitle>Contact Us</DialogTitle>
                            </DialogHeader>
                            <ContactForm />
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}

export default ContactBanner
