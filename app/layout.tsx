import { ThemeProvider } from '@/components/providers/theme-provider'
import { ChildProps } from '@/types'
import type { Metadata } from 'next'
import { Crete_Round, Inter, Literata, Work_Sans } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import NextTopLoader from "nextjs-toploader"
import { Analytics } from "@vercel/analytics/next"

import './globals.css'

const serif = Literata({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
});

const sans = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://blog.yakubbaev.dev'),
  title: 'Aklog - articles about programming',
  description: 'Programming news, tips, and the latest programming news. On our blog, you can find a guide to learning and developing programming.',
  authors: [{ name: "Samar Badriddinov", url: "https://sammi.ac" }, { name: "Azamat Yakubbaev", url: "https://yakubbaev.dev" }],
  icons: { icon: '/favicon-32x32.png' },
  keywords: "blog, portfolio, reactjs, nextjs, vercel, javascript, nodejs, mongodb, mysql, postgres, html, css",
  openGraph: {
    title: 'Aklog - articles about programming',
    description: 'Programming news, tips, and the latest programming news. On our blog, you can find a guide to learning and developing programming.',
    type: 'website',
    url: 'https://blog.yakubbaev.dev',
    locale: 'en_EN',
    images: 'https://blog.yakubbaev.dev/blog-logo.png',
    countryName: 'Uzbekistan',
    siteName: 'Aklog',
    emails: 'yakubbaevdev@gmail.com',
  },
  twitter: {
    card: 'summary_large_image',
    images: 'https://blog.yakubbaev.dev/blog-logo.png',
  }
}

function RootLayout({ children }: ChildProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${serif.variable} ${sans.variable} overflow-x-hidden`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader showSpinner={false} />
          {children}
          <Toaster position='top-center' />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout;