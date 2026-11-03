import {
  ArrowRight,
  ChartNoAxesCombined,
  Check,
  Layers3,
  Mail,
} from "lucide-react";
import { ButtonLink } from "../components/ButtonLink";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import {
  businessContact,
  businessServices,
  platformExpertise,
} from "../data/business";
import { routes } from "../lib/router";

export function ServicesPage() {
  return (
    <>
      <PageHero
        icon={Layers3}
        eyebrow="Dịch vụ Sonic Group"
        title="Từ chiến lược đến vận hành, mọi phần việc cùng hướng về kết quả."
        description="Bốn nhóm dịch vụ kết nối dữ liệu thị trường, quảng cáo, thương mại điện tử và nội dung sáng tạo."
        aside={
          <div className="rounded-xl border border-teal-100 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
              Bắt đầu từ mục tiêu của bạn
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Chia sẻ nhu cầu để Sonic đề xuất phạm vi công việc phù hợp.
            </p>
            <div className="mt-4">
              <ButtonLink
                href={routes.contact}
                icon={ArrowRight}
                variant="dark"
              >
                Liên hệ hợp tác
              </ButtonLink>
            </div>
          </div>
        }
      />

      <section className="services-details section-space">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              icon={ChartNoAxesCombined}
              eyebrow="Năng lực cốt lõi"
              title="Dịch vụ được thiết kế để phối hợp với nhau."
              description="Mỗi dự án có thể bắt đầu từ một nhu cầu riêng và mở rộng theo dữ liệu, đội ngũ và kênh triển khai phù hợp."
            />
          </Reveal>
          <div className="mt-8 grid gap-5">
            {businessServices.map((service, index) => (
              <Reveal key={service.id} delay={index * 70} variant="lift">
                <article
                  id={service.id}
                  className="service-detail-card scroll-mt-24 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
                >
                  <div>
                    <span className="font-mono text-xs font-semibold text-teal-700">
                      {service.number} / 04
                    </span>
                    <h2 className="mt-3 font-display text-2xl font-semibold text-slate-950 sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {service.summary}
                    </p>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.1em] text-teal-700">
                      {service.platforms}
                    </p>
                  </div>
                  <ul className="grid gap-3 self-center">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700"
                      >
                        <Check
                          className="mt-1 h-4 w-4 shrink-0 text-teal-600"
                          aria-hidden="true"
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="expertise-section section-space text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">
              Nền tảng chuyên môn
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Làm việc trên những kênh khách hàng đang dùng.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              Năng lực quảng cáo và thương mại của Sonic được triển khai trên
              các nền tảng số phổ biến.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {platformExpertise.map((platform, index) => (
              <Reveal
                key={platform.name}
                delay={index * 70}
                variant="lift"
                className="h-full"
              >
                <article className="h-full rounded-xl border border-white/15 bg-white/[0.06] p-5">
                  <div className="grid h-12 w-20 place-items-center rounded-lg bg-white p-2">
                    <img
                      src={platform.logo}
                      alt=""
                      className="max-h-8 max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-teal-300">
                    {platform.area}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold">
                    {platform.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {platform.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal-50 py-14 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
              Cùng bắt đầu
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-slate-950">
              Có mục tiêu cụ thể cho dự án của bạn?
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Gửi thông tin qua {businessContact.email} hoặc trao đổi trực tiếp
              với đội ngũ.
            </p>
          </div>
          <ButtonLink
            href={routes.contact}
            icon={Mail}
            variant="dark"
            className="h-10 px-5 text-sm"
          >
            Kết nối với Sonic
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
