import type { Metadata } from "next";
import App from "@/App";
import { parsePath } from "@/lib/router";
import { getSeoEntry } from "@/lib/seo";
import { cookies } from "next/headers";
import { languageCookie, resolveLanguage, translate } from "@/i18n/translate";

interface CatchAllPageProps {
  params: { slug?: string[] };
}

function pathnameFromParams({ slug }: CatchAllPageProps["params"]) {
  return slug?.length ? `/${slug.join("/")}` : "/";
}

export function generateMetadata({ params }: CatchAllPageProps): Metadata {
  const pathname = pathnameFromParams(params);
  const seo = getSeoEntry(parsePath(pathname));
  const language = resolveLanguage(cookies().get(languageCookie)?.value);
  const title = translate(seo.title, language);
  const description = translate(seo.description, language);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: pathname },
    openGraph: {
      title,
      description,
      locale: language === "en" ? "en_GB" : "vi_VN",
      url: pathname,
      type: seo.type ?? "website",
      ...(seo.image ? { images: [seo.image] } : {}),
    },
    twitter: {
      title,
      description,
      card: seo.image ? "summary_large_image" : "summary",
      ...(seo.image ? { images: [seo.image] } : {}),
    },
  };
}

export default function CatchAllPage({ params }: CatchAllPageProps) {
  return (
    <App
      initialPathname={pathnameFromParams(params)}
      initialLanguage={resolveLanguage(cookies().get(languageCookie)?.value)}
    />
  );
}
