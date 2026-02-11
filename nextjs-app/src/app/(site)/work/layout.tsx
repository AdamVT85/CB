import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Selected Editorial",
  description:
    "A curated collection of brand narratives, heritage storytelling, and verbal identities for the world's most evocative destinations.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
