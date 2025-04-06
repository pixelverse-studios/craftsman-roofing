import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from '@/components/ui/card'
import ContactForm from './ContactForm'
import { Check } from 'lucide-react'

const features = [
    {
        title: 'Quick and easy contact form to kickstart your project.'
    },
    {
        title: 'Expert solutions for roofing, siding, gutters, and masonry needs.'
    },
    {
        title: 'Hassle-free process to bring your vision to life.'
    }
]

// const ratings = [
//     { logo: '/api/placeholder/32/32', rating: '5.0' },
//     { logo: '/api/placeholder/32/32', rating: '4.8' },
//     { logo: '/api/placeholder/32/32', rating: '5.0' },
//     { logo: '/api/placeholder/32/32', rating: '5.0' }
// ]

const ContactSection = () => {
    return (
        <section className="relative min-h-screen bg-[#0A0F29]">
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center">
                <div className="absolute inset-0 bg-[#0A0F29]/90" />
            </div>

            {/* Content */}
            <div className="relative">
                <div className="max-w-[var(--max-width)] mx-auto px-4 py-16">
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                        {/* Left Column */}
                        <div className="text-white space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-4xl font-bold">
                                    Get started in{' '}
                                    <span className="inline-block bg-red-600 px-2 py-1 rounded">
                                        5 minutes
                                    </span>
                                </h2>
                                <p className="text-gray-300 text-lg">
                                    Ready to transform your home? Fill out our
                                    simple contact form, and we'll be in touch
                                    to discuss your project. Whether you need
                                    roofing, siding, gutters, or masonry
                                    services, getting started is quick, easy,
                                    and hassle-free. Let's bring your vision to
                                    life!
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="text-red-500 shrink-0">
                                            <Check className="h-6 w-6" />
                                        </span>
                                        <span className="text-gray-200">
                                            {feature.title}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* <div className="border-t border-gray-800 pt-8">
                                <div className="flex flex-wrap items-center gap-6">
                                    {ratings.map((rating, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-2"
                                        >
                                            <img
                                                src={rating.logo}
                                                alt={`${rating.rating} rating`}
                                                className="h-8 w-8"
                                            />
                                            <span className="text-sm text-gray-300">
                                                {rating.rating} rating
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div> */}
                        </div>

                        {/* Right Column */}
                        <Card className="bg-[#0A0F29] border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-2xl text-white">
                                    Let's start your project
                                </CardTitle>
                                <CardDescription className="text-gray-400">
                                    Our friendly team would love to hear from
                                    you.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ContactForm />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
