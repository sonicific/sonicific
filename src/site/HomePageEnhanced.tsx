import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  ChevronDown,
  CircleHelp,
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
import { PartnersSection } from "../components/home/PartnersSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { JobCard } from "../components/JobCard";
import { NewsCard } from "../components/NewsCard";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { company, departments, faqs } from "../data/company";
import { openJobPostings } from "../data/jobs";
import { newsPosts } from "../data/news";
import { routes } from "../lib/router";

const stats = [
  { label: "Quy mô", value: company.scale, icon: Users },
  { label: "Chi nhánh", value: "2 tại TP.HCM", icon: MapPinned },
  { label: "Thành lập", value: company.foundedAt, icon: CalendarDays },
];

const aboutHighlights = [
  {
    label: "Media Production",
    value: "Video, hậu kỳ",
    icon: Clapperboard,
    tone: "bg-rose-50 text-rose-700 ring-rose-100",
    desc: "Sản xuất nội dung và media chất lượng cao cho các kênh truyền thông.",
  },
  {
    label: "Digital Advertising",
    value: "E-commerce và thị trường quốc tế",
    icon: Globe2,
    tone: "bg-amber-50 text-amber-700 ring-amber-100",
    desc: "Chiến dịch quảng cáo kỹ thuật số hiệu quả cho các kênh bán hàng.",
  },
  {
    label: "Trade Promotion",
    value: "Dashboard, tool và AI workflow",
    icon: Cpu,
    tone: "bg-indigo-50 text-indigo-700 ring-indigo-100",
    desc: "Chiến lược khuyến mãi thương mại hiệu quả.",
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
    description:
      "Content Media biến tín hiệu thành video, kịch bản và asset bán hàng.",
    icon: Clapperboard,
    tone: "bg-rose-50 text-rose-700 ring-rose-100",
  },
  {
    step: "03",
    title: "Vận hành đa kênh",
    description:
      "E-Comerce và Business Center chạy shop, affiliate, campaign và report.",
    icon: LineChart,
    tone: "bg-sky-50 text-sky-700 ring-sky-100",
  },
  {
    step: "04",
    title: "Tự động hóa",
    description:
      "Tech & Research biến thao tác lặp thành tool, dashboard và AI workflow.",
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
      <section className="relative isolate overflow-hidden bg-white">
        <img
          src="/assets/hero.jpg"
          alt="Không gian vận hành sáng tạo của Sonic Group"
          className="hero-image absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white via-white/75 to-transparent" />
        <div className="sonic-grid absolute inset-0 opacity-25" />

        <div className="relative mx-auto flex min-h-[78svh] max-w-7xl items-end justify-center px-4 pt-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center">
            <p className="hero-motion inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-xs font-semibold text-teal-800 shadow-sm ring-1 ring-white backdrop-blur-sm">
              <Zap className="h-3.5 w-3.5" aria-hidden="true" />
              {company.slogan}
            </p>
            <h1 className="hero-motion hero-delay-1 mt-6 font-display text-6xl font-semibold leading-none text-white drop-shadow-[0_3px_18px_rgba(15,23,42,0.55)] sm:text-6xl lg:text-7xl">
              Sonic Group
            </h1>
            <p className="hero-motion hero-delay-2 mt-6 text-base font-medium leading-7 text-white drop-shadow-[0_2px_12px_rgba(15,23,42,0.6)] sm:text-lg">
              Kết nối media, commerce và automation thành một hệ vận hành gọn,
              nhanh, có dữ liệu.
            </p>
            <div className="hero-motion hero-delay-3 mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href={routes.news} icon={Newspaper} variant="light">
                Tin tức mới
              </ButtonLink>
              <ButtonLink
                href={routes.careers}
                icon={BriefcaseBusiness}
                variant="light"
              >
                Gia nhập đội ngũ
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              icon={Building2}
              eyebrow="Giới thiệu công ty"
              title="Lĩnh vực dịch vụ và hệ thống vận hành."
              description="Sonic kết nối sáng tạo nội dung, vận hành thương mại và công nghệ nội bộ để biến tín hiệu thị trường thành kết quả có thể đo lường."
            />
          </Reveal>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Reveal key={stat.label} delay={index * 80} variant="lift">
                  <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-stone-50 p-4">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-white text-teal-700 shadow-sm ring-1 ring-teal-100">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-display text-lg font-semibold text-slate-950">
                        {stat.value}
                      </p>
                      <p className="text-xs font-medium text-slate-500">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {aboutHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.label}
                  delay={index * 90}
                  variant="scale"
                  className="h-full"
                >
                  <article className="motion-card h-full rounded-lg border border-slate-200 bg-white p-4 shadow-sm flex items-start space-x-4">
                    <div
                      className={`grid p-2 place-items-center rounded-lg shadow-sm ring-1 ${item.tone}`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-teal-700">
                        {item.label}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-y border-slate-200 bg-stone-50 py-12 text-slate-950 sm:py-16">
        <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-teal-100/70 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="left">
            <SectionHeader
              icon={Workflow}
              eyebrow="Sonic vận hành thế nào"
              title="Một hệ thống gọn để đi từ tín hiệu đến kết quả"
              description="Content, commerce, business và tech không đứng riêng lẻ; mỗi đội chạm vào một đoạn của cùng một luồng tăng trưởng."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {operatingFlow.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.title}
                  delay={index * 90}
                  variant="lift"
                  className="h-full"
                >
                  <article className="motion-card h-full rounded-lg border border-slate-200 bg-white p-4 text-slate-950 shadow-sm">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex space-x-2 items-start">
                        <span
                          className={`grid p-1.5 place-items-center rounded-lg shadow-sm ring-1 ${item.tone}`}
                        >
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <h3 className="font-display text-xl font-semibold text-teal-700">
                          {item.title}
                        </h3>
                      </div>
                      <span className="font-mono text-xs font-semibold text-slate-400">
                        {item.step}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <PartnersSection />

      <TestimonialsSection />

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal
            className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
            variant="left"
          >
            <SectionHeader
              icon={Building2}
              eyebrow="Phòng ban"
              title="5 đội nhóm, một nhịp phối hợp."
              description="Cấu trúc mới giúp người xem nhận diện nhanh các nhóm đang vận hành tại Sonic."
            />
            <ButtonLink href={routes.people} icon={ArrowRight} variant="light">
              Xem đội ngũ
            </ButtonLink>
          </Reveal>
          <div className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {departments.map((department, index) => {
              const Icon = department.icon;
              const tone =
                departmentTones[index] ??
                "bg-teal-50 text-teal-700 ring-teal-100";
              return (
                <Reveal
                  key={department.name}
                  delay={index * 80}
                  variant="lift"
                  className="h-full"
                >
                  <article className="motion-card h-full rounded-lg border border-slate-200 bg-stone-50 p-4">
                    <div className="flex items-start space-x-4">
                      <span
                        className={`grid p-2 place-items-center rounded-lg shadow-sm ring-1 ${tone}`}
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <h3 className="font-display text-lg font-semibold text-teal-700">
                        {department.name}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {department.summary}
                    </p>
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
              <Reveal
                key={post.id}
                delay={index * 100}
                variant="scale"
                className="h-full"
              >
                <NewsCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-y border-slate-200 bg-teal-50/60 py-14 text-slate-950 sm:py-20">
        <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-cyan-100 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:px-8">
          <Reveal variant="left">
            <div className="flex items-center gap-2 text-teal-700">
              <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase">Careers</p>
            </div>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Tạo điều mới cùng Sonic.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-600 sm:text-base">
              Chọn một vị trí phù hợp và bắt đầu cuộc trò chuyện với đội ngũ.
            </p>
            <div className="mt-6">
              <ButtonLink
                href={routes.careers}
                icon={ArrowRight}
                variant="dark"
              >
                Xem {openJobPostings.length} vị trí đang mở
              </ButtonLink>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {openJobPostings.slice(0, 2).map((job, index) => (
              <Reveal
                key={job.id}
                delay={index * 100}
                variant="blur"
                className="text-slate-900"
              >
                <JobCard job={job} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <SectionHeader
              icon={CircleHelp}
              eyebrow="FAQ"
              title="Những câu hỏi nhanh."
              description="Phần FAQ được đưa lại để người mới hiểu Sonic trong vài nhịp đọc."
              align="center"
            />
          </Reveal>
          <div className="mt-8 grid gap-4">
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
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
