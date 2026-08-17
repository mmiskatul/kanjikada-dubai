import type { Metadata } from "next";
import { ArrowUpRight, Flame, Leaf, Award, HeartHandshake, Utensils } from "lucide-react";

import storyHeroImage from "@/assets/hero-story.jpg";
import interiorImage from "@/assets/interior.jpg";
import { restaurant } from "@/data/restaurant";
import { Navbar } from "@/components/liz/Navbar";
import { Footer } from "@/components/liz/Footer";
import { PageHeader } from "@/components/liz/PageHeader";
import { StorySection } from "@/components/liz/StorySection";
import { ImageWithFallback } from "@/components/liz/ImageWithFallback";
import { LizLink } from "@/components/liz/LizButton";
import { ScrollReveal } from "@/components/liz/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Story & Kerala Heritage",
  description:
    "Discover the story of Kanjikada Dubai (കഞ്ഞിക്കട ദുബായ്) in Al Karama, Dubai. Bringing nostalgic Kerala matta kanji, traditional clay pot curries, and homely warmth to the UAE.",
};

const culinarySecrets = [
  {
    icon: Flame,
    title: "Earthen Pot Simmering (മൺചട്ടി)",
    description:
      "Our Matta kanji, fish curries, and nadan gravies are slow-cooked in traditional clay pots to bring out authentic earthy depth.",
  },
  {
    icon: Leaf,
    title: "Pure Coconut Oil & Green Kanthari",
    description:
      "We temper dishes in cold-pressed Kerala coconut oil with fresh curry leaves, crushed shallots, and spicy bird's eye chillies.",
  },
  {
    icon: Award,
    title: "Stone-Ground Chammanthi & Pickles",
    description:
      "Every accompaniment — from roasted coconut thenga chammanthi to tangy kadumanga achar — is made fresh daily by hand.",
  },
  {
    icon: HeartHandshake,
    title: "Tharavadu Hospitality (തനിമ)",
    description:
      "We serve every guest like family. Generous portions, unlimited sides, and honest affordable prices for the Dubai community.",
  },
];

export default function StoryPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* Page Hero */}
        <PageHeader
          eyebrow="Our Heritage &amp; Roots"
          title={
            <>
              From God’s Own Country <br />
              <span className="text-gold">To 31 2B St, Al Karama</span>
            </>
          }
          description="A nostalgic tribute to authentic Kerala kanjikada culture, crafted with traditional earthenware, slow-simmered Matta rice, and homely hospitality."
          imageSrc={storyHeroImage}
          imageAlt="Traditional rustic Kerala kitchen with brass uruli and rich spices"
          breadcrumbs={[{ label: "Home", to: "/" }, { label: "Our Story" }]}
        >
          <LizLink href="/menu" variant="gold" size="md">
            Explore Our Menu
            <Utensils className="size-4" />
          </LizLink>
          <LizLink href="/location" variant="ghostOnDark" size="md">
            Visit in Al Karama
          </LizLink>
        </PageHeader>

        {/* Detailed Narrative Section */}
        <section className="py-20 sm:py-28 bg-card">
          <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <p className="eyebrow text-primary">The Heritage</p>
                <h2 className="display-lg mt-3 text-foreground">
                  The Soul of Kerala Kanji <br />
                  <span className="text-primary">In the Heart of Dubai.</span>
                </h2>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <p>
                    When{" "}
                    <strong className="text-foreground">
                      {restaurant.name} ({restaurant.nativeName})
                    </strong>{" "}
                    opened in Al Karama, our mission was deeply personal: to recreate the
                    unmistakable comfort of sitting down to a steaming bowl of Kerala Matta kanji
                    with traditional side dishes.
                  </p>
                  <p>
                    In Kerala, the village "Kanji Kada" is more than an eatery — it is an emotion.
                    It is where travelers, workers, and families gather for the ultimate comforting
                    meal of nutritious red rice porridge, cherupayar thoran, unakka meen, tangy
                    pickled mangoes, and spicy roasted beef.
                  </p>
                  <p>
                    Whether you are yearning for the nostalgic taste of home, craving a hot earthen
                    bowl of kanji after a long workday, or exploring Kerala's rich culinary
                    traditions, we welcome you with open arms and hearty portions.
                  </p>
                </div>
              </div>

              <ScrollReveal direction="scale" className="relative">
                <div className="overflow-hidden rounded-3xl shadow-xl border border-border">
                  <ImageWithFallback
                    src={interiorImage}
                    alt="Warm, inviting dining area of Kanjikada Dubai in Al Karama"
                    className="aspect-4/3 w-full object-cover"
                  />
                </div>
                <div className="glass-card absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 rounded-2xl p-4 sm:p-5 max-w-xs shadow-lg">
                  <p className="font-display text-lg font-bold text-foreground">
                    31 2B St, Al Karama
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Serving steaming hot Kerala Kanji 7 days a week.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Kitchen Craft & Secrets */}
        <section className="py-20 sm:py-28 bg-background border-t border-border">
          <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="eyebrow text-primary">Traditional Methods</p>
              <h2 className="display-md mt-2 text-foreground">
                How We Prepare Authentic Nadan Food
              </h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                We adhere strictly to time-honored Kerala cooking traditions using authentic
                ingredients imported directly from God's Own Country.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {culinarySecrets.map((secret, i) => (
                <ScrollReveal
                  key={secret.title}
                  delay={i * 0.1}
                  className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <secret.icon className="size-6" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold text-foreground">
                    {secret.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {secret.description}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section Component */}
        <StorySection />

        {/* Call to action */}
        <section className="py-16 bg-primary-deep text-primary-foreground">
          <div className="mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
            <h3 className="font-display text-2xl font-bold sm:text-3xl">
              Craving Steaming Hot Kerala Kanji?
            </h3>
            <p className="mt-3 text-sm text-primary-foreground/80">
              Join us at 31 2B St, Al Karama or order directly for takeaway &amp; delivery.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <LizLink
                href={restaurant.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="gold"
                size="lg"
              >
                Order on {restaurant.orderPlatform}
                <ArrowUpRight className="size-4" />
              </LizLink>
              <LizLink href="/menu" variant="ghostOnDark" size="lg">
                View Full Menu
              </LizLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
