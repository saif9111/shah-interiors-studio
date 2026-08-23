import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Shah Interior — Start Your Interior Project" },
      {
        name: "description",
        content:
          "Contact Shah Interior to plan your home interior design, modular kitchen or commercial interior project. Call, email or message us on WhatsApp.",
      },
      { property: "og:title", content: "Contact Shah Interior" },
      {
        property: "og:description",
        content: "Let's design your space. Share your project details with the studio.",
      },
    ],
  }),
  component: Contact,
});

const field =
  "w-full border-b border-border bg-transparent py-3 text-sm outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-charcoal";

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-24 lg:px-10 lg:pt-32">
        <SectionHeading
          as="h1"
          eyebrow="Contact"
          title="Let's Design Your Space."
          intro="Tell us a little about your project — size, location and timeline — and we'll get back within two working days."
        />
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
          <Reveal>
            {sent ? (
              <div className="border-t border-border pt-10">
                <h2 className="text-3xl">Thank you — your enquiry is with us.</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  We've received your details and will be in touch shortly. For anything urgent,
                  reach us on WhatsApp.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="link-underline mt-8 text-[0.7rem] uppercase tracking-[0.2em] text-taupe"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="grid gap-7 sm:grid-cols-2"
              >
                <input className={field} name="name" placeholder="Name" required />
                <input className={field} name="phone" type="tel" placeholder="Phone" required />
                <input className={field} name="email" type="email" placeholder="Email" required />
                <select className={field} name="projectType" defaultValue="" required>
                  <option value="" disabled>
                    Project Type
                  </option>
                  <option>Full Home Interior</option>
                  <option>Apartment Interior</option>
                  <option>Villa Interior</option>
                  <option>Modular Kitchen</option>
                  <option>Office / Commercial</option>
                  <option>Other</option>
                </select>
                <input className={field} name="location" placeholder="Location" />
                <input className={field} name="budget" placeholder="Approximate Budget (optional)" />
                <textarea
                  className={`${field} sm:col-span-2`}
                  name="message"
                  rows={4}
                  placeholder="Tell us about your space"
                />
                <div className="sm:col-span-2">
                  <Button type="submit">Send Enquiry</Button>
                </div>
              </form>
            )}
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-9">
            <div>
              <p className="eyebrow mb-3">Phone</p>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="link-underline text-lg">
                {site.phone}
              </a>
            </div>
            <div>
              <p className="eyebrow mb-3">Email</p>
              <a href={`mailto:${site.email}`} className="link-underline text-lg">
                {site.email}
              </a>
            </div>
            <div>
              <p className="eyebrow mb-3">Studio</p>
              <p className="leading-relaxed text-muted-foreground">{site.studio}</p>
            </div>
            <div>
              <p className="eyebrow mb-3">Follow</p>
              <a href={site.instagram} target="_blank" rel="noreferrer" className="link-underline text-lg">
                Instagram
              </a>
            </div>
            <div className="pt-2">
              <Button href={site.whatsapp} variant="outline">
                Message on WhatsApp
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
