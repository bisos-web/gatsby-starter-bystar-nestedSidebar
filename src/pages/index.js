import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      {/* Hero Section */}
      <section style={{ paddingBottom: "50px", borderBottom: "1px solid #e5e7eb", marginBottom: "50px" }}>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <StaticImage
            src="../images/example.png"
            loading="eager"
            width={64}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="ByStar Nested Sidebar"
            style={{ marginBottom: "20px" }}
          />
        </div>
        <h1 style={{ fontSize: "48px", marginBottom: "20px", color: "#001a4d", textAlign: "center" }}>
          🌳 Gatsby Starter: ByStar Nested Sidebar
        </h1>
        <p style={{ fontSize: "20px", lineHeight: "1.6", color: "#555", marginBottom: "30px" }}>
          A professional, feature-rich Gatsby starter designed for <strong>ByStar and hierarchical websites</strong>. 
          Features responsive navigation, flexible layouts, accessibility support, and privacy-respecting search—all built-in.
        </p>
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <Link to="/about/this-starter" style={{
            backgroundColor: "#001a4d",
            color: "white",
            padding: "12px 24px",
            borderRadius: "4px",
            textDecoration: "none",
            fontWeight: "bold"
          }}>
            Learn More
          </Link>
          <a href="https://github.com/bisos-web/gatsby-starter-bystar-nestedSidebar" target="_blank" rel="noopener noreferrer" style={{
            backgroundColor: "#f3f4f6",
            color: "#001a4d",
            padding: "12px 24px",
            borderRadius: "4px",
            textDecoration: "none",
            fontWeight: "bold",
            border: "1px solid #d1d5db"
          }}>
            View on GitHub
          </a>
        </div>
      </section>

      {/* Core Features */}
      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "30px", color: "#001a4d" }}>✨ Core Features</h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px" }}>
          
          <div style={{ padding: "20px", backgroundColor: "#f9fafb", borderRadius: "8px", borderLeft: "4px solid #001a4d" }}>
            <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "#001a4d" }}>🎨 Hierarchical Navigation</h3>
            <p style={{ color: "#666", lineHeight: "1.5" }}>
              Nested sidebar supporting up to 5 levels deep with smart auto-expansion based on current page location.
            </p>
          </div>

          <div style={{ padding: "20px", backgroundColor: "#f9fafb", borderRadius: "8px", borderLeft: "4px solid #001a4d" }}>
            <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "#001a4d" }}>📱 Fully Responsive</h3>
            <p style={{ color: "#666", lineHeight: "1.5" }}>
              Mobile-first design with Tailwind CSS v4. Hamburger menu on mobile, permanent sidebar on desktop.
            </p>
          </div>

          <div style={{ padding: "20px", backgroundColor: "#f9fafb", borderRadius: "8px", borderLeft: "4px solid #001a4d" }}>
            <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "#001a4d" }}>🔍 Privacy-First Search</h3>
            <p style={{ color: "#666", lineHeight: "1.5" }}>
              Client-side full-text search powered by Lunr.js. No data sent to external servers.
            </p>
          </div>

          <div style={{ padding: "20px", backgroundColor: "#f9fafb", borderRadius: "8px", borderLeft: "4px solid #001a4d" }}>
            <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "#001a4d" }}>♿ Accessible</h3>
            <p style={{ color: "#666", lineHeight: "1.5" }}>
              WCAG 2.1 compliant with keyboard navigation, screen reader support, and proper contrast ratios.
            </p>
          </div>

          <div style={{ padding: "20px", backgroundColor: "#f9fafb", borderRadius: "8px", borderLeft: "4px solid #001a4d" }}>
            <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "#001a4d" }}>🎞️ Embed Content</h3>
            <p style={{ color: "#666", lineHeight: "1.5" }}>
              Flexible iframe embedding system for external websites, YouTube, and other services with security controls.
            </p>
          </div>

          <div style={{ padding: "20px", backgroundColor: "#f9fafb", borderRadius: "8px", borderLeft: "4px solid #001a4d" }}>
            <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "#001a4d" }}>🛠️ Flexible Layouts</h3>
            <p style={{ color: "#666", lineHeight: "1.5" }}>
              Control header, sidebar, and footer visibility per page. From full-width to app-like interfaces.
            </p>
          </div>

        </div>
      </section>

      {/* Getting Started */}
      <section style={{ marginBottom: "50px", backgroundColor: "#f9fafb", padding: "40px", borderRadius: "8px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px", color: "#001a4d" }}>🚀 Quick Start</h2>
        
        <pre style={{
          backgroundColor: "#2d3748",
          color: "#e2e8f0",
          padding: "20px",
          borderRadius: "8px",
          overflowX: "auto",
          marginBottom: "20px"
        }}>
{`# Clone the repository
git clone https://github.com/bisos-web/gatsby-starter-bystar-nestedSidebar.git
cd gatsby-starter-bystar-nestedSidebar

# Install dependencies
npm install

# Start development server
npm run develop

# Visit http://localhost:8000`}
        </pre>

        <p style={{ color: "#666", marginBottom: "20px" }}>
          Then explore the site to see the features in action. Visit the <strong>For Developers</strong> section for comprehensive guides on creating pages, customizing layouts, and embedding content.
        </p>
      </section>

      {/* Explore Section */}
      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "30px", color: "#001a4d" }}>🔗 Explore the Starter</h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
          
          <Link to="/about/this-starter" style={{
            padding: "20px",
            backgroundColor: "#f3f4f6",
            borderRadius: "8px",
            textDecoration: "none",
            color: "#001a4d",
            fontWeight: "bold",
            border: "1px solid #d1d5db",
            transition: "all 0.2s"
          }}>
            📖 About This Starter
          </Link>

          <Link to="/developers/creating-pages" style={{
            padding: "20px",
            backgroundColor: "#f3f4f6",
            borderRadius: "8px",
            textDecoration: "none",
            color: "#001a4d",
            fontWeight: "bold",
            border: "1px solid #d1d5db",
            transition: "all 0.2s"
          }}>
            ✏️ Creating Pages Guide
          </Link>

          <Link to="/developers/layout-examples" style={{
            padding: "20px",
            backgroundColor: "#f3f4f6",
            borderRadius: "8px",
            textDecoration: "none",
            color: "#001a4d",
            fontWeight: "bold",
            border: "1px solid #d1d5db",
            transition: "all 0.2s"
          }}>
            🎨 Layout Examples
          </Link>

          <Link to="/explore/search" style={{
            padding: "20px",
            backgroundColor: "#f3f4f6",
            borderRadius: "8px",
            textDecoration: "none",
            color: "#001a4d",
            fontWeight: "bold",
            border: "1px solid #d1d5db",
            transition: "all 0.2s"
          }}>
            🔍 Search
          </Link>

          <Link to="/sitemap" style={{
            padding: "20px",
            backgroundColor: "#f3f4f6",
            borderRadius: "8px",
            textDecoration: "none",
            color: "#001a4d",
            fontWeight: "bold",
            border: "1px solid #d1d5db",
            transition: "all 0.2s"
          }}>
            🗺️ Sitemap
          </Link>

          <Link to="/explore/accessibility" style={{
            padding: "20px",
            backgroundColor: "#f3f4f6",
            borderRadius: "8px",
            textDecoration: "none",
            color: "#001a4d",
            fontWeight: "bold",
            border: "1px solid #d1d5db",
            transition: "all 0.2s"
          }}>
            ♿ Accessibility
          </Link>

        </div>
      </section>

      {/* Beneath the Layers */}
      <section style={{ paddingTop: "50px", borderTop: "1px solid #e5e7eb" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px", color: "#666" }}>📚 Beneath the Layers</h2>
        
        <p style={{ color: "#666", marginBottom: "20px", lineHeight: "1.6" }}>
          This starter is built on top of Gatsby's foundation. You can still use all standard Gatsby features and patterns—these example pages demonstrate that pages don't need to be part of the sidebar menu:
        </p>

        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexWrap: "wrap", gap: "15px" }}>
          <li>
            <Link to="/page-2" style={{ color: "#001a4d", textDecoration: "underline" }}>
              Page 2
            </Link>
            <span style={{ color: "#999", marginLeft: "10px" }}>(Simple page linking)</span>
          </li>
          <li>
            <Link to="/using-typescript" style={{ color: "#001a4d", textDecoration: "underline" }}>
              TypeScript
            </Link>
            <span style={{ color: "#999", marginLeft: "10px" }}>(Advanced example)</span>
          </li>
          <li>
            <Link to="/using-ssr" style={{ color: "#001a4d", textDecoration: "underline" }}>
              SSR
            </Link>
            <span style={{ color: "#999", marginLeft: "10px" }}>(Server-side rendering)</span>
          </li>
          <li>
            <Link to="/using-dsg" style={{ color: "#001a4d", textDecoration: "underline" }}>
              DSG
            </Link>
            <span style={{ color: "#999", marginLeft: "10px" }}>(Deferred static generation)</span>
          </li>
        </ul>

        <p style={{ color: "#999", fontSize: "14px", marginTop: "30px" }}>
          These pages show that you can build any Gatsby site on top of this starter while leveraging the Nested Sidebar system for your main content navigation.
        </p>
      </section>

      {/* Footer CTA */}
      <section style={{ marginTop: "50px", paddingTop: "30px", borderTop: "1px solid #e5e7eb", textAlign: "center" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "15px", color: "#001a4d" }}>Ready to Build?</h2>
        <p style={{ color: "#666", marginBottom: "25px" }}>
          Clone the repository and start building your ByStar website today.
        </p>
        <a href="https://github.com/bisos-web/gatsby-starter-bystar-nestedSidebar" target="_blank" rel="noopener noreferrer" style={{
          backgroundColor: "#001a4d",
          color: "white",
          padding: "12px 32px",
          borderRadius: "4px",
          textDecoration: "none",
          fontWeight: "bold",
          display: "inline-block"
        }}>
          Clone on GitHub →
        </a>
      </section>

    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
