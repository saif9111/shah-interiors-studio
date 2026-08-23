import type { Service } from "@/data/site";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group flex flex-col bg-card p-3 transition-colors duration-500 hover:bg-secondary">
      <div className="img-frame aspect-[5/4]">
        <img src={service.image} alt={`${service.name} by Shah Interior`} loading="lazy" />
      </div>
      <div className="px-2 pb-3 pt-6">
        <h3 className="text-xl sm:text-2xl">{service.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
      </div>
    </article>
  );
}
