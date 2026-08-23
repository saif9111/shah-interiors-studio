import { useEffect, useState } from "react";
import { gallery, galleryCategories, type GalleryItem } from "@/data/site";

export default function GalleryGrid() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<GalleryItem | null>(null);

  const items = filter === "All" ? gallery : gallery.filter((i) => i.category === filter);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <div className="flex flex-wrap gap-x-7 gap-y-3">
        {galleryCategories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`text-[0.7rem] uppercase tracking-[0.22em] transition-colors duration-300 ${
              filter === c ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {items.map((item, i) => (
          <button
            key={`${item.alt}-${i}`}
            onClick={() => setActive(item)}
            className="img-frame block w-full cursor-zoom-in"
            aria-label={`Open image: ${item.alt}`}
          >
            <img src={item.image} alt={item.alt} loading="lazy" className="w-full" />
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 p-4 animate-in fade-in duration-300"
        >
          <button
            onClick={() => setActive(null)}
            aria-label="Close image viewer"
            className="absolute right-5 top-5 text-xs uppercase tracking-[0.22em] text-ivory/80 hover:text-ivory"
          >
            Close
          </button>
          <img
            src={active.image}
            alt={active.alt}
            className="max-h-[85vh] max-w-full rounded-sm object-contain"
          />
        </div>
      )}
    </>
  );
}
