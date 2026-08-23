import { ArrowLeft, CalendarDays, CheckCircle2, Clock3 } from "lucide-react";
import { ButtonLink } from "../components/ButtonLink";
import { NewsCard } from "../components/NewsCard";
import { Reveal } from "../components/Reveal";
import { newsPosts } from "../data/news";
import { formatDate } from "../lib/format";
import { routes } from "../lib/router";

interface NewsDetailPageProps {
  newsId?: string;
}

export function NewsDetailPage({ newsId }: NewsDetailPageProps) {
  const post = newsPosts.find((item) => item.id === newsId);

  if (!post) {
    return (
      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold text-teal-700">Không tìm thấy tin</p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-950">
            Bài viết này chưa tồn tại
          </h1>
          <div className="mt-6 flex justify-center">
            <ButtonLink href={routes.news} icon={ArrowLeft}>Về trang tin tức</ButtonLink>
          </div>
        </div>
      </section>
    );
  }

  const relatedPosts = newsPosts
    .filter((item) => item.id !== post.id)
    .slice(0, 2);

  return (
    <>
      <article className="bg-white">
        <header className="border-b border-slate-200 bg-stone-50 py-10 sm:py-14">
          <Reveal className="mx-auto max-w-4xl px-4 sm:px-6">
            <ButtonLink href={routes.news} icon={ArrowLeft} variant="light">
              Tất cả tin tức
            </ButtonLink>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
              <span className="rounded-full bg-teal-100 px-3 py-1.5 text-teal-800">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                {post.readingMinutes} phút đọc
              </span>
            </div>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              {post.excerpt}
            </p>
          </Reveal>
        </header>

        <Reveal variant="scale" className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 sm:pt-10">
          <img
            src={post.image}
            alt={post.title}
            className="aspect-[16/7] w-full rounded-2xl object-cover shadow-soft"
          />
        </Reveal>

        <div className="mx-auto grid max-w-5xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_18rem] lg:py-16">
          <Reveal className="space-y-5 text-base leading-8 text-slate-700">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          {post.highlights ? (
            <Reveal variant="right">
              <aside className="rounded-2xl border border-teal-100 bg-teal-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-800">
                  Điểm đáng chú ý
                </p>
                <div className="mt-4 grid gap-3">
                  {post.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-teal-600" aria-hidden="true" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </aside>
            </Reveal>
          ) : null}
        </div>
      </article>

      <section className="border-t border-slate-200 bg-stone-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-slate-950">Tin mới khác</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {relatedPosts.map((item, index) => (
              <Reveal key={item.id} delay={index * 100} variant="scale">
                <NewsCard post={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
