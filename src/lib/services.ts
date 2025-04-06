import { serviceRoutes } from './navigation'

export interface ServiceCardProps {
    icon: any
    title: string
    description: string
    link: string
    onClick?: (link: string) => void
}
export const services: ServiceCardProps[] = serviceRoutes.map(route => ({
    icon: route.icon,
    title: route.label,
    description: route.description,
    link: route.path
}))

export const servicesSubMenu = serviceRoutes.map(route => ({
    title: route.label,
    href: route.path,
    description: route.description
}))
