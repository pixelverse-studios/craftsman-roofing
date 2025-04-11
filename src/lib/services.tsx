import { serviceRoutes } from './navigation'

export interface ServiceCardProps {
    icon: any
    title: string
    description: string
    link: string
    slug: string
    metaTitle: string
    metaDescription: string
    onClick?: (link: string) => void
}
export const services: ServiceCardProps[] = serviceRoutes.map(
    ({ icon, label, description, path, slug, metaTitle, metaDescription }) => ({
        icon,
        title: label,
        description,
        link: path,
        slug,
        metaTitle,
        metaDescription
    })
)

export const servicesSubMenu = serviceRoutes.map(route => ({
    title: route.label,
    href: route.path,
    description: route.description
}))

export function getServiceBySlug(slug: string) {
    return services.find(service => service.slug === slug)
}

// // lib/seo-data.ts
// export const services = [
//     { name: 'Roofing', slug: 'roofing', description: '...' },
//     { name: 'Siding', slug: 'siding', description: '...' },
//     // ...
//   ];

//   export const cities = [
//     { name: 'Chicago', slug: 'chicago' },
//     { name: 'Milwaukee', slug: 'milwaukee' },
//     // ...
//   ];
