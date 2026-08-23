import { BellRing, Newspaper, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { NewsCard } from "../components/NewsCard";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { newsCategories, newsPosts } from "../data/news";

export function NewsPage() {
  const [category, setCategory] = useState("Tất cả");
  const featuredPost = newsPosts.find((post) => post.featured) ?? newsPosts[0];
  const visiblePosts = useMemo(
    () =>
      newsPosts.filter(
        (post) =>
          post.id !== featuredPost.id &&
          (category === "Tất cả" || post.category === category),
      ),
    [category, featuredPost.id],
  );

  return (
    <>
      <PageHero
        tone="dark"
        eyebrow="Newsroom"
        title="Thông tin mới, vừa đủ để bạn luôn bắt kịp."
        description="Thông báo công ty, hoạt động nội bộ và những cập nhật đáng chú ý từ Sonic Group."
        aside={
          <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur">
            <BellRing className="h-5 w-5 text-teal-300" aria-hidden="true" />
            <p className="mt-4 text-sm font-semibold text-white">Cập nhật mới nhất</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {newsPosts.length} thông báo đang được hiển thị theo thứ tự mới nhất.
            </p>
          </div>
        }
      />

      <section className="bg-stone-50 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-teal-700">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Tin nổi bật
            </div>
            <NewsCard post={featuredPost} featured />
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-700">
                Tất cả cập nhật
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-950 sm:text-3xl">
                Bảng tin Sonic
              </h2>
            </div>
            <div className="flex flex-wrap gap-2" aria-label="Lọc tin theo chủ đề">
              {newsCategories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
                    category === item
                      ? "bg-slate-950 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-teal-50 hover:text-teal-700"
                  }`}
                  aria-pressed={category === item}
                >
                  {item}
                </button>
              ))}
            </div>
          </Reveal>

          {visiblePosts.length > 0 ? (
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {visiblePosts.map((post, index) => (
                <Reveal key={post.id} delay={index * 90} variant="scale" className="h-full">
                  <NewsCard post={post} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-stone-50 p-10 text-center">
              <Newspaper className="mx-auto h-6 w-6 text-slate-400" aria-hidden="true" />
              <p className="mt-3 text-sm font-semibold text-slate-900">
                Chưa có thêm bài viết trong chủ đề này
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
