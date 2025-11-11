import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Maddie Whitaker - UX Designer',
  description: 'UX and product design portfolio',
}

export default function UXLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white font-inter">
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <a href="/ux" className="text-xl font-bold text-gray-900 font-geist">
              Maddie Whitaker
            </a>
            <div className="flex items-center gap-8">
              <a href="/ux" className="text-sm font-medium text-gray-600 hover:text-purple-600">
                Work
              </a>
              <a href="/about" className="text-sm font-medium text-gray-600 hover:text-purple-600">
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      <main>{children}</main>
      
      <footer className="border-t border-gray-200 py-12 mt-24">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm">
            Designed and developed by Maddie Whitaker © 2025
          </p>
        </div>
      </footer>
    </div>
  )
}