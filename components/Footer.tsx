'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const footerLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/sitemap', label: 'Sitemap' }
  ]

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Links */}
          <div className="flex flex-col md:flex-row gap-4 text-sm">
            {footerLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-1 rounded-md transition-colors ${
                  pathname === href
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-blue-600 text-gray-300'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400 text-center md:text-right">
            &copy; 2025 CalculatorHub. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
