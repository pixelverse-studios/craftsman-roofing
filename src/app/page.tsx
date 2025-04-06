'use client'

import HomeHeroSection from '@/components/hero/HomeHero'
import ServicesBlock from '@/components/home/ServicesBlock'
import TestimonialsCarousel from '@/components/testimonials/Carousel'
import FAQSection from '@/components/faqs/FaqSection'
import ContactSection from '@/components/contact/ContactSection'
import ProjectsGallery from '@/components/gallery/GalleryLayout'
import CtaSection from '@/components/cta/CtaSection'
import WhyUs from '@/components/WhyUs'
import ContactBanner from '@/components/home/ContactBanner'

export default function HomePage() {
    return (
        <main>
            <HomeHeroSection />
            <ContactBanner message="Contact Us" button="Get Started" />
            <ServicesBlock />
            <TestimonialsCarousel />
            <WhyUs />
            <ProjectsGallery />
            <CtaSection />
            <FAQSection />
            <ContactSection />
        </main>
    )
}
