'use client'
import Link from 'next/link'
import Image from 'next/image'
import {  Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-[#101585] text-white pt-16 pb-8 px-6 md:px-12 relative overflow-hidden">
      
      {/* Background Pattern (subtle circles) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-full" style={{
             backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
             backgroundSize: '30px 30px'
         }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
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
            <p className="text-blue-200 text-sm leading-relaxed">
              Revolutionizing cardiac diagnostics with intelligent stethoscope technology for better patient care.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-center text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="text-center space-y-3 columns-2 text-blue-200 text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'Products', href: '/product' },
                { label: 'About Us', href: '/aboutus' },
                { label: 'Contact', href: '/contactus' },
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms of Service', href: '#' },
              ].map((link) => (
                <li key={link.label}><Link href={link.href} className="hover:text-[#FA6404] transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Us */}
          <div>
             <h4 className=" text-lg font-bold mb-6 text-white">Contact Us</h4>
             <div className="space-y-4 text-blue-200 text-sm">
               <div className="flex items-start gap-3">
                 <Mail size={18} className="mt-0.5 text-[#FA6404]" />
                 <span>info@hdsteth.com</span>
               </div>
             </div>
          </div>

          {/* Col 4: Stay Updated */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Stay Updated</h4>
            <p className="text-blue-200 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and cardiac care insights.
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-3 rounded bg-blue-900/40 border border-blue-800 text-white placeholder-blue-400 focus:outline-none focus:border-[#FA6404] transition-colors text-sm"
              />
              <button className="w-full bg-[#FA6404] hover:bg-orange-600 text-white py-3 rounded font-bold text-sm transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-300">
          <p>© {new Date().getFullYear()} HD Medical. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}