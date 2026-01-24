import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const ContentOnlyPage = () => (
  <Layout showHeader={false} showSidebar={false} showFooter={false}>
    <h1>Content Only Layout Example</h1>
    
    <h2>How It Works</h2>
    <p>
      This page demonstrates the <strong>Content Only</strong> layout variant. The header, sidebar,
      and footer are all hidden, dedicating the entire viewport to your content. This is the most
      immersive layout option.
    </p>

    <h3>Configuration</h3>
    <pre className="bg-gray-900 text-gray-300 p-4 rounded overflow-auto text-xs">
      {`<Layout 
  showHeader={false} 
  showSidebar={false} 
  showFooter={false}
>
  <h1>My Content</h1>
  <p>Full-screen content here...</p>
</Layout>`}
    </pre>

    <h2>What's Visible</h2>
    <table className="w-full border-collapse my-4">
      <thead>
        <tr className="bg-gray-100 border-b-2 border-gray-300">
          <th className="px-3 py-3 text-left font-bold">Component</th>
          <th className="px-3 py-3 text-left font-bold">Visible?</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-200">
          <td className="px-3 py-3">Header</td>
          <td className="px-3 py-3">❌ No</td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="px-3 py-3">Sidebar</td>
          <td className="px-3 py-3">❌ No</td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="px-3 py-3">Main Content</td>
          <td className="px-3 py-3">✅ Yes (Full Screen)</td>
        </tr>
        <tr>
          <td className="px-3 py-3">Footer</td>
          <td className="px-3 py-3">❌ No</td>
        </tr>
      </tbody>
    </table>

    <h2>Use Cases</h2>
    <ul>
      <li><strong>Full-Screen Applications:</strong> Web apps needing maximum screen real estate</li>
      <li><strong>Embedded Content:</strong> Iframes and third-party services displayed in full</li>
      <li><strong>Landing Pages:</strong> Splash pages with focused messaging</li>
      <li><strong>Immersive Experiences:</strong> Video, presentations, or interactive content</li>
      <li><strong>Dashboards:</strong> Analytics and monitoring interfaces</li>
      <li><strong>Focused Pages:</strong> Single-purpose pages where navigation would distract</li>
    </ul>

    <h2>Advantages</h2>
    <ul>
      <li><strong>Maximum Space:</strong> 100% of viewport dedicated to content</li>
      <li><strong>Immersive:</strong> No distractions from site chrome or navigation</li>
      <li><strong>Focused:</strong> Users stay focused on the primary content</li>
      <li><strong>Mobile-Friendly:</strong> Perfect for mobile-first designs</li>
      <li><strong>Professional:</strong> Feels like a dedicated application</li>
    </ul>

    <h2>Comparison with Other Layouts</h2>
    <ul>
      <li>
        <strong>No Sidebar</strong> - Header ✓ | Sidebar ✗ | Footer ✓
      </li>
      <li>
        <strong>No Header/Footer</strong> - Header ✗ | Sidebar ✓ | Footer ✗
      </li>
      <li>
        <strong>Content Only</strong> (this page) - Header ✗ | Sidebar ✗ | Footer ✗
      </li>
      <li>
        <strong>Standard</strong> - Header ✓ | Sidebar ✓ | Footer ✓
      </li>
    </ul>

    <h2>Code Template</h2>
    <pre className="bg-gray-900 text-gray-300 p-4 rounded overflow-auto text-xs">
      {`import Layout from "../components/Layout"
import Seo from "../components/seo"

export default function MyPage() {
  return (
    <Layout 
      showHeader={false}
      showSidebar={false}
      showFooter={false}
    >
      <h1>Full-Screen Content</h1>
      <p>Your immersive content here...</p>
    </Layout>
  )
}

export const Head = () => <Seo title="My Page" />`}
    </pre>

    <h2>Related Examples</h2>
    <ul>
      <li>See <Link to="/embedded-full-width">Embedded Content</Link> for embedding external services</li>
      <li>See <Link to="/no-sidebar">No Sidebar</Link> for wide-content layouts with header/footer</li>
      <li>See <Link to="/no-header-footer">No Header/Footer</Link> for app-like layouts with sidebar</li>
    </ul>
  </Layout>
)

export const Head = () => <Seo title="Content Only" />

export default ContentOnlyPage
