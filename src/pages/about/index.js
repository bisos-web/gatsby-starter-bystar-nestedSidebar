import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/seo"

export default function About() {
  return (
    <Layout title="About" showSidebar={true}>
      <Seo title="About" description="Learn about this Gatsby starter and its creators" />
      <div className="max-w-4xl mx-auto px-4 py-5">
        <h1 className="text-4xl font-bold text-bystar-navy mb-8">About</h1>
        
        <p className="text-lg leading-relaxed text-gray-600 mb-12">
          Explore the sections below to learn more about this starter and the people behind it.
        </p>

        <div className="grid grid-cols-2 gap-12">
          
          <Link to="/about/this-starter" className="p-8 bg-gray-50 rounded-lg no-underline border border-gray-300 hover:bg-gray-100 transition-colors mr-8">
            <h2 className="text-2xl font-bold text-bystar-navy mb-4 mt-0">
              📖 This Starter
            </h2>
            <p className="text-gray-700 leading-relaxed mb-0">
              Discover the features, architecture, and capabilities of the ByStar Nested Sidebar Gatsby starter. Learn what makes it special and how it can help you build professional websites.
            </p>
          </Link>

          <Link to="/about/the-authors" className="p-8 bg-gray-50 rounded-lg no-underline border border-gray-300 hover:bg-gray-100 transition-colors ml-8">
            <h2 className="text-2xl font-bold text-bystar-navy mb-4 mt-0">
              👥 The Authors
            </h2>
            <p className="text-gray-700 leading-relaxed mb-0">
              Meet Mohsen Banan and learn about the development of this starter. Discover the tools and inspiration that went into creating this professional Gatsby foundation.
            </p>
          </Link>

        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="About" />
