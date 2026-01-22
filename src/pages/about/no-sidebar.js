import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/seo"

const AboutNoSidebarPage = () => (
  <Layout showSidebar={false}>
    <h1>About - No Sidebar Example</h1>
    <p>This is the "No-Sidebar" page under the About section.</p>
    <p>You should see sibling tabs at the top showing: Me, My work, and No-Sidebar.</p>
    <p>The "No-Sidebar" tab should be highlighted since you're on this page.</p>
    <Link to="/">Back to home</Link>
  </Layout>
)

export const Head = () => <Seo title="About - No Sidebar" />

export default AboutNoSidebarPage
