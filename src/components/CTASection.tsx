import Button from "./Button";
import Reveal from "./Reveal";
import { images } from "@/data/site";

export default function CTASection({
  title = "Your space has a story. Let's design it.",
  intro,
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <img
        src={images.detail1}
        alt="Warm minimal interior detail"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/70" />
      <div className="relative mx-auto max-w-3xl px-6 py-28 text-center sm:py-40">
        <Reveal>
          <h2 className="text-ivory text-[clamp(2.25rem,6vw,4rem)] leading-[1.05]">{title}</h2>
          {intro && <p className="mt-6 text-sm leading-relaxed text-ivory/70 sm:text-base">{intro}</p>}
          <div className="mt-10 flex justify-center">
            <Button to="/contact" variant="light">
              Start Your Project
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
