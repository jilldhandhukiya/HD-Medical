'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
        className={clsx(
          'absolute top-0 left-0 w-full z-50 transition-all duration-300',
          'backdrop-blur-md bg-white/5 border-b border-white/10'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="HD Medical Logo"
                width={120}
                height={40}
                className="object-contain transition-all hover:scale-105"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden sm:flex space-x-12 items-center" >
              {['Home', 'Product', 'About', 'Contact'].map((label) => (
                <Link
                  key={label}
                  href={`/${label.toLowerCase()}${label === 'Home' ? '' : ''}`}
                  className="text-black text-medium font-medium relative group transition-all"
                >
                  <span className="relative z-10">{label}</span>
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="sm:hidden relative z-50 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400/20 to-cyan-200/10 backdrop-blur hover:scale-110 transition-all duration-300"
              aria-label="Toggle Menu"
            >
              <span className="sr-only">Toggle Menu</span>
              {menuOpen ? (
                <X className="w-6 h-6 text-cyan-500" />
              ) : (
                <Menu className="w-6 h-6 text-cyan-500" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div
          className={`sm:hidden fixed inset-0 z-40 transition-all duration-500 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-white/80 to-cyan-100/70 backdrop-blur-2xl"
            onClick={() => setMenuOpen(false)}
          />

          {/* Animated Menu Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center space-y-6">
            {['Home', 'Product', 'About', 'Contact'].map((label) => (
              <Link
                key={label}
                href={`/${label.toLowerCase()}${label === 'Home' ? '' : 'us'}`}
                className="text-black text-2xl font-semibold relative group hover:text-cyan-500 transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                <span className="relative z-10">{label}</span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </Link>
            ))}
          </div>
        </div>
      </header>
  )
}
