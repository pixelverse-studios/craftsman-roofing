'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Logo from '../../../public/media/Craftsman_Logo.svg'

const servicesSubMenu = [
    {
        title: 'Roofing Services',
        href: '/services/roofing-services',
        description:
            'Professional roofing installation, repair, and maintenance.'
    },
    {
        title: 'Gutter Services',
        href: '/services/gutter-services',
        description:
            'Complete gutter solutions including installation & cleaning.'
    },
    {
        title: 'Siding Services',
        href: '/services/siding-services',
        description: 'Expert siding installation and repair services.'
    },
    {
        title: 'Masonry Services',
        href: '/services/masonry-services',
        description: 'Professional masonry work and repairs.'
    }
]

export function Header() {
    const router = useRouter()
    const pathname = usePathname()

    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const [isServicesOpen, setIsServicesOpen] = React.useState(false)

    const onLogoClick = () => router.push('/')

    return (
        <header className="fixed top-0 left-0 right-0 w-full border-b bg-background z-50">
            <div className="max-w-[var(--max-width)] mx-auto px-6 py-4">
                <div className="relative flex items-center justify-between">
                    <img
                        className="cursor-pointer"
                        src={Logo.src}
                        alt="craftsman_logo"
                        onClick={onLogoClick}
                    />

                    {/* ========== Desktop Navigation ========== */}
                    <nav className="hidden lg:block">
                        <NavigationMenu>
                            <NavigationMenuList className="space-x-2">
                                {/* Home */}
                                <NavigationMenuItem>
                                    <Link href="/" legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={cn(
                                                navigationMenuTriggerStyle(),
                                                'nav-link',
                                                pathname === '/' && 'active'
                                            )}
                                        >
                                            Home
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                {/* Our Company */}
                                <NavigationMenuItem>
                                    <Link href="/about" legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={cn(
                                                navigationMenuTriggerStyle(),
                                                'nav-link',
                                                pathname === '/about' &&
                                                    'active'
                                            )}
                                        >
                                            Our Company
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                {/* Our Projects */}
                                <NavigationMenuItem>
                                    <Link
                                        href="/projects"
                                        legacyBehavior
                                        passHref
                                    >
                                        <NavigationMenuLink
                                            className={cn(
                                                navigationMenuTriggerStyle(),
                                                'nav-link',
                                                pathname === '/projects' &&
                                                    'active'
                                            )}
                                        >
                                            Our Projects
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                {/* ========== Services Drop-down ========== */}
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger
                                        className={cn(
                                            'nav-link',
                                            // Highlight "Services" if path starts with /services/
                                            pathname.startsWith('/services/') &&
                                                'active'
                                        )}
                                    >
                                        Services
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4">
                                            {servicesSubMenu.map(service => {
                                                const isActive =
                                                    pathname === service.href
                                                return (
                                                    <li key={service.title}>
                                                        <NavigationMenuLink
                                                            asChild
                                                        >
                                                            <Link
                                                                href={
                                                                    service.href
                                                                }
                                                                className={cn(
                                                                    'nav-sub-link block p-3 rounded-md',
                                                                    isActive &&
                                                                        'selected-sub-link'
                                                                )}
                                                            >
                                                                <div className="text-md font-medium mb-1">
                                                                    {
                                                                        service.title
                                                                    }
                                                                </div>
                                                                <p className="text-sm text-muted-foreground line-clamp-2">
                                                                    {
                                                                        service.description
                                                                    }
                                                                </p>
                                                            </Link>
                                                        </NavigationMenuLink>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {/* Testimonials */}
                                <NavigationMenuItem>
                                    <Link
                                        href="/testimonials"
                                        legacyBehavior
                                        passHref
                                    >
                                        <NavigationMenuLink
                                            className={cn(
                                                navigationMenuTriggerStyle(),
                                                'nav-link',
                                                pathname === '/testimonials' &&
                                                    'active'
                                            )}
                                        >
                                            Testimonials
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                {/* FAQs */}
                                <NavigationMenuItem>
                                    <Link href="/faqs" legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={cn(
                                                navigationMenuTriggerStyle(),
                                                'nav-link',
                                                pathname === '/faqs' && 'active'
                                            )}
                                        >
                                            FAQs
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </nav>

                    {/* Desktop Contact Button */}
                    <div className="hidden lg:block">
                        <Button variant="cta">Contact Us</Button>
                    </div>

                    {/* ========== Mobile Menu Button ========== */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </Button>

                    {/* ========== Mobile Navigation ========== */}
                    <div
                        className={cn(
                            'fixed inset-x-0 top-[65px] bg-background border-b lg:hidden',
                            'transition-[transform,opacity] duration-300 ease-in-out',
                            isMobileMenuOpen
                                ? 'translate-y-0 opacity-100 pointer-events-auto'
                                : '-translate-y-full opacity-0 pointer-events-none'
                        )}
                    >
                        <nav className="max-w-[var(--max-width)] mx-auto px-6 py-4">
                            <ul className="space-y-4">
                                <li>
                                    <Link
                                        href="/"
                                        className={cn(
                                            'nav-sub-link block p-2 text-lg rounded-md',
                                            pathname === '/' &&
                                                'selected-sub-link'
                                        )}
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about"
                                        className={cn(
                                            'nav-sub-link block p-2 text-lg rounded-md',
                                            pathname === '/about' &&
                                                'selected-sub-link'
                                        )}
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        Our Company
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/projects"
                                        className={cn(
                                            'nav-sub-link block p-2 text-lg rounded-md',
                                            pathname === '/projects' &&
                                                'selected-sub-link'
                                        )}
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        Our Projects
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={() =>
                                            setIsServicesOpen(!isServicesOpen)
                                        }
                                        className="flex items-center justify-between w-full text-lg nav-sub-link p-2 rounded-md"
                                    >
                                        Services
                                        <ChevronUp
                                            className={cn(
                                                'h-4 w-4 transition-transform duration-200',
                                                isServicesOpen && 'rotate-180'
                                            )}
                                        />
                                    </button>
                                    <div
                                        className={cn(
                                            'grid transition-[grid-template-rows,opacity] duration-200 ease-in-out',
                                            isServicesOpen
                                                ? 'grid-rows-[1fr] opacity-100'
                                                : 'grid-rows-[0fr] opacity-0'
                                        )}
                                    >
                                        <div className="overflow-hidden">
                                            <ul className="pl-4 py-2 space-y-2">
                                                {servicesSubMenu.map(
                                                    service => {
                                                        const isActive =
                                                            pathname ===
                                                            service.href
                                                        return (
                                                            <li
                                                                key={
                                                                    service.title
                                                                }
                                                            >
                                                                <Link
                                                                    href={
                                                                        service.href
                                                                    }
                                                                    className={cn(
                                                                        'nav-sub-link block p-2 text-sm rounded-md w-fit',
                                                                        isActive &&
                                                                            'selected-sub-link'
                                                                    )}
                                                                    onClick={() =>
                                                                        setIsMobileMenuOpen(
                                                                            false
                                                                        )
                                                                    }
                                                                >
                                                                    {
                                                                        service.title
                                                                    }
                                                                </Link>
                                                            </li>
                                                        )
                                                    }
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <Link
                                        href="/testimonials"
                                        className={cn(
                                            'nav-sub-link block p-2 text-lg rounded-md',
                                            pathname === '/testimonials' &&
                                                'selected-sub-link'
                                        )}
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        Testimonials
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/faqs"
                                        className={cn(
                                            'nav-sub-link block p-2 text-lg rounded-md',
                                            pathname === '/faqs' &&
                                                'selected-sub-link'
                                        )}
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        FAQs
                                    </Link>
                                </li>
                                <li>
                                    <Button variant="cta">Contact Us</Button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
