import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you're ready to show the world! Give your Gatsby site superpowers: Build and host on Netlify. Get started for free!",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
      <p className={styles.intro}>
        <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>

    <h2>Nested Sidebar Starter Features</h2>
    <p>
      This is a professional Gatsby starter with a comprehensive navigation system and flexible layout options:
    </p>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <b>4-Part Layout</b> - Header, left sidebar, main content area, and footer with professional styling
      </li>
      <li className={styles.listItem}>
        <b>Hierarchical Navigation</b> - Nested sidebar navigation supporting up to 5 levels of depth with auto-expanding based on current page
      </li>
      <li className={styles.listItem}>
        <b>Flexible Layout Control</b> - Show or hide header, sidebar, and footer independently for different page types
      </li>
      <li className={styles.listItem}>
        <b>Sibling Navigation Tabs</b> - When sidebar is hidden, horizontal tabs appear showing navigation at the current level with parent navigation included
      </li>
      <li className={styles.listItem}>
        <b>Responsive Design</b> - Maximum width with light greenish-blue margins on wide screens, responsive on mobile
      </li>
      <li className={styles.listItem}>
        <b>Visual Sitemap</b> - Complete site hierarchy page showing all pages and structure
      </li>
      <li className={styles.listItem}>
        <b>Menu Data Structure</b> - Simple JSON-based menu that auto-generates navigation, perfect for Python/bash automation
      </li>
    </ul>

    <h2>Example Pages</h2>
    <p>Explore the different layout options:</p>
    <ul className={styles.list}>
      {samplePageLinks.map(link => (
        <li key={link.url} className={styles.listItem}>
          <Link to={link.url} className={styles.listItemLink}>{link.text}</Link>
          {link.description && <p className={styles.listItemDescription}>{link.description}</p>}
        </li>
      ))}
    </ul>

    <h2>More Resources</h2>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
