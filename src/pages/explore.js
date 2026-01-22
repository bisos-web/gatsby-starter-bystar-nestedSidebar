import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const ExplorePage = () => (
  <Layout>
    <h1>Explore</h1>
    <p>Discover helpful resources and tools for navigating this site.</p>
    <ul>
      <li><Link to="/explore/accessibility">Accessibility</Link> - Accessibility features and standards</li>
      <li><Link to="/sitemap">Sitemap</Link> - Complete site hierarchy</li>
      <li><Link to="/explore/search">Search</Link> - Search the site</li>
      <li><Link to="/explore/help">Help</Link> - Help and support</li>
    </ul>
    <Link to="/">Back to home</Link>
  </Layout>
)

export const Head = () => <Seo title="Explore" />

export default ExplorePage
