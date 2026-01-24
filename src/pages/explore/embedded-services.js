import * as React from "react"
import Layout from "../../components/Layout"
import EmbeddedContent from "../../components/EmbeddedContent"
import Seo from "../../components/seo"

export default function EmbeddedServicesPage() {
  return (
    <Layout showHeader={false} showSidebar={false} showFooter={false}>
      <h1>Embedded Services & Content</h1>
      <p>
        This page demonstrates different ways to embed internal services and external websites
        within the Gatsby starter using the <code>EmbeddedContent</code> component.
      </p>

      <h2>Examples</h2>

      <h3>1. External Website (Standard 16:9 Aspect Ratio)</h3>
      <p>
        This example shows how to embed an external website with a standard video aspect ratio.
        The iframe will be responsive and maintain its proportions on all screen sizes.
      </p>
      <EmbeddedContent
        url="https://www.wikipedia.org"
        title="Wikipedia"
        aspectRatio="16:9"
        border={true}
      />

      <h3>2. Internal Service Dashboard (Auto Height)</h3>
      <p>
        For internal services like dashboards or applications, you can use <code>aspectRatio="auto"</code>{" "}
        to allow the content to determine its own height. This is useful for content that doesn't
        fit standard video dimensions.
      </p>
      <EmbeddedContent
        url="http://localhost:3000"
        title="Internal Dashboard"
        aspectRatio="auto"
        minHeight="800px"
        border={true}
      />

      <h3>3. Square Content (1:1 Aspect Ratio)</h3>
      <p>Perfect for embedded widgets or content that works better in a square format.</p>
      <EmbeddedContent
        url="https://www.wikipedia.org"
        title="Wikipedia"
        aspectRatio="1:1"
        border={true}
      />

      <h3>4. Content with Fullscreen Support</h3>
      <p>
        Some embedded content (like presentations or videos) may need fullscreen capability. This
        example shows how to enable that.
      </p>
      <EmbeddedContent
        url="https://www.wikipedia.org"
        title="Wikipedia with Fullscreen"
        aspectRatio="16:9"
        allowFullscreen={true}
        border={true}
      />

      <h2>Configuration Options</h2>
      <p>
        The <code>EmbeddedContent</code> component accepts the following props:
      </p>
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
            <th style={{ padding: "0.75rem", textAlign: "left", fontWeight: "bold" }}>
              Prop
            </th>
            <th style={{ padding: "0.75rem", textAlign: "left", fontWeight: "bold" }}>
              Type
            </th>
            <th style={{ padding: "0.75rem", textAlign: "left", fontWeight: "bold" }}>
              Default
            </th>
            <th style={{ padding: "0.75rem", textAlign: "left", fontWeight: "bold" }}>
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
            <td style={{ padding: "0.75rem" }}>
              <code>url</code>
            </td>
            <td style={{ padding: "0.75rem" }}>string</td>
            <td style={{ padding: "0.75rem" }}>required</td>
            <td style={{ padding: "0.75rem" }}>The URL to embed</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
            <td style={{ padding: "0.75rem" }}>
              <code>title</code>
            </td>
            <td style={{ padding: "0.75rem" }}>string</td>
            <td style={{ padding: "0.75rem" }}>"Embedded Content"</td>
            <td style={{ padding: "0.75rem" }}>Accessible title for the iframe</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
            <td style={{ padding: "0.75rem" }}>
              <code>aspectRatio</code>
            </td>
            <td style={{ padding: "0.75rem" }}>string</td>
            <td style={{ padding: "0.75rem" }}>"16:9"</td>
            <td style={{ padding: "0.75rem" }}>
              "16:9", "4:3", "1:1", or "auto"
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
            <td style={{ padding: "0.75rem" }}>
              <code>minHeight</code>
            </td>
            <td style={{ padding: "0.75rem" }}>string</td>
            <td style={{ padding: "0.75rem" }}>"600px"</td>
            <td style={{ padding: "0.75rem" }}>
              Minimum height when <code>aspectRatio="auto"</code>
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
            <td style={{ padding: "0.75rem" }}>
              <code>border</code>
            </td>
            <td style={{ padding: "0.75rem" }}>boolean</td>
            <td style={{ padding: "0.75rem" }}>true</td>
            <td style={{ padding: "0.75rem" }}>Show border around iframe</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
            <td style={{ padding: "0.75rem" }}>
              <code>sandbox</code>
            </td>
            <td style={{ padding: "0.75rem" }}>string</td>
            <td style={{ padding: "0.75rem" }}>
              "allow-same-origin allow-scripts allow-popups allow-forms"
            </td>
            <td style={{ padding: "0.75rem" }}>iframe sandbox attributes for security</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
            <td style={{ padding: "0.75rem" }}>
              <code>allowFullscreen</code>
            </td>
            <td style={{ padding: "0.75rem" }}>boolean</td>
            <td style={{ padding: "0.75rem" }}>false</td>
            <td style={{ padding: "0.75rem" }}>Allow fullscreen mode</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
            <td style={{ padding: "0.75rem" }}>
              <code>loading</code>
            </td>
            <td style={{ padding: "0.75rem" }}>string</td>
            <td style={{ padding: "0.75rem" }}>"lazy"</td>
            <td style={{ padding: "0.75rem" }}>"lazy" or "eager"</td>
          </tr>
          <tr>
            <td style={{ padding: "0.75rem" }}>
              <code>showLoadingMessage</code>
            </td>
            <td style={{ padding: "0.75rem" }}>boolean</td>
            <td style={{ padding: "0.75rem" }}>true</td>
            <td style={{ padding: "0.75rem" }}>Show "Loading content..." message</td>
          </tr>
        </tbody>
      </table>

      <h2>Security Considerations</h2>
      <div
        style={{
          backgroundColor: "#f0fdf4",
          border: "1px solid #86efac",
          borderRadius: "4px",
          padding: "1rem",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Sandbox Restrictions</h3>
        <p>
          By default, the component uses iframe sandbox attributes to restrict what the embedded
          content can do for security reasons. The default allows:
        </p>
        <ul>
          <li>
            <code>allow-same-origin</code> - Allows content from the same origin to access cookies
            and storage
          </li>
          <li>
            <code>allow-scripts</code> - Allows the embedded content to run JavaScript
          </li>
          <li>
            <code>allow-popups</code> - Allows opening popups
          </li>
          <li>
            <code>allow-forms</code> - Allows form submission
          </li>
        </ul>
        <p>
          You can customize the <code>sandbox</code> prop for stricter or more permissive
          restrictions based on your needs.
        </p>
      </div>

      <h2>Error Handling</h2>
      <p>
        The component includes built-in error handling that displays a user-friendly message if
        content fails to load. This typically happens due to:
      </p>
      <ul>
        <li>
          <strong>CORS Restrictions:</strong> The embedded site blocks cross-origin requests
        </li>
        <li>
          <strong>URL Unavailable:</strong> The service is down or the URL is incorrect
        </li>
        <li>
          <strong>Network Issues:</strong> Connectivity problems prevent loading
        </li>
      </ul>
      <p>
        In these cases, users can still click a link to open the content in a new window.
      </p>

      <h2>Usage Examples</h2>
      <p>
        Here are some code snippets showing how to use the <code>EmbeddedContent</code> component
        in your pages:
      </p>

      <h3>Basic External Website</h3>
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
        {`import EmbeddedContent from "../../components/EmbeddedContent"
import Layout from "../../components/Layout"

export default function MyPage() {
  return (
    <Layout showHeader={false} showSidebar={false} showFooter={false}>
      <EmbeddedContent
        url="https://www.wikipedia.org"
        title="Wikipedia"
      />
    </Layout>
  )
}`}
      </pre>

      <h3>Internal Dashboard with Auto Height</h3>
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
        {`<Layout showHeader={false} showSidebar={false} showFooter={false}>
  <EmbeddedContent
    url="http://localhost:3000/dashboard"
    title="Analytics Dashboard"
    aspectRatio="auto"
    minHeight="1000px"
  />
</Layout>`}
      </pre>

      <h3>Fullscreen Video Content</h3>
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
        {`<Layout showHeader={false} showSidebar={false} showFooter={false}>
  <EmbeddedContent
    url="https://www.youtube.com/embed/dQw4w9WgXcQ"
    title="Video Content"
    aspectRatio="16:9"
    allowFullscreen={true}
  />
</Layout>`}
      </pre>
    </Layout>
  )
}

export const Head = () => <Seo title="Embedded Services & Content" />
