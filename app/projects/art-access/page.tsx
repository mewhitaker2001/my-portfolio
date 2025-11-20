"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Target, Accessibility, Smartphone, Eye, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ArtAccessPage() {
  const [currentFlow, setCurrentFlow] = useState(0)
  
  const userFlows = [
    {
      title: 'First-Time User Journey',
      image: '/images/ux/art-access/flow-1.png',
    },
    {
      title: 'Browse Artwork Journey',
      image: '/images/ux/art-access/flow-2.png',
    },
    {
      title: 'QR Code Scanner & Accessibility',
      image: '/images/ux/art-access/flow-3.png',
    },
  ]

  const nextFlow = () => {
    setCurrentFlow((prev) => (prev + 1) % userFlows.length)
  }

  const prevFlow = () => {
    setCurrentFlow((prev) => (prev - 1 + userFlows.length) % userFlows.length)
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex h-20 items-center">
            <Link href="/projects">
              <Button variant="ghost" size="sm" className="text-red-800 hover:text-red-900 hover:bg-red-50">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div>
              <Badge className="mb-6 bg-red-100 text-red-800 text-sm px-4 py-2">
                UX/UI Design · Accessibility
              </Badge>
              
              <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
                Art <span className="text-red-800">Access</span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-slate-600 mb-8">
                Museum Companion App for Visual Processing Disorders
              </p>
              
              <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                A mobile app designed for the David Owsley Museum of Art that makes viewing artwork accessible 
                to visitors with Visual Processing Disorders through customizable text, reading aids, and zoom features.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="border-l-4 border-red-800 pl-4">
                  <div className="text-sm text-slate-500 mb-1">Platform</div>
                  <div className="text-2xl font-bold">iOS Mobile</div>
                </div>
                <div className="border-l-4 border-red-800 pl-4">
                  <div className="text-sm text-slate-500 mb-1">Role</div>
                  <div className="text-2xl font-bold">UX/UI Designer</div>
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="text-sm uppercase tracking-widest text-slate-500 mb-4 font-semibold">Tools Used</h4>
                <div className="flex flex-wrap gap-3">
                  {["Figma", "User Research", "Prototyping"].map((tool) => (
                    <Badge key={tool} variant="outline" className="border-2 border-slate-300 text-base px-4 py-2 hover:border-red-800 hover:text-red-800 transition-colors">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="aspect-[3/4] bg-gradient-to-br from-red-800 to-amber-700 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/ux/art-access/hero-cover.png"
                alt="Art Access App Screens"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-16">The Problem</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-12 max-w-4xl">
              Visual Processing Disorders can cause a variety of issues for museum visitors, including difficulty 
              with reading comprehension, shape recognition, and viewing complex images. Labels in museums can be 
              difficult to read because of long paragraphs and small type, while art with complex compositions or 
              busy backgrounds can be hard to view for users with VPD. The David Owsley Museum of Art needs a 
              digital solution to make their collection more accessible to all visitors, particularly those with 
              visual processing challenges.
            </p>

            {/* What is VPD */}
            <div className="bg-gradient-to-br from-red-50 to-amber-50 rounded-2xl p-8 md:p-12 max-w-4xl">
              <h3 className="text-2xl font-bold mb-6">What is Visual Processing Disorder?</h3>
              <blockquote className="text-xl text-slate-700 italic leading-relaxed border-l-4 border-red-800 pl-6">
                "A visual processing disorder is not a physical disability of the eye, but a deficit in the brain's 
                ability to identify, organize and process information."
              </blockquote>
              <p className="text-slate-600 mt-4 pl-6">—The Center for Vision Development</p>
            </div>

            <div className="h-px bg-slate-200 my-16" />

            <h2 className="text-4xl md:text-6xl font-black mb-16">The Solution</h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl">
              Art Access provides customizable accessibility features including a unique reading ruler to isolate 
              text, adjustable font sizes and spacing, high contrast modes, and artwork zoom capabilities. The app 
              allows visitors to customize their viewing experience to suit their individual needs.
            </p>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-amber-50">
        <div className="container mx-auto px-6">
          <div className="w-full max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                Understanding Visual Processing Disorders
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Research into the challenges faced by museum visitors with VPD
              </p>
            </div>

            {/* Key Challenges Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-red-800">Reading Difficulties</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-800 mt-1">•</span>
                    <span>Long paragraphs with small type are hard to read</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-800 mt-1">•</span>
                    <span>Difficulty discriminating between certain letters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-800 mt-1">•</span>
                    <span>Easily distracted by surrounding visual information</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-red-800">Visual Processing Issues</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-800 mt-1">•</span>
                    <span>Complex compositions are overwhelming</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-800 mt-1">•</span>
                    <span>Busy backgrounds make artwork difficult to view</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-800 mt-1">•</span>
                    <span>Identifying and distinguishing shapes is challenging</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Design Goals */}
            <div className="bg-white rounded-2xl p-10 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Design Goals</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-gradient-to-br from-red-50 to-amber-50 rounded-xl">
                  <div className="text-4xl font-black text-red-800 mb-2">01</div>
                  <h3 className="font-bold mb-2">Adjustable Text</h3>
                  <p className="text-sm text-gray-600">Customizable size, spacing, and contrast</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-red-50 to-amber-50 rounded-xl">
                  <div className="text-4xl font-black text-red-800 mb-2">02</div>
                  <h3 className="font-bold mb-2">Reading Ruler</h3>
                  <p className="text-sm text-gray-600">Isolate one line of text at a time</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-red-50 to-amber-50 rounded-xl">
                  <div className="text-4xl font-black text-red-800 mb-2">03</div>
                  <h3 className="font-bold mb-2">Zoom Features</h3>
                  <p className="text-sm text-gray-600">View artwork details up close</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-16">Design Process</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-l-4 border-red-800 pl-6">
                <Target className="h-12 w-12 text-red-800 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Research</h3>
                <p className="text-slate-600 leading-relaxed">
                  Studied Visual Processing Disorders and analyzed existing accessibility tools to find gaps 
                  in museum-specific solutions.
                </p>
              </div>

              <div className="border-l-4 border-red-800 pl-6">
                <Eye className="h-12 w-12 text-red-800 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Wireframes</h3>
                <p className="text-slate-600 leading-relaxed">
                  Created low-fidelity wireframes to experiment with laoyout options and placement of accessibility controls.
                </p>
              </div>

              <div className="border-l-4 border-red-800 pl-6">
                <Smartphone className="h-12 w-12 text-red-800 mb-4" />
                <h3 className="text-2xl font-bold mb-3">High-Fidelity Design</h3>
                <p className="text-slate-600 leading-relaxed">
                  Developed a style guide to ensure ADA-compliant colors and consistent components. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sitemap */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Sitemap</h2>
            <p className="text-xl text-slate-600 mb-16 max-w-4xl">
              The app structure was designed to provide intuititve navigation, with clear paths to accessibility features
              and simple access to artwork information.
            </p>
            
            <div className="aspect-[16/10] bg-white rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/ux/art-access/information-architecture.png"
                alt="Art Access Sitemap"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* User Flows */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8">User Flows</h2>
            <p className="text-xl text-slate-600 mb-16 max-w-4xl">
              Mapping the key user journeys through the app, from first-time users, to browsing artwork, to
              adjusting accessibility settings.
            </p>
            
            <div className="relative">
              {/* Main Flow Display */}
              <div className="aspect-[16/10] bg-white rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={userFlows[currentFlow].image}
                  alt={userFlows[currentFlow].title}
                  className="w-full h-full object-contain transition-opacity duration-300"
                />
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevFlow}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors"
                aria-label="Previous flow"
              >
                <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextFlow}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors"
                aria-label="Next flow"
              >
                <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {userFlows.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFlow(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentFlow 
                        ? 'bg-red-800 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to flow ${index + 1}`}
                  />
                ))}
              </div>

              {/* Flow Title */}
              <p className="text-center text-lg font-medium text-gray-900 mt-4">
                {userFlows[currentFlow].title}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wireframes */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Wireframes</h2>
            <p className="text-xl text-slate-600 mb-16 max-w-4xl">
              Low-fidelity wireframes helped me explore different layout options and test the placement of 
              accessibility controls before committing to a final design.
            </p>
            
            <div className="aspect-[16/10] bg-slate-50 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/ux/art-access/wireframes.png"
                alt="Art Access Wireframes"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Style Guide */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-amber-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Style Guide</h2>
            <p className="text-xl text-slate-600 mb-16 max-w-4xl">
              A comprehensive style guide built with accessibility at its core, featuring ADA-compliant color 
              contrast ratios, clear typography, and consistent component design.
            </p>
            
            <div className="aspect-[16/10] bg-white rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/ux/art-access/style-guide.png"
                alt="Art Access Style Guide"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Screens */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-16">Key Features</h2>
            
            {/* Onboarding */}
            <div className="mb-24">
              <h3 className="text-3xl font-bold mb-6">Onboarding Experience</h3>
              <p className="text-lg text-slate-600 mb-12 max-w-3xl">
                Introduction to accessibility features from the start, helping users understand how the app can 
                be customized to their needs.
              </p>
              
              <div className="aspect-[21/9] bg-gradient-to-br from-red-800 to-amber-700 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/ux/art-access/onboarding-wide.png"
                  alt="Art Access onboarding screens"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Accessibility Menu */}
            <div className="mb-24">
              <h3 className="text-3xl font-bold mb-6">Accessibility Controls</h3>
              <p className="text-lg text-slate-600 mb-12 max-w-3xl">
                Comprehensive accessibility menu with text size, line spacing, reading ruler, text-to-speech, 
                high contrast mode, and the ability to save custom presets.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="aspect-[9/16] bg-gradient-to-br from-red-700 to-amber-600 rounded-2xl overflow-hidden shadow-xl mb-3">
                    <video
                      src="/images/ux/art-access/accessibility-demo.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center text-sm text-slate-600">
                    Exploring accessibility features
                  </p>
                </div>
                <div>
                  <div className="aspect-[9/16] bg-gradient-to-br from-amber-600 to-red-700 rounded-2xl overflow-hidden shadow-xl mb-3">
                    <video
                      src="/images/ux/art-access/artwork-interaction.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center text-sm text-slate-600">
                    Navigating to artwork, using reading ruler and zoom
                  </p>
                </div>
              </div>
            </div>

            {/* Artwork Viewing */}
            <div>
              <h3 className="text-3xl font-bold mb-6">Artwork Viewing & Zoom</h3>
              <p className="text-lg text-slate-600 mb-12 max-w-3xl">
                Browse galleries, view detailed artwork information, and zoom in to see fine details up close.
              </p>
              
              <div className="aspect-[21/9] bg-gradient-to-br from-amber-700 to-red-800 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/ux/art-access/all-screens.png"
                  alt="Gallery browsing and artwork detail screens"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-amber-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Key Takeaways</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-16 max-w-4xl">
              This project taught me the importance of designing for specific accessibility needs rather than 
              generic solutions. By focusing on Visual Processing Disorders, I was able to create an app that
              allows the user to customize their experience to their own needs.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-l-4 border-red-800 pl-6">
                <Accessibility className="h-12 w-12 text-red-800 mb-4" />
                <h3 className="text-xl font-bold mb-3">Accessibility First</h3>
                <p className="text-slate-600 leading-relaxed">Learned that effective accessibility requires understanding specific user needs, not one-size-fits-all solutions</p>
              </div>
              <div className="border-l-4 border-red-800 pl-6">
                <Eye className="h-12 w-12 text-red-800 mb-4" />
                <h3 className="text-xl font-bold mb-3">User-Centered Design</h3>
                <p className="text-slate-600 leading-relaxed">Research into VPD challenges informed every design decision, from typography to layout</p>
              </div>
              <div className="border-l-4 border-red-800 pl-6">
                <Smartphone className="h-12 w-12 text-red-800 mb-4" />
                <h3 className="text-xl font-bold mb-3">Design Systems</h3>
                <p className="text-slate-600 leading-relaxed">Created a cohesive style guide that maintains accessibility while preserving visual appeal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Explore More Projects</h2>
          <p className="text-xl text-slate-600 mb-12">
            Check out other projects from my portfolio
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-10 py-6 bg-black hover:bg-red-800 text-white transition-all" asChild>
              <Link href="/projects/muncie-outreach">
                Next Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 border-black hover:bg-black hover:text-white transition-all" asChild>
              <Link href="/projects">
                All Projects
              </Link>
            </Button>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-200 text-slate-600">
            <p>© 2025 Maddie Whitaker · Built from scratch with Next.js & Tailwind CSS</p>
            <p className="text-sm mt-2 text-slate-500">Indianapolis, IN</p>
          </div>
        </div>
      </section>
    </div>
  )
}