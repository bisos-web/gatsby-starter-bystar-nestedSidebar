import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const NoSidebarPage = () => (
  <Layout showSidebar={false}>
    <h1>No Sidebar Layout Example</h1>
    
    <h2>How It Works</h2>
    <p>
      This page demonstrates the <strong>No Sidebar</strong> layout variant. The sidebar navigation
      is hidden, allowing the main content to expand and use the full available width.
    </p>

    <h3>Configuration</h3>
    <pre className="bg-gray-900 text-gray-300 p-4 rounded overflow-auto text-xs">
      {`<Layout showSidebar={false}>
  <h1>My Content</h1>
  <p>This content spans the full width...</p>
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
          <td className="px-3 py-3">✅ Yes</td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="px-3 py-3">Sidebar</td>
          <td className="px-3 py-3">❌ No</td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="px-3 py-3">Main Content</td>
          <td className="px-3 py-3">✅ Yes (Full Width)</td>
        </tr>
        <tr>
          <td className="px-3 py-3">Footer</td>
          <td className="px-3 py-3">✅ Yes</td>
        </tr>
      </tbody>
    </table>

    <h2>Use Cases</h2>
    <ul>
      <li><strong>Full-Width Content:</strong> Pages that need maximum horizontal space</li>
      <li><strong>Landing Pages:</strong> Marketing or introduction pages without navigation clutter</li>
      <li><strong>Detail Pages:</strong> Full-width article or resource pages</li>
      <li><strong>Wide Layouts:</strong> Tables, charts, or wide-format content</li>
      <li><strong>Focused Content:</strong> Pages where navigation would distract from the content</li>
    </ul>

    <h2>What Happens on Mobile?</h2>
    <p>
      On mobile screens (less than 768px), the layout automatically switches to show the hamburger menu
      instead of a sidebar. Users can toggle the mobile menu to access navigation without sacrificing
      screen space.
    </p>

    <h2>Comparison with Other Layouts</h2>
    <ul>
      <li>
        <strong>No Sidebar</strong> (this page) - Header ✓ | Sidebar ✗ | Footer ✓
      </li>
      <li>
        <strong>No Header/Footer</strong> - Header ✗ | Sidebar ✓ | Footer ✗
      </li>
      <li>
        <strong>Content Only</strong> - Header ✗ | Sidebar ✗ | Footer ✗
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
    <Layout showSidebar={false}>
      <h1>Full-Width Content</h1>
      <p>Your content here...</p>
    </Layout>
  )
}

export const Head = () => <Seo title="My Page" />`}
    </pre>

    <Link to="/">Back to home</Link>
  </Layout>
)

export const Head = () => <Seo title="No Sidebar" />

export default NoSidebarPage
