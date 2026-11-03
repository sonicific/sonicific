import { useLanguage } from "../../i18n/LanguageProvider";
import { useState } from "react";
import {
  ArrowUpRight,
  ChartNoAxesCombined,
  Megaphone,
  SearchCheck,
  ShoppingBag,
} from "lucide-react";
import { businessServices } from "../../data/business";
import { ButtonLink } from "../ButtonLink";
import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";
const serviceIcons = [Megaphone, ShoppingBag, SearchCheck, ChartNoAxesCombined];
export function BusinessServicesSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const service = businessServices[activeIndex];
  const Icon = serviceIcons[activeIndex];
  return (
    <section className="services-showcase section-space">
      <div className="site-container">
        <Reveal className="section-topline">
          <SectionHeader
            eyebrow={t("01 / Những gì chúng tôi làm")}
            title={t("Bốn năng lực.\nMột hướng tăng trưởng.")}
          />
          <ButtonLink href="/services" icon={ArrowUpRight} variant="light">
            {t("Tất cả dịch vụ")}
          </ButtonLink>
        </Reveal>
        <div className="services-interactive">
          <Reveal className="service-selector">
            {businessServices.map((item, index) => (
              <div
                className={`service-option ${index === activeIndex ? "is-active" : ""}`}
                key={item.id}
              >
                <button
                  type="button"
                  id={`service-trigger-${item.id}`}
                  aria-pressed={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="service-index">{t(item.number)}</span>
                  <span>{t(item.title)}</span>
                  <ArrowUpRight size={22} aria-hidden="true" />
                </button>
                <div
                  id={`service-summary-${item.id}`}
                  className="service-mobile-summary"
                  hidden={index !== activeIndex}
                >
                  <p>{t(item.summary)}</p>
                  <a href={`/services#${item.id}`} className="text-link">
                    {t("Khám phá dịch vụ ")}
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal className="service-preview" delay={100}>
            <div aria-live="polite" aria-atomic="true">
              <div className="service-preview-content" key={service.id}>
                <div className="service-preview-art" aria-hidden="true">
                  <div className="service-orbit orbit-one" />
                  <div className="service-orbit orbit-two" />
                  <div className="service-orbit orbit-three" />
                  <div className="service-symbol">
                    <Icon strokeWidth={1.2} />
                  </div>
                  <span>{t(service.number)}</span>
                  <i>{"SONIC / CAPABILITIES"}</i>
                </div>
                <div className="service-preview-copy">
                  <p>{t(service.summary)}</p>
                  <a href={`/services#${service.id}`} className="text-link">
                    {t("Tìm hiểu giải pháp ")}
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
