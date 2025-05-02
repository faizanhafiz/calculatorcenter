import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'CalculatorHub',
  description: 'All your calculators in one place'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow px-4 md:px-8 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
