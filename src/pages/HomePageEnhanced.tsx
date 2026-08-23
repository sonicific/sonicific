import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  MapPinned,
  Newspaper,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { ButtonLink } from "../components/ButtonLink";
import { JobCard } from "../components/JobCard";
import { NewsCard } from "../components/NewsCard";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { company } from "../data/company";
import { jobPostings } from "../data/jobs";
import { channelStack, serviceHighlights } from "../data/landing";
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
              MMO production · Commerce · Automation
            </p>
            <h1 className="hero-motion hero-delay-1 mt-6 text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Biến tín hiệu thành
              <span className="block text-teal-300">tăng trưởng.</span>
            </h1>
            <p className="hero-motion hero-delay-2 mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Sonic kết nối content, commerce và công nghệ thành một hệ vận hành gọn, nhanh, có dữ liệu.
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
            <div className="rounded-3xl border border-white/15 bg-slate-950/45 p-5 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-300">
                    Production pulse
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">Một nhịp, nhiều đội</p>
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
                    className="sonic-glass-tile flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] p-4"
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

      <section className="overflow-hidden border-y border-slate-200 bg-white" aria-label="Nền tảng vận hành">
        <div className="sonic-marquee flex gap-2 py-3">
          {[...channelStack, ...channelStack].map((channel, index) => (
            <span
              key={`${channel}-${index}`}
              className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full border border-slate-200 bg-stone-50 px-3 text-xs font-semibold text-slate-600"
            >
              <Sparkles className="h-3.5 w-3.5 text-teal-600" aria-hidden="true" />
              {channel}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-stone-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end" variant="left">
            <SectionHeader
              eyebrow="Sonic vận hành thế nào"
              title="Ít tầng nấc. Nhiều kết nối."
              description="Bốn năng lực cùng chạy trên một nhịp dữ liệu, từ ý tưởng đến kết quả."
            />
            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <Icon className="h-4 w-4 text-teal-700" aria-hidden="true" />
                    <p className="mt-4 text-lg font-semibold text-slate-950">{stat.value}</p>
                    <p className="mt-1 text-xs font-medium text-slate-500">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {serviceHighlights.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 90} variant="scale" className="h-full">
                  <article className="motion-card h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950 text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-teal-700">
                      {service.kicker}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-950">{service.title}</h3>
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
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-teal-400/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:px-8">
          <Reveal variant="left">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">
              Careers
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
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
              <Reveal key={job.id} delay={index * 100} variant="right" className="text-slate-900">
                <JobCard job={job} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
