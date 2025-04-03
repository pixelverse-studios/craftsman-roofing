'use client'

import Script from 'next/script'
import { useState } from 'react'
import ContactForm from './ContactForm' // <-- assuming the form is extracted

const ContactFormWithPlaces = (props: any) => {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <>
            <Script
                src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
                strategy="afterInteractive"
                onLoad={() => setIsLoaded(true)}
                async
                defer
            />
            {isLoaded && <ContactForm {...props} />}
        </>
    )
}

export default ContactFormWithPlaces
