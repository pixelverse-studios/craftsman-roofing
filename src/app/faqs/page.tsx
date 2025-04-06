'use client'

import FAQSection from '@/components/faqs/FaqSection'
import FaqGroup from '@/components/faqs/FaqGroup'
import {
    generalFAQs,
    roofingFAQs,
    emergencyRoofingFAQs,
    sidingFAQs,
    masonryFAQs,
    gutterFAQs
} from '@/lib/faqs'

export default function Home() {
    return (
        <main>
            <FAQSection>
                <FaqGroup faqs={generalFAQs} title="General" />
                <FaqGroup faqs={roofingFAQs} title="Roofing" />
                <FaqGroup
                    faqs={emergencyRoofingFAQs}
                    title="Emergeny Roofing"
                />
                <FaqGroup faqs={sidingFAQs} title="Siding" />
                <FaqGroup faqs={masonryFAQs} title="Masonry" />
                <FaqGroup faqs={gutterFAQs} title="Gutter" />
            </FAQSection>
        </main>
    )
}
