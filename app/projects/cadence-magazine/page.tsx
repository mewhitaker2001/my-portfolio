"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Users, Target, BookOpen, Palette, Type, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CadenceMagazinePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex h-20 items-center">
            <Link href="/projects">
              <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50">
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
              <Badge className="mb-6 bg-purple-100 text-purple-700 text-sm px-4 py-2">
                Editorial Design
              </Badge>
              
              <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
                Cadence <span className="text-purple-600">Magazine</span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-slate-600 mb-8">
                100 Years of Influential Women in Music
              </p>
              
              <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                A collaborative magazine design project exploring layout, typography, and print production. 
                Created in partnership with Aubrey Zimmerman, celebrating the groundbreaking women who shaped music history.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="border-l-4 border-purple-600 pl-4">
                  <div className="text-sm text-slate-500 mb-1">Team</div>
                  <div className="text-2xl font-bold">2 Designers</div>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <div className="text-sm text-slate-500 mb-1">Role</div>
                  <div className="text-2xl font-bold">Designer</div>
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="text-sm uppercase tracking-widest text-slate-500 mb-4 font-semibold">Tools Used</h4>
                <div className="flex flex-wrap gap-3">
                  {["InDesign", "Photoshop", "Illustrator"].map((tool) => (
                    <Badge key={tool} variant="outline" className="border-2 border-slate-300 text-base px-4 py-2 hover:border-purple-600 hover:text-purple-600 transition-colors">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="aspect-[3/4] bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/cadence-magazine-cover.jpg"
                alt="Cadence Magazine Cover"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-16">The Challenge</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-4xl">
              Design and produce a full magazine from concept to print, working with layout design and typography systems. Collaborate with another designer to create a cohesive visual identity.
            </p>

            <div className="h-px bg-slate-200 my-16" />

            <h2 className="text-4xl md:text-6xl font-black mb-16">The Solution</h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl">
             A celebration of 100 years of women in music, featuring layouts that evolved throughout the magazine.
             Bold decade openers, genre features, and artist spotlights were unified through a cohesive color palette and typography system.
            </p>
          </div>
        </div>
      </section>

{/* Research Section */}
{(() => {
  const genres = [
    "Jazz", "Blues", "Hillbilly", "Classical", "Gospel", "Tin Pan Alley", "Big Band", "Swing", "R&B", "Bebop",
    "Rock & Roll", "Country", "Folk", "Pop", "Soul", "Disco", "Funk", "Pop", "Disco", "Funk",
    "Hip-Hop", "New Wave", "Riot Grrrl", "Alt Rock", "Rap Indie", "Sapphic Pop", "Alt Pop", "Experimental",
  ];
  return (
    <div className="w-full max-w-6xl mx-auto bg-gradient-to-br from-purple-50 to-pink-50 p-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Research & Content Strategy
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Extensive research into 100 years of women's contributions to music across genres, eras, and cultures
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <div className="text-6xl font-black text-purple-600 mb-3">50+</div>
          <div className="text-gray-700 text-lg font-semibold">Women Featured</div>
          <div className="text-gray-500 text-sm mt-2">Icons & pioneers across generations</div>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <div className="text-6xl font-black text-pink-600 mb-3">20+</div>
          <div className="text-gray-700 text-lg font-semibold">Music Genres</div>
          <div className="text-gray-500 text-sm mt-2">From classical to contemporary</div>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <div className="text-6xl font-black text-indigo-600 mb-3">100</div>
          <div className="text-gray-700 text-lg font-semibold">Years of History</div>
          <div className="text-gray-500 text-sm mt-2">1920s to present day</div>
        </div>
      </div>

      {/* Genre Cloud */}
      <div className="bg-white rounded-2xl p-10 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Genres Explored</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {genres.map((genre, index) => (
            <span 
              key={index}
              className="px-5 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-semibold border border-purple-200"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>

      {/* Key Research Areas */}
      <div className="grid md:grid-cols-2 gap-6 mt-12">
        <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Historical Impact</h3>
          <p className="text-purple-100">
            Identified key figures, pivotal moments, and cultural shifts that shaped the musical landscape
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-pink-600 to-pink-700 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Cultural Significance</h3>
          <p className="text-pink-100">
            Honored both well-known icons and overlooked pioneers who transformed music history
          </p>
        </div>
      </div>
    </div>
  );
})()}

      {/* Typography & Layout */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-16">Typography & Layout Systems</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/cadence-typography.jpg"
                  alt="Typography and Layout Design System"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h3 className="text-3xl font-bold mb-6">Systematic Design Approach</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  We built typography and layout systems that needed to work across different content types including
                  big photo spreads, dense text articles, and bold decade openers. The tricky part was making sure everything
                  still felt like part of the same magazine even when designing different sections independently.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-black text-white text-sm px-4 py-2">Grid Systems</Badge>
                  <Badge className="bg-black text-white text-sm px-4 py-2">Typography Hierarchy</Badge>
                  <Badge className="bg-black text-white text-sm px-4 py-2">Color Theory</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-16">Collaborative Design Process</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-l-4 border-purple-600 pl-6">
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Design Partnership</h3>
                <p className="text-slate-600 leading-relaxed">
                  Worked with Aubrey Zimmerman to divide responsibilities, figure out a shared visual system, 
                  and play to each designer's strengths.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <Palette className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Style Consistency</h3>
                <p className="text-slate-600 leading-relaxed">
                  Created shared style guides and design systems early on to allow us to work independently. Regular check-ins ensured we stayed aligned.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <BookOpen className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Print Production</h3>
                <p className="text-slate-600 leading-relaxed">
                  Researched and experimented with print specifications to ensure our designs translated well to physical form.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Spreads */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-16">Featured Spreads</h2>
            
            {/* Decade Overview Spreads */}
            <div className="mb-24">
              <h3 className="text-3xl font-bold mb-6">Decade Overview Spreads</h3>
              <p className="text-lg text-slate-600 mb-12 max-w-3xl">
                Large-scale decade openers featuring bold typography and historical context to introduce each era of music history.
              </p>
              
              <div className="space-y-12">
                <div>
                  <p className="text-sm font-bold text-purple-600 mb-4 uppercase tracking-widest">Early Era: 1920s-1960s</p>
                  <div className="aspect-[3/2] bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="/images/cadence-decade-early.jpg"
                      alt="Early decade spread from 1920s-1940s era"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-bold text-purple-600 mb-4 uppercase tracking-widest">Modern Era: 1970s-2020s</p>
                  <div className="aspect-[3/2] bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="/images/cadence-decade-modern.jpg"
                      alt="Modern decade spread from 2000s-2020s era"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Genre & Artist Feature Spreads */}
            <div>
              <h3 className="text-3xl font-bold mb-6">Genre & Artist Feature Spreads</h3>
              <p className="text-lg text-slate-600 mb-12 max-w-3xl">
                Integrated layouts exploring specific music genres alongside the pioneering women who defined them—from Jazz and Blues to Hip-Hop and Indie.
              </p>
              
              <div className="space-y-12">
                <div>
                  <p className="text-sm font-bold text-purple-600 mb-4 uppercase tracking-widest">Classic Genres</p>
                  <div className="aspect-[3/2] bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="/images/cadence-genre-classic.jpg"
                      alt="Classic genre spreads featuring Bebop & Jazz"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-bold text-purple-600 mb-4 uppercase tracking-widest">Contemporary Genres</p>
                  <div className="aspect-[3/2] bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="/images/cadence-genre-contemporary.jpg"
                      alt="Contemporary genre spreads featuring Hip-Hop, Pop, or Indie"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Key Takeaways</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-16 max-w-4xl">
              This project was a lesson in working collaboratively with another designer to create a cohesive
              final product, and how to prepare files for print production instead of focusing solely on digital design.
              It strengthened my knowledge of technical skills while also being an exercise in working closely with another designer.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-l-4 border-purple-600 pl-6">
                <Type className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Editorial Design Skills</h3>
                <p className="text-slate-600 leading-relaxed">Typography systems, grid structures, and layout principles across different content types</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-6">
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Collaboration</h3>
                <p className="text-slate-600 leading-relaxed">Learned how to divide work, stay aligned, and give/take feedback effectively</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-6">
                <BookOpen className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Print Production</h3>
                <p className="text-slate-600 leading-relaxed">Gained knowledge of print production processes and preparing files for print</p>
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
            <Button size="lg" className="text-lg px-10 py-6 bg-black hover:bg-purple-600 text-white transition-all" asChild>
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