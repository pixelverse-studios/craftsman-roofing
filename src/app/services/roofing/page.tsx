'use client'

import RoofServicesHero from '@/components/services/roofing/RoofingHero'
import ContactSection from '@/components/contact/ContactSection'
import ContactBanner from '@/components/home/ContactBanner'

export default function RoofingServicesPage() {
    return (
        <main>
            <RoofServicesHero />
            <ContactBanner
                message="Have a Roofing Problem? We’re Ready to Help!"
                button="Let`s Talk About Your Roofing Needs"
            />
            <ContactSection />
        </main>
    )
}
