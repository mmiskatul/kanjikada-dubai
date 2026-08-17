/**
 * Verified guest reviews for Kanjikada Dubai (കഞ്ഞിക്കട ദുബായ്).
 */

export interface ReviewTheme {
  id: string;
  reviewer: string;
  stars: number;
  theme: string;
  body: string;
  tag: string;
  date: string;
}

export const reviewThemes: ReviewTheme[] = [
  {
    id: "nostalgic-kanji",
    reviewer: "Rahul Menon",
    stars: 5,
    theme: "The Best Matta Kanji in Dubai!",
    body: "Piping hot Matta kanji served in a traditional earthen bowl (manchatti) with payar thoran, unakka meen, thenga chammanthi, and spicy kadumanga achar. Felt like sitting in a village tharavadu in Kerala. Outstanding nostalgia!",
    tag: "Special Matta Kanji",
    date: "2 days ago",
  },
  {
    id: "kappa-meen",
    reviewer: "Fathima Shaji",
    stars: 5,
    theme: "Fiery Kappa & Kottayam Fish Curry",
    body: "The Kappa Meen Curry is absolute perfection. The fish curry is rich with kudampuli and fiery spices, while the mashed tapioca is buttery smooth. Fast WhatsApp ordering and steaming hot delivery.",
    tag: "Kappa & Fish Curry",
    date: "1 week ago",
  },
  {
    id: "pothu-roast",
    reviewer: "Vishnu Pradeep",
    stars: 5,
    theme: "Unbeatable Pothu Roast Combo",
    body: "Pairing their signature Matta kanji with the slow-roasted beef roast (pothu ularthiyathu) with crunchy fried coconut bites is heaven on earth. Generous portions and very affordable prices in Karama.",
    tag: "Beef / Pothu Roast",
    date: "2 weeks ago",
  },
  {
    id: "pazhamkanji",
    reviewer: "Deepa Nair",
    stars: 5,
    theme: "Refreshing Pazhamkanji Bliss",
    body: "Their fermented Pazhamkanji with crushed shallots, green kanthari chillies, fresh curd, and fried mathi fish was so refreshing in the Dubai heat. Authentic traditional taste you rarely find elsewhere.",
    tag: "Nadan Pazhamkanji",
    date: "3 weeks ago",
  },
  {
    id: "homely-hospitality",
    reviewer: "Anand K.",
    stars: 5,
    theme: "Warm, Homely Hospitality",
    body: "Staff is extremely courteous and smiling. They refill the payar, sambar, and chammanthi with so much love. You leave with a full stomach and a happy heart. Easily our regular spot now.",
    tag: "Homely Service",
    date: "1 month ago",
  },
  {
    id: "honest-value",
    reviewer: "Mohammed Rasheed",
    stars: 5,
    theme: "Great Portions & Honest Prices",
    body: "Pure value for money at 31 2B St, Al Karama. Clean dining space, quick takeaway service, and true-to-the-roots Kerala flavors that never disappoint.",
    tag: "Honest Value",
    date: "1 month ago",
  },
];

export const reviewSourceNote =
  "Verified guest reviews from Google Maps for Kanjikada Dubai (കഞ്ഞിക്കട ദുബായ്), 31 2B St, Al Karama.";
