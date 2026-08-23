import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPinned,
  Network,
  Users,
} from "lucide-react";
import { ButtonLink } from "../components/ButtonLink";
import { SectionHeader } from "../components/SectionHeader";
import {
  amenities,
  branchIcon,
  capabilities,
  company,
  departments,
  faqs,
  officeIcon,
  socials,
} from "../data/company";
import employees from "../data/employees.json";
import { routes } from "../lib/router";

const stats = [
  { label: "Quy mô", value: company.scale, icon: Users },
  { label: "Chi nhánh", value: "2 địa điểm", icon: MapPinned },
  { label: "Thành lập", value: company.foundedAt, icon: CalendarDays },
  { label: "Lịch làm việc", value: company.openingHours, icon: Clock3 },
];

export function HomePage() {
  const OfficeIcon = officeIcon;

  return (
    <>
      <section
        className="relative isolate overflow-hidden bg-slate-950"
        aria-label="Sonic Group hero"
      >
        <img
          src="/assets/hero.jpg"
          alt="Không gian vận hành sáng tạo của Sonic Group"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92),rgba(15,23,42,0.66)_42%,rgba(15,23,42,0.18)_100%)]" />
        <div className="relative mx-auto flex min-h-[78svh] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-100 ring-1 ring-white/15 backdrop-blur">
              <Network className="h-3.5 w-3.5" aria-hidden="true" />
              Media, MMO, commerce, automation
            </p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Sonic Group
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-100 sm:text-base">
              Công ty vận hành nội dung truyền thông, MMO, thương mại điện tử,
              livestream, affiliate, banking support và phát triển các tool
              automation/AI cho đội ngũ tăng trưởng hiện đại.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <ButtonLink href={routes.people} icon={Users} variant="light">
                Xem nhân sự
              </ButtonLink>
              <ButtonLink
                href={routes.activities}
                icon={ArrowRight}
                variant="ghost"
              >
                Hoạt động
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="flex items-center gap-3 rounded-lg border border-slate-200 bg-stone-50 px-3 py-3"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-950 text-white">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    {stat.label}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-slate-950">
                    {stat.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Năng lực"
            title="Một hệ vận hành cho nội dung, commerce và tăng trưởng"
            description="Sonic Group kết hợp nhiều đội chuyên môn để biến ý tưởng, dữ liệu và thao tác vận hành thành kết quả đo được."
          />
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <span
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ${item.tone}`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Cơ cấu"
              title="Tổ chức gọn, chia đội rõ"
              description="Mô hình quản trị được thiết kế để các đội content, commerce, sales và kỹ thuật có thể phối hợp nhanh trong cùng một nhịp vận hành."
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {company.organization.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm text-slate-500">
              Dữ liệu mẫu hiện có {employees.length} nhân sự trong file JSON.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {departments.map((department) => {
              const Icon = department.icon;

              return (
                <article
                  key={department.name}
                  className="rounded-lg border border-slate-200 bg-stone-50 p-4"
                >
                  <Icon className="h-5 w-5 text-teal-700" aria-hidden="true" />
                  <h3 className="mt-4 text-sm font-semibold text-slate-950">
                    {department.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {department.summary}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Văn phòng"
            title="Hai chi nhánh tại TP. Hồ Chí Minh"
            description={
              <span className="text-slate-300">
                Lịch mở cửa {company.openingHours}. Không gian làm việc hướng
                tới tốc độ, tính tiện dụng và sự tập trung.
              </span>
            }
          />
          <div className="mt-8 grid gap-3 lg:grid-cols-2">
            {company.branches.map((branch) => {
              const Icon = branchIcon;

              return (
                <article
                  key={branch.name}
                  className="rounded-lg border border-white/10 bg-white/[0.06] p-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-teal-400 text-slate-950">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h3 className="text-sm font-semibold">{branch.name}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    {branch.address}
                  </p>
                </article>
              );
            })}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {amenities.map((amenity) => {
              const Icon = amenity.icon;

              return (
                <span
                  key={amenity.label}
                  className="inline-flex h-8 items-center gap-1.5 rounded-full bg-white/10 px-3 text-xs font-semibold text-slate-100 ring-1 ring-white/10"
                >
                  <Icon
                    className="h-3.5 w-3.5 text-amber-200"
                    aria-hidden="true"
                  />
                  {amenity.label}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="FAQ"
              title="Thông tin nhanh"
              description="Các nội dung cơ bản để ứng viên, đối tác hoặc nhân sự mới hiểu Sonic Group trong vài phút."
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="inline-flex h-8 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 transition hover:border-teal-200 hover:text-teal-700"
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    {social.label}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="grid gap-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-950">
                  <span className="inline-flex items-center gap-2">
                    <OfficeIcon
                      className="h-4 w-4 text-teal-700"
                      aria-hidden="true"
                    />
                    {faq.question}
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
