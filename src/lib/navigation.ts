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
    slug: string
    description: string
    icon: string
    metaTitle: string
    metaDescription: string
}

export const serviceRoutes: ServiceRoute[] = [
    {
        path: '/services/roofing',
        label: 'Roofing',
        slug: 'roofing',
        description:
            'Professional roofing installation, repair, and maintenance.',
        icon: '/media/icons/RoofingService_Icon.svg',
        metaTitle: 'Roofing Services | Craftsman Roofing',
        metaDescription:
            'Get top-quality roofing services including installation, repair, and inspections to protect your home or business year-round.'
    },
    {
        path: '/services/gutter',
        label: 'Gutter',
        slug: 'gutter',
        description:
            'Complete gutter solutions including installation & cleaning.',
        icon: '/media/icons/GutterServices_Icon.svg',
        metaTitle: 'Gutter Installation & Cleaning | Craftsman Roofing',
        metaDescription:
            'Protect your property with professional gutter installation and cleaning services designed to prevent water damage and clogging.'
    },
    {
        path: '/services/siding',
        label: 'Siding',
        slug: 'siding',
        description: 'Expert siding installation and repair services.',
        icon: '/media/icons/SidingService_Icon.svg',
        metaTitle: 'Siding Installation & Repair | Craftsman Roofing',
        metaDescription:
            'Upgrade your home’s exterior with expert siding services. We offer high-quality siding installation and repairs for lasting curb appeal.'
    },
    {
        path: '/services/masonry',
        label: 'Masonry',
        slug: 'masonry',
        description: 'Professional masonry work and repairs.',
        icon: '/media/icons/MasonryService_Icon.svg',
        metaTitle: 'Masonry Services | Craftsman Roofing',
        metaDescription:
            'Enhance and protect your property with expert masonry services. We specialize in brickwork, stone restoration, and concrete repairs.'
    },
    {
        path: '/services/emergency-roofing',
        label: 'Emergency Roofing',
        slug: 'emergency-roofing',
        description:
            'Rapid, reliable emergency services to protect your home and restore safety when you need it most.',
        icon: '/media/icons/EmergencyRoofing_Icon.svg',
        metaTitle: 'Emergency Roofing Services | Craftsman Roofing',
        metaDescription:
            'Fast, dependable emergency roofing services available 24/7. Restore safety and protection with immediate roof repairs when disaster strikes.'
    },
    {
        path: '/services/roof-replacement',
        label: 'Roof Replacement',
        slug: 'roof-replacement',
        description:
            'Upgrade your home with expert roof replacement that ensures superior protection and durability.',
        icon: '/media/icons/RoofReplacement_Icon.svg',
        metaTitle: 'Roof Replacement Services | Craftsman Roofing',
        metaDescription:
            'Get professional roof replacement designed for long-term protection and efficiency. We use top materials for lasting results.'
    }
]

export const resourceRoutes = [
    { path: '/privacy-policy', label: 'Privacy Policy' }
]

export const allRoutes = [...staticRoutes, ...serviceRoutes, ...resourceRoutes]
