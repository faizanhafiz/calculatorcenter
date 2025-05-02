// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export const metadata = {
  title: 'CalculatorHub',
  description: 'Free Online Calculators for Health, Finance, Math, and More',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
        {/* Shared Header */}
        <Navbar />

        {/* Page Body */}
        <main className="flex-grow container mx-auto px-4 py-6">
          {children}
        </main>

        {/* Shared Footer */}
        <Footer />
      </body>
    </html>
  )
}
