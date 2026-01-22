import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/seo"

const AboutMePage = () => (
  <Layout>
    <h1>About Me</h1>
    <p>This is the "Me" page under the About section.</p>
    <p>You can see in the sidebar that "Me" is now highlighted and the About section is expanded.</p>
    <Link to="/">Back to home</Link>
  </Layout>
)

export const Head = () => <Seo title="About Me" />

export default AboutMePage
