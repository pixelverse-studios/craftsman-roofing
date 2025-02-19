import React from 'react'

interface ServiceCardProps {
    icon: React.ReactNode
    title: string
    href: string
    className?: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    icon,
    title,
    href,
    className = ''
}) => {
    return (
        <div className="bg-white rounded-xl shadow p-4">
            <a href={href} className="flex items-center gap-4">
                {/* Icon container */}
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                    <span className="text-red-600">{icon}</span>
                </div>

                {/* Title */}
                <span className="text-lg font-medium text-gray-900">
                    {title}
                </span>
            </a>
        </div>
    )
}

export default ServiceCard
