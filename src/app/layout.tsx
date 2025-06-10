import { Metadata } from 'next'
import { Inter, Source_Sans_3, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Configure Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-sans',
  weight: ['400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Víctor Xesús Barreiro Domínguez | PhD Candidate in Applied AI for Remote Sensing',
  description: 'Personal website of Víctor Xesús Barreiro Domínguez, PhD candidate at the University of Santiago de Compostela (USC) specializing in Applied AI for Remote Sensing.',
  keywords: ['AI', 'Remote Sensing', 'Deep Learning', 'Computer Vision', 'PhD', 'USC', 'Research'],
  authors: [{ name: 'Víctor Xesús Barreiro Domínguez' }],
  openGraph: {
    title: 'Víctor Xesús Barreiro Domínguez | PhD Candidate',
    description: 'PhD candidate at USC specializing in Applied AI for Remote Sensing',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSans.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-neutral-50">
        <Navbar />
        <main className="flex-grow w-full">
          <div className="max-w-content-wide mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
} 