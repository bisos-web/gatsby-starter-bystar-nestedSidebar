import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/seo"

export default function LayoutExamplesPage() {
  return (
    <Layout>
      <h1>Layout Examples</h1>
      <p>
        Explore different layout configurations available in this Gatsby starter. Each example demonstrates
        how to use specific layout properties to customize the visibility of header, sidebar, and footer components.
      </p>

      <h2>Available Layouts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {/* No Sidebar Card */}
        <Link to="/no-sidebar" className="no-underline">
          <div className="p-6 border border-gray-300 rounded-lg bg-gray-50 transition-all cursor-pointer hover:shadow-lg hover:-translate-y-1">
            <h3 className="mt-0 text-gray-900">No Sidebar</h3>
            <p className="text-gray-600 mb-4">
              Header ✓ | Sidebar ✗ | Footer ✓
            </p>
            <p className="text-sm text-gray-700">
              Full-width content with header and footer navigation. Perfect for landing pages
              and wide-format content displays.
            </p>
          </div>
        </Link>

        {/* No Header/Footer Card */}
        <Link to="/no-header-footer" className="no-underline">
          <div className="p-6 border border-gray-300 rounded-lg bg-gray-50 transition-all cursor-pointer hover:shadow-lg hover:-translate-y-1">
            <h3 className="mt-0 text-gray-900">No Header/Footer</h3>
            <p className="text-gray-600 mb-4">
              Header ✗ | Sidebar ✓ | Footer ✗
            </p>
            <p className="text-sm text-gray-700">
              Sidebar-based navigation with content focus. Ideal for admin panels,
              dashboards, and application interfaces.
            </p>
          </div>
        </Link>

        {/* Content Only Card */}
        <Link to="/content-only" className="no-underline">
          <div className="p-6 border border-gray-300 rounded-lg bg-gray-50 transition-all cursor-pointer hover:shadow-lg hover:-translate-y-1">
            <h3 className="mt-0 text-gray-900">Content Only</h3>
            <p className="text-gray-600 mb-4">
              Header ✗ | Sidebar ✗ | Footer ✗
            </p>
            <p className="text-sm text-gray-700">
              Full-viewport immersive experience. Perfect for embedded content,
              applications, and focused interactions.
            </p>
          </div>
        </Link>
      </div>

      <h2 className="mt-12">Layout Comparison</h2>
      <table className="w-full border-collapse mt-4">
        <thead>
          <tr className="bg-gray-100 border-b-2 border-gray-300">
            <th className="px-3 py-3 text-left font-bold">Layout</th>
            <th className="px-3 py-3 text-center font-bold">Header</th>
            <th className="px-3 py-3 text-center font-bold">Sidebar</th>
            <th className="px-3 py-3 text-center font-bold">Footer</th>
            <th className="px-3 py-3 text-left font-bold">Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="px-3 py-3 font-bold">No Sidebar</td>
            <td className="px-3 py-3 text-center">✓</td>
            <td className="px-3 py-3 text-center">✗</td>
            <td className="px-3 py-3 text-center">✓</td>
            <td className="px-3 py-3">Wide content, landing pages</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-3 py-3 font-bold">No Header/Footer</td>
            <td className="px-3 py-3 text-center">✗</td>
            <td className="px-3 py-3 text-center">✓</td>
            <td className="px-3 py-3 text-center">✗</td>
            <td className="px-3 py-3">Dashboards, admin panels</td>
          </tr>
          <tr>
            <td className="px-3 py-3 font-bold">Content Only</td>
            <td className="px-3 py-3 text-center">✗</td>
            <td className="px-3 py-3 text-center">✗</td>
            <td className="px-3 py-3 text-center">✗</td>
            <td className="px-3 py-3">Immersive, full-screen apps</td>
          </tr>
        </tbody>
      </table>

      <h2 className="mt-12">How to Use</h2>
      <p>
        Each layout example includes comprehensive documentation explaining how to configure the layout,
        what components are visible, and the best use cases. Click on any layout above to explore its
        full documentation and code templates.
      </p>
      <p>
        Use these examples as reference implementations or starting points for your own custom layouts.
      </p>
    </Layout>
  )
}

export const Head = () => <Seo title="Layout Examples" />
