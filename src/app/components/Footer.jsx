'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-[#0E1C3C] text-white pt-16 pb-8 px-6 md:px-12 relative overflow-hidden">

      {/* Background Pattern (subtle circles) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Grid: 1 col mobile, 2 cols tablet, 4 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">

          {/* Col 1: Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="HD Medical Logo"
                width={120}
                height={40}
                className="object-contain h-8 w-auto"
              />
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed max-w-xs">
              Revolutionizing diagnostics with
              instant cardiac insights at point of
              care for improved patient outcomes.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            {/* Removed text-center for consistent alignment */}
            <ul className="space-y-3 text-blue-200 text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'Products', href: '/product' },
                { label: 'About Us', href: '/aboutus' },
                { label: 'References', href: '/references' },
                { label: 'Resources', href: '/resource' },
                { label: 'Contact', href: '/contactus' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-[#FA6404] transition-colors block w-fit">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Us */}
                <div>
                <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
                <div className="space-y-4 text-blue-200 text-sm">
                  <a
                  href="mailto:info@hdmedicalgroup.com"
                  className="flex items-start gap-3 hover:text-white transition-colors"
                  aria-label="Email info@hdmedicalgroup.com"
                  >
                  <Mail size={18} className="mt-0.5 text-[#FA6404] shrink-0" />
                  <span className="break-all">info@hdmedicalgroup.com</span>
                  </a>
                </div>
                </div>

                {/* Col 4: Stay Updated */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Stay Updated</h4>
            <p className="text-blue-200 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and cardiac care insights.
            </p>
            <div className="space-y-3" suppressHydrationWarning={true}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded border border-white-600 text-white placeholder-blue-400 focus:outline-none focus:border-[#F5863B] transition-colors text-sm"
              />
              <button className="w-full bg-[#F5863B] hover:bg-orange-600 text-white py-3 rounded font-bold text-sm transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-300 text-center md:text-left">
          <p>© {new Date().getFullYear()} HD Medical. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}