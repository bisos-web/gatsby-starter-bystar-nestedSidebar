import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const ContentOnlyPage = () => (
  <Layout showHeader={false} showSidebar={false} showFooter={false}>
    <h1>Content Only Example</h1>
    <p>This page displays only the content with no header, sidebar, or footer.</p>
    <p>The entire page is dedicated to your content.</p>
    <p>This layout is useful for:</p>
    <ul>
      <li>Full-screen applications</li>
      <li>Landing pages</li>
      <li>Embedded content</li>
      <li>Focused single-purpose pages</li>
    </ul>
  </Layout>
)

export const Head = () => <Seo title="Content Only" />

export default ContentOnlyPage
