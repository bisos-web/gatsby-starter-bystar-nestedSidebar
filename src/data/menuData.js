// Menu hierarchy structure
// Can go up to 5 levels deep as requested

export const menuData = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
    children: [
      {
        label: "This Starter",
        path: "/about/this-starter",
      },
      {
        label: "The Authors",
        path: "/about/the-authors",
      },
    ],
  },
  {
    label: "Embedded Content",
    path: "/embedded-full-width",
  },
  {
    label: "Contact",
    path: "/contact",
  },
  {
    label: "Explore",
    path: "/explore",
    children: [
      {
        label: "Accessibility",
        path: "/explore/accessibility",
      },
      {
        label: "Sitemap",
        path: "/sitemap",
      },
      {
        label: "Search",
        path: "/explore/search",
      },
      {
        label: "Help",
        path: "/explore/help",
      },
    ],
  },
  {
    label: "For Developers",
    path: "/developers",
    children: [
      {
        label: "Creating Pages",
        path: "/developers/creating-pages",
      },
      {
        label: "Layout Examples",
        path: "/developers/layout-examples",
        children: [
          {
            label: "No Sidebar",
            path: "/developers/layout-examples/no-sidebar",
          },
          {
            label: "No Header/Footer",
            path: "/developers/layout-examples/no-header-footer",
          },
          {
            label: "Content Only",
            path: "/developers/layout-examples/content-only",
          },
        ],
      },
      {
        label: "Embedded Services",
        path: "/explore/embedded-services",
      },
    ],
  },
]
