import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import { Header } from '@/components/header'
import Footer from '@/components/footer/Footer'
import './globals.css'

const sora = Sora({
    subsets: ['latin'],
    variable: '--font-sora'
})

export const metadata: Metadata = {
    title: 'Craftsman Roofing',
    description: ''
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`${sora.variable}`}>
            <body className="font-sora">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
