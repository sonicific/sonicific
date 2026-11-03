import { useLanguage } from "../../i18n/LanguageProvider";
import { ArrowUpRight, MapPin } from "lucide-react";
import { company, socials } from "../../data/company";
import { businessContact } from "../../data/business";
import { navigation } from "../../data/navigation";
import { Reveal } from "../Reveal";
export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="site-container">
        <Reveal className="footer-invitation">
          <div>
            <p className="eyebrow">
              <span className="status-dot" />
              {t(" Một cuộc trò chuyện, nhiều khả năng")}
            </p>
            <h2>
              {t("Cùng tạo điều")}
              <br />
              <span>{t("tiếp theo.")}</span>
            </h2>
          </div>
          <a
            href="/contact"
            className="footer-orbit-link"
            aria-label={t("Liên hệ hợp tác với Sonic")}
          >
            <ArrowUpRight aria-hidden="true" />
            <span>{t("Bắt đầu kết nối")}</span>
          </a>
        </Reveal>
        <div className="footer-content">
          <div className="footer-company">
            <a href="/" className="footer-wordmark">
              {"Sonic"}
              <span>{"®"}</span>
            </a>
            <p>
              {t(company.legalName)}
              <br />
              {t("Mã số thuế: ")}
              {t(company.taxCode)}
            </p>
            <div className="footer-maps">
              {company.branches.map((branch) => (
                <a
                  key={branch.name}
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPin size={13} />
                  {t(branch.name)}
                  <ArrowUpRight size={12} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="footer-label">{t("Khám phá")}</p>
            <nav
              className="footer-navigation"
              aria-label={t("Điều hướng chân trang")}
            >
              {navigation.map((item) => (
                <a key={item.href} href={item.href}>
                  {t(item.label)}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <p className="footer-label">{t("Hợp tác đối tác")}</p>
            <a
              className="footer-email"
              href={`mailto:${businessContact.email}`}
            >
              {t(businessContact.email)}
              <ArrowUpRight size={18} />
            </a>
            <p className="footer-label footer-contact-label">
              {t("Tuyển dụng & thông tin công ty")}
            </p>
            <a className="footer-email" href={`mailto:${company.contactEmail}`}>
              {t(company.contactEmail)}
              <ArrowUpRight size={18} />
            </a>
            <a className="footer-phone" href={businessContact.phoneHref}>
              {t(businessContact.phone)}
            </a>
            <div className="footer-socials">
              {socials.slice(1, 3).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t(item.label)}
                  <ArrowUpRight size={13} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            {"© "}
            {new Date().getFullYear()}
            {" Sonic Group"}
          </p>
          <p>{t("Chiến lược có hướng. Sáng tạo có chất.")}</p>
          <span>{t("TP. Hồ Chí Minh, Việt Nam ↗")}</span>
        </div>
      </div>
    </footer>
  );
}
