import React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/seo"

export default function TheAuthors() {
  return (
    <Layout title="The Authors">
      <Seo title="The Authors" description="Learn about the authors of this Gatsby starter" />
      <div className="max-w-4xl mx-auto px-4 py-5">
        <h1 className="text-4xl font-bold text-bystar-navy mb-8">The Authors</h1>
        
        <h2 className="text-3xl font-bold text-bystar-navy mb-6 mt-8">Development & Credits</h2>
        
        <p className="text-gray-700 mb-5 leading-relaxed">
          This Gatsby starter was developed by <strong><a href="https://github.com/mohsenBanan" target="_blank" rel="noopener noreferrer" className="text-bystar-navy hover:underline">Mohsen Banan</a></strong>, 
          built upon the Gatsby <a href="https://www.npmjs.com/package/my-default-starter" target="_blank" rel="noopener noreferrer" className="text-bystar-navy hover:underline">my-default-starter</a> template.
        </p>

        <p className="text-gray-700 mb-5 leading-relaxed">
          The development of this starter was enabled by several powerful tools and AI assistants:
        </p>

        <ul className="mb-6 space-y-2 text-gray-700">
          <li><strong>Claude Haiku</strong> - AI assistant for development and implementation</li>
          <li><strong>VSCode</strong> - Code editor and development environment</li>
          <li><strong>GitHub Copilot</strong> - Coding assistance and suggestions</li>
          <li><strong>Gatsby</strong> - React-based static site generator</li>
          <li><strong>Tailwind CSS</strong> - Utility-first CSS framework</li>
          <li><strong>Lunr.js</strong> - Client-side search functionality</li>
        </ul>

        <h2 className="text-3xl font-bold text-bystar-navy mb-6 mt-8">Purpose</h2>

        <p className="text-gray-700 mb-5 leading-relaxed">
          This starter serves as a professional foundation for <strong>ByStar websites</strong> - providing 
          hierarchical navigation, flexible layouts, privacy-respecting features, and comprehensive 
          accessibility support out of the box.
        </p>

        <h2 className="text-3xl font-bold text-bystar-navy mb-6 mt-8">Learn More</h2>

        <p className="text-gray-700 mb-5 leading-relaxed">
          For more details about the ByStar ecosystem and this starter's role within it, visit:
        </p>

        <p className="mb-6">
          <a href="https://github.com/bxplpc/120033" target="_blank" rel="noopener noreferrer" className="text-bystar-navy hover:underline">
            ByStar Project Repository: github.com/bxplpc/120033
          </a>
        </p>

        <p className="text-sm text-gray-500">
          Built for ByStar and the Libre-Halaal Digital Ecosystem
        </p>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="The Authors" />
