'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname() // Get current path

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    ['Home', '/'],
    ['Product', '/product'],
    ['About', '/aboutus'],
    ['Contact', '/contactus'],
  ]

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md' : 'bg-transparent',
        menuOpen ? 'bg-white' : ''
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="HD Medical Logo"
              width={100}
              height={32}
              className="object-contain h-8 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {links.map(([title, url]) => (
              <Link
                key={title}
                href={url}
                className={clsx(
                  'text-sm font-medium relative group transition-all',
                  pathname === url ? 'text-[#17a6e0]' : 'text-black'
                )}
              >
                <span className="relative z-10">{title}</span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-50 p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5 text-gray-600" />
            ) : (
              <Menu className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={clsx(
          'fixed inset-0 z-40 md:hidden transition-transform duration-300 ease-in-out transform',
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="absolute inset-0 bg-white">
          <div className="pt-20 pb-6 px-4 space-y-1">
            {links.map(([title, url]) => (
              <Link
                key={title}
                href={url}
                className={clsx(
                  'block px-4 py-3 text-base font-medium rounded-lg hover:bg-gray-50',
                  pathname === url ? 'text-[#17a6e0]' : 'text-black'
                )}
                onClick={() => setMenuOpen(false)}
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
