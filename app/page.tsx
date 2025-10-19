"use client"

import { useState, useEffect } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, Download, ArrowRight, Sparkles } from "lucide-react"
import Navigation from "@/app/components/Navigation"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [activeProject, setActiveProject] = useState(0)

  const heroProjects = [
    {
      image: "/images/muncie-outreach-hero.jpg",
      title: "Muncie OUTreach",
      category: "Social Media Design",
      gradient: "from-pink-500/30 to-purple-600/30"
    },
    {
      image: "/images/big-hoffas-hero.jpg",
      title: "Big Hoffa's BBQ",
      category: "Logo Design",
      gradient: "from-orange-500/30 to-red-600/30"
    },
    {
      image: "/images/radiance-hero.jpg",
      title: "Radiance Cinema",
      category: "Brand Identity",
      gradient: "from-red-600/30 to-red-800/30"
    }
  ]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY })
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % heroProjects.length)
    }, 4000)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(interval)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Floating cursor effect */}
      <div
        className="fixed w-6 h-6 border-2 border-lime-200 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      <Navigation />

      {/* Hero Section - Immersive Split Screen */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 lg:pt-20">
        {/* Desktop: Split screen layout */}
        <div className="hidden lg:block absolute inset-0">
          {/* Left side - Diagonal cut */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-stone-50 to-stone-100 z-10" 
            style={{ clipPath: 'polygon(0 0, 55% 0, 45% 100%, 0 100%)' }} 
          />
          
          {/* Right side - Project images */}
          <div className="absolute inset-0">
            {heroProjects.map((project, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === activeProject ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="relative h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    style={{ objectFit: 'cover', objectPosition: '75% center' }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-l ${project.gradient}`} />
                  
                  {/* Project label */}
                  <div className="absolute bottom-12 right-12 text-right">
                    <p className="text-white/80 text-sm mb-1">{project.category}</p>
                    <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Carousel indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {heroProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeProject 
                      ? 'bg-white w-8' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Simple centered content */}
        <div className="lg:hidden w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 to-stone-100 px-6 py-20">
          <div className="space-y-6 text-center max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-100 text-lime-700 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4 text-lime-600" />
              <span className="uppercase tracking-widest text-xs">GRAPHIC DESIGNER</span>
            </div>

            <h1 className="text-5xl sm:text-6xl leading-none">
              <span className="block font-semibold text-stone-900">Maddie</span>
              <span className="block font-bold text-lime-600">Whitaker</span>
            </h1>

            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed">
              I design logos, magazines, websites, and more. Recent Ball State grad passionate about creating projects that help communities.
            </p>
          </div>
        </div>

        {/* Desktop content */}
        <div className="hidden lg:block container mx-auto px-6 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-8 py-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-100 text-lime-700 rounded-full text-sm font-medium">
                <Sparkles className="w-6 h-6 text-lime-600" />
                <span className="uppercase tracking-widest">GRAPHIC DESIGNER</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl leading-none">
                <span className="block font-semibold text-stone-900">Maddie</span>
                <span className="block font-bold text-lime-600">Whitaker</span>
              </h1>

              <p className="text-xl md:text-2xl text-stone-600 leading-relaxed max-w-xl">
              I design logos, magazines, websites, and more. Recent Ball State grad passionate about creating projects that help communities.
              </p>
            </div>
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
                  className="w-full h-full object-cover"
                />
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
                  className="w-full h-full object-cover"
                />
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
                  100 Years of Influential Women in Music, magazine design celebrating music history
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
                  className="w-full h-full object-cover"
                />
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
                I believe great design does more than look good. It has the power to solve problems, connect people, and inspire change. Whether it's a brand identity or a digital design, I focus on creating work that makes a meaningful impact.
              </p>
              <p className="text-xl text-slate-600 leading-relaxed">
                Based in Indianapolis, I specialize in brand identity, print design, and digital experiences. I would love to collaborate on your next project and bring your vision to life!
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
                  <h4 className="text-xl font-bold mb-2">Print Design</h4>
                  <p className="text-slate-600">Creating magazines, flyers, and other printed materials</p>
                </div>
                <div className="border-l-4 border-lime-200 pl-6">
                  <h4 className="text-xl font-bold mb-2">Digital Experiences</h4>
                  <p className="text-slate-600">Designing websites, apps, and interactive digital products</p>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-bold mb-4">Tools & Tech</h4>
                <div className="flex flex-wrap gap-2">
                  {["Illustrator", "Photoshop", "InDesign", "After Effects", "Figma", "React", "Next.js", "Tailwind"].map((skill) => (
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
          </div>
          <div className="mt-16 pt-8 border-t border-white/30 text-white/80">
            <p>© 2025 Maddie Whitaker · Indianapolis, IN</p>
          </div>
        </div>
      </section>
    </div>
  )
}