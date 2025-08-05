'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    
    
    <footer className="bg-[#ffffff] text-black px-6 lg:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          <div>
            <h2 className="text-5xl sm:text-6xl font-black leading-tight tracking-tight">
              LET&apos;S MAKE IT <br className="hidden sm:block" />
              HAPPEN TOGETHER.
            </h2>
          </div>
          {/* Right Boxed Section */}
            <div className="flex-1 max-w-lg bg-gray-100 rounded-2xl p-6 shadow-md">
              {/* Navigation Grid */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Explore</h4>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm font-medium">
                  <Link href="/" className="hover:text-gray-700 transition">
                    Home
                  </Link>
                  <Link href="/product" className="hover:text-gray-700 transition">
                    Products
                  </Link>
                  <Link href="/aboutus" className="hover:text-gray-700 transition">
                    About Us
                  </Link>
                  <Link href="/contactus" className="hover:text-gray-700 transition">
                    Contact
                  </Link>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm mt-6 mb-4 text-gray-700 leading-relaxed">
                We champion transformation through design. Whether you’re starting from scratch or scaling up, we’re here to make it real.
              </p>

              {/* CTA Button */}
              <Link
                href="/contactus"
                className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 text-sm font-semibold rounded-full shadow hover:bg-gray-900 transition"
              >
                START A CONVERSATION
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        {/* Centered Social Links */}
        <div className="mb-16">
          <div className="flex justify-center flex-wrap gap-6 text-[24px] font-normal tracking-wide">
            {[
              ['Instagram', 'https://instagram.com'],
              ['Twitter (X)', 'https://twitter.com'],
              ['LinkedIn', 'https://linkedin.com'],
              ['Whatsapp', 'https://Whatsapp.com']
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:underline"
              >
                {label} <ArrowUpRight className="ml-1 w-3 h-3" />
              </Link>
            ))}
          </div>
        </div>

        {/* HD Medical Logo */}
        <div className="flex justify-center">
          <Image 
            src="/images/logo.png"
            alt="HD Medical Logo"
            width={1000}
            height={120}
            className="object-contain"
            priority
          />
        </div>
       </div>
    </footer>
  )
}