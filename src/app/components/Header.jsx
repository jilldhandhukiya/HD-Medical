'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <nav className="relative z-20 flex items-center justify-between px-6 md:px-16 py-4 bg-black">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-2">
          <i className="bi bi-heart-pulse text-white text-sm"></i>
        </div>
        <span className="text-xl font-bold text-white">HD Medical</span>
      </div>

      <div className="hidden md:flex items-center space-x-8" style={{ fontWeight: 'bold', fontSize: '1.4rem' }}>
        <Link href="/" className="text-white hover:text-gray-200 transition-colors">
          HOME
        </Link>
        <Link href="/aboutus" className="text-white hover:text-gray-200 transition-colors">
          ABOUT
        </Link>
        <Link href="/contactus" className="text-white hover:text-gray-200 transition-colors">
          CONTACT
        </Link>
      </div>
    </nav>
  )
}