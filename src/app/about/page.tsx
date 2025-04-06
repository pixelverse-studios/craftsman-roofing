'use client'

import AboutHeroSection from '@/components/about/AboutHero'
import OurCompany from '@/components/about/our-company'
import TestimonialsCarousel from '@/components/testimonials/Carousel'
import ServicesBlock from '@/components/services/ServicesBlock'
import FAQSection from '@/components/faqs/FaqSection'
import FaqGroup from '@/components/faqs/FaqGroup'
import ContactSection from '@/components/contact/ContactSection'
import { generalFAQs } from '@/lib/faqs'

export default function AboutPage() {
    return (
        <main>
            <AboutHeroSection />
            <OurCompany />
            <TestimonialsCarousel />
            <ServicesBlock />
            <FAQSection>
                <FaqGroup faqs={generalFAQs} title="General" />
            </FAQSection>
            <ContactSection />
        </main>
    )
}
