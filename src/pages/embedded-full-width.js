import * as React from "react"
import Layout from "../components/Layout"
import EmbeddedContent from "../components/EmbeddedContent"
import Seo from "../components/seo"

/**
 * Example of a content-only page that embeds external content
 * This page has:
 * - No sidebar
 * - Maximized content area
 * - Embedded service/website
 */
export default function EmbeddedContentOnlyPage() {
  return (
    <Layout showHeader={false} showSidebar={false} showFooter={false}>
      <div style={{ maxWidth: "100%", padding: "0" }}>
        <h1>Full-Width Embedded Content</h1>
        <p>
          This is a content-only page with no header, sidebar, or footer, giving all space to the
          embedded content. Perfect for dashboards, embedded applications, or full-immersive
          experiences.
        </p>

        <h2>Example: External Service</h2>
        <p>
          Below is an embedded iframe showing Wikipedia. This example uses a 16:9 aspect
          ratio, which is perfect for most web content.
        </p>

        <EmbeddedContent
          url="https://www.wikipedia.org"
          title="Wikipedia"
          aspectRatio="16:9"
          border={true}
        />

        <h2>About This Layout</h2>
        <p>
          This page demonstrates how to create a true content-only layout by passing{" "}
          <code>
            showHeader={"{false}"} showSidebar={"{false}"} showFooter={"{false}"}
          </code>{" "}
          to the Layout component. This gives the embedded content the entire viewport.
        </p>

        <h3>Key Benefits</h3>
        <ul>
          <li>
            <strong>Maximum Space:</strong> Content uses the full available width and height
          </li>
          <li>
            <strong>Immersive Experience:</strong> No distractions from site chrome
          </li>
          <li>
            <strong>Perfect for Apps:</strong> Ideal for dashboards and web applications
          </li>
          <li>
            <strong>Still Part of Site:</strong> URL routing and navigation still work
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Full-Width Embedded Content" />
