import React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/seo"

export default function ThisStarter() {
  return (
    <Layout title="This Starter">
      <Seo title="This Starter" description="Learn about the Gatsby Starter: ByStar Nested Sidebar" />
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px 0" }}>
        <h1>🌳 Gatsby Starter: ByStar Nested Sidebar</h1>
        
        <p style={{ fontSize: "18px", marginBottom: "30px", color: "#555" }}>
          A professional, feature-rich Gatsby starter designed for ByStar and other
          projects requiring hierarchical navigation, flexible layouts, and
          privacy-respecting features. Built with React 18, Lunr.js search, and
          accessibility in mind.
        </p>

        <h2>✨ Key Features</h2>

        <h3>🎨 Layout & Navigation</h3>
        <ul style={{ marginBottom: "25px" }}>
          <li><strong>4-Part Layout:</strong> Header, flexible sidebar, main content area, and footer with independent visibility control</li>
          <li><strong>Hierarchical Nested Sidebar:</strong> Up to 5 levels deep with automatic expansion based on current page location</li>
          <li><strong>Smart Path Matching:</strong> Auto-highlights active pages and parent paths in navigation</li>
          <li><strong>Sibling Tabs:</strong> Horizontal tab navigation for pages without sidebars, includes parent navigation breadcrumbs</li>
          <li><strong>Visual Sitemap:</strong> Complete site hierarchy visualization</li>
          <li><strong>📱 Fully Responsive Design:</strong> Mobile-first approach using Tailwind CSS v4 with proper breakpoints (md: 768px, lg: 1024px)</li>
          <li><strong>🍔 Mobile Hamburger Menu:</strong> Animated hamburger menu on mobile screens with full-screen sidebar overlay</li>
          <li><strong>Mobile Sidebar Overlay:</strong> Touch-friendly sidebar that overlays on mobile when menu is open</li>
        </ul>

        <h3>🔍 Search & Discovery</h3>
        <ul style={{ marginBottom: "25px" }}>
          <li><strong>Client-Side Full-Text Search:</strong> Powered by Lunr.js for instant, privacy-respecting search</li>
          <li><strong>Search Results Page:</strong> Dedicated <code>/explore/search</code> page with integrated SearchBox component</li>
          <li><strong>Fast Indexing:</strong> Automatically indexes all pages from menu hierarchy</li>
        </ul>

        <h3>🎞️ Embedded Content</h3>
        <ul style={{ marginBottom: "25px" }}>
          <li><strong>Flexible Content Embedding:</strong> Embed external websites and services via iframes</li>
          <li><strong>Multiple Aspect Ratios:</strong> Support for 16:9, 4:3, 1:1, and auto aspect ratios</li>
          <li><strong>Security Controls:</strong> Configurable sandbox restrictions for iframe security</li>
          <li><strong>Error Handling:</strong> User-friendly error messages with fallback links</li>
          <li><strong>Responsive Embedding:</strong> Embedded content scales perfectly on all devices</li>
        </ul>

        <h3>♿ Accessibility & Standards</h3>
        <ul style={{ marginBottom: "25px" }}>
          <li><strong>WCAG 2.1 Compliant:</strong> Comprehensive accessibility documentation and implementation</li>
          <li><strong>Keyboard Navigation:</strong> Full keyboard support for all interactive elements</li>
          <li><strong>Screen Reader Ready:</strong> Proper semantic HTML and ARIA labels</li>
          <li><strong>Accessible Typography:</strong> Configurable text sizing with readable line-heights</li>
          <li><strong>High Contrast:</strong> Dark navy navigation (#001a4d) with proper color contrast ratios</li>
          <li><strong>Mobile Accessible:</strong> Touch-friendly controls with proper spacing and clear interaction targets</li>
        </ul>

        <h3>🎯 Content Organization</h3>
        <ul style={{ marginBottom: "25px" }}>
          <li><strong>Flexible Menu Structure:</strong> Centralized <code>menuData.js</code> for site hierarchy</li>
          <li><strong>Layout Control Props:</strong> <code>showHeader</code>, <code>showSidebar</code>, <code>showFooter</code> for layout variations</li>
          <li><strong>Multi-Level Navigation:</strong> Supports deeply nested page structures</li>
          <li><strong>Automatic Menu Building:</strong> Easy to extend with new sections and subsections</li>
          <li><strong>Responsive Typography:</strong> Adjusted margins and spacing for optimal readability on all screen sizes</li>
        </ul>

        <h3>🚀 Developer Experience</h3>
        <ul style={{ marginBottom: "25px" }}>
          <li><strong>React 18.2:</strong> Modern React with functional components and hooks</li>
          <li><strong>TypeScript Ready:</strong> Easily convert to TypeScript if needed</li>
          <li><strong>Tailwind CSS v4:</strong> Modern utility-first CSS framework for rapid UI development with responsive utilities</li>
          <li><strong>Responsive Design:</strong> Mobile-first approach with flexible layouts using Tailwind breakpoints</li>
          <li><strong>Hot Module Reloading:</strong> Instant feedback during development</li>
          <li><strong>PostCSS Pipeline:</strong> Optimized CSS compilation with Tailwind CSS and autoprefixer</li>
        </ul>

        <h3>📱 Features by Section</h3>
        <ul style={{ marginBottom: "25px" }}>
          <li><strong>Explore Section</strong> (<code>/explore/</code>): Accessibility guides, visual sitemap, search functionality, help page</li>
          <li><strong>About Section</strong> (<code>/about/</code>): Learn about the starter and its authors</li>
          <li><strong>Layout Examples:</strong> Pages with/without sidebars, headers, footers, and content-only layouts</li>
        </ul>
      </div>
    </Layout>
  )
}
