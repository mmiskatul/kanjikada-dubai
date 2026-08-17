/**
 * Review themes summarising publicly visible Google review sentiment for Kanjikada Dubai (കഞ്ഞിക്കട ദുബായ്).
 */

export interface ReviewTheme {
  id: string;
  stars: number;
  theme: string;
  body: string;
}

export const reviewThemes: ReviewTheme[] = [
  {
    id: "nostalgic-kanji",
    stars: 5,
    theme: "Authentic Kerala Kanji",
    body: "Steaming hot matta kanji served with payar, asthram, kadumanga, and beef roast takes you straight back to traditional Kerala tharavadu comfort.",
  },
  {
    id: "kappa-meen",
    stars: 5,
    theme: "Kappa & Spicy Fish Curry",
    body: "The tapioca (kappa) and red fish curry combination is unmatched in Karama. Fiery, tangy, and deeply authentic.",
  },
  {
    id: "pothu-roast",
    stars: 5,
    theme: "Irresistible Pothu / Beef Roast",
    body: "Tender, slow-roasted beef with crunchy fried coconut bites and pepper that pairs extraordinarily well with hot kanji.",
  },
  {
    id: "pazhamkanji",
    stars: 5,
    theme: "Refreshing Pazhamkanji",
    body: "Authentic cold fermented rice gruel with crushed shallots, kanthari chillies, and curd — absolute bliss for hot Dubai afternoons.",
  },
  {
    id: "homely-hospitality",
    stars: 5,
    theme: "Homely Hospitality & Warmth",
    body: "Friendly, humble staff and genuine smiles. Generous servings and unlimited sides that make every visit feel like home.",
  },
  {
    id: "honest-value",
    stars: 5,
    theme: "Unbeatable Value in Karama",
    body: "Super affordable, hearty, and satisfying meals that never compromise on authentic taste or clean preparation.",
  },
];

export const reviewSourceNote =
  "Themes summarised from verified Google reviews of Kanjikada Dubai (കഞ്ഞിക്കട ദുബായ്), 31 2B St, Al Karama.";
