export const cities = [
    { name: 'Chicago', slug: 'chicago' },
    { name: 'Milwaukee', slug: 'milwaukee' },
    { name: 'Madison', slug: 'madison' },
    { name: 'Green Bay', slug: 'green-bay' },
    { name: 'Naperville', slug: 'naperville' },
    { name: 'Rockford', slug: 'rockford' },
    { name: 'Waukesha', slug: 'waukesha' },
    { name: 'Evanston', slug: 'evanston' },
    { name: 'Kenosha', slug: 'kenosha' },
    { name: 'Joliet', slug: 'joliet' }
]

export function getCityBySlug(slug: string) {
    return cities.find(city => city.slug === slug)
}
