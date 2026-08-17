/**
 * Menu data for Kanjikada Dubai (കഞ്ഞിക്കട ദുബായ്).
 */

import appam from "@/assets/dish-appam.jpg";
import beefRoast from "@/assets/dish-beef-roast.jpg";
import chickenCurry from "@/assets/dish-chicken-curry.jpg";
import dosa from "@/assets/dish-dosa.jpg";
import fishFry from "@/assets/dish-fish-fry.jpg";
import keralaMeal from "@/assets/hero-kerala-meal.jpg";
import kozhukatta from "@/assets/dish-kozhukatta.jpg";
import pazhamPori from "@/assets/dish-pazham-pori.jpg";
import payasam from "@/assets/dish-payasam.jpg";
import chai from "@/assets/atmos-chai.jpg";

export type Diet = "veg" | "non-veg";

export interface MenuItem {
  id: string;
  name: string;
  nativeName?: string;
  category: string;
  description: string;
  /** AED. Null until verified pricing is supplied. */
  price: number | null;
  diet: Diet;
  image: any;
  ingredients: string[];
  dietaryInfo: string;
  signature?: boolean;
}

export const menuCategories = [
  "Special Kanji Sets",
  "Kappa & Traditional",
  "Beef & Pothu",
  "Fish & Seafood",
  "Chicken",
  "Kerala Meals & Sadya",
  "Appam & Dosa",
  "Snacks & Desserts",
  "Hot Beverages",
] as const;

export type MenuCategory = (typeof menuCategories)[number];

