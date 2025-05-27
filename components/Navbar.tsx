'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const links = [
    { href: '/finance', label: 'Finance' },
    { href: '/fitness-health', label: 'Fitness & Health' },
    { href: '/math', label: 'Math' },
    { href: '/other', label: 'Other' }
  ]

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-extrabold text-blue-600">
            Zenicalculator
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-3xl text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 text-base font-medium">
            {links.map(({ href, label }) => {
              const isActive = isMounted && pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-3 py-2 rounded-md transition ${
                    isActive
                      ? 'bg-blue-500 text-white'
                      : 'text-black hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-3 bg-white shadow rounded-md p-4">
            {links.map(({ href, label }) => {
              const isActive = isMounted && pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-md text-base font-medium transition ${
                    isActive
                      ? 'bg-blue-500 text-white'
                      : 'text-black hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </header>
  )
}
