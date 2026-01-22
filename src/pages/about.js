import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <h1>About Us</h1>
    <p>This is the about page for your site.</p>
    <p>Add your content here.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="About" />

export default AboutPage