export const menu: MenuItem[] = [
  {
    id: "special-matta-kanji",
    name: "Special Matta Kanji Set",
    nativeName: "സ്പെഷ്യൽ മട്ടക്കഞ്ഞി",
    category: "Special Kanji Sets",
    description:
      "Steaming hot Kerala Matta rice kanji served in earthenware with cherupayar thoran, thenga chammanthi, kadumanga achar, unakka meen, ghee, and crisp papadam.",
    price: null,
    diet: "veg",
    image: keralaMeal,
    ingredients: [
      "Kerala Matta Rice",
      "Green Gram",
      "Roasted Coconut",
      "Spicy Mango Pickle",
      "Ghee",
      "Papadam",
    ],
    dietaryInfo: "Traditional Comfort Food. Unlimited Sambar & Payar available.",
    signature: true,
  },
  {
    id: "pothu-kanji-combo",
    name: "Pothu Roast Kanji Combo",
    nativeName: "പോത്തിറച്ചി കഞ്ഞി കോംബോ",
    category: "Special Kanji Sets",
    description:
      "Our signature hot matta kanji served alongside slow-roasted spicy Malabar beef roast with toasted coconut bites and roasted shallot chammanthi.",
    price: null,
    diet: "non-veg",
    image: beefRoast,
    ingredients: [
      "Matta Rice",
      "Spicy Pothu Roast",
      "Coconut Chammanthi",
      "Papadam",
      "Kanthari Mulaku",
    ],
    dietaryInfo: "Non-Veg. Signature crowd favorite.",
    signature: true,
  },
  {
    id: "meen-kanji-feast",
    name: "Mathi / Ayila Meen Kanji Set",
    nativeName: "മീൻ കഞ്ഞി സെറ്റ്",
    category: "Special Kanji Sets",
    description:
      "Comforting kanji paired with banana leaf fried spiced fish, dry fish chutney (unakka meen chammanthi), and tangy salted chillies.",
    price: null,
    diet: "non-veg",
    image: fishFry,
    ingredients: [
      "Matta Rice",
      "Fresh Fish Fry",
      "Dry Fish Chutney",
      "Papadam",
      "Salted Curd Chillies",
    ],
    dietaryInfo: "Non-Veg. Authentic Kerala coastal flavor.",
    signature: true,
  },
  {
    id: "pazhamkanji-nostalgia",
    name: "Nadan Pazhamkanji (Cold Porridge)",
    nativeName: "നാടൻ പഴങ്കഞ്ഞി",
    category: "Special Kanji Sets",
    description:
      "Overnight fermented cooling rice porridge with crushed shallots, kanthari (bird's eye chillies), homemade curd, raw mango, and fried fish.",
    price: null,
    diet: "non-veg",
    image: keralaMeal,
    ingredients: [
      "Fermented Rice",
      "Kanthari Mulaku",
      "Shallots",
      "Fresh Curd",
      "Fish Fry",
      "Pappadam",
    ],
    dietaryInfo: "Probiotic, deeply nostalgic Kerala breakfast/lunch.",
    signature: true,
  },
  {
    id: "kappa-meen-curry",
    name: "Kappa & Kottayam Fish Curry",
    nativeName: "കപ്പയും മീൻ കറിയും",
    category: "Kappa & Traditional",
    description:
      "Soft boiled and seasoned tapioca mashed with turmeric and crushed coconut, served with fiery red Kottayam style fish curry cooked with kudampuli.",
    price: null,
    diet: "non-veg",
    image: fishFry,
    ingredients: [
      "Tapioca (Kappa)",
      "Seer Fish / Kingfish",
      "Kudampuli",
      "Red Chillies",
      "Curry Leaves",
    ],
    dietaryInfo: "Spicy. Iconic Kerala comfort food.",
    signature: true,
  },
  {
    id: "beef-ularthiyathu",
    name: "Nadan Beef Ularthiyathu",
    nativeName: "നാടൻ ബീഫ് ഉലർത്തിയത്",
    category: "Beef & Pothu",
    description:
      "Tender chunks of beef slow-roasted in heavy iron pans with shallots, crushed black pepper, dried coconut slivers, and fresh curry leaves.",
    price: null,
    diet: "non-veg",
    image: beefRoast,
    ingredients: ["Beef / Pothu", "Black Pepper", "Coconut Chips", "Shallots", "Ginger Garlic"],
    dietaryInfo: "Non-Veg. Medium spicy.",
    signature: true,
  },
  {
    id: "nadan-chicken-curry",
    name: "Village Style Nadan Chicken Curry",
    nativeName: "നാടൻ കോഴിക്കറി",
    category: "Chicken",
    description:
      "Farm-style chicken simmered in rich coconut milk gravy infused with freshly roasted coriander, fennel, and whole Kerala spices.",
    price: null,
    diet: "non-veg",
    image: chickenCurry,
    ingredients: ["Chicken", "Coconut Milk", "Shallots", "Roasted Spices", "Curry Leaves"],
    dietaryInfo: "Non-Veg. Homestyle recipe.",
    signature: true,
  },
  {
    id: "kall-appam",
    name: "Lacy Kall Appam & Stew",
    nativeName: "കള്ളപ്പം & നാടൻ സ്റ്റൂ",
    category: "Appam & Dosa",
    description:
      "Soft, spongy fermented rice appams with lacy edges paired with mild and aromatic coconut milk vegetable or chicken stew.",
    price: null,
    diet: "veg",
    image: appam,
    ingredients: ["Fermented Rice Batter", "Coconut Milk", "Cardamom", "Cloves", "Potatoes"],
    dietaryInfo: "Vegetarian. Gluten-Free.",
  },
  {
    id: "ghee-roast-dosa",
    name: "Crispy Ghee Roast Masala Dosa",
    nativeName: "നെയ്യ് റോസ്റ്റ് മസാല ദോശ",
    category: "Appam & Dosa",
    description:
      "Golden paper-thin crepe roasted in pure cow ghee, stuffed with spiced potato masala and served with 3 kinds of chutney and hot sambar.",
    price: null,
    diet: "veg",
    image: dosa,
    ingredients: [
      "Urad Dal & Rice Batter",
      "Desi Ghee",
      "Spiced Potato Masala",
      "Coconut Chutney",
      "Sambar",
    ],
    dietaryInfo: "Vegetarian.",
  },
  {
    id: "kerala-sadya-meals",
    name: "Full Kerala Sadya Meals",
    nativeName: "പൂർണ്ണ കേരള സദ്യ മീൽസ്",
    category: "Kerala Meals & Sadya",
    description:
      "Traditional feast on fresh banana leaf with matta rice, sambar, avial, cabbage thoran, pulissery, moru curry, injipuli, payasam, and papadam.",
    price: null,
    diet: "veg",
    image: keralaMeal,
    ingredients: ["Matta Rice", "Sambar", "Avial", "Thoran", "Pulissery", "Payasam"],
    dietaryInfo: "Vegetarian. Generous portions.",
    signature: true,
  },
  {
    id: "pazham-pori-snack",
    name: "Nadan Pazham Pori & Sulaimani",
    nativeName: "പഴംപൊരി & സുലൈമാനി",
    category: "Snacks & Desserts",
    description:
      "Crispy golden ripe Kerala Nendran banana fritters fried fresh to order, served with authentic spiced cardamom Sulaimani tea.",
    price: null,
    diet: "veg",
    image: pazhamPori,
    ingredients: ["Nendran Bananas", "Flour", "Cardamom", "Spiced Black Tea"],
    dietaryInfo: "Vegetarian. 4 PM evening tea special.",
  },
  {
    id: "ada-payasam",
    name: "Palada & Parippu Payasam",
    nativeName: "പാലട & പരിപ്പ് പായസം",
    category: "Snacks & Desserts",
    description:
      "Rich Kerala dessert made with slow-simmered milk or jaggery, roasted cashews, raisins, and aromatic green cardamom.",
    price: null,
    diet: "veg",
    image: payasam,
    ingredients: ["Rice Ada", "Milk / Jaggery", "Ghee", "Cashews", "Cardamom"],
    dietaryInfo: "Vegetarian.",
  },
  {
    id: "kerala-filter-coffee",
    name: "Special South Indian Filter Coffee & Chai",
    nativeName: "ഫിൽറ്റർ കോഫി & നാടൻ ചായ",
    category: "Hot Beverages",
    description:
      "Strong traditional filter coffee pulled high in brass dabarah cups or steaming ginger-cardamom cutting chai.",
    price: null,
    diet: "veg",
    image: chai,
    ingredients: ["Chicory Coffee Blend", "Fresh Milk", "Cardamom", "Ginger"],
    dietaryInfo: "Vegetarian.",
  },
];

export const signatureDishes = menu.filter((item) => item.signature);

export function formatPrice(price: number | null) {
  return price === null ? "Homely Value" : `AED ${price}`;
}
