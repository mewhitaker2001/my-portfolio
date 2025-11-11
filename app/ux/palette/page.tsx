'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function PaletteCaseStudy() {
  const [currentFlow, setCurrentFlow] = useState(0)
  
  const userFlows = [
    {
      title: 'Onboarding Flow',
      image: '/images/ux/palette/flow-1.png',
    },
    {
      title: 'Creating a Habit',
      image: '/images/ux/palette/flow-2.png',
    },
    {
      title: 'Daily Check-in',
      image: '/images/ux/palette/flow-3.png',
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
      {/* Full-Screen Hero */}
      <section className="relative h-screen flex flex-col">
        {/* Text Content - Top Third */}
        <div className="container mx-auto px-6 pt-32 pb-12">
          <div className="flex items-start justify-between gap-12 mb-8">
            {/* Left: Project Name */}
            <h1 className="text-7xl md:text-8xl font-bold text-gray-900 font-geist">
              Palette
            </h1>
            
            {/* Right: Description */}
            <p className="text-xl text-gray-700 max-w-xl pt-4">
              A habit tracking app for creative people that celebrates progress over perfection
            </p>
          </div>
          
          {/* Divider Line */}
          <div className="h-px bg-gray-300"></div>
        </div>

        {/* Hero Image - Bottom Two-Thirds - FULL WIDTH */}
        <div className="flex-1 relative w-full px-0 pb-0">
          <div className="relative h-full overflow-hidden">
            <Image
              src="/images/ux/palette/hero.png"
              alt="Palette app showcase"
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
                Lead UX/UI Designer
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Tools
              </p>
              <p className="text-gray-900 font-medium">
                Figma, FigJam, User Research
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
            Creative professionals struggle to maintain consistent practice habits. 
            Existing habit tracking apps use rigid daily streaks that cause guilt when 
            missed, and they don't provide the creative inspiration that artists need 
            to stay motivated.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            When creatives break a streak, they often abandon the app entirely—turning 
            a tool meant to help them into another source of stress.
          </p>
        </div>
      </section>

      {/* Research & Competitive Analysis - Side by Side */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 font-geist">
              Research & Discovery
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Left: Key Problems */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-geist">
                  Top 5 Problems Discovered
                </h3>
                <p className="text-gray-600 mb-6">
                  From analyzing Reddit threads, 40+ app reviews, and testing competitor apps
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Rigid streaks cause guilt
                    </h4>
                    <p className="text-gray-600 text-sm italic">
                      "I'm worried I'm ingraining bad habits"
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Lack of creative direction
                    </h4>
                    <p className="text-gray-600 text-sm italic">
                      "I don't know what I should be doing during that time"
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Bad UX feels like work
                    </h4>
                    <p className="text-gray-600 text-sm italic">
                      "It's clunky and awkward to use"
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Creative work isn't daily
                    </h4>
                    <p className="text-gray-600 text-sm italic">
                      "My passion fizzles if I try to do it multiple days in a row"
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Apps feel clinical
                    </h4>
                    <p className="text-gray-600 text-sm italic">
                      "Tries too hard to be unique and falls flat"
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Competitive Analysis */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-geist">
                  Competitive Analysis
                </h3>
                <p className="text-gray-600 mb-6">
                  Identifying gaps in existing solutions
                </p>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">Streaks</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">−</span>
                        <p className="text-gray-600 text-sm">Clunky, unintuitive navigation</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">−</span>
                        <p className="text-gray-600 text-sm">Can't customize mid-streak</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">−</span>
                        <p className="text-gray-600 text-sm">Limited to 24 habits</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">+</span>
                        <p className="text-gray-600 text-sm">Clean, simple design</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">Habitica</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">−</span>
                        <p className="text-gray-600 text-sm">Confusing game mechanics</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">−</span>
                        <p className="text-gray-600 text-sm">Features behind paywall</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">−</span>
                        <p className="text-gray-600 text-sm">No clear visual progress</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">+</span>
                        <p className="text-gray-600 text-sm">Flexible categories</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Persona */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 font-geist">
            User Persona
          </h2>
          
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
            <Image
              src="/images/ux/palette/persona.png"
              alt="User persona - Eliza"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Design Goals */}
      <section className="bg-purple-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 font-geist">
              Design Goals
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Focus on Encouragement
                </h3>
                <p className="text-gray-600">
                  Flexible streaks and celebrating "good enough" over rigid daily requirements
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Inspire, Don't Just Track
                </h3>
                <p className="text-gray-600">
                  Daily creative prompts and suggestions when users don't know what to practice
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Make Tracking Fun
                </h3>
                <p className="text-gray-600">
                  One-tap check-ins with micro-celebrations and an appealing interface
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Honor Creative Rhythms
                </h3>
                <p className="text-gray-600">
                  Custom frequencies and rest days—progress over perfection
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl md:col-span-2">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  5
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Show Visual Progress
                </h3>
                <p className="text-gray-600">
                  Calendar heatmaps, streak visualizations, and milestone celebrations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wireframes */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 font-geist">
            Wireframes
          </h2>
          
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src="/images/ux/palette/wireframes.png"
              alt="Low-fidelity wireframes"
              fill
              className="object-contain"
            />
          </div>
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
                        ? 'bg-purple-600 w-8' 
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
              src="/images/ux/palette/style-guide.png"
              alt="Palette style guide with colors, typography, and components"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Final Designs - Image + Videos */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 font-geist">
              Final Designs
            </h2>

            {/* Top: Extra Screens - Single Composite Image */}
            <div className="mb-12">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-white shadow-lg">
                <Image
                  src="/images/ux/palette/extra-screens.png"
                  alt="Additional app screens"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Bottom: Two Videos Side by Side */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: Longer Walkthrough Video */}
              <div>
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-xl bg-gray-900 mb-3">
                  <video
                    src="/images/ux/palette/walkthrough.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-sm text-gray-600">
                  Adding and completing a habit
                </p>
              </div>

              {/* Right: Short Celebration Video */}
              <div>
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-xl bg-gray-900 mb-3">
                  <video
                    src="/images/ux/palette/celebration.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-sm text-gray-600">
                  Celebration and photo upload
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
            Palette demonstrates how deeply understanding your users leads to more 
            thoughtful design decisions. By prioritizing flexibility and encouragement 
            over rigid structure, the app creates a more sustainable approach to habit 
            formation for creative professionals.
          </p>

          <div className="bg-purple-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-geist">
              Key Learnings
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Design for reality:</strong> Flexible systems create better long-term 
                engagement than rigid gamification
              </li>
              <li>
                <strong>Language matters:</strong> Small copy changes like "pause" vs "break" 
                significantly impact user experience
              </li>
              <li>
                <strong>Research is invaluable:</strong> Direct user quotes guided every 
                major design decision
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Back to Portfolio CTA */}
      <section className="bg-purple-600 py-16">
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