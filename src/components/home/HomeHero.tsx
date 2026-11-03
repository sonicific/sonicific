import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ButtonLink } from "../ButtonLink";
import { SonicSculpture } from "./SonicSculpture";

export function HomeHero() {
  return (
    <section className="home-hero">
      <div className="site-container">
        <div className="home-hero-topline">
          <span>
            <span className="status-dot" /> SONIC GROUP · DIGITAL COLLECTIVE
          </span>
          <span>VIETNAM BASED / GLOBALLY MINDED</span>
        </div>
        <div className="home-hero-layout">
          <div className="home-hero-copy">
            <p className="hero-motion eyebrow">
              Kết nối để tiến xa hơn <span className="eyebrow-line" />
            </p>
            <h1 className="hero-motion hero-delay-1">
              Từ tín hiệu
              <br />
              thị trường đến
              <br />
              <span>tăng trưởng số.</span>
            </h1>
            <p className="hero-motion hero-delay-2 home-hero-description">
              Sonic Group kết nối quảng cáo số, thương mại điện tử, nghiên cứu
              thị trường và sáng tạo nội dung để giúp doanh nghiệp tăng trưởng
              có định hướng.
            </p>
            <div className="hero-motion hero-delay-3 hero-actions">
              <ButtonLink href="/services" icon={ArrowUpRight}>
                Khám phá dịch vụ
              </ButtonLink>
              <a href="/contact" className="text-link">
                Liên hệ hợp tác <ArrowUpRight size={17} aria-hidden="true" />
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
            Khám phá nhịp Sonic
          </a>
          <p>
            Chiến lược sắc nét.
            <br />
            <strong>Sáng tạo có mục tiêu.</strong>
          </p>
          <span className="hero-edition">CONNECT — CREATIVE — GROW</span>
        </div>
      </div>
    </section>
  );
}
