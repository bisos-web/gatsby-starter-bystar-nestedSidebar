import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const NoSidebarPage = () => (
  <Layout showSidebar={false}>
    <h1>No Sidebar Example</h1>
    <p>This page has no sidebar, so the content spans the full width.</p>
    <p>The header and footer are still visible.</p>
    <p>This layout is useful for:</p>
    <ul>
      <li>Full-width content pages</li>
      <li>Landing pages</li>
      <li>Detail pages that need more space</li>
    </ul>
    <Link to="/">Back to home</Link>
  </Layout>
)

export const Head = () => <Seo title="No Sidebar" />

export default NoSidebarPage
