import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/seo"

const HelpPage = () => (
  <Layout>
    <h1>Help</h1>
    <p>This page provides help and support information.</p>
    <p>Coming soon: FAQ, contact information, and troubleshooting guide.</p>
    <Link to="/">Back to home</Link>
  </Layout>
)

export const Head = () => <Seo title="Help" />

export default HelpPage
