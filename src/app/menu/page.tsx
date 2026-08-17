import type { Metadata } from "next";
import { ArrowUpRight, Sparkles, UtensilsCrossed, Phone } from "lucide-react";

import menuHeroImage from "@/assets/hero-menu.jpg";
import { restaurant } from "@/data/restaurant";
import { Navbar } from "@/components/liz/Navbar";
import { Footer } from "@/components/liz/Footer";
import { PageHeader } from "@/components/liz/PageHeader";
import { MenuSection } from "@/components/liz/MenuSection";
import { LizLink } from "@/components/liz/LizButton";
import { ScrollReveal } from "@/components/liz/ScrollReveal";

export const metadata: Metadata = {
  title: "Authentic Kerala Kanji & Food Menu",
  description:
    "Explore the authentic menu of Kanjikada Dubai (കഞ്ഞിക്കട ദുബായ്) in Al Karama. Steaming hot Matta Kanji sets, Kappa Meen Curry, Nadan Beef Roast, Pazhamkanji, Appam, and Kerala Sadya.",
};

const featuredCombos = [
  {
    title: "Special Matta Kanji Set",
    description:
      "Steaming Kerala Matta rice kanji served with payar thoran, roasted coconut chammanthi, spicy mango pickle, ghee, and crisp papadam.",
    badge: "House Signature",
    highlight: "Unlimited Payar & Sambar",
  },
  {
    title: "Pothu Roast Kanji Combo",
    description:
      "Hot earthen pot kanji served with tender, slow-roasted Malabar beef with fried coconut bits and crushed shallot chammanthi.",
    badge: "Most Popular",
    highlight: "Spicy & Homely",
  },
  {
    title: "Kappa & Kottayam Meen Curry",
    description:
      "Soft mashed tapioca tempered with coconut and turmeric, served with fiery red Kerala fish curry simmered with kudampuli.",
    badge: "Iconic Classic",
    highlight: "Authentic Clay Pot Recipe",
  },
  {
    title: "Nadan Pazhamkanji Platter",
    description:
      "Overnight fermented cold rice porridge with crushed shallots, kanthari chillies, fresh curd, and hot fried fish.",
    badge: "Pure Nostalgia",
    highlight: "Served Daily",
  },
];

export default function MenuPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* Dedicated Page Hero */}
        <PageHeader
          eyebrow="Nadan Food &amp; Kanji Sets"
          title={
            <>
              Authentic Kerala Menu. <br />
              <span className="text-gold">Steaming Kanji &amp; Homely Delicacies.</span>
            </>
          }
          description="Hand-crafted Kerala recipes prepared with traditional Matta rice, cold-pressed coconut oil, stone-ground masalas, and genuine tharavadu warmth."
          imageSrc={menuHeroImage}
          imageAlt="Authentic Kerala Matta kanji and side dishes spread on banana leaves"
          breadcrumbs={[{ label: "Home", to: "/" }, { label: "Menu" }]}
        >
          <LizLink
            href={restaurant.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="gold"
            size="md"
          >
            Order on {restaurant.orderPlatform}
            <ArrowUpRight className="size-4" />
          </LizLink>
          <LizLink href={restaurant.phoneHref} variant="ghostOnDark" size="md">
            <Phone className="size-4" />
            Takeaway Hotline ({restaurant.phone})
          </LizLink>
        </PageHeader>

        {/* Featured Combos Showcase */}
        <section className="py-16 sm:py-20 bg-card border-b border-border">
          <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <p className="eyebrow text-primary">Signature Kanji &amp; Combos</p>
                <h2 className="display-md mt-2 text-foreground">
                  Traditional Pairings Loved in Dubai
                </h2>
              </div>
              <p className="text-xs text-muted-foreground max-w-sm">
                Authentic Kerala tharavadu combinations crafted fresh daily at Kanjikada Dubai.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredCombos.map((combo, i) => (
                <ScrollReveal
                  key={combo.title}
                  delay={i * 0.08}
                  className="flex flex-col justify-between rounded-3xl border border-border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 rounded-full bg-gold/20 px-2.5 py-0.5 text-[0.6875rem] font-bold text-primary-deep">
                        <Sparkles className="size-3" />
                        {combo.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-base font-bold text-foreground mt-4">
                      {combo.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {combo.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs font-semibold text-primary">{combo.highlight}</span>
                    <UtensilsCrossed className="size-4 text-muted-foreground/60" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Full Interactive Menu Section */}
        <MenuSection />

        {/* Catering & Bulk Orders Banner */}
        <section className="py-16 sm:py-20 bg-background border-t border-border">
          <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
            <div className="rounded-3xl border border-primary/20 bg-linear-to-br from-primary/5 via-card to-background p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl text-center md:text-left">
                <span className="eyebrow text-primary">Events &amp; Family Gatherings</span>
                <h3 className="font-display text-2xl font-bold sm:text-3xl mt-2 text-foreground">
                  Kerala Sadya &amp; Party Catering in Dubai
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Planning a family get-together, birthday, or corporate lunch? We cater authentic
                  Kerala feasts with banana leaves, traditional curries, and live appam &amp; kanji
                  counters.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <LizLink href={restaurant.phoneHref} size="lg">
                  <Phone className="size-4" />
                  Call for Catering ({restaurant.phone})
                </LizLink>
                <LizLink
                  href={restaurant.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="lg"
                >
                  Visit Restaurant
                </LizLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
