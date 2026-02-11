import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Behind the Pen",
  description:
    "Based between the limestone cliffs of the Mediterranean and the historic libraries of London, weaving narratives for brands that prefer to whisper rather than shout.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
