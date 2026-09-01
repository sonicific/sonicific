import { BellRing, ListFilter, Newspaper } from "lucide-react";
import { useMemo, useState } from "react";
import { NewsCard } from "../components/NewsCard";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { SelectPopover } from "../components/SelectPopover";
import { newsCategories, newsPosts } from "../data/news";

const allCategories = "Tất cả";
const categoryOptions = newsCategories.map((item) => ({
  label: item,
  value: item,
}));

export function NewsPage() {
  const [category, setCategory] = useState(allCategories);
  const visiblePosts = useMemo(
    () =>
      newsPosts.filter(
        (post) => category === allCategories || post.category === category,
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
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start space-x-2">
              <BellRing className="h-5 w-5 text-teal-700" aria-hidden="true" />
              <p className="text-sm font-semibold text-slate-950">
                Cập nhật mới nhất
              </p>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {newsPosts.length} thông báo đang được hiển thị theo thứ tự mới
              nhất.
            </p>
          </div>
        }
      />

      <section className="bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="reveal-overflow-visible relative z-20 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeader
              icon={Newspaper}
              eyebrow="Tất cả cập nhật"
              title="Bảng tin Sonic"
              description="Tất cả thông báo được đặt cùng một lưới để người đọc quét nhanh hơn."
            />
            <SelectPopover
              label="Lọc chủ đề"
              value={category}
              options={categoryOptions}
              onValueChange={setCategory}
              icon={ListFilter}
              allValue={allCategories}
              align="right"
            />
          </Reveal>

          {visiblePosts.length > 0 ? (
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {visiblePosts.map((post, index) => (
                <Reveal
                  key={post.id}
                  delay={index * 90}
                  variant="scale"
                  className="h-full"
                >
                  <NewsCard post={post} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-lg border border-dashed border-slate-300 bg-stone-50 p-10 text-center">
              <Newspaper
                className="mx-auto h-6 w-6 text-slate-400"
                aria-hidden="true"
              />
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
