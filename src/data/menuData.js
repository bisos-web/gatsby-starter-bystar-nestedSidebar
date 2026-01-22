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
        label: "Me",
        path: "/about/me",
      },
      {
        label: "My work",
        path: "/about/my-work",
      },
      {
        label: "No-Sidebar",
        path: "/about/no-sidebar",
      },
      {
        label: "Content-Only",
        path: "/about/content-only",
      },

    ],
  },
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "Contact",
    path: "/contact",
  },
  {
    label: "No Side Bar",
    path: "/no-sidebar",
  },
  {
    label: "No Header/Footer",
    path: "/no-header-footer",
  },
  {
    label: "Content Only",
    path: "/content-only",
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
]
