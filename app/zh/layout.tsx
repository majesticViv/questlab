import type { Metadata } from "next";
import { content } from "@/lib/content-zh";

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  robots: { index: false, follow: false },
  openGraph: {
    title: content.meta.title,
    description: content.meta.description,
    images: [{ url: "/images/hero-landscape.png", width: 1920, height: 400 }],
  },
};

export default function ZhLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div lang="zh-Hans">{children}</div>;
}
