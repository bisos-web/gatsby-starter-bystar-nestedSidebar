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
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginTop: '2rem',
      }}>
        {/* No Sidebar Card */}
        <Link to="/no-sidebar" style={{ textDecoration: 'none' }}>
          <div style={{
            padding: '1.5rem',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            backgroundColor: '#f9fafb',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <h3 style={{ marginTop: 0, color: '#1f2937' }}>No Sidebar</h3>
            <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
              Header ✓ | Sidebar ✗ | Footer ✓
            </p>
            <p style={{ fontSize: '0.9rem', color: '#4b5563' }}>
              Full-width content with header and footer navigation. Perfect for landing pages
              and wide-format content displays.
            </p>
          </div>
        </Link>

        {/* No Header/Footer Card */}
        <Link to="/no-header-footer" style={{ textDecoration: 'none' }}>
          <div style={{
            padding: '1.5rem',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            backgroundColor: '#f9fafb',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <h3 style={{ marginTop: 0, color: '#1f2937' }}>No Header/Footer</h3>
            <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
              Header ✗ | Sidebar ✓ | Footer ✗
            </p>
            <p style={{ fontSize: '0.9rem', color: '#4b5563' }}>
              Sidebar-based navigation with content focus. Ideal for admin panels,
              dashboards, and application interfaces.
            </p>
          </div>
        </Link>

        {/* Content Only Card */}
        <Link to="/content-only" style={{ textDecoration: 'none' }}>
          <div style={{
            padding: '1.5rem',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            backgroundColor: '#f9fafb',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <h3 style={{ marginTop: 0, color: '#1f2937' }}>Content Only</h3>
            <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
              Header ✗ | Sidebar ✗ | Footer ✗
            </p>
            <p style={{ fontSize: '0.9rem', color: '#4b5563' }}>
              Full-viewport immersive experience. Perfect for embedded content,
              applications, and focused interactions.
            </p>
          </div>
        </Link>
      </div>

      <h2 style={{ marginTop: '3rem' }}>Layout Comparison</h2>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '1rem',
      }}>
        <thead>
          <tr style={{ backgroundColor: '#f3f4f6', borderBottom: '2px solid #d1d5db' }}>
            <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 'bold' }}>Layout</th>
            <th style={{ padding: '0.75rem', textAlign: 'center', fontWeight: 'bold' }}>Header</th>
            <th style={{ padding: '0.75rem', textAlign: 'center', fontWeight: 'bold' }}>Sidebar</th>
            <th style={{ padding: '0.75rem', textAlign: 'center', fontWeight: 'bold' }}>Footer</th>
            <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 'bold' }}>Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
            <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>No Sidebar</td>
            <td style={{ padding: '0.75rem', textAlign: 'center' }}>✓</td>
            <td style={{ padding: '0.75rem', textAlign: 'center' }}>✗</td>
            <td style={{ padding: '0.75rem', textAlign: 'center' }}>✓</td>
            <td style={{ padding: '0.75rem' }}>Wide content, landing pages</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
            <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>No Header/Footer</td>
            <td style={{ padding: '0.75rem', textAlign: 'center' }}>✗</td>
            <td style={{ padding: '0.75rem', textAlign: 'center' }}>✓</td>
            <td style={{ padding: '0.75rem', textAlign: 'center' }}>✗</td>
            <td style={{ padding: '0.75rem' }}>Dashboards, admin panels</td>
          </tr>
          <tr>
            <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Content Only</td>
            <td style={{ padding: '0.75rem', textAlign: 'center' }}>✗</td>
            <td style={{ padding: '0.75rem', textAlign: 'center' }}>✗</td>
            <td style={{ padding: '0.75rem', textAlign: 'center' }}>✗</td>
            <td style={{ padding: '0.75rem' }}>Immersive, full-screen apps</td>
          </tr>
        </tbody>
      </table>

      <h2 style={{ marginTop: '3rem' }}>How to Use</h2>
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
