"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"

interface LogoProcessTabsProps {
  className?: string
}

export default function LogoProcessTabs({ className = "" }: LogoProcessTabsProps) {
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
    <div className={`w-full ${className}`}>
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-blue-400 text-slate-800'
                : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
        {/* Logo Animation */}
        {activeTab === "animation" && (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center mb-4">Logo Transformation</h3>
            <div className="aspect-video bg-black rounded-lg overflow-hidden mb-6">
              <video
                className="w-full h-full object-contain"
                controls
                preload="metadata"
              >
                <source src="/images/map-logo-animation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
              This animation demonstrates the visual transformation from MAP's previous logo to our new design, 
              highlighting the strategic improvements in clarity, professionalism, and brand recognition.
            </p>
            <div className="flex justify-center gap-2 mt-4">
              <Badge variant="outline" className="border-blue-200">Brand Evolution</Badge>
              <Badge variant="outline" className="border-blue-200">Visual Transformation</Badge>
              <Badge variant="outline" className="border-blue-200">Motion Design</Badge>
            </div>
          </div>
        )}

        {/* Design Explanation */}
        {activeTab === "explanation" && (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center mb-4">Design Strategy & Rationale</h3>
            <div className="aspect-video bg-black rounded-lg overflow-hidden mb-6">
              <video
                className="w-full h-full object-contain"
                controls
                preload="metadata"
              >
                <source src="/images/map-explanation-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
              Our team walks through the strategic thinking behind the logo redesign, explaining the design decisions, 
              community research, and brand positioning that informed our final solution for Muncie Action Plan.
            </p>
            <div className="flex justify-center gap-2 mt-4">
              <Badge variant="outline" className="border-blue-200">Strategic Thinking</Badge>
              <Badge variant="outline" className="border-blue-200">Design Process</Badge>
              <Badge variant="outline" className="border-blue-200">Team Presentation</Badge>
            </div>
          </div>
        )}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Concept 1 */}
        {activeTab === "concept1" && (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center mb-4">Concept 1: Community Blocks</h3>
            <div className="aspect-[3/1] bg-gradient-to-br from-green-400 to-blue-500 rounded-lg overflow-hidden mb-6">
              <img
                src="/images/map-concept-1.jpg"
                alt="MAP Logo Concept 1"
                className="w-full h-full object-contain bg-white"
              />
            </div>
            <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
              This concept centers on the acronym MAP, styled as bold "roads" that cut through colorful blocks, 
              symbolizing guidance, connection, and community pathways. The blocks resemble a map or neighborhood, 
              highlighting the organization's mission to unite and support diverse communities.
            </p>
            <div className="flex justify-center gap-2 mt-4">
              <Badge variant="outline" className="border-blue-200">Community Focus</Badge>
              <Badge variant="outline" className="border-blue-200">Bold Typography</Badge>
              <Badge variant="outline" className="border-blue-200">Map Metaphor</Badge>
            </div>
          </div>
        )}

        {/* Concept 2 */}
        {activeTab === "concept2" && (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center mb-4">Concept 2: Local Landmarks</h3>
            <div className="aspect-[3/1] bg-gradient-to-br from-green-400 to-blue-500 rounded-lg overflow-hidden mb-6">
              <img
                src="/images/map-concept-2.jpg"
                alt="MAP Logo Concept 2"
                className="w-full h-full object-contain bg-white"
              />
            </div>
            <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
              This concept uses custom letterforms to represent MAP's core values and local landmarks. 
              The design incorporates elements inspired by Muncie's geography, including the Walnut Street 
              roundabout and White River, creating a distinctly local identity that speaks to the community's roots.
            </p>
            <div className="flex justify-center gap-2 mt-4">
              <Badge variant="outline" className="border-blue-200">Local Identity</Badge>
              <Badge variant="outline" className="border-blue-200">Custom Lettering</Badge>
              <Badge variant="outline" className="border-blue-200">Geographic Elements</Badge>
            </div>
          </div>
        )}

        {/* Concept 3 */}
        {activeTab === "concept3" && (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center mb-4">Concept 3: Navigation & Growth</h3>
            <div className="aspect-[3/1] bg-gradient-to-br from-green-400 to-blue-500 rounded-lg overflow-hidden mb-6">
              <img
                src="/images/map-concept-3.jpg"
                alt="MAP Logo Concept 3"
                className="w-full h-full object-contain bg-white"
              />
            </div>
            <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
              This concept features a bold MAP acronym with a pin element, nodding to navigation and place. 
              The design incorporates flowing lines representing the White River and solid elements reflecting 
              roadways and connection, emphasizing movement and progress within the community.
            </p>
            <div className="flex justify-center gap-2 mt-4">
              <Badge variant="outline" className="border-blue-200">Navigation Theme</Badge>
              <Badge variant="outline" className="border-blue-200">Connection</Badge>
              <Badge variant="outline" className="border-blue-200">Professional</Badge>
            </div>
          </div>
        )}

        {/* Revisions */}
        {activeTab === "revisions" && (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center mb-4">Client Feedback & Revisions</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="aspect-[3/2] bg-gradient-to-br from-green-400 to-blue-500 rounded-lg overflow-hidden">
                <img
                  src="/images/map-revision-1.jpg"
                  alt="MAP Logo Revision 1"
                  className="w-full h-full object-contain bg-white"
                />
              </div>
              <div className="aspect-[3/2] bg-gradient-to-br from-green-400 to-blue-500 rounded-lg overflow-hidden">
                <img
                  src="/images/map-revision-2.jpg"
                  alt="MAP Logo Revision 2"
                  className="w-full h-full object-contain bg-white"
                />
              </div>
            </div>
            <div className="text-gray-600 leading-relaxed max-w-3xl mx-auto space-y-4">
              <p>
                The client favored Concepts 1 and 2, requesting strategic refinements to better align 
                with their organizational needs and brand recognition.
              </p>
              <p>
                <strong>Revision 1:</strong> Color adjustments to align with MAP's traditional palette 
                while maintaining the community-focused block concept.
              </p>
              <p>
                <strong>Revision 2:</strong> Enhanced visibility of key elements and improved readability 
                for various application sizes and contexts.
              </p>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              <Badge variant="outline" className="border-blue-200">Client Collaboration</Badge>
              <Badge variant="outline" className="border-blue-200">Brand Alignment</Badge>
              <Badge variant="outline" className="border-blue-200">Iterative Design</Badge>
            </div>
          </div>
        )}

        {/* Final Logo */}
        {activeTab === "final" && (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center mb-4">Final Logo Solution</h3>
            <div className="aspect-[2/1] bg-gradient-to-br from-green-400 to-blue-500rounded-lg overflow-hidden mb-6">
              <img
                src="/images/map-final-logo.jpg"
                alt="MAP Final Logo Design"
                className="w-full h-full object-contain bg-white"
              />
            </div>
            <div className="text-gray-600 leading-relaxed max-w-3xl mx-auto space-y-4">
              <p className="text-center">
                The final MAP identity successfully balances the client's previous identity with a fresh,
                modern aesthetic. The design is versatile, professional, and community-oriented,
                and suitable for use across various applications.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Primary Applications</h4>
                  <ul className="text-sm space-y-1">
                    <li>Official documentation</li>
                    <li>Newsletters</li>
                    <li>Community Flyers</li>
                    <li>Signage</li>
                  </ul>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Key Features</h4>
                  <ul className="text-sm space-y-1">
                    <li>Scalable design</li>
                    <li>High contrast</li>
                    <li>Versatile color options</li>
                    <li>Clear typography</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              <Badge variant="outline" className="border-blue-200">Final Solution</Badge>
              <Badge variant="outline" className="border-blue-200">Brand Foundation</Badge>
              <Badge variant="outline" className="border-blue-200">Scalable System</Badge>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}