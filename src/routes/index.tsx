import { createFileRoute } from "@tanstack/react-router";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import {
  featuredServices,
  images,
  processSteps,
  projects,
  site,
  testimonials,
} from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shah Interior — Luxury Interior Design Studio" },
      {
        name: "description",
        content:
          "Shah Interior is an interior design studio creating luxury residential and commercial interiors — home interior design, villa interiors and modular kitchen design.",
      },
      { property: "og:title", content: "Shah Interior — Luxury Interior Design Studio" },
      {
        property: "og:description",
        content: "Thoughtful interiors. Timeless spaces. Residential and commercial interior design.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img
          src={images.heroLiving}
          alt="Luxury living room interior designed by Shah Interior"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/35 to-charcoal/25" />
        <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-20 pt-32 lg:px-10 lg:pb-28">
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.34em] text-ivory/70">{site.name}</p>
            <h1 className="mt-7 max-w-4xl text-ivory text-[clamp(2.6rem,8vw,6rem)] leading-[1.02]">
              Spaces Designed Around You.
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-relaxed text-ivory/75 sm:text-base">
              Thoughtful interiors created around the way you live, work, and experience your space.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button to="/projects" variant="light">
                Explore Projects
              </Button>
              <Button to="/contact" variant="light">
                Start Your Project
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <SectionHeading
            eyebrow="The Studio"
            title="An interior design studio built on restraint and craft."
          />
          <Reveal delay={120} className="lg:pt-16">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Shah Interior designs homes and workspaces that feel calm, warm and quietly luxurious.
              We work with a tight palette of honest materials — stone, oak, plaster, linen — and
              layer them with light so every room feels resolved rather than decorated.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              From single rooms to complete turnkey residences, each project is led personally by
              the studio from first sketch to final styling.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-[1400px] px-6 pb-24 lg:px-10 lg:pb-32">
        <SectionHeading eyebrow="Selected Work" title="Featured Projects" />
        <div className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal key={p.name} delay={i * 90} className={i % 2 === 1 ? "sm:mt-16" : ""}>
              <ProjectCard project={p} showCta ratio={i % 2 === 1 ? "aspect-[4/5]" : "aspect-[4/3]"} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-16">
          <Button to="/projects" variant="outline">
            View All Projects
          </Button>
        </Reveal>
      </section>

      {/* Services */}
      <section className="bg-card">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <SectionHeading
            eyebrow="What We Do"
            title="Services"
            intro="Residential and commercial interior design, delivered end to end."
          />
          <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((s, i) => (
              <Reveal key={s.name} delay={i * 60}>
                <div className="h-full bg-background p-8 transition-colors duration-500 hover:bg-secondary lg:p-10">
                  <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-5 text-2xl">{s.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Design philosophy */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div className="img-frame aspect-[4/5]">
              <img
                src={images.detail1}
                alt="Architectural interior detail in warm plaster and oak"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow mb-6">Design Philosophy</p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.08]">
              Good interiors are felt long before they are noticed.
            </h2>
            <p className="mt-7 text-base leading-relaxed text-muted-foreground sm:text-lg">
              We design for the quiet hours — morning light across a wall, the weight of a door, the
              way a room holds a conversation. Proportion comes first, then material, then the few
              objects that deserve attention.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              The result is timeless rather than trend-led: spaces that still feel right a decade
              after handover.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-card">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <SectionHeading eyebrow="How We Work" title="Discover → Design → Create → Transform" />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s, i) => (
              <Reveal key={s.step} delay={i * 80}>
                <div className="border-t border-charcoal/20 pt-6">
                  <p className="font-display text-4xl text-taupe">{s.step}</p>
                  <h3 className="mt-4 text-2xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading eyebrow="Clients" title="Kind words" />
        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 90}>
              <TestimonialCard {...t} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection intro="Tell us about your space and we'll take it from there." />
    </>
  );
}
