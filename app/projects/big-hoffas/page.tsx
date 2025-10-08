"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Users, Target, Palette, Eye, Lightbulb, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BigHoffasPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex h-20 items-center">
            <Link href="/projects">
              <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50">
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
              <Badge className="mb-6 bg-orange-100 text-orange-700 text-sm px-4 py-2">
                Brand Identity • Logo Design
              </Badge>
              
              <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
                Big Hoffa's <span className="text-orange-600">BBQ</span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-slate-600 mb-8">
                Logo Redesign
              </p>
              
              <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                A logo redesign for a pirate-themed barbecue restaurant in Westfield, Indiana. Modernizing the brand identity while maintaining the iconic pirate theme and creating a more versatile logo.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                <div className="border-l-4 border-orange-600 pl-4">
                  <div className="text-sm text-slate-500 mb-1">Duration</div>
                  <div className="text-2xl font-bold">3 Weeks</div>
                </div>
                <div className="border-l-4 border-orange-600 pl-4">
                  <div className="text-sm text-slate-500 mb-1">Team</div>
                  <div className="text-2xl font-bold">Solo</div>
                </div>
                <div className="border-l-4 border-orange-600 pl-4">
                  <div className="text-sm text-slate-500 mb-1">Focus</div>
                  <div className="text-2xl font-bold">Logo Design</div>
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="text-sm uppercase tracking-widest text-slate-500 mb-4 font-semibold">Tools Used</h4>
                <div className="flex flex-wrap gap-3">
                  {["Illustrator", "Photoshop"].map((tool) => (
                    <Badge key={tool} variant="outline" className="border-2 border-slate-300 text-base px-4 py-2 hover:border-orange-600 hover:text-orange-600 transition-colors">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-2xl p-12 flex items-center justify-center border border-slate-200">
              <img
                src="/images/big-hoffas-logo-final.png"
                alt="Big Hoffa's BBQ Final Logo"
                className="w-full h-full object-contain"
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
              The original Big Hoffa's BBQ logo had legibility issues and felt dated. The skull imagery 
              was iconic but the overall design needed to be modernized to appeal to a broader audience while 
              maintaining the restaurant's distinctive pirate theme and playful personality.
            </p>

            <div className="h-px bg-slate-200 my-16" />

            <h2 className="text-4xl md:text-6xl font-black mb-16">The Solution</h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl">
              A refreshed logo that retains the iconic skull element but with cleaner lines, improved 
              typography, and better scalability. The new design is more versatile across different 
              applications while maintaining the bold, memorable character that defines Big Hoffa's brand.
            </p>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-16">Before & After</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-sm font-bold text-slate-500 mb-6 uppercase tracking-widest">Original Logo</p>
                <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-xl p-12 flex items-center justify-center mb-6">
                  <img
                    src="/images/big-hoffas-logo-original.png"
                    alt="Original Big Hoffa's BBQ Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-3">
                  <p className="text-lg text-slate-600">❌ Complex details hard to read at small sizes</p>
                  <p className="text-lg text-slate-600">❌ Typography competing with imagery</p>
                  <p className="text-lg text-slate-600">❌ Limited versatility</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-bold text-orange-600 mb-6 uppercase tracking-widest">Redesigned Logo</p>
                <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-xl p-12 flex items-center justify-center mb-6">
                  <img
                    src="/images/big-hoffas-logo-final.png"
                    alt="Redesigned Big Hoffa's BBQ Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-3">
                  <p className="text-lg text-slate-600">✓ Clean, bold lines for better legibility</p>
                  <p className="text-lg text-slate-600">✓ Balanced typography and imagery</p>
                  <p className="text-lg text-slate-600">✓ Scalable and versatile design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-16">Research & Competitive Analysis</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold mb-6">Understanding the Market</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  I analyzed competitor BBQ restaurants in the area to understand common design trends and identify 
                  opportunities for Big Hoffa's to stand out. Most competitors used oval shapes or traditional BBQ imagery like pigs, making Big Hoffa's pirate theme a unique differentiator worth emphasizing.
                </p>
                
                <p className="text-lg text-slate-600 leading-relaxed">
                  The pirate theme needed to feel modern and approachable rather than intimidating, ensuring the 
                  restaurant still appealed to families while keeping its distinctive character.
                </p>
              </div>

              <div className="aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/big-hoffas-research.jpg"
                  alt="Research and competitive analysis"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sketches */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-16">Sketches & Concept Development</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/big-hoffas-sketches.jpg"
                  alt="Logo sketches and iterations"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-6">Exploring Concepts</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  I began with rough sketches exploring different ways to incorporate the skull and pirate theme 
                  while improving legibility. Key decisions included simplifying the skull design, choosing bold 
                  typography that complemented rather than competed with the icon, and ensuring the logo worked 
                  in both color and black-and-white applications.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Through multiple iterations, I refined the balance between playful personality and professional 
                  appeal, landing on a design that balanced Big Hoffa's unique character with a modern feel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity System */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-16">Brand Identity System</h2>

            {/* Logo Variations */}
            <div className="mb-24">
              <h3 className="text-3xl font-bold mb-6">Logo Variations</h3>
              <p className="text-lg text-slate-600 mb-12 max-w-3xl">
                Multiple logo variations ensure versatility across different applications and sizes.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="aspect-square flex items-center justify-center mb-4">
                    <img
                      src="/images/big-hoffas-logo-primary.png"
                      alt="Primary Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-center font-bold text-lg">Primary Logo</p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="aspect-square flex items-center justify-center mb-4">
                    <img
                      src="/images/big-hoffas-logo-icon.png"
                      alt="Icon Only"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-center font-bold text-lg">Icon Only</p>
                </div>

                <div className="bg-slate-800 rounded-2xl p-8 shadow-xl">
                  <div className="aspect-square flex items-center justify-center mb-4">
                    <img
                      src="/images/big-hoffas-logo-white.png"
                      alt="White Version"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-center font-bold text-lg text-white">Reversed Logo</p>
                </div>
              </div>
            </div>

            {/* Color Palette */}
            <div className="mb-24">
              <h3 className="text-3xl font-bold mb-6">Color Palette</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="aspect-square bg-orange-600 rounded-2xl shadow-xl mb-4"></div>
                  <p className="font-bold text-lg mb-1">BBQ Orange</p>
                  <p className="text-sm text-slate-500">#EA580C</p>
                </div>
                <div>
                  <div className="aspect-square bg-red-700 rounded-2xl shadow-xl mb-4"></div>
                  <p className="font-bold text-lg mb-1">Smoky Red</p>
                  <p className="text-sm text-slate-500">#B91C1C</p>
                </div>
                <div>
                  <div className="aspect-square bg-slate-800 rounded-2xl shadow-xl mb-4"></div>
                  <p className="font-bold text-lg mb-1">Charcoal Black</p>
                  <p className="text-sm text-slate-500">#1E293B</p>
                </div>
                <div>
                  <div className="aspect-square bg-amber-50 border-2 border-slate-300 rounded-2xl shadow-xl mb-4"></div>
                  <p className="font-bold text-lg mb-1">Parchment</p>
                  <p className="text-sm text-slate-500">#FFFBEB</p>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div>
              <h3 className="text-3xl font-bold mb-6">Typography</h3>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="space-y-8">
                  <div className="border-l-4 border-orange-600 pl-6">
                    <p className="text-sm text-slate-500 mb-3 uppercase tracking-widest font-semibold">Logo Typeface</p>
                    <p className="text-4xl font-bold mb-2">Big Hoffa's BBQ</p>
                    <p className="text-slate-600">Poster Cut Neue - Bold, display-friendly font that commands attention</p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-6">
                    <p className="text-sm text-slate-500 mb-3 uppercase tracking-widest font-semibold">Header Typeface</p>
                    <p className="text-3xl font-bold mb-2">SPECIALTY SANDWICHES</p>
                    <p className="text-slate-600">Bebas Neue - Strong, condensed sans-serif for menus and headers</p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-6">
                    <p className="text-sm text-slate-500 mb-3 uppercase tracking-widest font-semibold">Body Typeface</p>
                    <p className="text-2xl mb-2">Pirate-Themed Barbeque & Catering</p>
                    <p className="text-slate-600">Lato - Clean, legible sans-serif for body text and supporting content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-16">Brand Applications</h2>

            <div className="space-y-16">
              {/* Signage */}
              <div>
                <h3 className="text-3xl font-bold mb-8">Restaurant Signage</h3>
                <div className="aspect-[16/9] bg-slate-200 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/big-hoffas-signage.jpg"
                    alt="Restaurant signage mockup"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Menu & Print */}
              <div>
                <h3 className="text-3xl font-bold mb-8">Menu & Print Materials</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="aspect-[3/4] bg-slate-200 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="/images/big-hoffas-menu.jpg"
                      alt="Menu design"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[3/4] bg-slate-200 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="/images/big-hoffas-business-card.jpg"
                      alt="Business card design"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Merchandise */}
              <div>
                <h3 className="text-3xl font-bold mb-8">Merchandise & Apparel</h3>
                <div className="aspect-[16/9] bg-slate-200 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/big-hoffas-merchandise.jpg"
                    alt="T-shirt and merchandise mockups"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Key Takeaways</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-16 max-w-4xl">
              This logo redesign project reinforced the importance of maintaining brand identity while modernizing 
              visual language. By preserving the iconic skull element and refining the overall design, the new 
              logo successfully balances familiarity with freshness.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-l-4 border-orange-600 pl-6">
                <Eye className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Improved Legibility</h3>
                <p className="text-slate-600 leading-relaxed">The simplified design reads instantly whether it's on a tiny business card or a massive storefront sign</p>
              </div>
              <div className="border-l-4 border-orange-600 pl-6">
                <Palette className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Versatile Identity</h3>
                <p className="text-slate-600 leading-relaxed">From menus to merchandise, the logo works everywhere without losing its personality</p>
              </div>
              <div className="border-l-4 border-orange-600 pl-6">
                <Lightbulb className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Brand Evolution</h3>
                <p className="text-slate-600 leading-relaxed">Loyal customers still recognize their favorite BBQ spot, but the updated look attracts new faces too</p>
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
            <Button size="lg" className="text-lg px-10 py-6 bg-black hover:bg-orange-600 text-white transition-all" asChild>
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
        </div>
      </section>
    </div>
  )
}