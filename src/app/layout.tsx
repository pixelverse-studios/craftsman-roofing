import type { Metadata } from 'next'

import { Header } from '@/components/header'
import './globals.css'

// const geistSans = localFont({
//     src: './fonts/GeistVF.woff',
//     variable: '--font-geist-sans',
//     weight: '100 900'
// })
// const geistMono = localFont({
//     src: './fonts/GeistMonoVF.woff',
//     variable: '--font-geist-mono',
//     weight: '100 900'
// })

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
        <html lang="en">
            <body>
                {/* <ThemeProvider defaultColorScheme="light" theme={{}}> */}
                <Header />
                {children}
                {/* </ThemeProvider> */}
            </body>
        </html>
    )
}
