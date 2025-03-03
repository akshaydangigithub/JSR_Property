export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "JSR Property",
  description: "A modern UI kit for React developers.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Properties",
      href: "/listing",
    },
    {
      label: "Contact",
      href: "/",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Logout",
      href: "/",
    },
  ],
};
