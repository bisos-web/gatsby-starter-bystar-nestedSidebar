import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const NoHeaderFooterPage = () => (
  <Layout showHeader={false} showFooter={false}>
    <h1>No Header/Footer Layout Example</h1>
    
    <h2>How It Works</h2>
    <p>
      This page demonstrates the <strong>No Header/Footer</strong> layout variant. The header and
      footer are hidden, but the sidebar navigation remains visible. This gives a clean,
      application-like interface while keeping navigation accessible.
    </p>

    <h3>Configuration</h3>
    <pre className="bg-gray-900 text-gray-300 p-4 rounded overflow-auto text-xs">
      {`<Layout showHeader={false} showFooter={false}>
  <h1>My Content</h1>
  <p>Navigation is via the sidebar...</p>
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
          <td className="px-3 py-3">✅ Yes</td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="px-3 py-3">Main Content</td>
          <td className="px-3 py-3">✅ Yes</td>
        </tr>
        <tr>
          <td className="px-3 py-3">Footer</td>
          <td className="px-3 py-3">❌ No</td>
        </tr>
      </tbody>
    </table>

    <h2>Use Cases</h2>
    <ul>
      <li><strong>Admin Panels:</strong> Application-like interfaces for administrators</li>
      <li><strong>Dashboard Interfaces:</strong> Monitoring and analytics dashboards</li>
      <li><strong>Internal Tools:</strong> Private application pages with sidebar navigation</li>
      <li><strong>Settings Pages:</strong> Configuration areas where only sidebar nav is needed</li>
      <li><strong>Focused Apps:</strong> Applications where header/footer would reduce screen space</li>
    </ul>

    <h2>When to Use This</h2>
    <p>
      This layout is perfect when you want to maximize screen real estate for content while keeping
      navigation always accessible via the sidebar. The absence of header and footer makes it feel
      more like a dedicated application than a website.
    </p>

    <h2>Comparison with Other Layouts</h2>
    <ul>
      <li>
        <strong>No Sidebar</strong> - Header ✓ | Sidebar ✗ | Footer ✓
      </li>
      <li>
        <strong>No Header/Footer</strong> (this page) - Header ✗ | Sidebar ✓ | Footer ✗
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
    <Layout showHeader={false} showFooter={false}>
      <h1>Admin Panel</h1>
      <p>Your admin content here...</p>
    </Layout>
  )
}

export const Head = () => <Seo title="My Page" />`}
    </pre>

    <Link to="/">Back to home</Link>
  </Layout>
)

export const Head = () => <Seo title="No Header/Footer" />

export default NoHeaderFooterPage
