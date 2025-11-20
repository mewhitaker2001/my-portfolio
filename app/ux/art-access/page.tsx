'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function ArtAccessCaseStudy() {
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
      title: 'QR Code Scanner',
      image: '/images/ux/art-access/flow-3.png',
    },
    {
      title: 'Accessibility Features',
      image: '/images/ux/art-access/flow-4.png',
    },
  ]

  const nextFlow = () => {
    setCurrentFlow((prev) => (prev + 1) % userFlows.length)
  }

  const prevFlow = () => {
    setCurrentFlow((prev) => (prev - 1 + userFlows.length) % userFlows.length)
  }

  return (
    <div className="font-inter">
      {/* Full-Screen Hero - Name is in the image */}
      <section className="relative h-screen flex flex-col">
        <div className="relative h-full w-full">
          <Image
            src="/images/ux/art-access/hero.png"
            alt="Art Access - A museum companion app designed for visitors with Visual Processing Disorders"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-black/40 backdrop-blur-sm shadow-lg">
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 p-8 bg-gray-50 rounded-xl mb-16">
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                My Role
              </p>
              <p className="text-gray-900 font-medium">
                UX/UI Designer
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Tools
              </p>
              <p className="text-gray-900 font-medium">
                Figma, User Research
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Platform
              </p>
              <p className="text-gray-900 font-medium">
                iOS Mobile App
              </p>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-geist">
            The Problem
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Visual Processing Disorders can cause a variety of issues for museum visitors, 
            including difficulty with reading comprehension, shape recognition, and viewing 
            complex images. Labels in museums can be difficult to read because of long 
            paragraphs and small type, while art with complex compositions or busy backgrounds 
            can be hard to view for users with VPD.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            The David Owsley Museum of Art needed a digital solution to make their collection 
            more accessible to all visitors, particularly those with visual processing challenges.
          </p>

          {/* Visual Processing Disorder Definition Box */}
          <div className="p-6 bg-red-50 border-l-4 border-red-800 rounded-r-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              What is Visual Processing Disorder?
            </h3>
            <p className="text-gray-700 italic">
              "A visual processing disorder is not a physical disability of the eye, but a 
              deficit in the brain's ability to identify, organize and process information."
            </p>
            <p className="text-sm text-gray-600 mt-2">
              —The Center for Vision Development
            </p>
          </div>
        </div>
      </section>

      {/* Research & Goals - Side by Side */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 font-geist">
              Research & Discovery
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Left: Target Audience Challenges */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-geist">
                  Target Audience Challenges
                </h3>
                <p className="text-gray-600 mb-6">
                  Understanding the specific difficulties faced by visitors with VPD
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <p className="text-gray-900 font-medium">
                      Issues with reading & writing
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <p className="text-gray-900 font-medium">
                      Identifying and distinguishing shapes
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <p className="text-gray-900 font-medium">
                      Easily distracted by too much visual information
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <p className="text-gray-900 font-medium">
                      Difficulty discriminating between certain letters
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <p className="text-gray-900 font-medium">
                      Affects ability to easily complete tasks with complicated patterns
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Design Goals */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-geist">
                  Design Goals
                </h3>
                <p className="text-gray-600 mb-6">
                  Creating solutions to address these accessibility challenges
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <p className="text-gray-900 font-medium">
                      Adjustable accessibility options
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <p className="text-gray-900 font-medium">
                      Virtual "ruler" to hide extra text and focus on one sentence
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <p className="text-gray-900 font-medium">
                      Audio alternative for reading artwork labels
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <p className="text-gray-900 font-medium">
                      Ability to focus or isolate parts of an image
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <p className="text-gray-900 font-medium">
                      Very minimalistic detail in the background
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Analysis */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 font-geist">
            Competitive Analysis
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-geist">
                Accessibility Spark
              </h3>
              <p className="text-sm text-gray-600 mb-6">Web-based accessibility tool</p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg">+</span>
                  <p className="text-gray-700">Comprehensive accessibility features</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg">+</span>
                  <p className="text-gray-700">Text size and spacing controls</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg">+</span>
                  <p className="text-gray-700">Color and contrast adjustments</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-lg">−</span>
                  <p className="text-gray-700">Web-only, no native mobile app</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-lg">−</span>
                  <p className="text-gray-700">Not designed for museums specifically</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-geist">
                Seeing AI
              </h3>
              <p className="text-sm text-gray-600 mb-6">Microsoft's AI-powered accessibility app</p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg">+</span>
                  <p className="text-gray-700">Vocal cues and scene interpretation</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg">+</span>
                  <p className="text-gray-700">Text recognition and reading</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg">+</span>
                  <p className="text-gray-700">Multi-purpose functionality</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-lg">−</span>
                  <p className="text-gray-700">Generic, not tailored to art viewing</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-lg">−</span>
                  <p className="text-gray-700">No museum-specific features</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-red-50 rounded-xl">
            <h4 className="font-bold text-gray-900 mb-2">
              The Opportunity
            </h4>
            <p className="text-gray-700">
              While existing accessibility tools provide valuable features, there's a clear 
              gap for museum-specific solutions that combine accessibility with art education 
              and curation. Art Access fills this need with features tailored specifically 
              for museum visitors with VPD.
            </p>
          </div>
        </div>
      </section>

      {/* Information Architecture */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 font-geist">
              Information Architecture
            </h2>
            
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-white">
              <Image
                src="/images/ux/art-access/information-architecture.png"
                alt="Information architecture sitemap"
                fill
                className="object-contain"
              />
            </div>

            <p className="text-center text-gray-600 mt-6">
              Comprehensive sitemap showing the app's structure from onboarding through core features
            </p>
          </div>
        </div>
      </section>

      {/* Wireframes */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 font-geist">
            Low-Fi Wireframes
          </h2>
          
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src="/images/ux/art-access/wireframes.png"
              alt="Low-fidelity wireframes"
              fill
              className="object-contain"
            />
          </div>

          <p className="text-center text-gray-600 mt-6">
            Early wireframes exploring the core user flows and accessibility features
          </p>
        </div>
      </section>

      {/* User Flows Carousel */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 font-geist">
              User Flows
            </h2>

            <div className="relative">
              {/* Main Flow Display */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-white">
                <Image
                  src={userFlows[currentFlow].image}
                  alt={userFlows[currentFlow].title}
                  fill
                  className="object-contain transition-opacity duration-300"
                />
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevFlow}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Previous flow"
              >
                <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextFlow}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
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

      {/* Style Guide */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 font-geist">
            Style Guide
          </h2>
          
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src="/images/ux/art-access/style-guide.png"
              alt="Art Access style guide with colors, typography, and components"
              fill
              className="object-contain"
            />
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-3">Typography</h4>
              <p className="text-gray-700 text-sm">
                <strong>Verdana</strong> and <strong>Georgia</strong> were chosen as ADA-compliant fonts with wide 
                letters and generous spacing for optimal readability
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-3">Color Palette</h4>
              <p className="text-gray-700 text-sm">
                Museum-inspired burgundy with high contrast for accessibility
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-3">Design System</h4>
              <p className="text-gray-700 text-sm">
                5-column grid with consistent 20px gutters and minimal visual clutter 
                to reduce cognitive load
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Screens */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-geist">
              Onboarding Experience
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              Introducing users to the app's accessibility features from the start
            </p>

            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-white shadow-lg">
              <Image
                src="/images/ux/art-access/onboarding-screens.png"
                alt="Onboarding screens"
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="p-5 bg-white rounded-lg border border-gray-200">
                <h4 className="font-bold text-red-800 mb-2">Welcome</h4>
                <p className="text-gray-700 text-sm">
                  Introduces Art Access and the David Owsley Museum of Art
                </p>
              </div>
              <div className="p-5 bg-white rounded-lg border border-gray-200">
                <h4 className="font-bold text-red-800 mb-2">Accessibility Features</h4>
                <p className="text-gray-700 text-sm">
                  Highlights zoom, reading ruler, and text customization options
                </p>
              </div>
              <div className="p-5 bg-white rounded-lg border border-gray-200">
                <h4 className="font-bold text-red-800 mb-2">QR Scanner</h4>
                <p className="text-gray-700 text-sm">
                  Shows how to instantly access artwork information by scanning codes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Designs */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 font-geist">
            High-Fidelity Designs
          </h2>

          {/* Top: All Screens - Single Composite Image */}
          <div className="mb-12">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-white shadow-lg">
              <Image
                src="/images/ux/art-access/all-screens.png"
                alt="All high-fidelity app screens"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Bottom: Two Videos Side by Side */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left: Accessibility Features Video */}
            <div>
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-xl bg-gray-900 mb-3">
                <video
                  src="/images/ux/art-access/accessibility-demo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-sm text-gray-600">
                Exploring accessibility features
              </p>
            </div>

            {/* Right: Navigation & Artwork Interaction Video */}
            <div>
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-xl bg-gray-900 mb-3">
                <video
                  src="/images/ux/art-access/artwork-interaction.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-sm text-gray-600">
                Navigating to artwork, using reading ruler and zoom
              </p>
            </div>
          </div>

          {/* Key Feature Callouts */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-geist">
                Accessibility First
              </h3>
              <p className="text-gray-700 mb-4">
                The app puts accessibility controls front and center, with easy-to-find 
                settings for text size, line spacing, and the reading ruler feature.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-800">•</span>
                  <span>Adjustable text size and spacing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-800">•</span>
                  <span>Reading ruler to isolate text</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-800">•</span>
                  <span>Zoom functionality for artwork details</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-geist">
                Seamless Navigation
              </h3>
              <p className="text-gray-700 mb-4">
                Users can explore the museum through multiple entry points: browsing galleries, 
                scanning QR codes, or using the interactive map.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-800">•</span>
                  <span>QR code scanning for instant access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-800">•</span>
                  <span>Gallery browsing with search</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-800">•</span>
                  <span>Interactive museum map</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 font-geist">
            Reflection
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Designing Art Access taught me the importance of researching specific accessibility 
            needs and building solutions that truly address them. By focusing on Visual Processing 
            Disorders, I was able to create targeted features like the reading ruler and zoom 
            functionality that make a real difference for users.
          </p>

          <div className="bg-red-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-geist">
              Key Learnings
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Accessibility requires specificity:</strong> Generic accessibility 
                features aren't enough—understanding the specific challenges of VPD led to 
                more effective design solutions
              </li>
              <li>
                <strong>Less is more:</strong> Minimizing visual clutter and background detail 
                was crucial for reducing cognitive load
              </li>
              <li>
                <strong>Multiple entry points matter:</strong> Offering various ways to access 
                information (QR codes, browse, map) accommodates different user preferences 
                and contexts
              </li>
              <li>
                <strong>Testing is essential:</strong> Future iterations would benefit from 
                usability testing with actual VPD users to refine the features further
              </li>
            </ul>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-xl">
            <h4 className="font-bold text-gray-900 mb-3">Next Steps</h4>
            <p className="text-gray-700 mb-3">
              To further develop Art Access, I would:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-800">1.</span>
                <span>Conduct usability testing with VPD users at the museum</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-800">2.</span>
                <span>Refine the reading ruler interaction based on user feedback</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-800">3.</span>
                <span>Explore additional accessibility features like audio descriptions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-800">4.</span>
                <span>Design for additional platforms (Android, tablet)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Back to Portfolio CTA */}
      <section className="py-16" style={{ backgroundColor: '#8B1E2F' }}>
        <div className="container mx-auto px-6 text-center">
          <Link
            href="/ux"
            className="inline-flex items-center gap-2 text-white text-lg font-medium hover:gap-4 transition-all"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Work
          </Link>
        </div>
      </section>
    </div>
  )
}