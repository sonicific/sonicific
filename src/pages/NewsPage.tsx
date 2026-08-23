import { BellRing, Newspaper } from "lucide-react";
import { useMemo, useState } from "react";
import { NewsCard } from "../components/NewsCard";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { newsCategories, newsPosts } from "../data/news";

export function NewsPage() {
  const [category, setCategory] = useState("Tất cả");
  const visiblePosts = useMemo(
    () =>
      newsPosts.filter(
        (post) => category === "Tất cả" || post.category === category,
      ),
    [category],
  );

  return (
    <>
      <PageHero
        icon={BellRing}
        tone="dark"
        eyebrow="Newsroom"
        title="Thông tin mới, vừa đủ để bạn luôn bắt kịp."
        description="Thông báo công ty, hoạt động nội bộ và những cập nhật đáng chú ý từ Sonic Group."
        aside={
          <div className="rounded-lg border border-white/10 bg-white/[0.07] p-5 backdrop-blur">
            <BellRing className="h-5 w-5 text-teal-300" aria-hidden="true" />
            <p className="mt-4 text-sm font-semibold text-white">Cập nhật mới nhất</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {newsPosts.length} thông báo đang được hiển thị theo thứ tự mới nhất.
            </p>
          </div>
        }
      />

      <section className="bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeader
              icon={Newspaper}
              eyebrow="Tất cả cập nhật"
              title="Bảng tin Sonic"
              description="Tất cả thông báo được đặt cùng một lưới để người đọc quét nhanh hơn."
            />
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
            <div className="mt-8 rounded-lg border border-dashed border-slate-300 bg-stone-50 p-10 text-center">
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
