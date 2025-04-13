'use client'

import ContactSection from '@/components/contact/ContactSection'
import ContactBanner from '@/components/home/ContactBanner'
import ServiceHero from '@/components/services/ServiceHero'
import {
    ServiceDescription,
    AltServiceDescription
} from '@/components/services/ServiceDescription'
import DurableRoofingStatistics from '@/components/services/roofing/DurableRoofingStatistics'
import RoofReplacementStatistics from '@/components/services/roofing/RoofReplacementStatistics'
import {
    baseRoofOfferings,
    roofRepairOfferings,
    roofInstallationOfferings,
    roofReplacementOfferings,
    roofMaintenanceOfferings,
    roofEmergencyOfferings,
    roofingServiceFaqs
} from '@/lib/roof-services'
import FAQSection from '@/components/faqs/FaqSection'
import FaqGroup from '@/components/faqs/FaqGroup'

export default function RoofingServicesPage() {
    return (
        <main className="bg-white">
            <ServiceHero
                header="Professional Roofing Services You Can Count On"
                description="We provide expert roof installation, repair, and replacement solutions to protect your home with lasting quality and performance."
                cta="Book Your Free Estimate"
            />
            <ContactBanner
                message="Have a Roofing Problem? We’re Ready to Help!"
                button="Let`s Talk About Your Roofing Needs"
            />
            <ServiceDescription {...baseRoofOfferings} />
            <AltServiceDescription {...roofRepairOfferings} />
            <DurableRoofingStatistics />
            <ServiceDescription {...roofInstallationOfferings} />
            <AltServiceDescription {...roofReplacementOfferings} />
            <RoofReplacementStatistics />
            <ServiceDescription {...roofMaintenanceOfferings} />
            <AltServiceDescription {...roofEmergencyOfferings} />
            <FAQSection>
                <FaqGroup faqs={roofingServiceFaqs} />
            </FAQSection>
            <ContactSection />
        </main>
    )
}
