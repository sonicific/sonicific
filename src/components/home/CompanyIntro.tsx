import { useLanguage } from "../../i18n/LanguageProvider";
import { company } from "../../data/company";
import { Reveal } from "../Reveal";
export function CompanyIntro() {
  const { t } = useLanguage();
  const stats = [
    {
      value: company.scale.replace(" nhân sự", ""),
      label: "Nhân sự cùng phát triển",
    },
    { value: "02", label: "Địa điểm tại TP.HCM" },
    { value: "2025", label: "Khởi đầu hành trình Sonic" },
  ];
  return (
    <section id="about-sonic" className="company-intro section-space">
      <div className="site-container">
        <div className="intro-layout">
          <Reveal>
            <p className="eyebrow">
              <span className="status-dot" />
              {t(" Một chút về Sonic")}
            </p>
            <h2>
              {t("Một đối tác số.")}
              <br />
              <span>{t("Nhiều khả năng.")}</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="intro-lead">
              {t(
                "Những ý tưởng hay cần một đội ngũ biết cách biến chúng thành kết quả.",
              )}
            </p>
            <p className="intro-description">
              {t(
                "Sonic Group là doanh nghiệp tại Việt Nam hoạt động trong quảng cáo số, thương mại điện tử, nghiên cứu thị trường và nội dung sáng tạo. Chúng tôi kết hợp chiến lược, công nghệ và dữ liệu để hỗ trợ mục tiêu tăng trưởng của khách hàng.",
              )}
            </p>
          </Reveal>
        </div>
        <div className="intro-stats">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 80}>
              <div className="intro-stat">
                <span>
                  {t(stat.value)}
                  <sup>{"↗"}</sup>
                </span>
                <p>{t(stat.label)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
