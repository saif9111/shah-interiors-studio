import { Link } from "@tanstack/react-router";
import { nav, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-sm tracking-[0.34em]">{site.name}</p>
            <p className="mt-5 font-display text-2xl leading-snug text-ivory/80">{site.tagline}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <p className="eyebrow mb-2 text-ivory/50">Explore</p>
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="w-fit text-sm text-ivory/70 transition-colors duration-300 hover:text-ivory"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 text-sm text-ivory/70">
            <p className="eyebrow mb-2 text-ivory/50">Studio</p>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-ivory">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-ivory">
              {site.email}
            </a>
            <a href={site.instagram} target="_blank" rel="noreferrer" className="hover:text-ivory">
              Instagram
            </a>
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="hover:text-ivory">
              WhatsApp
            </a>
            <p className="mt-2 leading-relaxed text-ivory/50">{site.studio}</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-ivory/15 pt-7 text-xs text-ivory/45 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Interior Design Studio · Residential &amp; Commercial</p>
        </div>
      </div>
    </footer>
  );
}
