import { createFileRoute } from "@tanstack/react-router";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import CTASection from "@/components/CTASection";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Interior Design Photography | Shah Interior" },
      {
        name: "description",
        content:
          "A visual gallery of living rooms, modular kitchens, bedrooms, dining areas and offices designed by Shah Interior.",
      },
      { property: "og:title", content: "Gallery — Shah Interior" },
      {
        property: "og:description",
        content: "Living, kitchen, bedroom, dining and office interiors in a warm luxury palette.",
      },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-6 pb-12 pt-24 lg:px-10 lg:pt-32">
        <SectionHeading
          as="h1"
          eyebrow="Gallery"
          title="Rooms, details and finishes."
          intro="Tap any image to view it full screen."
        />
      </section>
      <section className="mx-auto max-w-[1400px] px-6 pb-24 lg:px-10 lg:pb-32">
        <GalleryGrid />
      </section>
      <CTASection />
    </>
  );
}
