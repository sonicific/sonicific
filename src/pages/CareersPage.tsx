import { ArrowRight, BriefcaseBusiness, Coffee, HeartHandshake, Sparkles, Users } from "lucide-react";
import { useMemo, useState } from "react";
import { JobCard } from "../components/JobCard";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { amenities, company } from "../data/company";
import { jobDepartments, jobPostings } from "../data/jobs";

const culturePoints = [
  {
    title: "Học qua dự án thật",
    description: "Thử nhanh, đo thật và cùng nhau cải thiện sau mỗi vòng chạy.",
    icon: Sparkles,
    tone: "bg-amber-50 text-amber-700 ring-amber-100",
  },
  {
    title: "Owner rõ ràng",
    description: "Bạn biết mình phụ trách điều gì và có không gian để chủ động.",
    icon: Users,
    tone: "bg-sky-50 text-sky-700 ring-sky-100",
  },
  {
    title: "Công cụ tốt hơn mỗi ngày",
    description: "Automation được dùng để giảm việc lặp, không làm quy trình nặng hơn.",
    icon: HeartHandshake,
    tone: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  },
];

export function CareersPage() {
  const [department, setDepartment] = useState("Tất cả");
  const visibleJobs = useMemo(
    () =>
      jobPostings.filter(
        (job) => department === "Tất cả" || job.department === department,
      ),
    [department],
  );

  return (
    <>
      <PageHero
        icon={BriefcaseBusiness}
        tone="dark"
        eyebrow="Careers at Sonic"
        title="Làm việc cùng những người thích biến ý tưởng thành kết quả."
        description="Khám phá các vị trí đang mở và chọn một vai trò phù hợp với thế mạnh của bạn."
        aside={
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-white/10 bg-white/[0.07] p-4 backdrop-blur">
              <p className="text-3xl font-semibold text-white">{jobPostings.length}</p>
              <p className="mt-1 text-xs font-medium text-slate-300">Vị trí đang mở</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.07] p-4 backdrop-blur">
              <p className="text-3xl font-semibold text-white">2</p>
              <p className="mt-1 text-xs font-medium text-slate-300">Chi nhánh tại TP.HCM</p>
            </div>
          </div>
        }
      />

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <SectionHeader
              icon={BriefcaseBusiness}
              eyebrow="Cơ hội nghề nghiệp"
              title="Tìm vị trí dành cho bạn"
              description="Lọc nhanh theo phòng ban, xem mô tả chi tiết và ứng tuyển qua email."
            />
            <div className="flex flex-wrap gap-2" aria-label="Lọc vị trí theo phòng ban">
              {jobDepartments.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setDepartment(item)}
                  className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
                    department === item
                      ? "bg-slate-950 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-teal-50 hover:text-teal-700"
                  }`}
                  aria-pressed={department === item}
                >
                  {item}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {visibleJobs.map((job, index) => (
              <Reveal key={job.id} delay={index * 90} variant="scale" className="h-full">
                <JobCard job={job} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-stone-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center" variant="left">
            <div>
              <SectionHeader
                icon={HeartHandshake}
                eyebrow="Môi trường làm việc"
                title="Gọn trong cách làm, cởi mở khi phối hợp."
                description={`${company.openingHours}. Mỗi đội có mục tiêu rõ và cùng chia sẻ dữ liệu để tiến nhanh hơn.`}
              />
              <div className="mt-5 flex flex-wrap gap-2">
                {amenities.map((item) => {
                  const Icon = item.icon;
                  return (
                    <span key={item.label} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
                      <Icon className="h-3.5 w-3.5 text-teal-700" aria-hidden="true" />
                      {item.label}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {culturePoints.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                    <span className={`grid h-11 w-11 place-items-center rounded-lg shadow-sm ring-1 ${item.tone}`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-sm font-semibold text-teal-700">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-teal-600 py-10 text-white">
        <Reveal className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <div className="flex items-center gap-2 text-teal-100">
              <Coffee className="h-4 w-4" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase">Chưa thấy vị trí phù hợp?</span>
            </div>
            <h2 className="mt-2 font-display text-2xl font-semibold">Gửi hồ sơ để Sonic chủ động liên hệ.</h2>
          </div>
          <a
            href={`mailto:${company.contactEmail}?subject=Ho%20so%20ung%20tuyen%20Sonic%20Group`}
            className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-teal-50"
          >
            Gửi CV qua email
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>
      </section>
    </>
  );
}
