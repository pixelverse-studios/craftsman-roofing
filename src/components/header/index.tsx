'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, ChevronUp } from 'lucide-react'

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
import CallToAction from '../CallToAction'

import { staticRoutes } from '@/lib/navigation'
import { servicesSubMenu } from '@/lib/services'

export function Header() {
    const router = useRouter()
    const pathname = usePathname()

    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const [isServicesOpen, setIsServicesOpen] = React.useState(false)

    const onLogoClick = () => router.push('/')

    return (
        <header className="fixed top-0 left-0 right-0 w-full border-b bg-nav z-50">
            <div className="max-w-[var(--max-width)] mx-auto px-6 py-4">
                <div className="relative flex items-center justify-between">
                    <img
                        className="cursor-pointer"
                        src="/media/Craftsman_Logo.svg"
                        alt="craftsman_logo"
                        onClick={onLogoClick}
                    />

                    {/* ========== Desktop Navigation ========== */}
                    <nav className="hidden lg:block">
                        <NavigationMenu>
                            <NavigationMenuList className="space-x-2">
                                {staticRoutes.map(({ path, label }) => {
                                    if (label === 'Services') {
                                        return (
                                            <NavigationMenuItem key={path}>
                                                <Link
                                                    href={path}
                                                    legacyBehavior
                                                    passHref
                                                >
                                                    <NavigationMenuTrigger
                                                        className={cn(
                                                            'nav-link',
                                                            pathname.startsWith(
                                                                '/services'
                                                            ) && 'active'
                                                        )}
                                                    >
                                                        {label}
                                                    </NavigationMenuTrigger>
                                                </Link>
                                                <NavigationMenuContent className="min-w-[500px] max-w-[90vw]">
                                                    <ul className="grid gap-3 p-4 w-full">
                                                        {servicesSubMenu.map(
                                                            service => {
                                                                const isActive =
                                                                    pathname ===
                                                                    service.href
                                                                return (
                                                                    <li
                                                                        key={
                                                                            service.href
                                                                        }
                                                                    >
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
                                                            }
                                                        )}
                                                    </ul>
                                                </NavigationMenuContent>
                                            </NavigationMenuItem>
                                        )
                                    }
                                    return (
                                        <NavigationMenuItem key={label}>
                                            <Link
                                                href={path}
                                                legacyBehavior
                                                passHref
                                            >
                                                <NavigationMenuLink
                                                    className={cn(
                                                        navigationMenuTriggerStyle(),
                                                        'nav-link',
                                                        pathname === path &&
                                                            'active'
                                                    )}
                                                >
                                                    {label}
                                                </NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuItem>
                                    )
                                })}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </nav>

                    {/* Desktop Contact Button */}
                    <div className="hidden lg:block">
                        <CallToAction label="Contact Us" />
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
                            'fixed inset-x-0 top-[65px] bg-nav border-b lg:hidden',
                            'transition-[transform,opacity] duration-300 ease-in-out',
                            isMobileMenuOpen
                                ? 'translate-y-0 opacity-100 pointer-events-auto'
                                : '-translate-y-full opacity-0 pointer-events-none'
                        )}
                    >
                        <nav className="max-w-[var(--max-width)] mx-auto px-6 py-4">
                            <ul className="space-y-4">
                                {staticRoutes.map(({ path, label }) => {
                                    if (label === 'Services') {
                                        return (
                                            <li key={label}>
                                                <button
                                                    onClick={() =>
                                                        setIsServicesOpen(
                                                            !isServicesOpen
                                                        )
                                                    }
                                                    className="flex items-center justify-between w-[14rem] text-lg nav-sub-link py-2 px-4 rounded-md"
                                                >
                                                    Services
                                                    <ChevronUp
                                                        className={cn(
                                                            'h-4 w-4 transition-transform duration-200',
                                                            isServicesOpen &&
                                                                'rotate-180'
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
                                                                                service.href
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
                                        )
                                    }
                                    return (
                                        <li key={label}>
                                            <Link
                                                href={path}
                                                className={cn(
                                                    'nav-sub-link block py-2 px-4 text-lg rounded-md w-fit',
                                                    pathname === path &&
                                                        'selected-sub-link'
                                                )}
                                                onClick={() =>
                                                    setIsMobileMenuOpen(false)
                                                }
                                            >
                                                {label}
                                            </Link>
                                        </li>
                                    )
                                })}

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
