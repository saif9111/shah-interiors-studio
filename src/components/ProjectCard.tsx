import type { Project } from "@/data/site";

export default function ProjectCard({
  project,
  ratio = "aspect-[4/3]",
  showCta = false,
}: {
  project: Project;
  ratio?: string;
  showCta?: boolean;
}) {
  return (
    <article className="group">
      <div className={`img-frame ${ratio}`}>
        <img src={project.image} alt={`${project.name} — ${project.category} interior design project in ${project.location}`} loading="lazy" />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl sm:text-2xl">{project.name}</h3>
          <p className="mt-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {project.category} · {project.location}
          </p>
        </div>
        {showCta && (
          <span className="link-underline mt-2 hidden shrink-0 text-[0.65rem] uppercase tracking-[0.2em] text-taupe sm:inline-block">
            View Project
          </span>
        )}
      </div>
    </article>
  );
}
