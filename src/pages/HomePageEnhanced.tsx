import {
  ArrowRight,
  Building2,
  BriefcaseBusiness,
  CalendarDays,
  CircleHelp,
  ChevronDown,
  Clapperboard,
  Cpu,
  Globe2,
  LineChart,
  MapPinned,
  Newspaper,
  ShieldCheck,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { ButtonLink } from "../components/ButtonLink";
import { JobCard } from "../components/JobCard";
import { NewsCard } from "../components/NewsCard";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { company, departments, faqs, sourceHighlights } from "../data/company";
import { jobPostings } from "../data/jobs";
import { serviceHighlights } from "../data/landing";
import { newsPosts } from "../data/news";
import { routes } from "../lib/router";

const stats = [
  { label: "Quy mô", value: company.scale, icon: Users },
  { label: "Chi nhánh", value: "2 tại TP.HCM", icon: MapPinned },
  { label: "Thành lập", value: company.foundedAt, icon: CalendarDays },
];

const productionPulse = [
  { label: "Content", value: "Tín hiệu & sáng tạo", tone: "bg-teal-400" },
  { label: "Commerce", value: "Shop & livestream", tone: "bg-amber-300" },
  { label: "Operations", value: "Dữ liệu & quy trình", tone: "bg-rose-300" },
  { label: "Automation", value: "Tool & AI workflow", tone: "bg-indigo-300" },
];

const aboutHighlights = [
  {
    label: "Media first",
    value: "Video, hậu kỳ, advertising",
    icon: Clapperboard,
    tone: "bg-rose-50 text-rose-700 ring-rose-100",
  },
  {
    label: "Global commerce",
    value: "E-commerce và thị trường quốc tế",
    icon: Globe2,
    tone: "bg-amber-50 text-amber-700 ring-amber-100",
  },
  {
    label: "Automation core",
    value: "Dashboard, tool và AI workflow",
    icon: Cpu,
    tone: "bg-indigo-50 text-indigo-700 ring-indigo-100",
  },
];

const operatingFlow = [
  {
    step: "01",
    title: "Bắt tín hiệu",
    description: "Thu thập insight, trend, dữ liệu kênh và nhu cầu thị trường.",
    icon: Target,
    tone: "bg-amber-50 text-amber-700 ring-amber-100",
  },
  {
    step: "02",
    title: "Sản xuất nhanh",
    description: "Content Media biến tín hiệu thành video, kịch bản và asset bán hàng.",
    icon: Clapperboard,
    tone: "bg-rose-50 text-rose-700 ring-rose-100",
  },
  {
    step: "03",
    title: "Vận hành đa kênh",
    description: "E-Comerce và Business Center chạy shop, affiliate, campaign và report.",
    icon: LineChart,
    tone: "bg-sky-50 text-sky-700 ring-sky-100",
  },
  {
    step: "04",
    title: "Tự động hóa",
    description: "Tech & Research biến thao tác lặp thành tool, dashboard và AI workflow.",
    icon: ShieldCheck,
    tone: "bg-indigo-50 text-indigo-700 ring-indigo-100",
  },
];

const departmentTones = [
  "bg-amber-50 text-amber-700 ring-amber-100",
  "bg-rose-50 text-rose-700 ring-rose-100",
  "bg-sky-50 text-sky-700 ring-sky-100",
  "bg-indigo-50 text-indigo-700 ring-indigo-100",
  "bg-emerald-50 text-emerald-700 ring-emerald-100",
];

export function HomePageEnhanced() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-950">
        <img
          src="/assets/sonic-hero.png"
          alt="Không gian vận hành sáng tạo của Sonic Group"
          className="sonic-hero-image absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.97),rgba(15,23,42,0.82)_52%,rgba(15,23,42,0.36)_100%)]" />
        <div className="sonic-grid absolute inset-0 opacity-40" />

        <div className="relative mx-auto grid min-h-[78svh] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div className="max-w-3xl">
            <p className="hero-motion inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-teal-100 ring-1 ring-white/15 backdrop-blur">
              <Zap className="h-3.5 w-3.5" aria-hidden="true" />
              {company.slogan}
            </p>
            <h1 className="hero-motion hero-delay-1 mt-6 font-display text-5xl font-semibold leading-none text-white sm:text-6xl lg:text-7xl">
              Sonic Group
            </h1>
            <p className="hero-motion hero-delay-2 mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Kết nối media, commerce và automation thành một hệ vận hành gọn, nhanh, có dữ liệu.
            </p>
            <div className="hero-motion hero-delay-3 mt-8 flex flex-wrap gap-3">
              <ButtonLink href={routes.news} icon={Newspaper} variant="light">
                Tin mới tại Sonic
              </ButtonLink>
              <ButtonLink href={routes.careers} icon={BriefcaseBusiness} variant="ghost">
                Gia nhập đội ngũ
              </ButtonLink>
            </div>
          </div>

          <div className="hero-motion hero-delay-4 hidden lg:block">
            <div className="rounded-lg border border-white/15 bg-slate-950/45 p-5 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase text-teal-300">
                    Production pulse
                  </p>
                  <p className="mt-1 font-display text-sm font-semibold text-white">Một nhịp, nhiều đội</p>
                </div>
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-300 opacity-70" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-teal-400" />
                </span>
              </div>
              <div className="mt-3 grid gap-2">
                {productionPulse.map((item, index) => (
                  <div
                    key={item.label}
                    className="sonic-glass-tile flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.06] p-4"
                    style={{ animationDelay: `${index * 180}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`h-2.5 w-2.5 rounded-full ${item.tone}`} />
                      <span className="text-sm font-semibold text-white">{item.label}</span>
                    </div>
                    <span className="text-xs text-slate-300">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white" aria-label="Thông tin công khai">
        <div className="mx-auto grid max-w-7xl divide-y divide-slate-200 px-4 sm:px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8">
          {sourceHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.label} delay={index * 80} variant="blur">
                <div className="flex min-h-28 items-center gap-3 py-5 md:px-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-slate-950 text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase text-slate-500">{item.label}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-950">{item.value}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal variant="left">
              <SectionHeader
                icon={Building2}
                eyebrow="Giới thiệu công ty"
                title="Sonic Group xây hệ vận hành cho media, commerce và automation."
                description="Sonic kết nối sáng tạo nội dung, vận hành thương mại và công nghệ nội bộ để biến tín hiệu thị trường thành kết quả có thể đo lường."
              />
              <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-stone-50 p-4">
                      <span className="grid h-10 w-10 place-items-center rounded-lg bg-white text-teal-700 shadow-sm ring-1 ring-teal-100">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="font-display text-lg font-semibold text-slate-950">{stat.value}</p>
                        <p className="text-xs font-medium text-slate-500">{stat.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
            <div className="grid gap-4">
              {aboutHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.label} delay={index * 90} variant="right">
                    <article className="motion-card flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                      <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-lg shadow-sm ring-1 ${item.tone}`}>
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase text-slate-500">{item.label}</p>
                        <h3 className="mt-1 font-display text-xl font-semibold text-teal-700">
                          {item.value}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          Cùng một nhịp dữ liệu, ít tầng nấc và nhiều vòng thử nghiệm nhanh.
                        </p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-slate-950 py-12 text-white sm:py-16">
        <div className="sonic-grid absolute inset-0 opacity-20" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/70 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-end" variant="left">
            <div>
              <div className="flex items-center gap-2 text-teal-300">
                <Workflow className="h-4 w-4" aria-hidden="true" />
                <p className="text-xs font-semibold uppercase">Sonic vận hành thế nào</p>
              </div>
              <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Một hệ thống gọn để đi từ <span className="text-teal-300">tín hiệu</span> đến kết quả.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">
                Content, commerce, business và tech không đứng riêng lẻ; mỗi đội chạm vào một đoạn của cùng một luồng tăng trưởng.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Reveal key={stat.label} delay={index * 80} variant="blur">
                    <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4 backdrop-blur">
                      <Icon className="h-4 w-4 text-teal-200" aria-hidden="true" />
                      <p className="mt-4 font-display text-xl font-semibold text-white">{stat.value}</p>
                      <p className="mt-1 text-xs font-medium text-slate-400">{stat.label}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {operatingFlow.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 90} variant="lift" className="h-full">
                  <article className="motion-card h-full rounded-lg border border-white/10 bg-white p-5 text-slate-950 shadow-2xl shadow-slate-950/10">
                    <div className="flex items-center justify-between gap-3">
                      <span className={`grid h-11 w-11 place-items-center rounded-lg shadow-sm ring-1 ${item.tone}`}>
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="font-mono text-xs font-semibold text-slate-400">{item.step}</span>
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold text-teal-700">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {serviceHighlights.map((service, index) => {
              const Icon = service.icon;
              const tone = departmentTones[index] ?? "bg-teal-50 text-teal-700 ring-teal-100";
              return (
                <Reveal key={service.title} delay={index * 80} variant="scale" className="h-full">
                  <article className="h-full rounded-lg border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
                    <span className={`grid h-10 w-10 place-items-center rounded-lg shadow-sm ring-1 ${tone}`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p className="mt-5 text-[11px] font-semibold uppercase text-teal-200">
                      {service.kicker}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-semibold text-white">{service.title}</h3>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end" variant="left">
            <SectionHeader
              icon={Building2}
              eyebrow="Phòng ban"
              title="5 đội lõi, một nhịp phối hợp."
              description="Cấu trúc mới giúp người xem nhận diện nhanh các nhóm đang vận hành tại Sonic."
            />
            <ButtonLink href={routes.people} icon={ArrowRight} variant="light">
              Xem đội ngũ
            </ButtonLink>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {departments.map((department, index) => {
              const Icon = department.icon;
              const tone = departmentTones[index] ?? "bg-teal-50 text-teal-700 ring-teal-100";
              return (
                <Reveal key={department.name} delay={index * 80} variant="lift" className="h-full">
                  <article className="motion-card h-full rounded-lg border border-slate-200 bg-stone-50 p-5">
                    <span className={`grid h-11 w-11 place-items-center rounded-lg shadow-sm ring-1 ${tone}`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold text-teal-700">
                      {department.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{department.summary}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeader
              icon={Newspaper}
              eyebrow="Newsroom"
              title="Mới tại Sonic"
              description="Thông báo và hoạt động mới nhất, đọc nhanh trong vài phút."
            />
            <ButtonLink href={routes.news} icon={ArrowRight} variant="light">
              Xem tất cả tin
            </ButtonLink>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {newsPosts.slice(0, 3).map((post, index) => (
              <Reveal key={post.id} delay={index * 100} variant="scale" className="h-full">
                <NewsCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-slate-950 py-14 text-white sm:py-20">
        <div className="sonic-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:px-8">
          <Reveal variant="left">
            <div className="flex items-center gap-2 text-teal-300">
              <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase">Careers</p>
            </div>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Tạo điều mới cùng Sonic.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-300 sm:text-base">
              Chọn một vị trí phù hợp và bắt đầu cuộc trò chuyện với đội ngũ.
            </p>
            <div className="mt-6">
              <ButtonLink href={routes.careers} icon={ArrowRight} variant="light">
                Xem {jobPostings.length} vị trí đang mở
              </ButtonLink>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {jobPostings.slice(0, 2).map((job, index) => (
              <Reveal key={job.id} delay={index * 100} variant="blur" className="text-slate-900">
                <JobCard job={job} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <SectionHeader
              icon={CircleHelp}
              eyebrow="FAQ"
              title="Những câu hỏi nhanh."
              description="Phần FAQ được đưa lại để người mới hiểu Sonic trong vài nhịp đọc."
              align="center"
            />
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 90} variant="scale">
                <details className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <summary className="flex cursor-pointer items-center justify-between gap-4">
                    <span className="font-display text-base font-semibold text-slate-950 transition group-open:text-teal-700">
                      {faq.question}
                    </span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-600 transition group-open:rotate-180 group-open:bg-teal-50 group-open:text-teal-700">
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
