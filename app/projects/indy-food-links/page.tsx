"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Users, Target, ArrowRight, X } from "lucide-react"
import Link from "next/link"

export default function IndyFoodLinksPage() {
  const [selectedLogo, setSelectedLogo] = useState<string | null>(null)

  const logoVariations = [
    {
      name: "Logomark",
      src: "/images/indy-food-links-logomark.png",
      alt: "Indy Food Links Logomark"
    },
    {
      name: "Horizontal Logo", 
      src: "/images/indy-food-links-horizontal.png",
      alt: "Indy Food Links Horizontal Logo"
    },
    {
      name: "Reversed Logo",
      src: "/images/indy-food-links-reversed.png", 
      alt: "Indy Food Links Reversed Logo",
      darkBg: true
    },
    {
      name: "Stacked Logo",
      src: "/images/indy-food-links-stacked.png",
      alt: "Indy Food Links Stacked Logo"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex h-20 items-center">
            <Link href="/projects">
              <Button variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700 hover:bg-teal-50">
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
              <Badge className="mb-6 bg-teal-100 text-teal-700 text-sm px-4 py-2">
                Senior Design Campaign
              </Badge>
              
              <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
                Indy Food <span className="text-teal-600">Links</span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-slate-600 mb-8">
                Connecting Communities to Food Resources
              </p>
              
              <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                A comprehensive two-semester capstone project creating an innovative community organization 
                to address food access challenges in Marion County, Indiana.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                <div className="border-l-4 border-teal-600 pl-4">
                  <div className="text-sm text-slate-500 mb-1">Duration</div>
                  <div className="text-lg md:text-2xl font-bold leading-tight">2 Semesters</div>
                </div>
                <div className="border-l-4 border-teal-600 pl-4">
                  <div className="text-sm text-slate-500 mb-1">Team</div>
                  <div className="text-2xl font-bold">Solo</div>
                </div>
                <div className="border-l-4 border-teal-600 pl-4">
                  <div className="text-sm text-slate-500 mb-1">Focus</div>
                  <div className="text-2xl font-bold">Social Impact</div>
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="text-sm uppercase tracking-widest text-slate-500 mb-4 font-semibold">Tools Used</h4>
                <div className="flex flex-wrap gap-3">
                  {["Figma", "Illustrator", "InDesign", "Whimsical"].map((tool) => (
                    <Badge key={tool} variant="outline" className="border-2 border-slate-300 text-base px-4 py-2 hover:border-teal-600 hover:text-teal-600 transition-colors">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="aspect-[4/3] bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/indy-food-links-hero.jpg"
                alt="Indy Food Links Campaign Overview"
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
              Marion County faces significant obstacles in food access, including transportation barriers, 
              communication gaps, limited accessibility, and inadequate support systems for families 
              experiencing food insecurity.
            </p>

            <div className="h-px bg-slate-200 my-16" />

            <h2 className="text-4xl md:text-6xl font-black mb-16">The Solution</h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl">
              Indy Food Links: a community organization designed to foster connections, distribute resources, 
              and assist families through comprehensive support systems that address root causes of 
              food insecurity.
            </p>
          </div>
        </div>
      </section>

      {/* Research & Problem Analysis */}
      <section className="py-24 bg-gradient-to-br from-teal-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-16">Research & Problem Analysis</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold mb-6">Problem Statement</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Many low-income families living in food deserts encounter numerous barriers that make it challenging to 
                  access essential resources when food becomes scarce. The solution needs to address issues 
                  with <span className="font-bold text-slate-800">transportation</span>, <span className="font-bold text-slate-800">accessibility</span>, 
                  <span className="font-bold text-slate-800"> communication</span>, and access to <span className="font-bold text-slate-800">support systems</span>.
                </p>
                
                <div className="bg-white p-6 rounded-2xl shadow-xl border-l-4 border-teal-600">
                  <blockquote className="text-slate-700 text-lg italic leading-relaxed">
                    "Food insecurity means lacking consistent access to enough nutritious food for a healthy life."
                  </blockquote>
                  <cite className="text-sm text-teal-600 mt-3 block">Indiana University research on food insecurity</cite>
                </div>
              </div>

              <div className="space-y-6">
                <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
                  <div className="text-5xl font-black text-teal-600 mb-2">135,660</div>
                  <div className="text-slate-600 font-medium">Food insecure people in Marion County</div>
                </div>
                
                <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
                  <div className="text-5xl font-black text-teal-600 mb-2">$96.8M</div>
                  <div className="text-slate-600 font-medium">Annual food budget shortfall</div>
                </div>
                
                <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
                  <div className="text-5xl font-black text-teal-600 mb-2">11 of 83</div>
                  <div className="text-slate-600 font-medium text-sm">Grocery stores sold fresh vegetables in NE Indianapolis</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/indy-research.jpg"
                  alt="Community Research and Data Analysis"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-6">Food Desert Mapping</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Using data from SAVI's Food Deserts in Indiana research, I created this visual map to illustrate areas of Marion County where residents face significant barriers to accessing fresh, nutritious food. The map helped identify key challenges and informed the design strategy for Indy Food Links.
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <Badge className="bg-black text-white text-sm px-4 py-2">Data Visualization</Badge>
                  <Badge className="bg-black text-white text-sm px-4 py-2">Community Analysis</Badge>
                  <Badge className="bg-black text-white text-sm px-4 py-2">Geographic Research</Badge>
                </div>
                <p className="text-sm text-slate-500 italic">Source: SAVI, Food Deserts in Indiana</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity System */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-16">Brand Identity System</h2>

            {/* Logo Identity */}
            <div className="mb-24">
              <h3 className="text-3xl font-bold mb-8">Logo Identity</h3>
              
              <div className="bg-white border-2 border-teal-200 rounded-2xl p-12 mb-8 shadow-xl">
                <div className="aspect-[4/3] flex items-center justify-center">
                  <img
                    src="/images/indy-food-links-logo-main.png"
                    alt="Indy Food Links Primary Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {logoVariations.map((logo) => (
                  <div 
                    key={logo.name}
                    className="bg-white border-2 border-slate-200 rounded-2xl p-6 text-center cursor-pointer hover:border-teal-600 transition-colors shadow-lg"
                    onClick={() => setSelectedLogo(logo.src)}
                  >
                    <div className={`aspect-square rounded-lg mb-4 flex items-center justify-center ${
                      logo.darkBg ? 'bg-slate-800' : 'bg-white'
                    }`}>
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                    <p className="font-bold text-sm">{logo.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal */}
            {selectedLogo && (
              <div 
                className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedLogo(null)}
              >
                <div className={`relative max-w-4xl rounded-2xl p-12 ${
                  selectedLogo.includes('reversed') ? 'bg-slate-800' : 'bg-white'
                }`}>
                  <button
                    onClick={() => setSelectedLogo(null)}
                    className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                  <img
                    src={selectedLogo}
                    alt="Enlarged logo"
                    className="max-w-full max-h-[80vh] object-contain"
                  />
                </div>
              </div>
            )}

            {/* Color Palette */}
            <div className="mb-24">
              <h3 className="text-3xl font-bold mb-8">Color Palette</h3>
              
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6">
                <div>
                  <div className="aspect-square bg-[#496B32] rounded-xl shadow-lg mb-3"></div>
                  <p className="font-bold text-sm mb-1">Basil</p>
                  <p className="text-xs text-slate-500">#496B32</p>
                </div>
                <div>
                  <div className="aspect-square bg-[#F0BE1B] rounded-xl shadow-lg mb-3"></div>
                  <p className="font-bold text-sm mb-1">Sunburst</p>
                  <p className="text-xs text-slate-500">#F0BE1B</p>
                </div>
                <div>
                  <div className="aspect-square bg-[#B82638] rounded-xl shadow-lg mb-3"></div>
                  <p className="font-bold text-sm mb-1">Cranberry</p>
                  <p className="text-xs text-slate-500">#B82638</p>
                </div>
                <div>
                  <div className="aspect-square bg-[#0D6BBA] rounded-xl shadow-lg mb-3"></div>
                  <p className="font-bold text-sm mb-1">Indy Sky</p>
                  <p className="text-xs text-slate-500">#0D6BBA</p>
                </div>
                <div>
                  <div className="aspect-square bg-[#5F0F40] rounded-xl shadow-lg mb-3"></div>
                  <p className="font-bold text-sm mb-1">Mulberry</p>
                  <p className="text-xs text-slate-5000">#5F0F40</p>
                </div>
                <div>
                  <div className="aspect-square bg-[#F7931E] rounded-xl shadow-lg mb-3"></div>
                  <p className="font-bold text-sm mb-1">Marigold</p>
                  <p className="text-xs text-slate-500">#F7931E</p>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed max-w-4xl">
                The rainbow palette reflects the diverse communities we're designing for and mirrors what a healthy, varied meal looks like.
                 I used these colors throughout to keep the brand feeling vibrant and inclusive.
              </p>
            </div>

            {/* Typography */}
            <div>
              <h3 className="text-3xl font-bold mb-8">Typography</h3>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-slate-200">
                <div className="space-y-8">
                  <div className="border-l-4 border-teal-600 pl-6">
                    <p className="text-sm text-slate-500 mb-3 uppercase tracking-widest font-semibold">Primary Typeface</p>
                    <p className="text-5xl font-bold mb-2">Manrope</p>
                    <p className="text-slate-600">Modern, approachable, readable - Perfect for headlines and emphasis</p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-6">
                    <p className="text-sm text-slate-500 mb-3 uppercase tracking-widest font-semibold">Secondary Typeface</p>
                    <p className="text-3xl mb-2">Nunito Sans</p>
                    <p className="text-slate-600">Warm, friendly, highly legible - Ideal for body text and descriptions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* UX Prototype */}
<section className="py-24 bg-slate-50">
  <div className="container mx-auto px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-black mb-8">User Experience Concept</h2>
      <p className="text-xl text-slate-600 mb-12 max-w-4xl leading-relaxed">
        Interactive prototype demonstrating key user flows for connecting families with local food resources 
        and support systems.
      </p>

      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
        <div className="p-6 bg-slate-50 border-b border-slate-200 flex justify-between items-center flex-wrap gap-4">
          <div>
            <h4 className="font-bold text-lg">Interactive Prototype</h4>
            <p className="text-sm text-slate-600 mt-1">Click and navigate to explore the user experience</p>
          </div>
          <Button asChild className="bg-teal-600 hover:bg-teal-700">
            <a href="https://www.figma.com/proto/dvBXZps9Y66kL3TtggzPT6/Indy-Food-Links-Website?node-id=1-5&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A5" target="_blank" rel="noopener noreferrer">
              Open in Figma
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
        <div className="aspect-[16/10]">
          <iframe 
            style={{border: 'none'}} 
            width="100%" 
            height="100%" 
            src="https://embed.figma.com/proto/dvBXZps9Y66kL3TtggzPT6/Indy-Food-Links-Website?node-id=1-5&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A5&embed-host=share"
            allowFullScreen
            title="Indy Food Links Prototype"
          ></iframe>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Events & Programs", desc: "Homepage showcasing upcoming events and community programs to connect families with resources" },
          { title: "Fresh Links Program", desc: "Dedicated page highlighting the Fresh Links initiative connecting residents to fresh food sources" },
          { title: "Support & Resources", desc: "Contact page, partner directory, about section, publications, and donation options for community members" }
        ].map((feature) => (
          <div key={feature.title} className="border-l-4 border-teal-600 pl-6 bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-slate-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* Wireframes & User Flow */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Wireframing & User Flow</h2>
            <p className="text-xl text-slate-600 mb-16 max-w-4xl leading-relaxed">
              Before jumping into high-fidelity design, I mapped out the site structure and user flows to ensure 
              intuitive navigation between resources, events, and support options. These wireframes helped me think 
              through the information architecture and plan how users would move through the site.
            </p>

            <div className="aspect-[16/9] bg-slate-100 rounded-2xl overflow-hidden shadow-xl border-2 border-slate-200">
              <img
                src="/images/indy-wireframes.jpg"
                alt="Indy Food Links wireframes showing homepage, map, donation flow, and contact pages"
                className="w-full h-full object-contain p-8"
              />
            </div>

            <p className="text-sm text-slate-500 italic text-center mt-4">
             Some of the low-fidelity wireframes exploring site structure, navigation patterns, and content hierarchy
            </p>
          </div>
        </div>
      </section>

      {/* Campaign Materials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-16">Campaign Materials</h2>

            <div className="space-y-16">
              <div>
                <h3 className="text-3xl font-bold mb-8">Digital Campaign Assets</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="aspect-[4/3] bg-gradient-to-br from-blue-400 to-teal-500 rounded-2xl overflow-hidden shadow-xl">
                    <img src="/images/indy-digital-campaign.jpg" alt="Digital Campaign" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[4/3] bg-gradient-to-br from-teal-400 to-green-500 rounded-2xl overflow-hidden shadow-xl">
                    <img src="/images/indy-social-media.jpg" alt="Social Media" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-8">Print & Environmental Design</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="aspect-[4/3] bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl overflow-hidden shadow-xl">
                    <img src="/images/indy-print-materials.jpg" alt="Print Materials" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[4/3] bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl overflow-hidden shadow-xl">
                    <img src="/images/indy-environmental.jpg" alt="Environmental Design" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-24 bg-gradient-to-br from-teal-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Key Takeaways</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-16 max-w-4xl">
              This two-semester capstone pushed me to think beyond making things that look good. I dedicated time to understanding a real community problem, 
              researching solutions, and designing something that could actually help people. It taught me how design can be a tool for change 
              when you take the time to really understand who you're designing for.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Designing with Purpose", desc: "Every design choice was rooted in community research rather than aesthetic preference, ensuring the solution served real user needs." },
                { title: "Thinking in Systems", desc: "Food insecurity is not just about access to food; it involves transportation, communication, and community support." },
                { title: "Using Design for Good", desc: "Design can address serious social issues when grounded in research and genuine understanding of the people being served." }
              ].map((item) => (
                <div key={item.title} className="border-l-4 border-teal-600 pl-6">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Explore More Projects</h2>
          <p className="text-xl text-slate-600 mb-12">Check out other projects from my portfolio</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-10 py-6 bg-black hover:bg-teal-600 text-white transition-all" asChild>
              <Link href="/projects/cadence-magazine">
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