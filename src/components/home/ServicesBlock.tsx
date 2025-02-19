import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const services: ServiceCardProps[] = [
    {
        icon: (
            <svg
                className="w-8 h-8 text-red-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M3 21h18L12 3 3 21zm9-3h-1v-1h1v1zm0-3h-1v-4h1v4z" />
            </svg>
        ),
        title: 'Roof Service',
        description:
            'Expert roofing protects your home with durable, stylish installations, repairs, and replacements.',
        link: '/learn-more'
    },
    {
        icon: (
            <svg
                className="w-8 h-8 text-red-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M19 9l-7-7-7 7m14 7l-7 7-7-7" />
            </svg>
        ),
        title: 'Masonry Services',
        description:
            'Transform your property with skilled masonry for lasting durability and timeless beauty.',
        link: '/learn-more'
    },
    {
        icon: (
            <svg
                className="w-8 h-8 text-red-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M4 21V8l8-5 8 5v13H4z" />
            </svg>
        ),
        title: 'Siding',
        description:
            "Elevate your home's style and efficiency with premium siding that offers lasting protection and charm.",
        link: '/learn-more'
    },
    {
        icon: (
            <svg
                className="w-8 h-8 text-red-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M12 3v18M3 9h18M3 15h18" />
            </svg>
        ),
        title: 'Emergency Roofing',
        description:
            'Rapid, reliable emergency services to protect your home and restore safety when you need it most.',
        link: '/learn-more'
    },
    {
        icon: (
            <svg
                className="w-8 h-8 text-red-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M3 21h18L12 3 3 21z" />
            </svg>
        ),
        title: 'Roof Replacement',
        description:
            'Upgrade your home with expert roof replacement that ensures superior protection and durability.',
        link: '/learn-more'
    },
    {
        icon: (
            <svg
                className="w-8 h-8 text-red-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M4 10v10h16V10M1 10h22M12 10V3" />
            </svg>
        ),
        title: 'Gutter Installation',
        description:
            'Protect your home with custom gutters designed for flawless performance, from installation to cleaning.',
        link: '/learn-more'
    }
]

interface ServiceCardProps {
    icon: React.ReactNode
    title: string
    description: string
    link: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    icon,
    title,
    description,
    link
}) => (
    <Card className="bg-white p-6 rounded-xl">
        <div className="space-y-4">
            <div>{icon}</div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <a
                href={link}
                className="inline-block text-red-600 hover:text-red-700"
            >
                Learn More
            </a>
        </div>
    </Card>
)

export default function ServicesBlock() {
    return (
        <section className="bg-[#0A0F29] py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-4">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-white">
                            Our Services
                        </h2>
                        <p className="text-lg text-gray-300">
                            Every Craftman Roofing project comes standard with
                            everything you need to ensure your roof is durable,
                            reliable, and built to last.
                        </p>
                        <Button
                            variant="secondary"
                            className="bg-red-700 text-white hover:bg-red-800"
                        >
                            Learn More
                        </Button>
                    </div>
                    <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden">
                        <img
                            src="/api/placeholder/800/600"
                            alt="Roofing workers on a roof"
                            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    )
}
