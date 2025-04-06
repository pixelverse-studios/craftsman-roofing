import { cn } from '@/lib/utils'

interface ServiceCardProps {
    icon: any
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
        <div className={cn('bg-white rounded-xl shadow py-4 px-6', className)}>
            <a href={href} className="flex items-center gap-4 relative">
                {/* Icon container */}
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                    <img src={icon} alt={icon.src} />
                    {/* <span className="text-red-600">{icon}</span> */}
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
