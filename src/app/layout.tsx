import { Sora } from 'next/font/google'
import { Header } from '@/components/header'
import Footer from '@/components/footer/Footer'
import { Toaster } from 'sonner'

import './globals.css'

export const metadata = {
    icons: {
        icon: [
            {
                url: '/media/icons/RoofTop_Icon.svg',
                type: 'image/svg',
                sizes: '16x16'
            },
            {
                url: '/media/icons/RoofTop_Icon.svg',
                type: 'image/svg',
                sizes: '32x32'
            },
            {
                url: '/media/icons/RoofTop_Icon.svg',
                type: 'image/svg',
                sizes: '64x64'
            }
        ]
    },
    title: 'Craftsman Roofing',
    description: 'Your description here',
    openGraph: {
        images: [
            {
                url: '/path-to-your-new-image.png' // Create a new image with your preferred background color
            }
        ],
        title: 'Craftsman Roofing',
        description: 'Elite Roofing Services in New Jersey',
        url: 'https://www.craftsmanroofing.com',
        siteName: 'Craftsman Roofing',
        type: 'website',
        manifest: '/manifest.json'
    }
}

const sora = Sora({
    subsets: ['latin'],
    variable: '--font-sora'
})

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`${sora.variable}`}>
            <head></head>
            <body className="font-sora">
                <Header />
                {children}
                <Footer />
                <Toaster />
            </body>
        </html>
    )
}
