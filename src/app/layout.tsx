import { Metadata } from 'next'
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import '@fontsource/source-sans-3/400.css'
import '@fontsource/source-sans-3/700.css'
import '@fontsource/jetbrains-mono/400.css'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Configure fonts using CSS variables
const fontVariables = {
  '--font-inter': 'Inter, system-ui, sans-serif',
  '--font-source-sans': 'Source Sans 3, Georgia, serif',
  '--font-jetbrains-mono': 'JetBrains Mono, monospace',
}

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
    <html lang="en" className="scroll-smooth" style={fontVariables}>
      <body className="min-h-screen flex flex-col bg-neutral-50">
        <Navbar />
        <main className="flex-grow w-full">
          <div className="max-w-content-wide mx-auto content-padding">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
} 