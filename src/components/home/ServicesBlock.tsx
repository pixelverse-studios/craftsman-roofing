import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

import FullHeightBackgroundImg from '../backgroundLayer/FullHeightBackgroundImg'
import { services, ServiceCardProps } from '@/lib/services'

const ServiceCard: React.FC<ServiceCardProps> = ({
    icon,
    title,
    description,
    link,
    onClick
}) => (
    <Card className="bg-white p-6 rounded-xl shadow transition-all duration-300 hover:shadow-2xl hover:scale-[1.015] hover:-translate-y-1 hover:bg-white-bright">
        <div className="space-y-4">
            <img src={icon} alt={description} />
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <Button
                variant="link"
                className="text-secondary font-bold text-lg p-0 cursor-pointer"
                onClick={() => (onClick ? onClick(link) : () => null)}
            >
                Learn More
            </Button>
        </div>
    </Card>
)

export default function ServicesBlock() {
    const router = useRouter()

    const onBaseLearnClick = () => router.push('/services')

    const onServiceClick = (to: string) => router.push(to)

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
                        <Button variant="cta" onClick={onBaseLearnClick}>
                            Learn More
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            {...service}
                            onClick={onServiceClick}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
