/**
 * Single source of truth for restaurant information.
 * Update this file to change contact details, links and copy site-wide.
 */

export interface SocialLink {
  label: string;
  /** Set to null until a verified profile URL is available. */
  href: string | null;
}

export const restaurant = {
  name: "Kanjikada Dubai",
  nativeName: "കഞ്ഞിക്കട ദുബായ്",
  shortName: "Kanjikada",
  tagline: "Authentic Kerala Kanji & Nadan Delights",
  cuisine: "Authentic Kerala / Traditional Kanji & Nadan Curries",
  description:
    "Authentic Kerala Kanji, steaming Matta rice porridge with 10+ traditional side dishes, Kappa Meen Curry, Nadan Beef Roast, and homely South Indian delicacies in Al Karama, Dubai.",
  address: {
    street: "31 2B St",
    area: "Al Karama",
    city: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
  },
  phone: "+971 56 486 1028",
  phoneHref: "tel:+971564861028",
  whatsapp: "+971 56 486 1028",
  whatsappHref:
    "https://wa.me/971564861028?text=Hello%20Kanjikada%20Dubai%2C%20I%20would%20like%20to%20place%20an%20order.",
  mapsUrl: "https://maps.app.goo.gl/okMLykn3kX67s37r5",
  mapEmbedQuery: "Kanjikada Dubai, 31 2B St, Al Karama, Dubai",
  orderUrl:
    "https://wa.me/971564861028?text=Hello%20Kanjikada%20Dubai%2C%20I%20would%20like%20to%20place%20an%20order.",
  orderPlatform: "WhatsApp Order",
  priceRange: "AED 1–45",
  services: ["Dine-in", "Takeaway", "WhatsApp Home Delivery"],
  rating: { value: 4.8, max: 5, count: 1840, source: "Google" },
  /** Only verified profiles should be added here. */
  socials: [
    { label: "Instagram", href: null },
    { label: "Facebook", href: null },
  ] as SocialLink[],
} as const;

export const navLinks = [
  { label: "Home", to: "/", hash: "#home" },
  { label: "Menu", to: "/menu", hash: "#menu" },
  { label: "Our Story", to: "/story", hash: "#story" },
  { label: "Reviews", to: "/reviews", hash: "#reviews" },
  { label: "Gallery", to: "/gallery", hash: "#gallery" },
  { label: "Location", to: "/location", hash: "#location" },
] as const;
