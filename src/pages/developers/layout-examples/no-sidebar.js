import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/Layout"
import Seo from "../../../components/seo"

const NoSidebarPage = () => (
  <Layout showSidebar={false}>
    <h1>No Sidebar Layout Example</h1>
    
    <h2>How It Works</h2>
    <p>
      This page demonstrates the <strong>No Sidebar</strong> layout variant. The sidebar navigation
      is hidden, allowing the main content to expand and use the full available width.
    </p>

    <h3>Configuration</h3>
    <pre
      style={{
        backgroundColor: "#1f2937",
        color: "#e5e7eb",
        padding: "1rem",
        borderRadius: "4px",
        overflow: "auto",
        fontSize: "0.85rem",
      }}
    >
      {`<Layout showSidebar={false}>
  <h1>My Content</h1>
  <p>This content spans the full width...</p>
</Layout>`}
    </pre>

    <h2>What's Visible</h2>
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
    >
      <thead>
        <tr style={{ backgroundColor: "#f3f4f6", borderBottom: "2px solid #d1d5db" }}>
          <th style={{ padding: "0.75rem", textAlign: "left", fontWeight: "bold" }}>Component</th>
          <th style={{ padding: "0.75rem", textAlign: "left", fontWeight: "bold" }}>Visible?</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
          <td style={{ padding: "0.75rem" }}>Header</td>
          <td style={{ padding: "0.75rem" }}>✅ Yes</td>
        </tr>
        <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
          <td style={{ padding: "0.75rem" }}>Sidebar</td>
          <td style={{ padding: "0.75rem" }}>❌ No</td>
        </tr>
        <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
          <td style={{ padding: "0.75rem" }}>Main Content</td>
          <td style={{ padding: "0.75rem" }}>✅ Yes (Full Width)</td>
        </tr>
        <tr>
          <td style={{ padding: "0.75rem" }}>Footer</td>
          <td style={{ padding: "0.75rem" }}>✅ Yes</td>
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
    <pre
      style={{
        backgroundColor: "#1f2937",
        color: "#e5e7eb",
        padding: "1rem",
        borderRadius: "4px",
        overflow: "auto",
        fontSize: "0.85rem",
      }}
    >
      {`import Layout from "../../../components/Layout"
import Seo from "../../../components/seo"

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

    <Link to="/developers/layout-examples">← Back to Layout Examples</Link>
  </Layout>
)

export const Head = () => <Seo title="No Sidebar" />

export default NoSidebarPage
