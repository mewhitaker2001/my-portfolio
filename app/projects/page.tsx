"use client"

import Navigation from "@/app/components/Navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Radiance Cinema",
    description: "Our team created a complete brand book for Radiance Cinema, a student film organization. We took their existing logo and built out everything they needed to unify their branding.",
    image: "/images/radiance-cinema.jpg",
    gradient: "from-amber-400 to-yellow-500",
    tools: ["InDesign", "Illustrator", "Photoshop", "After Effects"],
    category: "Brand Identity",
    link: "/projects/radiance-cinema"
  },
  {
    id: 2,
    title: "Muncie Action Plan",
    description: "Our studio redesigned the entire identity for MAP, a Muncie community organization. We created their main logo, sublogos, and branding materials that reflected their new identity and mission.",
    image: "/images/muncie-action-plan.jpg",
    gradient: "from-blue-500 to-blue-700",
    tools: ["Illustrator", "InDesign", "After Effects"],
    category: "Brand Identity",
    link: "/projects/muncie-action-plan"
  },
  {
    id: 3,
    title: "Indy Food Links",
    description: "My senior capstone focused on food insecurity in Indianapolis. After extensive research, I designed a campaign addressing transportation barriers and access to support systems.",
    image: "/images/indy-food-links.jpg",
    gradient: "from-teal-500 to-teal-700",
    tools: ["Figma", "Illustrator", "InDesign", "Whimsical"],
    category: "Campaign Design",
    link: "/projects/indy-food-links"
  },
  {
    id: 4,
    title: "Cadence Magazine",
    description: "A 70-page editorial celebrating 100 years of women in music. This collaborative project pushed typography and layout skills while honoring incredible artists across every genre.",
    image: "/images/project-4.jpg",
    gradient: "from-purple-500 to-pink-600",
    tools: ["InDesign", "Photoshop", "Illustrator"],
    category: "Editorial Design",
    link: "/projects/cadence-magazine"
  },
  {
    id: 5,
    title: "Muncie OUTreach",
    description: "Colorful posters and social media templates for Pride events in Muncie. Our team created custom icons and patterns that made it easy for organizers to keep their branding consistent.",
    image: "/images/project-5.jpg",
    gradient: "from-pink-500 to-purple-600",
    tools: ["Illustrator", "Canva", "Photoshop"],
    category: "Social Media Design",
    link: "/projects/muncie-outreach"
  },
  {
    id: 6,
    title: "Big Hoffa's BBQ",
    description: "A logo redesign for a pirate-themed BBQ restaurant in Westfield. I modernized their iconic skull and flames while making sure the brand still felt fun and approachable for families.",
    image: "/images/project-6.jpg",
    gradient: "from-orange-500 to-red-600",
    tools: ["Illustrator", "Photoshop"],
    category: "Logo Design",
    link: "/projects/big-hoffas"
  },
]

export default function ProjectsPage() {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-800`}>
      <Navigation />
      {/* Header */}
      <div className="container mx-auto px-4 pt-32 pb-12">
        <div className="max-w-2xl mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: 'var(--font-manrope)'}}>
            My Work
          </h1>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link href={project.link} key={project.id}>
              <div className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group overflow-hidden bg-white dark:bg-slate-800 rounded-lg">
                <div className={`w-full h-64 bg-gradient-to-br ${project.gradient} overflow-hidden relative`}>
                  <img
                    src={project.image}
                    alt={`${project.title} Preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    <Badge variant="secondary" className="text-xs bg-lime-100 text-lime-700">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl group-hover:text-lime-600 transition-colors font-semibold" style={{fontFamily: 'var(--font-manrope)'}}>
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-stone-600">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tools.map((tool) => (
                        <span key={tool} className="text-xs text-stone-500">
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-lime-600 font-medium pt-3 group-hover:gap-3 transition-all">
                      <span className="text-sm">View project</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

     {/* Call to Action */}
      <div className="bg-gradient-to-br from-lime-50 to-emerald-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{fontFamily: 'var(--font-manrope)'}}>
            Want to work together?
          </h2>
          <p className="text-lg text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            I'm always looking for new projects and collaborations. Whether you need branding, 
            print design, or digital media, I'd love to hear from you!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white shadow-lg" asChild>
              <Link href="/#contact">
                Get In Touch
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-lime-600 text-lime-600 hover:bg-white shadow-lg" asChild>
              <a href="/Maddie_Whitaker_Resume.pdf" download>
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="mt-16 pt-8 border-t border-stone-300 text-stone-600">
            <p>© 2025 Maddie Whitaker · Built from scratch with Next.js & Tailwind CSS</p>
            <p className="text-sm mt-2 text-stone-500">Indianapolis, IN</p>
          </div>
        </div>
      </div>
    </div>
  )
}