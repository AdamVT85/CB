import Link from "next/link";
import Accented from "./Accented";

export type ServiceListItem = {
  slug: string;
  title: string;
  titleAccent?: string | null;
  summary?: string | null;
};

export default function ServicesList({ items }: { items: ServiceListItem[] }) {
  return (
    <div className="toc-list">
      {items.map((s, i) => (
        <Link key={s.slug} href={`/services/${s.slug}`} className="toc-item">
          <div className="n">{String(i + 1).padStart(2, "0")}</div>
          <div className="title">
            <Accented text={s.title} accent={s.titleAccent} />
          </div>
          <div className="dek">{s.summary}</div>
          <div className="page">↗</div>
        </Link>
      ))}
    </div>
  );
}
