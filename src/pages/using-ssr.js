import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const UsingSSR = () => (
  <Layout>
    <h1>
      Hello from a page component, using Server-Side Rendering (SSR)
    </h1>
    <p>
      This page is rendered on demand using SSR. Learn more about{" "}
      <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/">
        Gatsby SSR
      </a>
      .
    </p>
    <Link to="/">Back to home</Link>
  </Layout>
)

export const Head = () => <Seo title="Using SSR" />

export default UsingSSR
