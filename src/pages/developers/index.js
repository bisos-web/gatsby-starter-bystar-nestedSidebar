import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/seo"

const DevelopersPage = () => (
  <Layout>
    <h1 className="text-4xl font-bold text-bystar-navy mb-8">🛠️ For Developers</h1>
    
    <p className="text-lg text-gray-600 leading-relaxed mb-8">
      Welcome to the developers section. Here you'll find comprehensive guides and examples for working with this Gatsby starter.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      <Link 
        to="/developers/creating-pages" 
        className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border-l-4 border-bystar-navy hover:shadow-lg transition-all no-underline"
      >
        <h2 className="text-2xl font-bold text-bystar-navy mb-3">✏️ Creating Pages</h2>
        <p className="text-gray-700 mb-4">
          Learn how to create new pages, configure layouts, and add content to your site. Step-by-step guides with code examples.
        </p>
        <span className="text-bystar-navy font-semibold">Read Guide →</span>
      </Link>

      <Link 
        to="/developers/layout-examples" 
        className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border-l-4 border-bystar-navy hover:shadow-lg transition-all no-underline"
      >
        <h2 className="text-2xl font-bold text-bystar-navy mb-3">🎨 Layout Examples</h2>
        <p className="text-gray-700 mb-4">
          Explore different layout configurations including full-width, app-like, and content-only layouts with working examples.
        </p>
        <span className="text-bystar-navy font-semibold">View Examples →</span>
      </Link>
    </div>

    <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-400 mb-8">
      <h3 className="text-xl font-bold text-bystar-navy mb-4">💡 Tips for Developers</h3>
      <ul className="space-y-2 text-gray-700">
        <li>✓ All styling uses Tailwind CSS v3 utility classes</li>
        <li>✓ Customize colors and spacing in <code className="bg-gray-200 px-2 py-1 rounded">tailwind.config.js</code></li>
        <li>✓ Menu structure is centralized in <code className="bg-gray-200 px-2 py-1 rounded">src/data/menuData.js</code></li>
        <li>✓ Use layout control props: <code className="bg-gray-200 px-2 py-1 rounded">showHeader</code>, <code className="bg-gray-200 px-2 py-1 rounded">showSidebar</code>, <code className="bg-gray-200 px-2 py-1 rounded">showFooter</code></li>
        <li>✓ Hot Module Reloading enabled for instant feedback</li>
      </ul>
    </div>

    <div className="p-6 bg-amber-50 rounded-lg border border-amber-200">
      <h3 className="text-xl font-bold text-bystar-navy mb-4">📚 Resources</h3>
      <ul className="space-y-2">
        <li>
          <a href="https://www.gatsbyjs.com/docs/" target="_blank" rel="noopener noreferrer" className="text-bystar-navy underline hover:opacity-75">
            Gatsby Documentation
          </a>
        </li>
        <li>
          <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer" className="text-bystar-navy underline hover:opacity-75">
            Tailwind CSS Documentation
          </a>
        </li>
        <li>
          <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="text-bystar-navy underline hover:opacity-75">
            React Documentation
          </a>
        </li>
      </ul>
    </div>
  </Layout>
)

export const Head = () => <Seo title="For Developers" />

export default DevelopersPage
