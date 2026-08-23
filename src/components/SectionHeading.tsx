import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  const Tag = as;
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <Tag className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.08]">{title}</Tag>
      {intro && (
        <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>
      )}
    </Reveal>
  );
}
