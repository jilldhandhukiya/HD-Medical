'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 20)

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setHeaderVisible(false)
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setHeaderVisible(true)
      }

      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const links = [
    { title: 'Home', url: '/' },
    { title: 'Products', url: '/product' },
    { title: 'About Us', url: '/aboutus' },
    { title: 'Testimonials', url: '/testimonials' },
    { title: 'Contact', url: '/contactus' },
    {title : "Resources", url: "/resource"}
  ]

  return (
    <>
      <nav className={`w-full py-6 px-6 md:px-12 flex justify-between items-center fixed top-0 left-0 z-50 transition-all duration-300 max-w-full ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      } ${isOpen ? 'bg-white' : ''} ${headerVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="HD Medical Logo"
              width={120}
              height={40}
              className="object-contain h-8 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className={`font-bold text-lg transition-colors text-base ${
                  pathname === item.url
                    ? 'text-[#101585]'
                    : 'text-slate-600 hover:text-[#101585]'
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Side Panel */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-700"
            >
              <X size={28} />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex flex-col gap-4 px-6">
            {links.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className={`font-medium p-2 rounded text-base ${
                  pathname === item.url
                    ? 'text-[#101585] bg-blue-50'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  )
}
