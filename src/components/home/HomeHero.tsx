import React from 'react'
import { Button } from '@/components/ui/button'
import ServiceCard from './ServiceCard'
import { Home, Layers, Droplets, Building2 } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog'

const services = [
    {
        icon: <Home className="w-8 h-8" />,
        title: 'Roofing Services',
        href: '/roofing-services'
    },
    {
        icon: <Layers className="w-8 h-8" />,
        title: 'Siding Services',
        href: '/siding-services'
    },
    {
        icon: <Droplets className="w-8 h-8" />,
        title: 'Gutter Services',
        href: '/gutter-services'
    },
    {
        icon: <Building2 className="w-8 h-8" />,
        title: 'Masonry Services',
        href: '/masonry-services'
    }
]

// Contact Form Component
const ContactForm = () => (
    <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
            <input
                type="text"
                placeholder="First name*"
                className="w-full p-2 rounded border border-gray-300"
            />
            <input
                type="text"
                placeholder="Last name*"
                className="w-full p-2 rounded border border-gray-300"
            />
        </div>
        <div className="grid grid-cols-2 gap-4">
            <input
                type="email"
                placeholder="Email*"
                className="w-full p-2 rounded border border-gray-300"
            />
            <input
                type="tel"
                placeholder="Phone*"
                className="w-full p-2 rounded border border-gray-300"
            />
        </div>
        <input
            type="text"
            placeholder="Zip code*"
            className="w-full p-2 rounded border border-gray-300"
        />
        <Button type="submit" className="w-full bg-red-700 hover:bg-red-800">
            Submit
        </Button>
    </form>
)

export default function HomeHeroSection() {
    return (
        <>
            <section className="relative h-fit p-6">
                {/* Background Image with Overlay */}
                <div
                    style={{
                        backgroundImage: 'url("/media/home/Hero_BG.png")'
                    }}
                    className={`absolute inset-0 bg-cover bg-center`}
                >
                    <div className="absolute inset-0" />
                </div>

                <div className="relative max-w-[var(--max-width)] mx-auto pt-24">
                    <div className="text-center text-white space-y-6">
                        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto">
                            Built to Protect, Designed to Last
                        </h1>
                        <p className="text-xl md:text-xl max-w-3xl mx-auto">
                            From durable roofing to seamless gutters and expert
                            masonry, we specialize in solutions that enhance the
                            strength, beauty, and value of your home. Trust us
                            to safeguard what matters most.
                        </p>
                        <Button
                            size="lg"
                            variant="cta"
                            className="text-lg h-[4rem]"
                        >
                            Book Your Free Estimate
                        </Button>
                    </div>

                    {/* Service Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
                        {services.map(service => (
                            <ServiceCard
                                key={service.title}
                                icon={service.icon}
                                title={service.title}
                                href={service.href}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Banner */}
            <section className="bg-white py-6 border-b border-red-700">
                <div className="max-w-[var(--max-width)] mx-auto px-4">
                    <div className="flex flex-row justify-between items-center gap-4">
                        <h2 className="text-2xl text-red-700 font-semibold">
                            Contact Us
                        </h2>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="bg-red-700 hover:bg-red-800 text-white px-8 py-2">
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
            </section>
        </>
    )
}
