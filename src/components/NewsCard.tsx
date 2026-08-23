import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import { formatDate, isRecent } from "../lib/format";
import { routes } from "../lib/router";
import type { NewsPost } from "../types";

interface NewsCardProps {
  post: NewsPost;
  featured?: boolean;
}

export function NewsCard({ post, featured = false }: NewsCardProps) {
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
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 to-transparent" />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-slate-800 backdrop-blur">
            {post.category}
          </span>
          {isRecent(post.date) ? (
            <span className="rounded-full bg-teal-500 px-3 py-1 text-[11px] font-semibold text-white">
              Mới
            </span>
          ) : null}
        </div>
      </a>
      <div className={`flex flex-col ${featured ? "justify-center p-6 sm:p-8" : "p-5"}`}>
        <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {formatDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
            {post.readingMinutes} phút đọc
          </span>
        </div>
        <h2 className={`${featured ? "mt-4 text-2xl" : "mt-3 text-lg"} font-display font-semibold leading-snug text-slate-950`}>
          <a href={routes.newsDetail(post.id)} className="transition hover:text-teal-700">
            {post.title}
          </a>
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
        <a
          href={routes.newsDetail(post.id)}
          className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700"
        >
          Xem chi tiết
          <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
