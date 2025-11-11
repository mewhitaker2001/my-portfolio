'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function IndyFoodLinksCaseStudy() {
  const [currentScreen, setCurrentScreen] = useState(0)
  
  const keyScreens = [
    {
      title: 'Homepage',
      image: '/images/ux/indy-food-links/homepage.png',
    },
    {
      title: 'Programs Overview',
      image: '/images/ux/indy-food-links/programs.png',
    },
    {
      title: 'Resource Map',
      image: '/images/ux/indy-food-links/map.png',
    },
    {
      title: 'Donation Flow',
      image: '/images/ux/indy-food-links/donation.png',
    },
  ]

  const nextScreen = () => {
    setCurrentScreen((prev) => (prev + 1) % keyScreens.length)
  }

  const prevScreen = () => {
    setCurrentScreen((prev) => (prev - 1 + keyScreens.length) % keyScreens.length)
  }

  return (
    <div className="font-inter">
      {/* Full-Screen Hero */}
      <section className="relative h-screen flex flex-col">
        {/* Text Content - Top Third */}
        <div className="container mx-auto px-6 pt-32 pb-12">
          <div className="flex items-start justify-between gap-12 mb-8">
            {/* Left: Project Name */}
            <h1 className="text-7xl md:text-8xl font-bold text-gray-900 font-geist">
              Indy Food Links
            </h1>
            
            {/* Right: Description */}
            <p className="text-xl text-gray-700 max-w-xl pt-4">
              A nonprofit website connecting Indianapolis families with fresh, healthy food resources
            </p>
          </div>
          
          {/* Divider Line */}
          <div className="h-px bg-gray-300"></div>
        </div>

        {/* Hero Image - Bottom Two-Thirds - FULL WIDTH */}
        <div className="flex-1 relative w-full px-0 pb-0">
          <div className="relative h-full overflow-hidden">
            <Image
              src="/images/ux/indy-food-links/hero.png"
              alt="Indy Food Links website showcase"
              fill
              className="object-cover"
              priority
            />
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
                Brand & Web Designer
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Tools
              </p>
              <p className="text-gray-900 font-medium">
                Figma, Adobe Illustrator
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Platform
              </p>
              <p className="text-gray-900 font-medium">
                Responsive Website
              </p>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-geist">
            The Problem
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Marion County families facing food insecurity need a centralized resource 
            to find fresh food programs, but existing solutions are fragmented across 
            multiple websites and lack clear, accessible information about eligibility, 
            locations, and services.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            The challenge was to create both a cohesive brand identity and an intuitive 
            digital platform that connects families with the resources they need while 
            making it easy for community partners to get involved.
          </p>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="bg-orange-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-geist">
              The Solution
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              A comprehensive nonprofit website featuring an interactive resource map, 
              program information, partner directory, and streamlined donation flow. 
              The design system uses warm, approachable colors and clear visual 
              hierarchy to make finding help feel welcoming rather than overwhelming.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-orange-200">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  🗺️ Resource Map
                </h3>
                <p className="text-gray-600">
                  Interactive map showing food pantries, SNAP locations, and partner organizations
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-orange-200">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  📋 Program Pages
                </h3>
                <p className="text-gray-600">
                  Clear information about Fresh Links, SNAP Calculator, Family Links, and Smart Bites
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-orange-200">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  💚 Multi-Step Donation
                </h3>
                <p className="text-gray-600">
                  Simplified giving process with custom amounts and recurring options
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-orange-200">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  🤝 Partner Directory
                </h3>
                <p className="text-gray-600">
                  Showcasing nonprofit and corporate partnerships with clear CTAs to get involved
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 font-geist">
            Brand Identity
          </h2>
          
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50">
            <Image
              src="/images/ux/indy-food-links/brand-identity.png"
              alt="Indy Food Links brand identity with logo and colors"
              fill
              className="object-contain"
            />
          </div>

          <p className="text-gray-600 mt-8 text-center max-w-2xl mx-auto">
            The visual identity uses a colorful grid logo representing diverse communities 
            coming together, paired with warm earth tones that feel approachable and optimistic 
            rather than institutional.
          </p>
        </div>
      </section>

      {/* Information Architecture */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 font-geist">
              Information Architecture
            </h2>
            
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-white">
              <Image
                src="/images/ux/indy-food-links/sitemap.png"
                alt="Website sitemap showing page hierarchy"
                fill
                className="object-contain"
              />
            </div>

            <p className="text-gray-600 mt-8 text-center max-w-2xl mx-auto">
              The site structure prioritizes three primary user paths: getting help, 
              learning about programs, and getting involved through donations or partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Key Screens Carousel */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 font-geist">
            Key Screens
          </h2>

          <div className="relative">
            {/* Main Screen Display */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 shadow-xl">
              <Image
                src={keyScreens[currentScreen].image}
                alt={keyScreens[currentScreen].title}
                fill
                className="object-contain transition-opacity duration-300"
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevScreen}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous screen"
            >
              <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextScreen}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next screen"
            >
              <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {keyScreens.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentScreen(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentScreen 
                      ? 'bg-orange-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to screen ${index + 1}`}
                />
              ))}
            </div>

            {/* Screen Title */}
            <p className="text-center text-lg font-medium text-gray-900 mt-4">
              {keyScreens[currentScreen].title}
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Features - Videos */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 font-geist">
              Interactive Features
            </h2>

            {/* Two Videos Side by Side */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Resource Map Video */}
              <div>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-gray-900 mb-3">
                  <video
                    src="/images/ux/indy-food-links/map-demo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-sm text-gray-600">
                  Interactive resource map with location filtering
                </p>
              </div>

              {/* Fresh Links Video */}
              <div>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-gray-900 mb-3">
                  <video
                    src="/images/ux/indy-food-links/fresh-links-demo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-sm text-gray-600">
                  Fresh Links program page with expandable FAQs
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              These prototypes demonstrate key interactive elements including map navigation, 
              location filtering, and content organization through accordions and expandable sections.
            </p>
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 font-geist">
            Design System
          </h2>
          
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src="/images/ux/indy-food-links/design-system.png"
              alt="Design system showing colors, typography, and components"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Mobile Responsive - Only if you have mobile designs */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 font-geist">
            Mobile Experience
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/ux/indy-food-links/mobile-home.png"
                alt="Mobile homepage"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/ux/indy-food-links/mobile-programs.png"
                alt="Mobile programs page"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/ux/indy-food-links/mobile-donation.png"
                alt="Mobile donation flow"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p className="text-gray-600 mt-8 text-center">
            The mobile experience prioritizes thumb-friendly navigation, large tap targets, 
            and a simplified menu structure for accessing resources on the go.
          </p>
        </div>
      </section>

      {/* Design Decisions */}
      <section className="bg-orange-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 font-geist">
              Key Design Decisions
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-geist">
                  Color Psychology
                </h3>
                <p className="text-gray-700">
                  Warm oranges and yellows create an inviting, optimistic feeling, while 
                  the teal adds trust. This avoids the clinical blues often used by social 
                  services, making the experience feel more personal and less institutional.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-geist">
                  Visual Hierarchy
                </h3>
                <p className="text-gray-700">
                  Clear CTAs in contrasting colors guide users to primary actions 
                  (Get Help, Donate, Volunteer). Large hero sections with real photography 
                  create emotional connection before introducing program details.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-geist">
                  Accessibility First
                </h3>
                <p className="text-gray-700">
                  All color combinations meet WCAG AA standards for contrast. Form fields 
                  are clearly labeled, and the multi-step donation process shows progress 
                  to reduce cognitive load.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-geist">
                  Content Strategy
                </h3>
                <p className="text-gray-700">
                  Copy focuses on empowerment rather than charity. Headlines emphasize 
                  community and partnership, and program descriptions lead with benefits 
                  rather than requirements.
                </p>
              </div>
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
            Indy Food Links demonstrates how thoughtful branding and web design can make 
            social services feel more approachable. By creating both the visual identity 
            and digital experience, I was able to ensure consistency across every touchpoint 
            and craft a holistic user experience.
          </p>

          <div className="bg-orange-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-geist">
              Key Learnings
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Design for dignity:</strong> Language and visual choices can either 
                empower or stigmatize users seeking help
              </li>
              <li>
                <strong>Information architecture matters:</strong> Clear navigation reduces 
                friction for users who may be accessing the site during stressful times
              </li>
              <li>
                <strong>Systems thinking:</strong> Creating a flexible design system enabled 
                consistency across 9 unique pages
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Back to Portfolio CTA */}
      <section className="bg-orange-600 py-16">
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