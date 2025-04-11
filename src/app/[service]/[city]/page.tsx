import { getServiceBySlug, services } from '@/lib/services'
import { getCityBySlug, cities } from '@/lib/locations'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Params = { service: string; city: string }

export function generateStaticParams() {
    return services.flatMap(service =>
        cities.map(city => ({
            service: service.slug,
            city: city.slug
        }))
    )
}

export function generateMetadata({ params }: { params: Params }): Metadata {
    const service = getServiceBySlug(params.service)
    const city = getCityBySlug(params.city)
    if (!service || !city) return {}

    return {
        title: `${service.metaTitle} in ${city.name}`,
        description: `${service.metaDescription} Serving customers in ${city.name} and nearby areas.`
    }
}

export default function LocalizedServicePage({ params }: { params: Params }) {
    const service = getServiceBySlug(params.service)
    const city = getCityBySlug(params.city)

    if (!service || !city) return notFound()

    return (
        <section className="max-w-3xl mx-auto px-4 py-12">
            <div className="mb-6">
                <h1 className="text-4xl font-bold">
                    {service.title} in {city.name}
                </h1>
                <p className="text-lg mt-2 text-muted-foreground">
                    {service.description} Available throughout {city.name}.
                </p>
            </div>

            <div className="mt-6">
                <img
                    src={service.icon}
                    alt={`${service.title} icon`}
                    className="w-12 h-12 mb-4"
                />
                <p>
                    Craftsman Roofing proudly provides{' '}
                    {service.title.toLowerCase()} services in {city.name} and
                    the surrounding region. Contact us today to schedule your
                    free inspection.
                </p>
            </div>
        </section>
    )
}
