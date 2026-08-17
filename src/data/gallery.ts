import appam from "@/assets/dish-appam.jpg";
import beefRoast from "@/assets/dish-beef-roast.jpg";
import chickenCurry from "@/assets/dish-chicken-curry.jpg";
import dosa from "@/assets/dish-dosa.jpg";
import fishFry from "@/assets/dish-fish-fry.jpg";
import keralaMeal from "@/assets/hero-kerala-meal.jpg";
import kozhukatta from "@/assets/dish-kozhukatta.jpg";
import pazhamPori from "@/assets/dish-pazham-pori.jpg";
import payasam from "@/assets/dish-payasam.jpg";
import interior from "@/assets/interior.jpg";
import spices from "@/assets/texture-spices.jpg";
import chai from "@/assets/atmos-chai.jpg";
import storyTable from "@/assets/story-table.jpg";

export const galleryCategories = [
  "All",
  "Special Kanji",
  "Nadan Food",
  "Restaurant",
  "Seafood & Fish",
  "Evening Snacks",
  "Atmosphere",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export interface GalleryImage {
  id: string;
  src: any;
  alt: string;
  category: Exclude<GalleryCategory, "All">;
  /** Tailwind row/col span classes for the asymmetrical masonry grid. */
  span?: string;
}

export const gallery: GalleryImage[] = [
  {
    id: "g1",
    src: keralaMeal,
    alt: "Steaming hot Kerala Matta Kanji feast served with traditional accompaniments",
    category: "Special Kanji",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    id: "g2",
    src: interior,
    alt: "Homely, welcoming dining atmosphere of Kanjikada Dubai in Al Karama",
    category: "Restaurant",
  },
  {
    id: "g3",
    src: fishFry,
    alt: "Crispy Kerala fish fry marinated in ground spices and fried in coconut oil",
    category: "Seafood & Fish",
  },
  {
    id: "g4",
    src: appam,
    alt: "Soft, lacy fermented rice appams served with coconut milk stew",
    category: "Nadan Food",
    span: "sm:row-span-2",
  },
  {
    id: "g5",
    src: beefRoast,
    alt: "Nadan slow-roasted spicy Pothu / Beef roast with crunchy coconut slivers",
    category: "Nadan Food",
  },
  {
    id: "g6",
    src: pazhamPori,
    alt: "Fresh golden Pazham Pori (banana fritters) served for evening tea",
    category: "Evening Snacks",
  },
  {
    id: "g7",
    src: storyTable,
    alt: "Traditional Kerala tharavadu table spread with sadya curries and payasam",
    category: "Atmosphere",
    span: "sm:col-span-2",
  },
  {
    id: "g8",
    src: dosa,
    alt: "Crispy golden Ghee Roast Masala Dosa with coconut chutney and sambar",
    category: "Nadan Food",
  },
  {
    id: "g9",
    src: chai,
    alt: "Authentic pulled South Indian filter coffee and hot spiced Sulaimani tea",
    category: "Atmosphere",
  },
  {
    id: "g10",
    src: chickenCurry,
    alt: "Village style nadan chicken curry simmered in earthenware clay pot",
    category: "Nadan Food",
  },
  {
    id: "g11",
    src: spices,
    alt: "Sun-dried Kerala black pepper, cardamom, star anise and roasted coconut",
    category: "Atmosphere",
  },
  {
    id: "g12",
    src: payasam,
    alt: "Rich Palada and Parippu Payasam dessert in traditional brass bowl",
    category: "Evening Snacks",
  },
  {
    id: "g13",
    src: kozhukatta,
    alt: "Steamed Ela Ada and Kozhukatta parcels with jaggery and coconut filling",
    category: "Evening Snacks",
  },
];
