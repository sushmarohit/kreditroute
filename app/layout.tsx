import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KreditRoute - India\'s Best Platform for Loans, Cards & Investments',
  description: 'One-stop financial solutions platform offering personal loans, home loans, credit cards, credit score checks, investments, insurance, and bill payments. Quick, easy, and hassle-free.',
  keywords: 'personal loan, home loan, credit card, credit score, investment, insurance, bill payment, financial services, loans online',
  authors: [{ name: 'KreditRoute' }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/fav_icon.webp', type: 'image/webp' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'KreditRoute - India\'s Best Platform for Loans, Cards & Investments',
    description: 'One-stop financial solutions platform offering loans, credit cards, investments, and more.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

