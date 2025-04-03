import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

import FullHeightBackgroundImg from '../backgroundLayer/FullHeightBackgroundImg'
import RoofingServiceIcon from '../../../public/media/icons/RoofingService_Icon.svg'
import EmergencyRoofingIcon from '../../../public/media/icons/EmergencyRoofing_Icon.svg'
import RoofingReplacementIcon from '../../../public/media/icons/RoofReplacement_Icon.svg'
import GutterServiceIcon from '../../../public/media/icons/GutterServices_Icon.svg'
import SidingServiceIcon from '../../../public/media/icons/SidingService_Icon.svg'
import MasonryServiceIcon from '../../../public/media/icons/MasonryService_Icon.svg'

const services: ServiceCardProps[] = [
    {
        icon: RoofingServiceIcon,
        title: 'Roof Service',
        description:
            'Expert roofing protects your home with durable, stylish installations, repairs, and replacements.',
        link: '/learn-more'
    },
    {
        icon: MasonryServiceIcon,
        title: 'Masonry Services',
        description:
            'Transform your property with skilled masonry for lasting durability and timeless beauty.',
        link: '/learn-more'
    },
    {
        icon: SidingServiceIcon,
        title: 'Siding',
        description:
            "Elevate your home's style and efficiency with premium siding that offers lasting protection and charm.",
        link: '/learn-more'
    },
    {
        icon: EmergencyRoofingIcon,
        title: 'Emergency Roofing',
        description:
            'Rapid, reliable emergency services to protect your home and restore safety when you need it most.',
        link: '/learn-more'
    },
    {
        icon: RoofingReplacementIcon,
        title: 'Roof Replacement',
        description:
            'Upgrade your home with expert roof replacement that ensures superior protection and durability.',
        link: '/learn-more'
    },
    {
        icon: GutterServiceIcon,
        title: 'Gutter Installation',
        description:
            'Protect your home with custom gutters designed for flawless performance, from installation to cleaning.',
        link: '/learn-more'
    }
]

interface ServiceCardProps {
    icon: any
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
            <img src={icon.src} alt={description} />
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
        <section className="relative h-fit py-16">
            <FullHeightBackgroundImg />
            <div className="max-w-custom mx-auto px-6 flex flex-col gap-8 z-10">
                <div>
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-white">
                            Our Services
                        </h2>
                        <p className="text-lg text-gray-300">
                            Every Craftman Roofing project comes standard with
                            everything you need to ensure your roof is durable,
                            reliable, and built to last.
                        </p>
                        <Button variant="cta">Learn More</Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    )
}
