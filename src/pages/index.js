import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="max-w-6xl mx-auto px-4 w-full overflow-hidden">
      {/* Hero Section */}
      <section className="pb-12 border-b border-gray-200 mb-12">
        <div className="text-center mb-8">
          <StaticImage
            src="../images/example.png"
            loading="eager"
            width={64}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="ByStar Nested Sidebar"
            className="inline-block mb-5"
          />
        </div>
        <h1 className="text-5xl font-bold text-bystar-navy text-center mb-5">
          🌳 Gatsby Starter:<br />ByStar Nested Sidebar
        </h1>
        <p className="text-xl leading-relaxed text-gray-600 mb-8 text-center">
          A professional, feature-rich Gatsby starter designed for <strong>ByStar and hierarchical websites</strong>. 
          Features responsive navigation, flexible layouts, accessibility support, and privacy-respecting search—all built-in.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/about/this-starter" className="px-8 py-4 bg-bystar-navy text-white rounded-lg font-bold text-lg border-2 border-bystar-navy hover:bg-opacity-90 hover:shadow-lg transition-all no-underline">
            Learn More
          </Link>
          <a href="https://github.com/bisos-web/gatsby-starter-bystar-nestedSidebar" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-bystar-navy rounded-lg font-bold text-lg border-2 border-bystar-navy hover:bg-gray-50 hover:shadow-lg transition-all no-underline">
            View on GitHub
          </a>
        </div>
      </section>

      {/* Core Features */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-bystar-navy mb-8">✨ Core Features</h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-bystar-navy">
            <h3 className="text-lg font-bold text-bystar-navy mb-4">🎨 Hierarchical Navigation</h3>
            <p className="text-gray-600 leading-relaxed">
              Nested sidebar supporting up to 5 levels deep with smart auto-expansion based on current page location.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-bystar-navy">
            <h3 className="text-lg font-bold text-bystar-navy mb-4">📱 Fully Responsive</h3>
            <p className="text-gray-600 leading-relaxed">
              Mobile-first design with Tailwind CSS v4. Hamburger menu on mobile, permanent sidebar on desktop.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-bystar-navy">
            <h3 className="text-lg font-bold text-bystar-navy mb-4">🔍 Privacy-First Search</h3>
            <p className="text-gray-600 leading-relaxed">
              Client-side full-text search powered by Lunr.js. No data sent to external servers.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-bystar-navy">
            <h3 className="text-lg font-bold text-bystar-navy mb-4">♿ Accessibility-Focused</h3>
            <p className="text-gray-600 leading-relaxed">
              Built with semantic HTML, ARIA support, and keyboard navigation. Audit recommended before production.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-bystar-navy">
            <h3 className="text-lg font-bold text-bystar-navy mb-4">🎞️ Embed Content</h3>
            <p className="text-gray-600 leading-relaxed">
              Flexible iframe embedding system for external websites, YouTube, and other services with security controls.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-bystar-navy">
            <h3 className="text-lg font-bold text-bystar-navy mb-4">🛠️ Flexible Layouts</h3>
            <p className="text-gray-600 leading-relaxed">
              Control header, sidebar, and footer visibility per page. From full-width to app-like interfaces.
            </p>
          </div>

        </div>
      </section>

      {/* Getting Started */}
      <section className="mb-12 p-6 rounded-lg border-2 border-gray-300 shadow-md overflow-hidden" style={{backgroundColor: '#f3f4f6'}}>
        <h2 className="text-4xl font-bold text-bystar-navy mb-5">🚀 Quick Start</h2>
        
        <div className="overflow-x-auto -mx-6 px-6">
          <pre className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm border border-gray-700 whitespace-pre-wrap break-words">
{`# Clone the repository
git clone https://github.com/bisos-web/gatsby-starter-bystar-nestedSidebar.git
cd gatsby-starter-bystar-nestedSidebar

# Install dependencies
npm install

# Start development server
npm run develop

# Visit http://localhost:8000`}
          </pre>
        </div>

        <p className="text-gray-600 leading-relaxed mb-5">
          Then explore the site to see the features in action. Visit the <strong>For Developers</strong> section for comprehensive guides on creating pages, customizing layouts, and embedding content.
        </p>
      </section>

      {/* Explore Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-bystar-navy mb-8">🔗 Explore the Starter</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          <Link to="/about/this-starter" className="p-6 bg-gray-100 rounded-lg border border-gray-300 no-underline hover:bg-gray-200 transition-colors">
            <div className="text-bystar-navy font-bold">📖 About This Starter</div>
          </Link>

          <Link to="/developers/creating-pages" className="p-6 bg-gray-100 rounded-lg border border-gray-300 no-underline hover:bg-gray-200 transition-colors">
            <div className="text-bystar-navy font-bold">✏️ Creating Pages Guide</div>
          </Link>

          <Link to="/developers/layout-examples" className="p-6 bg-gray-100 rounded-lg border border-gray-300 no-underline hover:bg-gray-200 transition-colors">
            <div className="text-bystar-navy font-bold">🎨 Layout Examples</div>
          </Link>

          <Link to="/explore/search" className="p-6 bg-gray-100 rounded-lg border border-gray-300 no-underline hover:bg-gray-200 transition-colors">
            <div className="text-bystar-navy font-bold">🔍 Search</div>
          </Link>

          <Link to="/sitemap" className="p-6 bg-gray-100 rounded-lg border border-gray-300 no-underline hover:bg-gray-200 transition-colors">
            <div className="text-bystar-navy font-bold">🗺️ Sitemap</div>
          </Link>

          <Link to="/explore/accessibility" className="p-6 bg-gray-100 rounded-lg border border-gray-300 no-underline hover:bg-gray-200 transition-colors">
            <div className="text-bystar-navy font-bold">♿ Accessibility</div>
          </Link>
        </div>
      </section>

      {/* Extensibility */}
      <section className="pt-8 border-t border-gray-200">
        <h2 className="text-3xl text-gray-700 mb-5">🚀 Built on Gatsby's Foundation</h2>
        
        <p className="text-gray-600 leading-relaxed mb-5">
          This starter enhances Gatsby with a professional sidebar navigation system while preserving all of Gatsby's capabilities. You get the best of both worlds: a powerful content management layer and full access to Gatsby's ecosystem.
        </p>

        <p className="text-gray-600 leading-relaxed mb-5">
          The example pages below demonstrate that you can create pages outside the sidebar menu—useful for utility pages, advanced Gatsby features, or experimental content:
        </p>

        <ul className="list-none p-0 flex flex-wrap gap-4 mb-lg">
          <li className="mb-2">
            <Link to="/page-2" className="text-bystar-navy underline">
              Page 2
            </Link>
            <span className="text-gray-400 ml-2 text-sm">(Simple page linking)</span>
          </li>
          <li className="mb-2">
            <Link to="/using-typescript" className="text-bystar-navy underline">
              TypeScript
            </Link>
            <span className="text-gray-400 ml-2 text-sm">(Advanced example)</span>
          </li>
          <li className="mb-2">
            <Link to="/using-ssr" className="text-bystar-navy underline">
              SSR
            </Link>
            <span className="text-gray-400 ml-2 text-sm">(Server-side rendering)</span>
          </li>
          <li className="mb-2">
            <Link to="/using-dsg" className="text-bystar-navy underline">
              DSG
            </Link>
            <span className="text-gray-400 ml-2 text-sm">(Deferred static generation)</span>
          </li>
        </ul>

        <p className="text-gray-500 text-sm mt-5">
          Explore these pages to understand how the sidebar system is a <strong>layer on top of Gatsby</strong>, not a replacement for it.
        </p>
      </section>

      {/* Footer CTA */}
      <section className="mt-8 pt-5 border-t border-gray-200 text-center">
        <h2 className="text-3xl text-bystar-navy mb-2">Ready to Build?</h2>
        <p className="text-gray-600 mb-5">
          Clone the repository and start building your ByStar website today.
        </p>
        <a href="https://github.com/bisos-web/gatsby-starter-bystar-nestedSidebar" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-bystar-navy text-white rounded-lg font-bold text-lg hover:bg-opacity-90 hover:shadow-lg transition-all no-underline">
          Clone on GitHub →
        </a>
      </section>

    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
