// hooks/usePlaceAutocomplete.ts
import { useCallback, useEffect, useState, useRef } from 'react'

interface Prediction {
    description: string
    place_id: string
}

interface PlaceDetails {
    streetAddress: string // Changed from fullAddress to streetAddress
    fullAddress: string // Keep full address for reference
    city?: string
    state?: string
    zip?: string
}

interface UsePlaceAutocompleteOptions {
    onSelect?: (details: PlaceDetails) => void
    site?: string // optional dynamic website identifier
    value?: string // Controlled value
    setValue?: (value: string) => void // Setter for the value
}

export default function usePlaceAutocomplete({
    onSelect,
    site = 'craftsman-roofing',
    value = '',
    setValue
}: UsePlaceAutocompleteOptions) {
    // If not using controlled mode, maintain internal state
    const [internalValue, setInternalValue] = useState(value)
    const [predictions, setPredictions] = useState<Prediction[]>([])
    const [loading, setLoading] = useState(false)

    // Use ref to track if we're in the middle of a selection
    const selectingRef = useRef(false)

    // Determine if we're in controlled mode
    const isControlled = setValue !== undefined

    // Use the appropriate value and setter
    const currentValue = isControlled ? value : internalValue
    const updateValue = isControlled ? setValue : setInternalValue

    useEffect(() => {
        if (!currentValue) {
            setPredictions([])
            return
        }

        // If we're in the middle of a selection, don't show predictions
        if (selectingRef.current) {
            return
        }

        const controller = new AbortController()
        const delay = setTimeout(async () => {
            setLoading(true)
            try {
                const data = await apiFetch(
                    `/api/places/autocomplete?input=${encodeURIComponent(currentValue)}&site=${site}`,
                    { signal: controller.signal }
                )

                // Only set predictions if we're not in the middle of a selection
                if (!selectingRef.current) {
                    setPredictions(data.predictions || [])
                }
            } catch (err) {
                if (err instanceof DOMException && err.name === 'AbortError')
                    return
                console.error('Autocomplete error:', err)
            } finally {
                setLoading(false)
            }
        }, 250)

        return () => {
            controller.abort()
            clearTimeout(delay)
        }
    }, [currentValue, site])

    // Helper function to extract street address
    const extractStreetAddress = (addressComponents: any[]): string => {
        if (!addressComponents || !Array.isArray(addressComponents)) {
            return ''
        }

        // Street number and route (street name) components
        const streetNumber =
            addressComponents.find(comp => comp.types.includes('street_number'))
                ?.long_name || ''

        const route =
            addressComponents.find(comp => comp.types.includes('route'))
                ?.long_name || ''

        if (streetNumber && route) {
            return `${streetNumber} ${route}`
        } else if (route) {
            return route
        } else {
            // If we can't extract street components, look for these other types
            const premises = addressComponents.find(
                comp =>
                    comp.types.includes('premise') ||
                    comp.types.includes('subpremise')
            )?.long_name

            if (premises) return premises

            return ''
        }
    }

    const handleSelect = useCallback(
        async (prediction: Prediction) => {
            // Clear predictions immediately to hide the dropdown
            setPredictions([])

            // Set the flag to prevent new predictions from showing
            selectingRef.current = true

            // Store the original prediction to use throughout this function
            const originalPredict = prediction

            try {
                const data = await apiFetch(
                    `/api/places/details?place_id=${originalPredict.place_id}&site=${site}`
                )
                const place = data.result

                const components: Record<string, string> = {}
                place.address_components?.forEach((comp: any) => {
                    const type = comp.types[0]
                    components[type] = comp.long_name
                })

                // Extract just the street address
                const streetAddress =
                    extractStreetAddress(place.address_components) ||
                    originalPredict.description.split(',')[0] ||
                    ''

                const details: PlaceDetails = {
                    streetAddress: streetAddress,
                    fullAddress:
                        place.formatted_address || originalPredict.description,
                    city: components.locality || '',
                    state: components.administrative_area_level_1 || '',
                    zip: components.postal_code || ''
                }

                // If we're in controlled mode, update the value with ONLY the street address
                if (isControlled && setValue) {
                    setValue(streetAddress)
                } else {
                    setInternalValue(streetAddress)
                }

                // Pass the details to the callback
                onSelect?.(details)

                // Ensure predictions remain cleared
                setPredictions([])
            } catch (err) {
                console.error('Place details fetch error:', err)

                // Even on error, update with at least the first part of the description
                const streetFallback =
                    originalPredict.description.split(',')[0] ||
                    originalPredict.description

                const fallbackDetails: PlaceDetails = {
                    streetAddress: streetFallback,
                    fullAddress: originalPredict.description,
                    city: '',
                    state: '',
                    zip: ''
                }

                // If we're in controlled mode, update the value
                if (isControlled && setValue) {
                    setValue(streetFallback)
                } else {
                    setInternalValue(streetFallback)
                }

                onSelect?.(fallbackDetails)

                // Ensure predictions remain cleared
                setPredictions([])
            } finally {
                // Reset the flag after a short delay to allow state updates to propagate
                setTimeout(() => {
                    selectingRef.current = false
                }, 300)
            }
        },
        [onSelect, site, isControlled, setValue]
    )

    return {
        value: currentValue,
        setValue: updateValue,
        predictions,
        loading,
        handleSelect
    }
}

// Shared API fetch utility
interface FetchOptions extends RequestInit {
    params?: Record<string, string | number | boolean>
}

const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5001'

export async function apiFetch<T = any>(
    endpoint: string,
    options: FetchOptions = {}
): Promise<T> {
    const { method = 'GET', params, headers, ...rest } = options

    const queryString = params
        ? '?' + new URLSearchParams(params as Record<string, string>).toString()
        : ''

    const url = `${API_BASE_URL}${endpoint}${queryString}`

    const res = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        ...rest
    })

    if (!res.ok) {
        const error = await res.text()
        throw new Error(`API Error ${res.status}: ${error}`)
    }

    return res.json()
}
