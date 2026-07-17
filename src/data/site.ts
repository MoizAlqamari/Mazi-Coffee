// Central site data. Edit here to update content across the site.
export const site = {
  name: "Mazi Specialty Coffee",
  shortName: "Mazi",
  tagline: "A room for slow mornings and long conversations.",
  description:
    "Mazi is a nostalgia-inspired specialty coffee shop in North Nazimabad, Karachi. We pour patient coffee and ask you to put the phone down and talk.",
  address: {
    street: "Block F, North Nazimabad",
    city: "Karachi",
    region: "Sindh",
    country: "Pakistan",
    postalCode: "74700",
  },
  // TODO: replace with the real street address and coordinates
  geo: { lat: 24.9352, lng: 67.0451 },
  phone: "+92 300 0000000", // TODO: replace with real number
  email: "hello@mazi.coffee", // TODO: replace with real address
  hours: [
    { days: "Monday to Thursday", time: "7:30 to 23:00" },
    { days: "Friday", time: "7:30 to 00:00" },
    { days: "Saturday and Sunday", time: "8:00 to 00:00" },
  ],
  social: {
    instagram: "https://instagram.com/", // TODO: replace
    facebook: "https://facebook.com/", // TODO: replace
  },
  url: "https://mazi.coffee",
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Story", href: "/our-story" },
  { label: "Coffee", href: "/coffee" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Experience", href: "/experience" },
  { label: "Visit", href: "/contact" },
];