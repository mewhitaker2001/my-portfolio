import Link from 'next/link'
import Image from 'next/image'

export default function UXPage() {
  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-geist">
            UX & Product Designer
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            I design digital products that help people build better habits 
            and reach their goals. My approach combines user research, 
            thoughtful interaction design, and warm, encouraging experiences.
          </p>
          <a 
            href="#work" 
            className="inline-block bg-ux-primary-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-ux-primary-700 transition-colors"
          >
            View My Work ↓
          </a>
        </div>
      </section>
      
      {/* Featured Work */}
      <section id="work" className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 font-geist">
          Featured Work
        </h2>
        
        {/* Art Access Case Study */}
        <Link 
          href="/ux/art-access"
          className="block group mb-24"
        >
          <div className="relative aspect-[16/9] bg-gray-100 rounded-2xl overflow-hidden mb-6">
            <Image
              src="/images/ux/art-access/hero.png"
              alt="Art Access app mockup"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="max-w-2xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-ux-primary-600 transition-colors font-geist">
              Art Access
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              A museum companion app designed for visitors with Visual Processing Disorders. 
              Features include a reading ruler, customizable text settings, and artwork zoom capabilities.
            </p>
            <span className="text-ux-primary-600 font-medium group-hover:underline">
              View case study →
            </span>
          </div>
        </Link>

        {/* Additional Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Indy Food Links */}
          <Link 
            href="/ux/indy-food-links"
            className="block group"
          >
            <div className="relative aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden mb-4">
              <Image
                src="/images/ux/indy-food-links/homepage-thumb.png"
                alt="Indy Food Links website"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-ux-primary-600 transition-colors font-geist">
                Indy Food Links
              </h3>
              <p className="text-gray-600 mb-3">
                Nonprofit website connecting Indianapolis families with fresh food resources
              </p>
              <span className="text-ux-primary-600 font-medium group-hover:underline">
                View case study →
              </span>
            </div>
          </Link>

          {/* Palette */}
          <Link 
            href="/ux/palette"
            className="block group"
          >
            <div className="relative aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden mb-4">
              <Image
                src="/images/ux/palette/homepage-thumb.png"
                alt="Palette app mockup"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-ux-primary-600 transition-colors font-geist">
                Palette
              </h3>
              <p className="text-gray-600 mb-3">
                A habit tracking app that celebrates creativity over perfection
              </p>
              <span className="text-ux-primary-600 font-medium group-hover:underline">
                View case study →
              </span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}