import { ArrowDown } from "lucide-react";
import { activities } from "../../data/activities";

export function ActivitiesHero() {
  return (
    <section className="activities-hero">
      <div className="activities-hero-media">
        <img
          src="/assets/hero.jpg"
          alt="Tập thể Sonic Group trong chuyến đi cùng nhau"
          className="hero-image"
        />
        <div />
      </div>
      <div className="site-container activities-hero-content">
        <div className="activities-hero-top">
          <span>
            <span className="status-dot" /> CUỘC SỐNG Ở SONIC
          </span>
          <span>
            NHẬT KÝ ĐỘI NGŨ / {String(activities.length).padStart(2, "0")} ALBUM
          </span>
        </div>
        <div className="activities-hero-copy">
          <p className="hero-motion eyebrow">Cùng làm. Cùng lớn. Cùng vui.</p>
          <h1 className="hero-motion hero-delay-1">
            Những khoảnh khắc
            <br />
            tạo nên <span>Sonic.</span>
          </h1>
          <div className="hero-motion hero-delay-2 activities-hero-bottom">
            <p>
              Từ những ngày làm việc cùng nhau đến các chuyến đi và dịp gặp gỡ,
              mỗi bức ảnh kể thêm một câu chuyện về đội ngũ.
            </p>
            <a href="#activity-albums" className="scroll-cue">
              <span>
                <ArrowDown size={19} />
              </span>{" "}
              Mở nhật ký Sonic
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
