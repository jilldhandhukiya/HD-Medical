'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center h-10">
            <Image
              src="/images/logo.png"
              alt="HD Medical Logo"
              width={120}
              height={40}
              className="object-contain w-24 sm:w-32"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden sm:flex space-x-24 items-center">
            <Link href="/" className="text-gray-500 hover:text-gray-900 px-8 py-2 text-xl font-medium">
              Home
            </Link>
            <Link href="/product" className="text-gray-500 hover:text-gray-900 px-8 py-2 text-xl font-medium">
              Products
            </Link>
            <Link href="/aboutus" className="text-gray-500 hover:text-gray-900 px-8 py-2 text-xl font-medium">
              About
            </Link>
            <Link href="/contactus" className="text-gray-500 hover:text-gray-900 px-8 py-2 text-xl font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {menuOpen && (
          <div className="sm:hidden mt-4 space-y-3 pb-4">
            <Link href="/" className="block text-gray-700 hover:text-gray-900 px-4 py-3 text-base font-medium">
              Home
            </Link>
            <Link href="/product" className="block text-gray-700 hover:text-gray-900 px-4 py-3 text-base font-medium">
              Products
            </Link>
            <Link href="/aboutus" className="block text-gray-700 hover:text-gray-900 px-4 py-3 text-base font-medium">
              About
            </Link>
            <Link href="/contactus" className="block text-gray-700 hover:text-gray-900 px-4 py-3 text-base font-medium">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
