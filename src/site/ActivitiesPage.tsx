import { ArrowUpRight, Images } from "lucide-react";
import { ActivitiesHero } from "../components/activities/ActivitiesHero";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { activities } from "../data/activities";
import { routes } from "../lib/router";

export function ActivitiesPage() {
  return (
    <>
      <ActivitiesHero />
      <section id="activity-albums" className="activity-albums section-space">
        <div className="site-container">
          <Reveal className="section-topline">
            <SectionHeader
              icon={Images}
              eyebrow="Album hoạt động"
              title="Lưu lại những ngày đáng nhớ."
              description="Những chuyến đi, buổi gặp gỡ và khoảnh khắc cùng nhau tạo nên văn hóa Sonic."
            />
            <span className="album-count">
              {String(activities.length).padStart(2, "0")}{" "}
              <small>câu chuyện</small>
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
                  aria-label={`Mở album ${activity.title}`}
                >
                  <img
                    src={activity.image}
                    alt={activity.title}
                    loading="lazy"
                  />
                  <div className="activity-photo-shade" />
                  <span className="photo-index">
                    SONIC MOMENTS / 0{index + 1}
                  </span>
                  <span className="photo-arrow">
                    <ArrowUpRight size={24} />
                  </span>
                  <div className="activity-photo-caption">
                    <p>Nhật ký đội ngũ ↗</p>
                    <h2>{activity.title}</h2>
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
