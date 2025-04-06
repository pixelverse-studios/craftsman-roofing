'use client'

import AboutHeroSection from '@/components/hero/AboutHero'
import OurCompany from '@/components/about/our-company'
import TestimonialsCarousel from '@/components/testimonials/Carousel'
import ServicesBlock from '@/components/home/ServicesBlock'
import FAQSection from '@/components/faqs/FaqSection'
import ContactSection from '@/components/contact/ContactSection'

export default function AboutPage() {
    return (
        <main>
            <AboutHeroSection />
            <OurCompany />
            <TestimonialsCarousel />
            <ServicesBlock />
            <FAQSection />
            <ContactSection />
        </main>
    )
}
