export const homeRoute = { path: '/', label: 'Home' }
export const staticRoutes = [
    { path: '/about', label: 'Our Company' },
    { path: '/services', label: 'Services' },
    { path: '/faqs', label: 'FAQs' }
    // { path: '/testimonials', label: 'Testimonials' }
]

export interface ServiceRoute {
    path: string
    label: string
    description: string
    icon: string
}

export const serviceRoutes: ServiceRoute[] = [
    {
        path: '/services/roofing',
        label: 'Roofing',
        description:
            'Professional roofing installation, repair, and maintenance.',
        icon: '/media/icons/RoofingService_Icon.svg'
    },
    {
        path: '/services/gutter',
        label: 'Gutter',
        description:
            'Complete gutter solutions including installation & cleaning.',
        icon: '/media/icons/GutterServices_Icon.svg'
    },
    {
        path: '/services/siding',
        label: 'Siding',
        description: 'Expert siding installation and repair services.',
        icon: '/media/icons/SidingService_Icon.svg'
    },
    {
        path: '/services/masonry',
        label: 'Masonry',
        description: 'Professional masonry work and repairs.',
        icon: '/media/icons/MasonryService_Icon.svg'
    },
    {
        path: '/services/emergency-roofing',
        label: 'Emergency Roofing',
        description:
            'Rapid, reliable emergency services to protect your home and restore safety when you need it most.',
        icon: '/media/icons/EmergencyRoofing_Icon.svg'
    },
    {
        path: '/services/roof-replacement',
        label: 'Roof Replacement',
        description:
            'Upgrade your home with expert roof replacement that ensures superior protection and durability.',
        icon: '/media/icons/RoofReplacement_Icon.svg'
    }
]

export const resourceRoutes = [
    { path: '/privacy-policy', label: 'Privacy Policy' }
]

export const allRoutes = [...staticRoutes, ...serviceRoutes, ...resourceRoutes]
