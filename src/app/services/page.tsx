'use client'

import { Button } from '@/components/ui/button'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesBlock from '@/components/services/ServicesBlock'
import ContactBanner from '@/components/home/ContactBanner'
import CTASection from '@/components/cta/CtaSection'

export default function ServicesOverviewPage() {
    return (
        <section className="">
            <ServicesHero />
            <ContactBanner
                message="Need our expert services?"
                button="Request a free consultation"
            />
            <ServicesBlock routeToServices={false} />
            <CTASection />
        </section>
    )
}
