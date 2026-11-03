import { useLanguage } from "../i18n/LanguageProvider";
import { BellRing, ListFilter, Newspaper } from "lucide-react";
import { useMemo, useState } from "react";
import { NewsCard } from "../components/NewsCard";
import { PageHero } from "../components/PageHero";
import { HeroMetric } from "../components/HeroMetric";
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
  const { t } = useLanguage();
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
        compact
        eyebrow={"Newsroom"}
        title={t("Thông tin mới, vừa đủ để bạn luôn bắt kịp.")}
        description={t(
          "Thông báo công ty, hoạt động nội bộ và những cập nhật đáng chú ý từ Sonic Group.",
        )}
        aside={
          <div className="hero-meta">
            <HeroMetric value={newsPosts.length}>
              {t("Thông báo & cập nhật")}
            </HeroMetric>
          </div>
        }
      />

      <section className="bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="relative z-20 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeader
              icon={Newspaper}
              eyebrow={t("Tất cả cập nhật")}
              title={t("Bảng tin Sonic")}
              description={t(
                "Tất cả thông báo được đặt cùng một lưới để người đọc quét nhanh hơn.",
              )}
            />
            <SelectPopover
              label={t("Lọc chủ đề")}
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
                {t("Chưa có thêm bài viết trong chủ đề này")}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
