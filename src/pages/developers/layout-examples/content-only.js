import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/Layout"
import Seo from "../../../components/seo"

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
          <td style={{ padding: "0.75rem" }}>❌ No</td>
        </tr>
        <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
          <td style={{ padding: "0.75rem" }}>Main Content</td>
          <td style={{ padding: "0.75rem" }}>✅ Yes (Full Screen)</td>
        </tr>
        <tr>
          <td style={{ padding: "0.75rem" }}>Footer</td>
          <td style={{ padding: "0.75rem" }}>❌ No</td>
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

    <h2>Navigation Back to Examples</h2>
    <p>
      Since this layout hides all site navigation, you can use the link below or open your browser's
      back button to return to the Layout Examples directory:
    </p>
    <div style={{ marginTop: "1.5rem", padding: "1rem", backgroundColor: "#f0f4f8", borderRadius: "4px" }}>
      <Link to="/developers/layout-examples" style={{ color: "#0066cc", textDecoration: "none", fontWeight: "bold" }}>
        ← Back to Layout Examples
      </Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Content Only" />

export default ContentOnlyPage
