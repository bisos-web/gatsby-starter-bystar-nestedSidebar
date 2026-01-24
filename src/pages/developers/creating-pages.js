import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/seo"

export default function CreatingPagesPage() {
  return (
    <Layout>
      <h1>Creating Pages</h1>
      
      <p>
        This guide shows you how to add new pages to your Gatsby site. Creating pages involves two main steps:
        adding an entry to the menu structure and creating a page component.
      </p>

      <h2>Step 1: Add to Menu</h2>

      <p>
        Edit <code>src/data/menuData.js</code> and add your page to the menu hierarchy:
      </p>

      <pre
        style={{
          backgroundColor: "#1f2937",
          color: "#e5e7eb",
          padding: "1rem",
          borderRadius: "4px",
          overflow: "auto",
          fontSize: "0.85rem",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        {`export const menuData = [
  // ... existing items ...
  {
    label: "My New Page",
    path: "/my-page",
    children: [
      {
        label: "Child Page",
        path: "/my-page/child",
      }
    ]
  }
]`}
      </pre>

      <h3>Menu Structure Options</h3>

      <p>You can create pages at different levels of nesting:</p>

      <ul>
        <li>
          <strong>Top-Level Page:</strong>
          <pre style={{ backgroundColor: "#f3f4f6", padding: "0.5rem", borderRadius: "4px", fontSize: "0.9rem" }}>
            {`{ label: "Contact", path: "/contact" }`}
          </pre>
        </li>
        <li>
          <strong>Nested Child Page:</strong>
          <pre style={{ backgroundColor: "#f3f4f6", padding: "0.5rem", borderRadius: "4px", fontSize: "0.9rem" }}>
            {`{
  label: "About",
  path: "/about",
  children: [
    { label: "Team", path: "/about/team" },
    { label: "History", path: "/about/history" }
  ]
}`}
          </pre>
        </li>
        <li>
          <strong>Deeply Nested (up to 5 levels):</strong>
          <pre style={{ backgroundColor: "#f3f4f6", padding: "0.5rem", borderRadius: "4px", fontSize: "0.9rem" }}>
            {`{
  label: "Docs",
  path: "/docs",
  children: [
    {
      label: "Guides",
      path: "/docs/guides",
      children: [
        {
          label: "Getting Started",
          path: "/docs/guides/getting-started"
        }
      ]
    }
  ]
}`}
          </pre>
        </li>
      </ul>

      <h2>Step 2: Create Page Component</h2>

      <p>
        Create a new file at <code>src/pages/my-page.js</code> (or the appropriate nested directory):
      </p>

      <pre
        style={{
          backgroundColor: "#1f2937",
          color: "#e5e7eb",
          padding: "1rem",
          borderRadius: "4px",
          overflow: "auto",
          fontSize: "0.85rem",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        {`import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"

export default function MyPage() {
  return (
    <Layout showHeader showSidebar showFooter>
      <h1>My New Page</h1>
      <p>Your content here...</p>
    </Layout>
  )
}

export const Head = () => <Seo title="My Page" />`}
      </pre>

      <h3>Layout Control Props</h3>

      <p>The Layout component supports these props to customize visibility:</p>

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
            <th style={{ padding: "0.75rem", textAlign: "left", fontWeight: "bold" }}>Prop</th>
            <th style={{ padding: "0.75rem", textAlign: "left", fontWeight: "bold" }}>Type</th>
            <th style={{ padding: "0.75rem", textAlign: "left", fontWeight: "bold" }}>Default</th>
            <th style={{ padding: "0.75rem", textAlign: "left", fontWeight: "bold" }}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
            <td style={{ padding: "0.75rem" }}>showHeader</td>
            <td style={{ padding: "0.75rem" }}>boolean</td>
            <td style={{ padding: "0.75rem" }}>true</td>
            <td style={{ padding: "0.75rem" }}>Show/hide the header component</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
            <td style={{ padding: "0.75rem" }}>showSidebar</td>
            <td style={{ padding: "0.75rem" }}>boolean</td>
            <td style={{ padding: "0.75rem" }}>true</td>
            <td style={{ padding: "0.75rem" }}>Show/hide the sidebar navigation</td>
          </tr>
          <tr>
            <td style={{ padding: "0.75rem" }}>showFooter</td>
            <td style={{ padding: "0.75rem" }}>boolean</td>
            <td style={{ padding: "0.75rem" }}>true</td>
            <td style={{ padding: "0.75rem" }}>Show/hide the footer component</td>
          </tr>
        </tbody>
      </table>

      <h2>Layout Examples</h2>

      <p>
        For examples of different layout configurations, see the <Link to="/developers/layout-examples">Layout Examples</Link> section.
      </p>

      <h2>File Organization</h2>

      <p>
        Pages are automatically created based on file paths in <code>src/pages/</code>:
      </p>

      <ul>
        <li><code>src/pages/my-page.js</code> → <code>/my-page</code></li>
        <li><code>src/pages/docs/guide.js</code> → <code>/docs/guide</code></li>
        <li><code>src/pages/docs/guides/getting-started.js</code> → <code>/docs/guides/getting-started</code></li>
      </ul>

      <h2>Tips</h2>

      <ul>
        <li>
          <strong>Path Matching:</strong> The file path structure should match your URL structure for best results
        </li>
        <li>
          <strong>Menu Organization:</strong> All pages should be added to menuData.js so they appear in navigation
        </li>
        <li>
          <strong>SEO:</strong> Always export a Head component with appropriate title and description
        </li>
        <li>
          <strong>Responsive:</strong> Use the Layout component's props to control layout on different screen sizes
        </li>
        <li>
          <strong>Hot Reload:</strong> Changes to pages are automatically reflected in development mode
        </li>
      </ul>

      <h2>Related Documentation</h2>

      <ul>
        <li><Link to="/developers/layout-examples">Layout Examples</Link> - See different layout configurations</li>
        <li><Link to="/developers/layout-examples/no-sidebar">No Sidebar Layout</Link> - Full-width content example</li>
        <li><Link to="/developers/layout-examples/no-header-footer">No Header/Footer Layout</Link> - App-like interface example</li>
        <li><Link to="/developers/layout-examples/content-only">Content Only Layout</Link> - Full-screen content example</li>
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="Creating Pages" />
