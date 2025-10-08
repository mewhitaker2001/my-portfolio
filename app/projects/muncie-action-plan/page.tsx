"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Users, Target, ArrowRight } from "lucide-react"
import Link from "next/link"

// Logo Process Tabs Component
function LogoProcessTabs() {
  const [activeTab, setActiveTab] = useState("concept1")

  const tabs = [
    { id: "concept1", label: "Concept 1" },
    { id: "concept2", label: "Concept 2" }, 
    { id: "concept3", label: "Concept 3" },
    { id: "revisions", label: "Revisions" },
    { id: "final", label: "Final Logo" },
    { id: "animation", label: "Logo Animation" },
    { id: "explanation", label: "Design Explanation" }
  ]

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all text-base ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-slate-100 text-slate-700 hover:bg-blue-100 hover:text-blue-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
        {/* Concept 1 */}
        {activeTab === "concept1" && (
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center">Concept 1: Community Blocks</h3>
            <div className="aspect-[3/1] bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl overflow-hidden">
              <img
                src="/images/map-concept-1.jpg"
                alt="MAP Logo Concept 1"
                className="w-full h-full object-contain bg-white p-8"
              />
            </div>
            <p className="text-lg text-slate-600 leading-relaxed text-center max-w-3xl mx-auto">
              This concept centers on the acronym MAP, styled as bold "roads" that cut through colorful blocks, 
              symbolizing guidance, connection, and community pathways.
            </p>
            <div className="flex justify-center gap-3 mt-6">
              <Badge className="bg-black text-white text-sm px-4 py-2">Community Focus</Badge>
              <Badge className="bg-black text-white text-sm px-4 py-2">Bold Typography</Badge>
              <Badge className="bg-black text-white text-sm px-4 py-2">Map Metaphor</Badge>
            </div>
          </div>
        )}

        {/* Concept 2 */}
        {activeTab === "concept2" && (
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center">Concept 2: Local Landmarks</h3>
            <div className="aspect-[3/1] bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl overflow-hidden">
              <img
                src="/images/map-concept-2.jpg"
                alt="MAP Logo Concept 2"
                className="w-full h-full object-contain bg-white p-8"
              />
            </div>
            <p className="text-lg text-slate-600 leading-relaxed text-center max-w-3xl mx-auto">
              Custom letterforms representing MAP's values and Muncie's landmarks, including the Walnut Street 
              roundabout and White River.
            </p>
            <div className="flex justify-center gap-3 mt-6">
              <Badge className="bg-black text-white text-sm px-4 py-2">Local Identity</Badge>
              <Badge className="bg-black text-white text-sm px-4 py-2">Custom Lettering</Badge>
              <Badge className="bg-black text-white text-sm px-4 py-2">Geographic Elements</Badge>
            </div>
          </div>
        )}

        {/* Concept 3 */}
        {activeTab === "concept3" && (
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center">Concept 3: Navigation & Growth</h3>
            <div className="aspect-[3/1] bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl overflow-hidden">
              <img
                src="/images/map-concept-3.jpg"
                alt="MAP Logo Concept 3"
                className="w-full h-full object-contain bg-white p-8"
              />
            </div>
            <p className="text-lg text-slate-600 leading-relaxed text-center max-w-3xl mx-auto">
              Bold MAP acronym with pin element, with the flowing line representing White River while the
              straight line signifies roads and pathways, symbolizing navigation and growth.
            </p>
            <div className="flex justify-center gap-3 mt-6">
              <Badge className="bg-black text-white text-sm px-4 py-2">Navigation</Badge>
              <Badge className="bg-black text-white text-sm px-4 py-2">Growth</Badge>
              <Badge className="bg-black text-white text-sm px-4 py-2">River & Roads</Badge>
            </div>
          </div>
        )}

        {/* Revisions */}
        {activeTab === "revisions" && (
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center">Client Feedback & Revisions</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-[3/2] bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl overflow-hidden">
                <img
                  src="/images/map-revision-1.jpg"
                  alt="MAP Logo Revision 1"
                  className="w-full h-full object-contain bg-white p-6"
                />
              </div>
              <div className="aspect-[3/2] bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl overflow-hidden">
                <img
                  src="/images/map-revision-2.jpg"
                  alt="MAP Logo Revision 2"
                  className="w-full h-full object-contain bg-white p-6"
                />
              </div>
            </div>
            <div className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto space-y-4">
              <p>
                The client favored Concepts 1 and 3, requesting a few refinements.
              </p>
              <p>
                <strong>Concept 1 Revision:</strong> Color adjustments to align with MAP's traditional palette.
              </p>
              <p>
                <strong>Concept 3 Revision:</strong> Adjusted pin shape to read more clearly as a location marker.
              </p>
            </div>
            <div className="flex justify-center gap-3 mt-6">
              <Badge className="bg-black text-white text-sm px-4 py-2">Client Collaboration</Badge>
              <Badge className="bg-black text-white text-sm px-4 py-2">Brand Alignment</Badge>
              <Badge className="bg-black text-white text-sm px-4 py-2">Iterative Design</Badge>
            </div>
          </div>
        )}

        {/* Final Logo */}
        {activeTab === "final" && (
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center">Final Logo Solution</h3>
            <div className="aspect-[2/1] bg-white border-2 border-blue-200 rounded-2xl overflow-hidden p-12">
              <img
                src="/images/map-final-logo.jpg"
                alt="MAP Final Logo Design"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-lg text-slate-600 leading-relaxed text-center max-w-3xl mx-auto">
              The redesigned identity honors MAP's existing brand while modernizing its visual language. 
              The result is professional and flexible enough to work across all their communications, 
              reflecting their mission to support and guide Muncie's community growth.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="font-bold text-xl mb-3">Primary Applications</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>Official documentation</li>
                    <li>Newsletters</li>
                    <li>Community Flyers</li>
                    <li>Signage</li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="font-bold text-xl mb-3">Key Features</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>Scalable design</li>
                    <li>High contrast</li>
                    <li>Versatile color options</li>
                    <li>Clear typography</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center gap-3 mt-6">
              <Badge className="bg-black text-white text-sm px-4 py-2">Final Solution</Badge>
              <Badge className="bg-black text-white text-sm px-4 py-2">Brand Foundation</Badge>
            </div>
          </div>
        )}

        {/* Logo Animation */}
        {activeTab === "animation" && (
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center">Logo Transformation</h3>
            <div className="aspect-video bg-black rounded-2xl overflow-hidden">
              <video
                className="w-full h-full object-contain"
                controls
                preload="metadata"
              >
                <source src="/images/map-logo-animation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed text-center max-w-3xl mx-auto">
              Animation demonstrating the transformation from MAP's first logo to the new design.
            </p>
            <div className="flex justify-center gap-3 mt-6">
              <Badge className="bg-black text-white text-sm px-4 py-2">Brand Evolution</Badge>
              <Badge className="bg-black text-white text-sm px-4 py-2">Motion Design</Badge>
            </div>
          </div>
        )}

        {/* Design Explanation */}
        {activeTab === "explanation" && (
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center">Design Strategy & Rationale</h3>
            <div className="aspect-video bg-black rounded-2xl overflow-hidden">
              <video
                className="w-full h-full object-contain"
                controls
                preload="metadata"
              >
                <source src="/images/map-explanation-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed text-center max-w-3xl mx-auto">
              Team walkthrough of strategic thinking, design decisions, and community research behind the redesign.
            </p>
            <div className="flex justify-center gap-3 mt-6">
              <Badge className="bg-black text-white text-sm px-4 py-2">Strategic Thinking</Badge>
              <Badge className="bg-black text-white text-sm px-4 py-2">Design Process</Badge>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function MuncieActionPlanPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex h-20 items-center">
            <Link href="/projects">
              <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
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
              <Badge className="mb-6 bg-blue-100 text-blue-700 text-sm px-4 py-2">
                Brand Identity & System
              </Badge>
              
              <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
                Muncie <span className="text-blue-600">Action Plan</span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-slate-600 mb-8">
                Complete Brand Identity
              </p>
              
              <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                A comprehensive two-semester project creating a complete brand identity system for a community organization promoting social and economic growth in Muncie, Indiana.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="text-sm text-slate-500 mb-1">Duration</div>
                  <div className="text-2xl font-bold">2 Semesters</div>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="text-sm text-slate-500 mb-1">Team</div>
                  <div className="text-2xl font-bold">Studio 165+</div>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="text-sm text-slate-500 mb-1">Role</div>
                  <div className="text-2xl font-bold">PM & Lead</div>
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="text-sm uppercase tracking-widest text-slate-500 mb-4 font-semibold">Tools Used</h4>
                <div className="flex flex-wrap gap-3">
                  {["Illustrator", "InDesign", "After Effects"].map((tool) => (
                    <Badge key={tool} variant="outline" className="border-2 border-slate-300 text-base px-4 py-2 hover:border-blue-600 hover:text-blue-600 transition-colors">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="aspect-[4/3] bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/map-hero.jpg"
                alt="Muncie Action Plan Brand Identity Overview"
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
              Muncie Action Plan needed a cohesive brand identity that would unify their main organization 
              with multiple taskforces, each focused on different community initiatives, while maintaining 
              a clear visual identity and professional credibility.
            </p>

            <div className="h-px bg-slate-200 my-16" />

            <h2 className="text-4xl md:text-6xl font-black mb-16">The Solution</h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl">
              A comprehensive brand system starting with a redesigned main logo, then expanding 
              to include individual taskforce identities, professional stationery, and a complete annual 
              report that showcased their community impact.
            </p>
          </div>
        </div>
      </section>

      {/* Phase 1: Logo Design with Tabs */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Phase 1: Logo Design Process</h2>
            <p className="text-xl text-slate-600 mb-16 max-w-4xl">
              Fall semester focused on developing the main logo through research, concept exploration, and client collaboration.
            </p>

            <LogoProcessTabs />
          </div>
        </div>
      </section>

      {/* Phase 2: Brand System */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Phase 2: Brand System Expansion</h2>
            <p className="text-xl text-slate-600 mb-16 max-w-4xl">
              Spring semester expanded the logo into a complete brand identity system and professional branding materials like stationery and an annual report.
            </p>

            {/* Logo Variations */}
            <div className="mb-24">
              <h3 className="text-3xl font-bold mb-8">Logo Variations & Usage</h3>
              <div className="aspect-[16/9] bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/map-logo-variations.jpg"
                  alt="MAP Logo Variations"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Annual Report */}
            <div className="mb-24">
              <h3 className="text-3xl font-bold mb-8">Annual Report Design</h3>
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-6 bg-slate-50 border-b">
                  <h4 className="font-bold text-lg">Interactive Annual Report</h4>
                </div>
                <div style={{position:'relative', paddingTop:'max(60%,324px)', width:'100%', height:0}}>
                  <iframe 
                    style={{position:'absolute', border:'none', width:'100%', height:'100%', left:0, top:0}} 
                    src="https://online.fliphtml5.com/miqhy/zgjd/" 
                    seamless={true}
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen={true}
                  />
                </div>
              </div>
            </div>

            {/* Stationery */}
            <div>
              <h3 className="text-3xl font-bold mb-8">Professional Stationery</h3>
              <div className="space-y-8">
                <div className="aspect-[2/1] bg-gradient-to-br from-blue-400 to-green-500 rounded-2xl overflow-hidden shadow-xl">
                  <img src="/images/map-stationery-1.jpg" alt="Stationery 1" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[2/1] bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl overflow-hidden shadow-xl">
                  <img src="/images/map-stationery-2.jpg" alt="Stationery 2" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Key Takeaways</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-16 max-w-4xl">
              Over two semseters I helped lead the team to create a complete brand identity system for MAP.
              From intial logo concepts through final deliverables like stationery and the annual report.
              The new identity has been enthusiastically adopted by MAP and its taskforces, providing a
              professional and cohesive visual foundation for their ongoing community initiatives.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Unified Identity", desc: "Cohesive brand system across logos, print materials and digital assets" },
                { title: "Professional Presence", desc: "Elevated their presence for community partnerships and funding opportunities" },
                { title: "Scalable System", desc: "Flexible design system that can be adapted as new taskforces and initiatives launch" }
              ].map((item) => (
                <div key={item.title} className="border-l-4 border-blue-600 pl-6">
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
            <Button size="lg" className="text-lg px-10 py-6 bg-black hover:bg-blue-600 text-white transition-all" asChild>
              <Link href="/projects/indy-food-links">
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