import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { CONTACT } from '@/lib/utils'

const navigation = [
    { name: 'Our Company', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: "Faq's", href: '/faqs' }
]

const currentYear = new Date().getFullYear()

const Footer = () => {
    return (
        <footer className="bg-[#0A0F29] border-t border-gray-800">
            <div className="mx-auto max-w-[var(--max-width)] px-6 py-12">
                {/* Main footer content */}
                <div className="flex justify-between items-center pb-8 border-b border-gray-800">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <img
                            src="/media/Craftsman_Logo.svg"
                            alt="Craftsman Roofing"
                            className="h-10"
                        />
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex gap-8">
                        {navigation.map(item => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-y-6 text-sm text-gray-400">
                    <Link
                        href="https://facebook.com/craftsmanroofing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                        <Facebook className="h-4 w-4" />
                        @craftsmanroofing
                    </Link>
                    <Link
                        href="https://instagram.com/craftsmanroofing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                        <Instagram className="h-4 w-4" />
                        @craftsmanroofing
                    </Link>
                    <Link
                        href="tel:055 644 38 00"
                        className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                        <Phone className="h-4 w-4" />
                        123-456-7890
                    </Link>
                    <Link
                        href="mailto:info@craftsman.ch"
                        className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                        <Mail className="h-4 w-4" />
                        info@craftsman
                    </Link>
                </div>
                {/* Footer bottom */}
                <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-y-6 text-sm text-gray-400">
                    {/* Copyright */}
                    <div>© Copyright {currentYear}</div>

                    {/* Contact info */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                        <div className="flex items-center gap-2 hover:text-white transition-colors">
                            <MapPin className="h-4 w-4" />
                            INSERT ADDRESS/MAPS WIDGET
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
