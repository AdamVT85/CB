import Link from "next/link";
import type { Metadata } from "next";
import { reader } from "@/lib/reader";
import ServicesList from "@/components/ServicesList";

export const metadata: Metadata = {
  title: "Services — Claire Webb",
  description:
    "Travel content services: website & destination copy, magazines & print editorial, B2B reports & lead generation, podcasts & interview content, strategy & training.",
};

export default async function Services() {
  const all = await reader.collections.services.all();
  const services = all
    .sort((a, b) => (a.entry.sortOrder ?? 0) - (b.entry.sortOrder ?? 0))
    .map((s) => ({
      slug: s.slug,
      title: s.entry.title,
      titleAccent: s.entry.titleAccent,
      summary: s.entry.summary,
    }));

  return (
    <section className="toc-section !pt-28">
      <div className="container">
        <div className="text-center">
          <div className="eyebrow eyebrow--rule mb-7 justify-center">What I do</div>
        </div>
        <h2>The contents.</h2>
        <div className="toc-meta">
          Five things I&apos;m good at — and a few I won&apos;t pretend to be
        </div>

        <ServicesList items={services} />

        <div className="mt-28 pt-20 border-t border-[var(--rule)] text-center">
          <div className="eyebrow mb-6 justify-center">Not sure which you need?</div>
          <h2 className="fr-display text-[clamp(40px,6vw,80px)] leading-[0.98] tracking-[-0.018em] mb-10">
            Tell me the problem, <em>not the brief</em>.
          </h2>
          <Link href="/contact" className="btn btn--azure">
            Start a project <span className="arrow">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
