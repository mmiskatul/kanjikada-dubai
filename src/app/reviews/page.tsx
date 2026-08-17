"use client";

import { useState } from "react";
import {
  Star,
  MessageSquareQuote,
  ArrowUpRight,
  CheckCircle2,
  ThumbsUp,
  MessageCircle,
} from "lucide-react";

import reviewsHeroImage from "@/assets/hero-reviews.jpg";
import { restaurant } from "@/data/restaurant";
import { reviewThemes } from "@/data/reviews";
import { Navbar } from "@/components/liz/Navbar";
import { Footer } from "@/components/liz/Footer";
import { PageHeader } from "@/components/liz/PageHeader";
import { ReviewsSection } from "@/components/liz/ReviewsSection";
import { LizLink } from "@/components/liz/LizButton";
import { ScrollReveal } from "@/components/liz/ScrollReveal";

const ratingsBreakdown = [
  { stars: 5, percentage: 88 },
  { stars: 4, percentage: 9 },
  { stars: 3, percentage: 2 },
  { stars: 2, percentage: 0.5 },
  { stars: 1, percentage: 0.5 },
];

const sentimentTags = [
  "All",
  "Special Matta Kanji",
  "Kappa & Fish Curry",
  "Beef / Pothu Roast",
  "Nadan Pazhamkanji",
  "Homely Service",
  "Honest Value",
];

export default function ReviewsPage() {
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const filteredReviews =
    selectedTag === "All" ? reviewThemes : reviewThemes.filter((r) => r.tag === selectedTag);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* Page Hero */}
        <PageHeader
          eyebrow="Guest Sentiments &amp; Love"
          title={
            <>
              Rated {restaurant.rating.value} Stars by <br />
              <span className="text-gold">
                {restaurant.rating.count.toLocaleString()}+ Diners in Dubai
              </span>
            </>
          }
          description="Honest feedback and genuine memories from thousands of guests who make Kanjikada Dubai their everyday home for comfort food in Al Karama."
          imageSrc={reviewsHeroImage}
          imageAlt="Happy diners enjoying steaming hot Kerala kanji and meals"
          breadcrumbs={[{ label: "Home", to: "/" }, { label: "Reviews" }]}
        >
          <LizLink
            href={restaurant.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="gold"
            size="md"
          >
            <MessageCircle className="size-4" />
            Order on WhatsApp
          </LizLink>
          <LizLink
            href={restaurant.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghostOnDark"
            size="md"
          >
            Read on Google Maps
            <ArrowUpRight className="size-4" />
          </LizLink>
        </PageHeader>

        {/* Rating Breakdown Spotlight */}
        <section className="py-16 sm:py-20 bg-card border-b border-border">
          <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] items-center">
              {/* Overall Score Box */}
              <ScrollReveal className="rounded-3xl border border-border bg-background p-8 text-center sm:text-left flex flex-col sm:flex-row items-center gap-8 shadow-sm">
                <div className="flex size-28 shrink-0 flex-col items-center justify-center rounded-3xl bg-gold/15 text-gold border border-gold/30">
                  <span className="font-display text-4xl font-extrabold text-foreground">
                    {restaurant.rating.value}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground">out of 5.0</span>
                </div>

                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mt-2">
                    Exceptional Google Rating
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Based on {restaurant.rating.count.toLocaleString()}+ verified Google reviews for
                    Kanjikada Dubai (കഞ്ഞിക്കട ദുബായ്) at 31 2B St, Al Karama.
                  </p>
                </div>
              </ScrollReveal>

              {/* Star Distribution Bars */}
              <ScrollReveal delay={0.15} className="space-y-2.5">
                {ratingsBreakdown.map((item) => (
                  <div key={item.stars} className="flex items-center gap-3 text-xs">
                    <span className="w-12 font-semibold text-foreground flex items-center gap-1">
                      {item.stars} <Star className="size-3 fill-gold text-gold" />
                    </span>
                    <div className="flex-1 h-3 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-700"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="w-10 text-right text-muted-foreground font-medium">
                      {item.percentage}%
                    </span>
                  </div>
                ))}
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Filterable Review Cards Section */}
        <section className="py-20 sm:py-28 bg-background">
          <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <p className="eyebrow text-primary">Key Sentiments</p>
              <h2 className="display-md mt-2 text-foreground">What Diners Love About Kanjikada</h2>
            </div>

            {/* Tags Scroll */}
            <div className="no-scrollbar flex items-center justify-center gap-2 overflow-x-auto pb-4">
              {sentimentTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(tag)}
                  className={`shrink-0 rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                    selectedTag === tag
                      ? "bg-primary text-primary-foreground shadow-md scale-105"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Review Cards */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredReviews.map((rev, idx) => (
                <ScrollReveal
                  key={rev.id}
                  delay={idx * 0.08}
                  className="rounded-3xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: rev.stars }).map((_, i) => (
                          <Star key={i} className="size-3.5 fill-gold text-gold" />
                        ))}
                      </div>
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[0.6875rem] font-semibold text-primary">
                        {rev.tag}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-base font-bold text-foreground">
                      {rev.theme}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      "{rev.body}"
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 font-medium text-foreground">
                      <span className="flex size-6 items-center justify-center rounded-full bg-primary text-[0.625rem] font-bold text-primary-foreground">
                        {rev.reviewer.charAt(0)}
                      </span>
                      <span>{rev.reviewer}</span>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-600 font-medium text-[0.6875rem]">
                      <CheckCircle2 className="size-3.5" />
                      <span>{rev.date}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section Component */}
        <ReviewsSection />

        {/* Leave a review & Order banner */}
        <section className="py-16 bg-primary-deep text-primary-foreground">
          <div className="mx-auto w-full max-w-3xl px-5 text-center sm:px-8">
            <h3 className="font-display text-2xl font-bold sm:text-3xl">
              Have You Dined with Us at 31 2B St, Karama?
            </h3>
            <p className="mt-3 text-sm text-primary-foreground/80">
              Your feedback means the world to our kitchen and service team. Share your experience
              or order on WhatsApp!
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <LizLink
                href={restaurant.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="gold"
                size="lg"
              >
                <MessageCircle className="size-4" />
                Order on WhatsApp ({restaurant.phone})
              </LizLink>
              <LizLink
                href={restaurant.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghostOnDark"
                size="lg"
              >
                Leave a Google Review
                <ArrowUpRight className="size-4" />
              </LizLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
