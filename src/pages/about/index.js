import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/seo"

export default function About() {
  return (
    <Layout title="About" showSidebar={true}>
      <Seo title="About" description="Learn about this Gatsby starter and its creators" />
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px 0" }}>
        <h1>About</h1>
        
        <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#555", marginBottom: "40px" }}>
          Explore the sections below to learn more about this starter and the people behind it.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
          
          <Link to="/about/this-starter" style={{
            padding: "30px",
            backgroundColor: "#f9fafb",
            borderRadius: "8px",
            textDecoration: "none",
            border: "1px solid #e5e7eb",
            transition: "all 0.3s"
          }}>
            <h2 style={{ color: "#001a4d", marginBottom: "15px", marginTop: 0 }}>
              📖 This Starter
            </h2>
            <p style={{ color: "#666", lineHeight: "1.5", marginBottom: 0 }}>
              Discover the features, architecture, and capabilities of the ByStar Nested Sidebar Gatsby starter. Learn what makes it special and how it can help you build professional websites.
            </p>
          </Link>

          <Link to="/about/the-authors" style={{
            padding: "30px",
            backgroundColor: "#f9fafb",
            borderRadius: "8px",
            textDecoration: "none",
            border: "1px solid #e5e7eb",
            transition: "all 0.3s"
          }}>
            <h2 style={{ color: "#001a4d", marginBottom: "15px", marginTop: 0 }}>
              👥 The Authors
            </h2>
            <p style={{ color: "#666", lineHeight: "1.5", marginBottom: 0 }}>
              Meet Mohsen Banan and learn about the development of this starter. Discover the tools and inspiration that went into creating this professional Gatsby foundation.
            </p>
          </Link>

        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="About" />
