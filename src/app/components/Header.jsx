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
    ['Contact', '/contactus']
  ]

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md' : 'bg-transparent',
        menuOpen ? 'bg-white' : ''
      )}
    >
      <nav className="max-w-full mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center ml-2 sm:ml-4">
            <Image
              src="/images/logo.png"
              alt="HD Medical Logo"
              width={100}
              height={10}
              className="object-contain h-6 w-auto"
            />
          </Link>

          {/* Desktop Nav - Moved to right */}
          <div className="hidden md:flex space-x-12 items-center justify-end flex-1 mr-8">
            {links.map(([title, url]) => (
              <Link
                key={title}
                href={url}
                className={clsx(
                  'text-xl font-bold relative group transition-all hover:scale-105',
                  pathname === url ? 'text-[#17a6e0]' : 'text-black hover:text-[#17a6e0]'
                )}
              >
                <span className="relative z-10">{title}</span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </Link>
            ))}
          </div>

          {/* Download App Button - Desktop */}
          <div className="hidden md:flex items-center mr-4 lg:mr-8">
            <Link 
              href="/app"
              className="bg-[#17a6e0] hover:bg-[#1493c7] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap"
            >
              HD Steth App
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-50 p-3 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 mr-2"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
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
          <div className="pt-24 pb-6 px-4 space-y-2">
            {links.map(([title, url]) => (
              <Link
                key={title}
                href={url}
                className={clsx(
                  'block px-6 py-4 text-xl font-bold rounded-lg hover:bg-gray-50 transition-all hover:scale-105',
                  pathname === url ? 'text-[#17a6e0] bg-blue-50' : 'text-black hover:text-[#17a6e0]'
                )}
                onClick={() => setMenuOpen(false)}
              >
                {title}
              </Link>
            ))}
            
            {/* Download App Button - Mobile */}
            <button 
              className="w-full bg-[#17a6e0] hover:bg-[#1493c7] text-white font-bold px-6 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg mt-4"
              onClick={() => setMenuOpen(false)}
            >
              Download Mobile App
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
