"use client"

import { Button } from "@/components/ui/button"
import { Download, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="fixed top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Mobile & Desktop - One line */}
          <Link href="/" className="text-xl md:text-2xl font-manrope font-extrabold transition-colors">
            <span className="font-normal text-stone-900">Maddie</span> <span className="font-bold text-lime-600">Whitaker</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/projects" className="text-sm font-semibold hover:text-lime-600 transition-colors">
              Work
            </Link>
            <Link href="/#about" className="text-sm font-semibold hover:text-lime-600 transition-colors">
              About
            </Link>
            <Link href="/#contact" className="text-sm font-semibold hover:text-lime-600 transition-colors">
              Contact
            </Link>
            <Button size="lg" className="text-sm px-10 py-6 bg-lime-600 text-white hover:bg-black hover:text-white transition-all" asChild>
              <a href="/Maddie_Whitaker_Resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white">
              <div className="flex flex-col space-y-6 mt-12 px-6">
                <Link href="/projects" className="text-left text-2xl font-bold hover:text-lime-600 transition-colors">
                  Work
                </Link>
                <Link href="/#about" className="text-left text-2xl font-bold hover:text-lime-600 transition-colors">
                  About
                </Link>
                <Link href="/#contact" className="text-left text-2xl font-bold hover:text-lime-600 transition-colors">
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}