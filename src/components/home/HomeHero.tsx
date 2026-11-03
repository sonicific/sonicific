import { useLanguage } from "../../i18n/LanguageProvider";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ButtonLink } from "../ButtonLink";
import { SonicSculpture } from "./SonicSculpture";
export function HomeHero() {
  const { t } = useLanguage();
  return (
    <section className="home-hero">
      <div className="site-container">
        <div className="home-hero-layout">
          <div className="home-hero-copy">
            <p className="hero-motion eyebrow">
              {t("Kết nối để tiến xa hơn ")}
              <span className="eyebrow-line" />
            </p>
            <h1 className="hero-motion hero-delay-1">
              {t("Từ tín hiệu")}
              <br />
              {t("thị trường đến")}
              <br />
              <span>{t("tăng trưởng số.")}</span>
            </h1>
            <p className="hero-motion hero-delay-2 home-hero-description">
              {t(
                "Sonic Group kết nối quảng cáo số, thương mại điện tử, nghiên cứu thị trường và sáng tạo nội dung để giúp doanh nghiệp tăng trưởng có định hướng.",
              )}
            </p>
            <div className="hero-motion hero-delay-3 hero-actions">
              <ButtonLink href="/services" icon={ArrowUpRight}>
                {t("Khám phá dịch vụ")}
              </ButtonLink>
              <a href="/contact" className="text-link">
                {t("Liên hệ hợp tác ")}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="hero-motion hero-delay-2 home-hero-art">
            <SonicSculpture />
          </div>
        </div>
        <div className="home-hero-bottom">
          <a href="#about-sonic" className="scroll-cue">
            <span>
              <ArrowDown size={16} aria-hidden="true" />
            </span>{" "}
            {t("Khám phá nhịp Sonic")}
          </a>
          <p>
            {t("Chiến lược sắc nét.")}
            <br />
            <strong>{t("Sáng tạo có mục tiêu.")}</strong>
          </p>
          <span className="hero-edition">{"CONNECT — CREATIVE — GROW"}</span>
        </div>
      </div>
    </section>
  );
}
