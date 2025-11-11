'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function UXNav() {
  const pathname = usePathname()
  
  const navItems = [
    { name: 'Work', href: '/ux' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]
  
  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <Link 
            href="/ux" 
            className="text-xl font-bold text-gray-900 hover:text-ux-primary-600 transition-colors font-manrope"
          >
            Maddie Whitaker
          </Link>
          
          {/* Nav Links */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-ux-primary-600'
                    : 'text-gray-600 hover:text-ux-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}