import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <h1>Services</h1>
    <p>This is the services page for your site.</p>
    <p>Add your services here.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Services" />

export default ServicesPage