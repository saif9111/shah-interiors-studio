export default function TestimonialCard({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <figure className="flex h-full flex-col justify-between border-t border-border pt-8">
      <blockquote className="font-display text-xl leading-snug sm:text-2xl">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-8">
        <p className="text-sm">{author}</p>
        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{role}</p>
      </figcaption>
    </figure>
  );
}
