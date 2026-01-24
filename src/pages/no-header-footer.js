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
      {`<Layout showHeader={false} showFooter={false}>
  <h1>My Content</h1>
  <p>Navigation is via the sidebar...</p>
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
          <td style={{ padding: "0.75rem" }}>❌ No</td>
        </tr>
        <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
          <td style={{ padding: "0.75rem" }}>Sidebar</td>
          <td style={{ padding: "0.75rem" }}>✅ Yes</td>
        </tr>
        <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
          <td style={{ padding: "0.75rem" }}>Main Content</td>
          <td style={{ padding: "0.75rem" }}>✅ Yes</td>
        </tr>
        <tr>
          <td style={{ padding: "0.75rem" }}>Footer</td>
          <td style={{ padding: "0.75rem" }}>❌ No</td>
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
