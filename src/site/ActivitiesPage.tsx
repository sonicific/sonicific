import { useLanguage } from "../i18n/LanguageProvider";
import { ArrowUpRight, Images } from "lucide-react";
import { ActivitiesHero } from "../components/activities/ActivitiesHero";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { activities } from "../data/activities";
import { routes } from "../lib/router";
export function ActivitiesPage() {
  const { t } = useLanguage();
  return (
    <>
      <ActivitiesHero />
      <section id="activity-albums" className="activity-albums section-space">
        <div className="site-container">
          <Reveal className="section-topline">
            <SectionHeader
              icon={Images}
              eyebrow={t("Album hoạt động")}
              title={t("Lưu lại những ngày đáng nhớ.")}
              description={t(
                "Những chuyến đi, buổi gặp gỡ và khoảnh khắc cùng nhau tạo nên văn hóa Sonic.",
              )}
            />
            <span className="album-count">
              {t(String(activities.length).padStart(2, "0"))}{" "}
              <small>{t("câu chuyện")}</small>
            </span>
          </Reveal>
          <div className="activity-gallery">
            {activities.map((activity, index) => (
              <Reveal
                key={activity.id}
                delay={index * 90}
                className={`activity-gallery-item ${index === 0 ? "activity-gallery-featured" : ""}`}
              >
                <a
                  href={routes.activityDetail(activity.id)}
                  className="activity-photo-card"
                  aria-label={t(`Mở album ${activity.title}`)}
                >
                  <img
                    src={activity.image}
                    alt={t(activity.title)}
                    loading="lazy"
                  />
                  <div className="activity-photo-shade" />
                  <span className="photo-index">
                    {"SONIC MOMENTS / 0"}
                    {index + 1}
                  </span>
                  <span className="photo-arrow">
                    <ArrowUpRight size={24} />
                  </span>
                  <div className="activity-photo-caption">
                    <p>{t("Nhật ký đội ngũ ↗")}</p>
                    <h2>{t(activity.title)}</h2>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
