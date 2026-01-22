import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/seo"

const MyWorkPage = () => (
  <Layout>
    <h1>My Work</h1>
    <p>This is the "My work" page under the About section.</p>
    <p>You can see in the sidebar that "My work" is now highlighted and the About section is expanded.</p>
    <Link to="/">Back to home</Link>
  </Layout>
)

export const Head = () => <Seo title="My Work" />

export default MyWorkPage
