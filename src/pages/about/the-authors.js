import React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/seo"

export default function TheAuthors() {
  return (
    <Layout title="The Authors">
      <Seo title="The Authors" description="Learn about the authors of this Gatsby starter" />
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px 0" }}>
        <h1>The Authors</h1>
        
        <h2>Development & Credits</h2>
        
        <p>
          This Gatsby starter was developed by <strong><a href="https://github.com/mohsenBanan" target="_blank" rel="noopener noreferrer">Mohsen Banan</a></strong>, 
          built upon the Gatsby <a href="https://www.npmjs.com/package/my-default-starter" target="_blank" rel="noopener noreferrer">my-default-starter</a> template.
        </p>

        <p>
          The development of this starter was enabled by several powerful tools and AI assistants:
        </p>

        <ul style={{ marginBottom: "25px" }}>
          <li><strong>Claude Haiku</strong> - AI assistant for development and implementation</li>
          <li><strong>VSCode</strong> - Code editor and development environment</li>
          <li><strong>GitHub Copilot</strong> - Coding assistance and suggestions</li>
          <li><strong>Gatsby</strong> - React-based static site generator</li>
          <li><strong>Tailwind CSS</strong> - Utility-first CSS framework</li>
          <li><strong>Lunr.js</strong> - Client-side search functionality</li>
        </ul>

        <h2>Purpose</h2>

        <p>
          This starter serves as a professional foundation for <strong>ByStar websites</strong> - providing 
          hierarchical navigation, flexible layouts, privacy-respecting features, and comprehensive 
          accessibility support out of the box.
        </p>

        <h2>Learn More</h2>

        <p>
          For more details about the ByStar ecosystem and this starter's role within it, visit:
        </p>

        <p style={{ marginBottom: "25px" }}>
          <a href="https://github.com/bxplpc/120033" target="_blank" rel="noopener noreferrer">
            ByStar Project Repository: github.com/bxplpc/120033
          </a>
        </p>

        <p style={{ fontSize: "14px", color: "#666" }}>
          Built for ByStar and the Libre-Halaal Digital Ecosystem
        </p>
      </div>
    </Layout>
  )
}
