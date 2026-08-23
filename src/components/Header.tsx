import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10">
        <Link to="/" className="text-sm tracking-[0.34em]">
          {site.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="link-underline text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-sm bg-primary px-6 py-3 text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground transition-colors duration-500 hover:bg-espresso lg:inline-block"
        >
          Start Your Project
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative h-6 w-7 lg:hidden"
        >
          <span
            className={`absolute left-0 h-px w-full bg-foreground transition-all duration-300 ${
              open ? "top-3 rotate-45" : "top-1.5"
            }`}
          />
          <span
            className={`absolute left-0 h-px w-full bg-foreground transition-all duration-300 ${
              open ? "top-3 -rotate-45" : "top-4"
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden border-border bg-background transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-96 border-b opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col px-6 pb-8 pt-2">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="border-b border-border/60 py-4 font-display text-2xl"
              activeProps={{ className: "text-taupe" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-6 rounded-sm bg-primary px-6 py-4 text-center text-[0.7rem] uppercase tracking-[0.2em] text-primary-foreground"
          >
            Start Your Project
          </Link>
        </nav>
      </div>
    </header>
  );
}
