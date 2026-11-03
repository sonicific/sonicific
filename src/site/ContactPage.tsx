import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { businessContact } from "../data/business";
import { company } from "../data/company";

export function ContactPage() {
  return (
    <>
      <PageHero
        icon={Mail}
        eyebrow="Liên hệ Sonic Group"
        title="Cùng trao đổi về mục tiêu của bạn."
        description="Chia sẻ nhu cầu quảng cáo, thương mại điện tử, nghiên cứu hoặc nội dung sáng tạo. Đội ngũ Sonic sẽ tiếp nhận qua email hoặc điện thoại."
        aside={
          <div className="rounded-xl border border-teal-100 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
              Giờ làm việc
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-950">
              Thứ Hai – Thứ Bảy
            </p>
            <p className="mt-1 text-sm text-slate-600">
              08:00 – 17:30 (GMT+7) · Chủ Nhật nghỉ
            </p>
          </div>
        }
      />

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal variant="left" className="h-full">
            <a
              href={`mailto:${businessContact.email}`}
              className="contact-method-card group flex h-full flex-col transition"
            >
              <Mail className="h-7 w-7 text-teal-700" aria-hidden="true" />
              <span className="mt-5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Email hợp tác
              </span>
              <span className="mt-2 break-all font-display text-xl font-semibold text-slate-950 sm:text-2xl">
                {businessContact.email}
              </span>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-700">
                Gửi email{" "}
                <ArrowUpRight
                  className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </a>
          </Reveal>
          <Reveal variant="right" className="h-full">
            <a
              href={businessContact.phoneHref}
              className="contact-method-card group flex h-full flex-col transition"
            >
              <Phone className="h-7 w-7 text-teal-700" aria-hidden="true" />
              <span className="mt-5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Hotline kinh doanh
              </span>
              <span className="mt-2 font-display text-xl font-semibold text-slate-950 sm:text-2xl">
                {businessContact.phone}
              </span>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-700">
                Gọi cho Sonic{" "}
                <ArrowUpRight
                  className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-stone-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-teal-700">
            <MapPin className="h-5 w-5" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-wide">
              Địa điểm làm việc
            </p>
          </div>
          <h2 className="mt-3 font-display text-3xl font-semibold text-slate-950">
            Hai địa điểm tại TP. Hồ Chí Minh.
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {company.branches.map((branch, index) => (
              <Reveal
                key={branch.name}
                delay={index * 100}
                variant="lift"
                className="h-full"
              >
                <article className="branch-card flex h-full flex-col border">
                  <h3 className="font-display text-xl font-semibold text-slate-950">
                    {index === 0 ? "Trụ sở" : "Văn phòng vận hành"}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
                    {branch.name}
                  </p>
                  <p className="mt-5 flex-1 text-sm leading-7 text-slate-600">
                    {branch.address}
                  </p>
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-900"
                  >
                    Xem bản đồ{" "}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-7 inline-flex items-center gap-2 text-sm text-slate-600">
            <Clock3 className="h-4 w-4 text-teal-700" aria-hidden="true" />
            {company.openingHours}
          </p>
        </div>
      </section>
    </>
  );
}
