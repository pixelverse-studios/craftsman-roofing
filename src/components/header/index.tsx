'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

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

const components: { title: string; href: string; description: string }[] = [
    {
        title: 'Roofing Services',
        href: '/roofing-services',
        description:
            'Professional roofing installation, repair, and maintenance services.'
    },
    {
        title: 'Gutter Services',
        href: '/gutter-services',
        description:
            'Complete gutter solutions including installation and maintenance.'
    },
    {
        title: 'Siding Services',
        href: '/siding-services',
        description: 'Expert siding installation and repair services.'
    },
    {
        title: 'Masonry Services',
        href: '/masonry-services',
        description: 'Professional masonry work and repairs.'
    }
]

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = 'ListItem'

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const [isServicesOpen, setIsServicesOpen] = React.useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 w-full border-b bg-background z-50">
            <div className="max-w-[var(--max-width)] mx-auto px-6 py-4">
                <div className="relative flex items-center justify-between">
                    <div className="font-bold text-xl">LOGO</div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:block">
                        <NavigationMenu>
                            <NavigationMenuList className="space-x-2">
                                <NavigationMenuItem>
                                    <Link href="/" legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={navigationMenuTriggerStyle()}
                                        >
                                            Home
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href="/about" legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={navigationMenuTriggerStyle()}
                                        >
                                            Our Company
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link
                                        href="/projects"
                                        legacyBehavior
                                        passHref
                                    >
                                        <NavigationMenuLink
                                            className={navigationMenuTriggerStyle()}
                                        >
                                            Our Projects
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>
                                        Services
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4">
                                            {components.map(component => (
                                                <ListItem
                                                    key={component.title}
                                                    title={component.title}
                                                    href={component.href}
                                                >
                                                    {component.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link
                                        href="/testimonials"
                                        legacyBehavior
                                        passHref
                                    >
                                        <NavigationMenuLink
                                            className={navigationMenuTriggerStyle()}
                                        >
                                            Testimonials
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href="/faqs" legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={navigationMenuTriggerStyle()}
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
                        <Button>Contact Us</Button>
                    </div>

                    {/* Mobile Menu Button */}
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

                    {/* Mobile Navigation */}
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
                                        className="block py-2 text-lg hover:text-accent-foreground"
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
                                        className="block py-2 text-lg hover:text-accent-foreground"
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
                                        className="block py-2 text-lg hover:text-accent-foreground"
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
                                        className="flex items-center justify-between w-full py-2 text-lg hover:text-accent-foreground"
                                    >
                                        Services
                                        <ChevronDown
                                            className={cn(
                                                'h-4 w-4 transition-transform duration-200',
                                                isServicesOpen
                                                    ? 'rotate-180'
                                                    : ''
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
                                                {components.map(component => (
                                                    <li key={component.title}>
                                                        <Link
                                                            href={
                                                                component.href
                                                            }
                                                            className="block py-2 text-sm hover:text-accent-foreground"
                                                            onClick={() =>
                                                                setIsMobileMenuOpen(
                                                                    false
                                                                )
                                                            }
                                                        >
                                                            {component.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <Link
                                        href="/testimonials"
                                        className="block py-2 text-lg hover:text-accent-foreground"
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
                                        className="block py-2 text-lg hover:text-accent-foreground"
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        FAQs
                                    </Link>
                                </li>
                                <li>
                                    <Button className="w-full">
                                        Contact Us
                                    </Button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
