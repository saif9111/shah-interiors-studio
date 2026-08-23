import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import { projectFilters, projects } from "@/data/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Residential & Luxury Interior Design Portfolio" },
      {
        name: "description",
        content:
          "Browse the Shah Interior portfolio: residential interior design, luxury villas, apartments and commercial workspaces across India.",
      },
      { property: "og:title", content: "Projects — Shah Interior Portfolio" },
      {
        property: "og:description",
        content: "Selected residential, luxury and commercial interior design projects.",
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="mx-auto max-w-[1400px] px-6 pb-12 pt-24 lg:px-10 lg:pt-32">
        <SectionHeading
          as="h1"
          eyebrow="Portfolio"
          title="Projects"
          intro="A selection of homes, villas and workspaces designed and delivered by the studio."
        />
        <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-[0.7rem] uppercase tracking-[0.22em] transition-colors duration-300 ${
                filter === f ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2">
          {visible.map((p, i) => (
            <Reveal key={`${p.name}-${filter}`} delay={(i % 2) * 90} className={i % 2 === 1 ? "sm:mt-20" : ""}>
              <ProjectCard
                project={p}
                showCta
                ratio={i % 3 === 1 ? "aspect-[4/5]" : "aspect-[4/3]"}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection title="Your project could be next." />
    </>
  );
}
