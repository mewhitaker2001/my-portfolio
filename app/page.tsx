"use client"

import { useState, useEffect } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Linkedin, Globe, Download, ArrowRight, Sparkles } from "lucide-react"
import Navigation from "@/app/components/Navigation"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY })
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`min-h-screen bg-white`}>
      {/* Floating cursor effect */}
      <div
        className="fixed w-6 h-6 border-2 border-lime-200 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      ></div>

      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-96 h-96 bg-lime-400/20 rounded-full blur-3xl"
            style={{
              top: '20%',
              left: '10%',
              transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.15}px)`
            }} />
          <div
            className="absolute w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"
            style={{
              bottom: '20%',
              right: '10%',
              transform: `translate(-${scrollY * 0.08}px, -${scrollY * 0.12}px)`
            }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <div className="mb-6 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-lime-600" />
              <span className="text-sm uppercase tracking-widest font-medium">Graphic Designer</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl mb-8 leading-none" style={{fontFamily: 'manrope', fontWeight: '800'}}>
              <span className="block font-normal text-stone-900">Maddie</span>
              <span className="block font-bold text-lime-600">Whitaker</span>
            </h1>

            <p className="text-xl md:text-2xl max-w-2xl mb-12 text-slate-600 leading-relaxed">
              Creating <span className="font-bold text-black">bold visuals</span> and <span className="font-bold text-black">functional experiences</span> that make communities thrive
            </p>

            <div className="flex gap-4 flex-wrap">
              <Button
                size="lg"
                className="text-lg px-10 py-6 bg-black hover:bg-lime-600 text-white hover:text-black transition-all group"
                asChild
              >
                <a href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-6 border-2 border-black hover:bg-black hover:text-white transition-all"
                onClick={() => scrollToSection('contact')}
              >
                Let's Talk
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid gap-24">
          {/* Project 1 - MAP */}
          <div className="group cursor-pointer">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-lime-600">01</span>
                  <div className="h-px flex-1 bg-lime-600" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold group-hover:text-lime-600 transition-colors">
                  Muncie Action Plan
                </h3>
                <p className="text-lg text-slate-600">
                  Complete rebrand for MAP including main logo, taskforce logos, stationery, and annual report design
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black text-white">Branding</Badge>
                  <Badge className="bg-black text-white">Illustrator</Badge>
                  <Badge className="bg-black text-white">InDesign</Badge>
                </div>
                <Button variant="outline" className="group/btn border-2 border-black hover:bg-black hover:text-white" asChild>
                  <Link href="/projects/muncie-action-plan">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
              <div className="order-1 md:order-2 relative h-96 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/images/muncie-action-plan.jpg"
                  alt="Muncie Action Plan"
                  className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Project 2 - Cadence */}
          <div className="group cursor-pointer">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-96 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/images/cadence-cinema.jpg"
                  alt="Cadence Magazine"
                  className="w-full h-full object-cover" />
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-lime-600">02</span>
                  <div className="h-px flex-1 bg-lime-600" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold group-hover:text-lime-600 transition-colors">
                  Cadence Magazine
                </h3>
                <p className="text-lg text-slate-600">
                  100 Years of Influential Women in Music—editorial design celebrating music history
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black text-white">InDesign</Badge>
                  <Badge className="bg-black text-white">Illustrator</Badge>
                  <Badge className="bg-black text-white">Photoshop</Badge>
                </div>
                <Button variant="outline" className="group/btn border-2 border-black hover:bg-black hover:text-white" asChild>
                  <Link href="/projects/cadence-magazine">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Project 3 - Indy Food Links */}
          <div className="group cursor-pointer">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-lime-600">03</span>
                  <div className="h-px flex-1 bg-lime-600" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold group-hover:text-lime-600 transition-colors">
                  Indy Food Links
                </h3>
                <p className="text-lg text-slate-600">
                  Two-semester capstone project creating a community organization to address food access challenges in Marion County
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black text-white">Figma</Badge>
                  <Badge className="bg-black text-white">Illustrator</Badge>
                  <Badge className="bg-black text-white">InDesign</Badge>
                </div>
                <Button variant="outline" className="group/btn border-2 border-black hover:bg-black hover:text-white" asChild>
                  <Link href="/projects/indy-food-links">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
              <div className="order-1 md:order-2 relative h-96 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/images/indy-food-links.jpg"
                  alt="Indy Food Links"
                  className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About/Skills Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl md:text-7xl font-black mb-8">
                Design with <span className="text-lime-600">Purpose</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                I believe great design does more than look good. It has the power to solve problems, connect people, and inspire change. Whether it's a brand identity or a digital experience, I focus on creating work that's both beautiful and meaningful.
              </p>
              <p className="text-xl text-slate-600 leading-relaxed">
                Based in Indianapolis, I specialize in branding, illustration, and web development with a passion for community-focused projects.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-8">What I Do</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-lime-200 pl-6">
                  <h4 className="text-xl font-bold mb-2">Brand Identity</h4>
                  <p className="text-slate-600">Creating memorable visual identities that tell your story</p>
                </div>
                <div className="border-l-4 border-lime-200 pl-6">
                  <h4 className="text-xl font-bold mb-2">Web Development</h4>
                  <p className="text-slate-600">Building responsive, user-friendly websites with modern tech</p>
                </div>
                <div className="border-l-4 border-lime-200 pl-6">
                  <h4 className="text-xl font-bold mb-2">Illustration</h4>
                  <p className="text-slate-600">Bringing ideas to life with custom illustrations and graphics</p>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-bold mb-4">Tools & Tech</h4>
                <div className="flex flex-wrap gap-2">
                  {["Illustrator", "InDesign", "After Effects", "Figma", "React", "Next.js", "Tailwind"].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-2 border-slate-300 hover:border-lime-600 hover:text-lime-600 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-br from-lime-500 to-emerald-400 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            Let's Create Something
          </h2>
          <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-10 py-6 bg-white text-black hover:bg-black hover:text-white transition-all">
              <Mail className="mr-2 h-5 w-5" />
              madelinewhitaker2001@gmail.com
            </Button>
           <Button size="lg" className="text-lg px-10 py-6 bg-white text-black hover:bg-black hover:text-white transition-all" asChild>
              <a href="/Maddie_Whitaker_Resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/madeline-whitaker-68284b208"
              className="p-4 rounded-full bg-white/20 hover:bg-white text-white hover:text-black transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://www.behance.net/maddiewhitaker"
              className="p-4 rounded-full bg-white/20 hover:bg-white text-white hover:text-black transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-16 pt-8 border-t border-white/30 text-white/80">
            <p>© 2025 Maddie Whitaker · Indianapolis, IN</p>
          </div>
        </div>
      </section>
    </div>
  )
}