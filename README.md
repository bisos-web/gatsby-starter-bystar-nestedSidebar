# 🌳 Gatsby Starter: ByStar Nested Sidebar

A professional, feature-rich Gatsby starter designed for ByStar and other
projects requiring hierarchical navigation, flexible layouts, and
privacy-respecting features. Built with React 18, Lunr.js search, and
accessibility in mind.

## ✨ Key Features

### 🎨 Layout & Navigation
- **4-Part Layout**: Header, flexible sidebar, main content area, and footer with independent visibility control
- **Hierarchical Nested Sidebar**: Up to 5 levels deep with automatic expansion based on current page location
- **Smart Path Matching**: Auto-highlights active pages and parent paths in navigation
- **Sibling Tabs**: Horizontal tab navigation for pages without sidebars, includes parent navigation breadcrumbs
- **Visual Sitemap**: Complete site hierarchy visualization

### 🔍 Search & Discovery
- **Client-Side Full-Text Search**: Powered by Lunr.js for instant, privacy-respecting search
- **Search Results Page**: Dedicated `/explore/search` page with integrated SearchBox component
- **Fast Indexing**: Automatically indexes all pages from menu hierarchy

### ♿ Accessibility & Standards
- **WCAG 2.1 Compliant**: Comprehensive accessibility documentation and implementation
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Ready**: Proper semantic HTML and ARIA labels
- **Accessible Typography**: Configurable text sizing with readable line-heights
- **High Contrast**: Dark navy navigation (#001a4d) with proper color contrast ratios

### 🎯 Content Organization
- **Flexible Menu Structure**: Centralized `menuData.js` for site hierarchy
- **Layout Control Props**: `showHeader`, `showSidebar`, `showFooter` for layout variations
- **Multi-Level Navigation**: Supports deeply nested page structures
- **Automatic Menu Building**: Easy to extend with new sections and subsections

### 🚀 Developer Experience
- **React 18.2**: Modern React with functional components and hooks
- **TypeScript Ready**: Easily convert to TypeScript if needed
- **CSS-in-JS Styling**: Inline styles for component-scoped styling plus global CSS
- **Responsive Design**: Mobile-first approach with flexible layouts
- **Hot Module Reloading**: Instant feedback during development

### 📱 Features by Section

**Explore Section** (`/explore/`):
- Accessibility guides and WCAG documentation
- Visual sitemap of entire site
- Client-side search functionality
- Help page for user guidance
- (Contact forms and more coming soon)

**About Section** (`/about/`):
- Example of nested page hierarchy
- Demonstrates sidebar behavior with child pages
- Layout variation examples

**Layout Examples**:
- Pages with/without sidebars
- Pages with/without headers and footers
- Content-only layouts for maximum space

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/bisos-web/gatsby-starter-bystar-nestedSidebar.git
cd gatsby-starter-bystar-nestedSidebar

# Install dependencies
npm install

# Start development server
npm run develop
```

Your site will be running at `http://localhost:8000`

### Creating Pages

1. **Add to Menu** (`src/data/menuData.js`):
```javascript
{
  label: "My New Page",
  path: "/my-page",
  children: [
    {
      label: "Child Page",
      path: "/my-page/child",
    }
  ]
}
```

2. **Create Page Component** (`src/pages/my-page.js`):
```javascript
import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"

export default function MyPage() {
  return (
    <Layout showHeader showSidebar showFooter>
      <h1>My New Page</h1>
      <p>Your content here...</p>
    </Layout>
  )
}

export const Head = () => <Seo title="My Page" />
```

## 📁 Project Structure

```
gatsby-starter-nestedSidebar/
├── src/
│   ├── components/
│   │   ├── Layout.js              # Master layout wrapper
│   │   ├── Header.js              # Top navigation header
│   │   ├── Sidebar.js             # Hierarchical sidebar navigation
│   │   ├── MenuItem.js            # Recursive menu item component
│   │   ├── SiblingTabs.js         # Horizontal tabs for page siblings
│   │   ├── SearchBox.js           # Lunr.js search interface
│   │   ├── SitemapComponent.js    # Visual site hierarchy
│   │   ├── Footer.js              # Footer component
│   │   └── seo.js                 # SEO component
│   ├── pages/
│   │   ├── index.js               # Home page
│   │   ├── about/                 # About section (nested example)
│   │   ├── explore/               # Explore section
│   │   │   ├── accessibility.js   # WCAG guidelines & info
│   │   │   ├── search.js          # Search page
│   │   │   ├── sitemap.js         # Visual sitemap
│   │   │   └── help.js            # Help/FAQ page
│   │   └── 404.js                 # Not found page
│   ├── data/
│   │   └── menuData.js            # Centralized menu structure
│   ├── utils/
│   │   └── searchIndex.js         # Lunr.js search utilities
│   ├── styles/
│   │   └── global.css             # Global typography & spacing
│   └── images/                    # Image assets
├── gatsby-config.js               # Gatsby configuration
├── gatsby-browser.js              # Browser APIs
├── gatsby-ssr.js                  # Server-side rendering
├── package.json
└── README.md
```

## 🎨 Customization

### Styling
- **Global CSS**: `src/styles/global.css` for typography, spacing, colors
- **Component Styles**: CSS-in-JS objects in React components
- **Color Scheme**: Light greenish-blue margins (#E1EBDD), dark navy navigation (#001a4d)
- **Responsive**: Flexbox-based layouts, max-width 1152px centered content

### Menu Structure
Edit `src/data/menuData.js` to customize navigation hierarchy. The structure is consumed by:
- Sidebar navigation component
- Search index builder
- Sitemap visualizer

### Layout Variants
Control layout visibility with props in `<Layout>`:
```javascript
<Layout 
  showHeader={true}
  showSidebar={true}
  showFooter={true}
/>
```

## 🔍 Search Implementation

The starter includes client-side search powered by Lunr.js:

- **Automatic Indexing**: Pages indexed from `menuData.js` hierarchy
- **Fast Queries**: Blazing fast full-text search on client-side
- **Privacy**: No data sent to external servers
- **Extensible**: Easy to add custom fields to search index

See `src/utils/searchIndex.js` for search utilities.

## ♿ Accessibility

This starter includes comprehensive accessibility features:

- **WCAG 2.1 Level AA Compliant**: Follows Web Content Accessibility Guidelines
- **Semantic HTML**: Proper heading hierarchy, landmark regions, semantic elements
- **Keyboard Navigation**: All interactive components keyboard accessible
- **Screen Reader Support**: Proper ARIA labels and roles
- **Color Contrast**: 4.5:1+ contrast ratios for text
- **Text Sizing**: Readable line-heights (1.6) and comfortable spacing

See `/explore/accessibility` page for detailed accessibility documentation.

## 📦 Dependencies

- **gatsby** (5.14.6): React-based static site generator
- **react** (18.2.0): UI library
- **@reach/router**: Routing with location hooks
- **lunr** (2.3.9): Client-side search indexing

## 🚀 Deployment

In the ByStar context, production deployment is through BISOS.

### Deploy to GitHub Pages

See [Gatsby deployment docs](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-github-pages/).

## 🤝 Contributing

This starter is designed to be extended. Consider contributing:
- Additional accessibility features
- Performance optimizations
- Translation/i18n support
- Dark mode theme
- Mobile hamburger menu

## 📖 Learning Resources

- [Gatsby Documentation](https://www.gatsbyjs.com/docs/)
- [React Documentation](https://react.dev/)
- [Lunr.js Documentation](https://lunrjs.com/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 📄 License

This starter is licensed under the Affero General Public License v3.0 (AGPL-3.0), reflecting its alignment with the Libre-Halaal ByStar Digital Ecosystem principles of transparency, freedom, and community.

See LICENSE file for details.

## 🙋 Support

For questions, issues, or suggestions:
- Check the [Help page](/explore/help) for FAQs
- Review the [Accessibility page](/explore/accessibility) for accessibility questions
- Visit [About](/about) to learn more about this project
- Use the [Contact form](/contact) to reach out

---

**Built for ByStar and the Libre-Halaal Digital Ecosystem**

Privacy. Autonomy. Transparency. All built-in.
