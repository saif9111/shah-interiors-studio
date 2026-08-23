import { createFileRoute } from "@tanstack/react-router";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Interior Design Services — Shah Interior" },
      {
        name: "description",
        content:
          "Home interior design, luxury home interiors, villa and apartment interiors, modular kitchen design, office and commercial interiors, plus turnkey solutions.",
      },
      { property: "og:title", content: "Interior Design Services — Shah Interior" },
      {
        property: "og:description",
        content: "Ten interior design services covering residential, luxury and commercial spaces.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-24 lg:px-10 lg:pb-20 lg:pt-32">
        <SectionHeading
          as="h1"
          eyebrow="Services"
          title="Interior design, from one room to the whole build."
          intro="Every service below can be taken on its own or combined into a single turnkey contract."
        />
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 80}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection title="Not sure which service you need?" intro="Send us your plans or photos and we'll advise." />
    </>
  );
}
