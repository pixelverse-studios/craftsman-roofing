import ServiceCard from './ServiceCard'
import CallToAction from '../CallToAction'

const services = [
    {
        icon: '/media/icons/RoofingService_Icon.svg',
        title: 'Roofing Services',
        href: '/roofing-services'
    },
    {
        icon: '/media/icons/SidingService_Icon.svg',
        title: 'Siding Services',
        href: '/siding-services'
    },
    {
        icon: '/media/icons/GutterServices_Icon.svg',
        title: 'Gutter Services',
        href: '/gutter-services'
    },
    {
        icon: '/media/icons/MasonryService_Icon.svg',
        title: 'Masonry Services',
        href: '/masonry-services'
    }
]

export default function HomeHeroSection() {
    return (
        <section className="relative h-fit p-6">
            <div
                style={{
                    backgroundImage: 'url("/media/home/Hero_BG.png")'
                }}
                className={`absolute inset-0 bg-cover bg-center`}
            >
                <div className="absolute inset-0" />
            </div>

            <div className="relative max-w-custom mx-auto pt-24 px-4">
                <div className="text-center text-white space-y-6">
                    <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto">
                        Built to Protect, Designed to Last
                    </h1>
                    <p className="text-xl md:text-xl max-w-3xl mx-auto">
                        From durable roofing to seamless gutters and expert
                        masonry, we specialize in solutions that enhance the
                        strength, beauty, and value of your home. Trust us to
                        safeguard what matters most.
                    </p>
                    <CallToAction
                        label="Book Your Free Estimate"
                        buttonClass="h-[4rem] text-2xl"
                    />
                </div>

                {/* Service Cards */}
                <div className="max-w-[var(--max-width)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24 p-2">
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
    )
}
