'use client'

import { useEffect, useRef } from 'react'
import { Label } from '@/components/ui/label'

const AutocompleteWidget = () => {
    const ref = useRef<HTMLElementTagNameMap['gmp-place-autocomplete']>(null)

    useEffect(() => {
        if (!ref.current) return

        ref.current.addEventListener('gmp-placechange', (e: any) => {
            const place = e.detail
            const components: Record<string, string> = {}

            place.address_components?.forEach((comp: any) => {
                const type = comp.types[0]
                components[type] = comp.long_name
            })

            console.log('Selected (via PlaceAutocompleteElement):', {
                fullAddress: place.formatted_address,
                city: components.locality,
                state: components.administrative_area_level_1,
                zip: components.postal_code
            })
        })
    }, [])

    return (
        <div className="space-y-2 text-white">
            <Label htmlFor="gmp-autocomplete">Street Address</Label>
            <gmp-place-autocomplete
                id="gmp-autocomplete"
                ref={ref}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                style={
                    {
                        '--gmpc-border-color': '#334155', // border-slate-700-ish
                        '--gmpc-border-radius': '0.375rem',
                        '--gmpc-padding': '0.25rem 0.75rem',
                        '--gmpc-font-size': '0.875rem',
                        '--gmpc-color-background': 'rgb(var(--background))',
                        '--gmpc-color': 'rgb(var(--foreground))',
                        '--gmpc-placeholder-color':
                            'rgb(var(--muted-foreground))'
                    } as React.CSSProperties
                }
            />
        </div>
    )
}

export default AutocompleteWidget
