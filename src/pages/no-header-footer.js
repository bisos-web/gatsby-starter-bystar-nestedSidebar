import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const NoHeaderFooterPage = () => (
  <Layout showHeader={false} showFooter={false}>
    <h1>No Header/Footer Example</h1>
    <p>This page has no header or footer, but the sidebar is still visible.</p>
    <p>The sidebar navigation is still available on the left.</p>
    <p>This layout is useful for:</p>
    <ul>
      <li>Admin panels</li>
      <li>Dashboard-like interfaces</li>
      <li>Application pages where navigation is in the sidebar</li>
    </ul>
    <Link to="/">Back to home</Link>
  </Layout>
)

export const Head = () => <Seo title="No Header/Footer" />

export default NoHeaderFooterPage
