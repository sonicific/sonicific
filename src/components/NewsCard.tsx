import { ArrowUpRight, CalendarDays, Clock3, Newspaper } from "lucide-react";
import { formatDate, isRecent } from "../lib/format";
import { routes } from "../lib/router";
import type { NewsPost } from "../types";

interface NewsCardProps {
  post: NewsPost;
  featured?: boolean;
}

export function NewsCard({ post, featured = false }: NewsCardProps) {
  const tone = getNewsTone(post.category);

  return (
    <article
      className={`motion-card group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm ${
        featured ? "grid md:grid-cols-[1.05fr_0.95fr]" : ""
      }`}
    >
      <a
        href={routes.newsDetail(post.id)}
        className={`relative block overflow-hidden ${
          featured ? "min-h-64" : "aspect-[16/10]"
        }`}
        aria-label={`Đọc tin: ${post.title}`}
      >
        <img
          src={post.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className={`rounded-full px-3 py-1 text-[11px] font-semibold backdrop-blur ${tone.badge}`}>
            {post.category}
          </span>
          {isRecent(post.date) ? (
            <span className="rounded-full bg-teal-500 px-3 py-1 text-[11px] font-semibold text-white shadow-sm">
              Mới
            </span>
          ) : null}
        </div>
      </a>
      <div className={`flex flex-col ${featured ? "justify-center p-6 sm:p-8" : "p-5"}`}>
        <div className="mb-4 flex items-center gap-3">
          <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ring-1 ${tone.icon}`}>
            <Newspaper className="h-4 w-4" aria-hidden="true" />
          </span>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
              {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
              {post.readingMinutes} phút đọc
            </span>
          </div>
        </div>
        <h2
          className={`${featured ? "text-2xl" : "text-lg"} font-display font-semibold leading-snug text-slate-950`}
        >
          <a href={routes.newsDetail(post.id)} className={`transition hover:opacity-80 ${tone.text}`}>
            {post.title}
          </a>
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
        <a
          href={routes.newsDetail(post.id)}
          className={`mt-5 inline-flex items-center gap-1.5 text-xs font-semibold ${tone.text}`}
        >
          Xem chi tiết
          <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

function getNewsTone(category: string) {
  if (category === "Công nghệ") {
    return {
      badge: "bg-indigo-50/95 text-indigo-800 ring-1 ring-indigo-100",
      icon: "bg-indigo-50 text-indigo-700 ring-indigo-100",
      text: "text-indigo-700",
    };
  }

  if (category === "Hoạt động") {
    return {
      badge: "bg-rose-50/95 text-rose-800 ring-1 ring-rose-100",
      icon: "bg-rose-50 text-rose-700 ring-rose-100",
      text: "text-rose-700",
    };
  }

  return {
    badge: "bg-teal-50/95 text-teal-800 ring-1 ring-teal-100",
    icon: "bg-teal-50 text-teal-700 ring-teal-100",
    text: "text-teal-700",
  };
}
