import type { Metadata } from "next";
import App from "@/App";
import { parsePath } from "@/lib/router";
import { getSeoEntry } from "@/lib/seo";

interface CatchAllPageProps {
  params: { slug?: string[] };
}

function pathnameFromParams({ slug }: CatchAllPageProps["params"]) {
  return slug?.length ? `/${slug.join("/")}` : "/";
}

export function generateMetadata({ params }: CatchAllPageProps): Metadata {
  const pathname = pathnameFromParams(params);
  const seo = getSeoEntry(parsePath(pathname));

  return {
    title: { absolute: seo.title },
    description: seo.description,
    alternates: { canonical: pathname },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: pathname,
      type: seo.type ?? "website",
      ...(seo.image ? { images: [seo.image] } : {}),
    },
    twitter: {
      title: seo.title,
      description: seo.description,
      card: seo.image ? "summary_large_image" : "summary",
      ...(seo.image ? { images: [seo.image] } : {}),
    },
  };
}

export default function CatchAllPage({ params }: CatchAllPageProps) {
  return <App initialPathname={pathnameFromParams(params)} />;
}
