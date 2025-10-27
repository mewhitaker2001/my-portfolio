"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Users, Target, Palette, Share2, FileText, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function MuncieOUTreachPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex h-20 items-center">
            <Link href="/projects">
              <Button variant="ghost" size="sm" className="text-pink-600 hover:text-pink-700 hover:bg-pink-50">
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
              <Badge className="mb-6 bg-pink-100 text-pink-700 text-sm px-4 py-2">
                Brand Design • Social Media
              </Badge>
              
              <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
                Muncie <span className="text-pink-600">OUTreach</span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-slate-600 mb-8">
                Event Posters & Social Templates
              </p>
              
              <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                Vibrant social media templates and poster series promoting Pride events, using bright colors, 
                custom icons, and inclusive design that reflects the welcoming LGBTQ+ community in Muncie, Indiana.
              </p>

            {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="border-l-4 border-pink-600 pl-4">
                  <div className="text-sm text-slate-500 mb-1">Duration</div>
                  <div className="text-lg md:text-2xl font-bold leading-tight">1 Semester</div>
                </div>
                <div className="border-l-4 border-pink-600 pl-4">
                  <div className="text-sm text-slate-500 mb-1">Team</div>
                  <div className="text-2xl font-bold">Studio 165+</div>
                </div>
              </div>

              {/* Tools */}
              <div className="mb-8">
                <h4 className="text-sm uppercase tracking-widest text-slate-500 mb-4 font-semibold">Tools Used</h4>
                <div className="flex flex-wrap gap-3">
                  {["Illustrator", "Canva", "Photoshop"].map((tool) => (
                    <Badge key={tool} variant="outline" className="border-2 border-slate-300 text-base px-4 py-2 hover:border-pink-600 hover:text-pink-600 transition-colors">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Team */}
              <div>
                <h4 className="text-sm uppercase tracking-widest text-slate-500 mb-3 font-semibold">Team Members</h4>
                <p className="text-slate-600">
                  Taylor Rector, Ashtyn Huber, Maddie Whitaker, Cassie Pomierski, Stan S., Hannah Schneider, Miles Landrum
                </p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="aspect-square bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/muncie-outreach-main-hero.jpg"
                alt="Muncie OUTreach Social Media Templates"
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
              Design promotional materials for Muncie OUTreach's 2024 community events. The
              social media campaign needed cohesive templates for their Pride event, while each poster
              required its own distinct visual identity. All designs had to be inclusive and welcoming to the LGBTQ+ community.
            </p>

            <div className="h-px bg-slate-200 my-16" />

            <h2 className="text-4xl md:text-6xl font-black mb-16">The Solution</h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl">
              Two separate design approaches were used to meet the needs of the organization.
              A series of event posters incorporated various pride flags to showcase that people of all orientations were welcome, while
              a social media system with custom icons and templates were created to allow organizers to easily personalize posts and share photos from their Pride event.
              While visually distinct, all design materials shared the bold, welcoming energy that defines Muncie OUTreach.
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-16">Deliverables</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="border-l-4 border-pink-600 pl-8">
                <FileText className="h-12 w-12 text-pink-600 mb-6" />
                <h3 className="text-3xl font-bold mb-4">Event Posters</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Series of promotional posters for Pride events, Family Swim, Lavender Graduation, 
                  and skating events, incorporating pride flags and inclusive imagery.
                </p>
              </div>

              <div className="border-l-4 border-pink-600 pl-8">
                <Share2 className="h-12 w-12 text-pink-600 mb-6" />
                <h3 className="text-3xl font-bold mb-4">Social Media Templates</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Flexible Canva templates with custom icons and patterns, enabling organizers 
                  to easily create consistent, branded social media content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process - Icons */}
      <section className="py-24 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-16">Design Process</h2>

            <h3 className="text-3xl font-bold mb-12">Custom Icon Design</h3>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <h4 className="text-2xl font-bold mb-6">From Sketches to Icons</h4>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  We began by sketching icons representing various Pride event activities and amenities. 
                  These hand-drawn concepts were then refined in Adobe Illustrator to create a cohesive 
                  set of simple, recognizable symbols.
                </p>
                
                <p className="text-lg text-slate-600 leading-relaxed">
                  The icons were designed to be combined into repeating patterns and layered with vibrant gradient to create
                  colorful, dynamic backgrounds for social media templates.
                </p>
              </div>

              <div className="aspect-square bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/muncie-icons-sketches.jpg"
                  alt="Icon sketches and final designs"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-12">Pattern & Gradient System</h3>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-square bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/muncie-patterns.jpg"
                  alt="Pattern and gradient examples"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-2xl font-bold mb-6">Colorful & Dynamic</h4>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  By combining our custom icons with vibrant gradients and repeating patterns, we created 
                  a versatile design system that kept social media posts fresh and engaging while maintaining 
                  visual consistency.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  The patterns could be easily swapped and customized within the Canva templates, giving 
                  organizers creative flexibility without sacrificing brand cohesion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Templates */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Social Media Templates</h2>
            
            <p className="text-xl text-slate-600 mb-16 max-w-4xl leading-relaxed">
              The social media templates were designed in Canva to allow event organizers to easily personalize 
              posts and share photos from events while maintaining a consistent, fun online presence.
            </p>

            <div className="aspect-[16/9] bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/muncie-social-templates.jpg"
                alt="Social media template examples"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

 {/* Event Posters */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8">OUTreach Event Posters</h2>
            
            <p className="text-xl text-slate-600 mb-16 max-w-4xl leading-relaxed">
              Throughout the semester, our team created a series of posters to advertise Muncie OUTreach events. 
              We incorporated various pride flags to showcase that people of all orientations were welcome.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { src: "/images/muncie-poster-pride.jpg", alt: "Pride Event Poster" },
                { src: "/images/muncie-poster-swim.jpg", alt: "Family Swim Event Poster" },
                { src: "/images/muncie-poster-graduation.jpg", alt: "Lavender Graduation Poster" },
                { src: "/images/muncie-poster-prom.jpg", alt: "Queer Prom Event Poster" }
              ].map((poster, index) => (
                <div key={index} className="aspect-[3/4] bg-slate-200 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={poster.src}
                    alt={poster.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Key Takeaways */}
      <section className="py-24 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Key Takeaways</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-16 max-w-4xl">
              Collaborating with a large group of designers required clear communication and a shared vision to build
              tools that Muncie OUTreach organizers could easily use without design experience.
              It was rewarding to see our designs come to life at events and know they helped create an inclusive, welcoming atmosphere.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Palette, title: "Inclusive Design", desc: "Creating visuals that felt welcoming and authentic to the LGBTQ+ community" },
                { icon: Users, title: "Team Collaboration", desc: "Working effectively as a large team on different pieces while maintaining the vision of the client" },
                { icon: Share2, title: "User-Friendly Templates", desc: "Building flexible templates that empower clients to create content" }
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="border-l-4 border-pink-600 pl-6">
                    <Icon className="h-12 w-12 text-pink-600 mb-4" />
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                )
              })}
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
            <Button size="lg" className="text-lg px-10 py-6 bg-black hover:bg-pink-600 text-white transition-all" asChild>
              <Link href="/projects/big-hoffas">
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
