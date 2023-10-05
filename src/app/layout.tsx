import './globals.scss'
import type { Metadata } from 'next'
import { Nav } from '@/layout/Nav'
import { Footer } from '@/layout/Footer'

import styles from './layout.module.scss';

export const metadata: Metadata = {
  title: 'Automatic Cover Letters',
  description: 'Automatic cover letters, if your prospective employer will not read it, why should you write it?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={styles.wrapper}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
