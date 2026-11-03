import { useLanguage } from "../../i18n/LanguageProvider";
import { ArrowDown } from "lucide-react";
import { activities } from "../../data/activities";
export function ActivitiesHero() {
  const { t } = useLanguage();
  return (
    <section className="activities-hero">
      <div className="activities-hero-media">
        <img
          src="/assets/hero.jpg"
          alt={t("Tập thể Sonic Group trong chuyến đi cùng nhau")}
          className="hero-image"
        />
        <div />
      </div>
      <div className="site-container activities-hero-content">
        <div className="activities-hero-top">
          <span>
            <span className="status-dot" />
            {t(" CUỘC SỐNG Ở SONIC")}
          </span>
          <span>
            {t("NHẬT KÝ ĐỘI NGŨ / ")}
            {t(String(activities.length).padStart(2, "0"))}
            {" ALBUM"}
          </span>
        </div>
        <div className="activities-hero-copy">
          <p className="hero-motion eyebrow">
            {t("Cùng làm. Cùng lớn. Cùng vui.")}
          </p>
          <h1 className="hero-motion hero-delay-1">
            {t("Những khoảnh khắc")}
            <br />
            {t("tạo nên ")}
            <span>{"Sonic."}</span>
          </h1>
          <div className="hero-motion hero-delay-2 activities-hero-bottom">
            <p>
              {t(
                "Từ những ngày làm việc cùng nhau đến các chuyến đi và dịp gặp gỡ, mỗi bức ảnh kể thêm một câu chuyện về đội ngũ.",
              )}
            </p>
            <a href="#activity-albums" className="scroll-cue">
              <span>
                <ArrowDown size={19} />
              </span>{" "}
              {t("Mở nhật ký Sonic")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
