import { createFileRoute } from "@tanstack/react-router";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { images, stats } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Shah Interior — Interior Designer & Studio" },
      {
        name: "description",
        content:
          "Meet Shah Interior: an interior design studio with 10+ years of experience in luxury residential interior design, villa interiors and turnkey projects.",
      },
      { property: "og:title", content: "About Shah Interior — Interior Design Studio" },
      {
        property: "og:description",
        content: "Our philosophy, approach and the people behind Shah Interior.",
      },
    ],
  }),
  component: About,
});

const reasons = [
  {
    title: "Single point of ownership",
    text: "One studio for design, procurement and site execution — no handoffs, no gaps.",
  },
  {
    title: "Material-first detailing",
    text: "Finishes are specified, sampled and signed off before a single panel is cut.",
  },
  {
    title: "Transparent budgeting",
    text: "Clear costing at every stage, so decisions are made with full information.",
  },
  {
    title: "Delivered on time",
    text: "Tight site supervision and sequencing keep handover dates realistic and met.",
  },
];

function About() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-6 pb-20 pt-24 lg:px-10 lg:pb-28 lg:pt-32">
        <SectionHeading
          as="h1"
          eyebrow="About"
          title="A studio for people who want their home to feel like them."
          intro="Shah Interior is an interior design studio working across homes, villas, apartments and workspaces. We design with restraint, build with craft, and stay involved until the last cushion is placed."
        />
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <Reveal>
            <div className="img-frame aspect-[4/5]">
              <img
                src={images.founder}
                alt="Founder and lead interior designer at Shah Interior"
                loading="lazy"
              />
            </div>
            <p className="mt-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Founder &amp; Principal Designer
            </p>
          </Reveal>
          <div className="flex flex-col gap-12 lg:pt-10">
            <Reveal delay={100}>
              <h2 className="text-3xl sm:text-4xl">Design philosophy</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                We believe a space should feel calm before it feels impressive. Every plan begins
                with proportion and light, and only then moves to material, furniture and styling.
                A short, honest palette repeated well always outlasts a long one.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <h2 className="text-3xl sm:text-4xl">Our approach</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Projects are led personally, start to finish. We document thoroughly, sample
                physically, and visit site often — so what is drawn is what gets built. Clients see
                one coherent scheme rather than a collection of ideas.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10">
          <div className="grid gap-10 sm:grid-cols-3">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className="text-center">
                  <p className="font-display text-[clamp(2.75rem,7vw,4.5rem)] leading-none">
                    {s.value}
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading eyebrow="Why Choose Us" title="What working with us looks like" />
        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <div className="border-t border-border pt-6">
                <h3 className="text-2xl">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
