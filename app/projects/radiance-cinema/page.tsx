"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Users, Target, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function RadianceCinemaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex h-20 items-center">
            <Link href="/projects">
              <Button variant="ghost" size="sm" className="text-amber-600 hover:text-amber-700 hover:bg-amber-50">
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
              <Badge className="mb-6 bg-amber-100 text-amber-700 text-sm px-4 py-2">
                Brand Identity
              </Badge>
              
              <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
                Radiance <span className="text-amber-600">Cinema</span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-slate-600 mb-8">
                Complete Brand Book
              </p>
              
              <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                A comprehensive brand book for Ball State's campus film organization, including social media templates, 
                stationery, and motion graphics to support their campus and industry presence.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                <div className="border-l-4 border-amber-600 pl-4">
                  <div className="text-sm text-slate-500 mb-1">Duration</div>
                  <div className="text-2xl font-bold">2 Semesters</div>
                </div>
                <div className="border-l-4 border-amber-600 pl-4">
                  <div className="text-sm text-slate-500 mb-1">Team</div>
                  <div className="text-2xl font-bold">Studio 165+</div>
                </div>
                <div className="border-l-4 border-amber-600 pl-4">
                  <div className="text-sm text-slate-500 mb-1">Role</div>
                  <div className="text-2xl font-bold">PM & Lead</div>
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="text-sm uppercase tracking-widest text-slate-500 mb-4 font-semibold">Tools Used</h4>
                <div className="flex flex-wrap gap-3">
                  {["InDesign", "Illustrator", "After Effects", "Adobe Express"].map((tool) => (
                    <Badge key={tool} variant="outline" className="border-2 border-slate-300 text-base px-4 py-2 hover:border-amber-600 hover:text-amber-600 transition-colors">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="aspect-[4/3] bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/radiance-cinema-hero.jpg"
                alt="Radiance Cinema Brand Book Cover"
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
              Radiance Cinema wanted to expand their branding beyond their existing logo to create a cohesive identity system.
              They needed a comprehensive brand book and social media style to help them expand their presence on campus and in the film industry.
            </p>

            <div className="h-px bg-slate-200 my-16" />

            <h2 className="text-4xl md:text-6xl font-black mb-16">The Solution</h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl">
              A comprehensive brand book extending their existing logo into a full identity system.
              The system included social media templates, stationery, and motion graphics to support their campus and industry presence.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Book */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-16">Brand Book</h2>
            
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-16">
              <div className="p-6 bg-slate-50 border-b border-slate-200">
                <h3 className="font-bold text-lg">Interactive Brand Book</h3>
                <p className="text-sm text-slate-600 mt-1">Click through to explore the complete brand guidelines</p>
              </div>
              <div style={{position:'relative', paddingTop:'max(60%,324px)', width:'100%', height:0}}>
                <iframe 
                  style={{position:'absolute', border:'none', width:'100%', height:'100%', left:0, top:0}} 
                  src="https://online.fliphtml5.com/miqhy/hqwo/" 
                  seamless={true}
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold mb-6">Social Media Templates</h3>
                <div className="aspect-[4/3] bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/radiance-adobe-express.jpg"
                    alt="Adobe Express Brand Templates"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold mb-6">Stationery Design</h3>
                <div className="aspect-[4/3] bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/radiance-stationery.jpg"
                    alt="Stationery Design"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Animations */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-16">Logo Animations</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-video bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl overflow-hidden shadow-xl">
                <video
                  src="/images/radiance-logo-animation-1.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <img
                    src="/images/radiance-logo-1-thumb.jpg"
                    alt="Logo Animation 1"
                    className="w-full h-full object-cover"
                  />
                </video>
              </div>

              <div className="aspect-video bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl overflow-hidden shadow-xl">
                <video
                  src="/images/radiance-logo-animation-2.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <img
                    src="/images/radiance-logo-2-thumb.jpg"
                    alt="Logo Animation 2"
                    className="w-full h-full object-cover"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lower Thirds */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-16">Lower Thirds Collection</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="aspect-video bg-gradient-to-br from-amber-400 to-red-500 rounded-2xl overflow-hidden shadow-xl">
                <video
                  src="/images/radiance-lower-third-1.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <img
                    src="/images/radiance-lower-1-thumb.jpg"
                    alt="Lower Third 1"
                    className="w-full h-full object-cover"
                  />
                </video>
              </div>
              
              <div className="aspect-video bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl overflow-hidden shadow-xl">
                <video
                  src="/images/radiance-lower-third-2.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <img
                    src="/images/radiance-lower-2-thumb.jpg"
                    alt="Lower Third 2"
                    className="w-full h-full object-cover"
                  />
                </video>
              </div>
              
              <div className="aspect-video bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl overflow-hidden shadow-xl">
                <video
                  src="/images/radiance-lower-third-3.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <img
                    src="/images/radiance-lower-3-thumb.jpg"
                    alt="Lower Third 3"
                    className="w-full h-full object-cover"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Key Takeaways</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-16 max-w-4xl">
              As project manager and lead designer, I coordinated the team to deliver a complete brand system that elevated Radiance Cinema's presence.
              The system included flexible tools that they can continue to use independently for their ongoing content creation needs.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Brand Foundation", desc: "Complete identity system establishing credibility with students and industry partners" },
                { title: "Motion Graphics", desc: "Professional animations for video content" },
                { title: "Flexible Templates", desc: "Easy-to-use tools for ongoing content creation" }
              ].map((item) => (
                <div key={item.title} className="border-l-4 border-amber-600 pl-6">
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
            <Button size="lg" className="text-lg px-10 py-6 bg-black hover:bg-amber-600 text-white transition-all" asChild>
              <Link href="/projects/muncie-action-plan">
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