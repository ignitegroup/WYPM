import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Campari Red Passion | Win Your Passion Moment',
  description: 'Buy Campari 200ml, 750ml or 1L for a chance to win amazing prizes including trips to Dominican Republic, Sandals Jamaica staycations, and more!',
  keywords: 'Campari, Red Passion, Win, Contest, Caribbean, Jamaica, Dominican Republic',
  openGraph: {
    title: 'Campari Red Passion | Win Your Passion Moment',
    description: 'Buy Campari for a chance to win amazing prizes!',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
