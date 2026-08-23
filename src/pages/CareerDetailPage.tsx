import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2, MapPin, WalletCards } from "lucide-react";
import { ButtonLink } from "../components/ButtonLink";
import { JobCard } from "../components/JobCard";
import { Reveal } from "../components/Reveal";
import { company } from "../data/company";
import { jobPostings } from "../data/jobs";
import { formatDate } from "../lib/format";
import { routes } from "../lib/router";

interface CareerDetailPageProps {
  jobId?: string;
}

export function CareerDetailPage({ jobId }: CareerDetailPageProps) {
  const job = jobPostings.find((item) => item.id === jobId);

  if (!job) {
    return (
      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold text-teal-700">Không tìm thấy vị trí</p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-950">
            Tin tuyển dụng này đã đóng hoặc chưa tồn tại
          </h1>
          <div className="mt-6 flex justify-center">
            <ButtonLink href={routes.careers} icon={ArrowLeft}>Xem vị trí khác</ButtonLink>
          </div>
        </div>
      </section>
    );
  }

  const relatedJobs = jobPostings.filter((item) => item.id !== job.id).slice(0, 2);

  return (
    <>
      <header className="relative isolate overflow-hidden border-b border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f0fdfa_58%,#eef2ff_100%)] py-12 text-slate-950 sm:py-16">
        <div className="absolute -right-16 top-0 h-56 w-56 rounded-full bg-teal-100/70 blur-3xl" />
        <Reveal className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <ButtonLink href={routes.careers} icon={ArrowLeft} variant="light">
            Tất cả vị trí
          </ButtonLink>
          <p className="mt-8 text-xs font-semibold uppercase text-teal-700">
            {job.department}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            {job.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{job.excerpt}</p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-slate-700 ring-1 ring-slate-200">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {job.location}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-slate-700 ring-1 ring-slate-200">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
              Hạn nộp {formatDate(job.deadline)}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-slate-700 ring-1 ring-slate-200">
              <WalletCards className="h-3.5 w-3.5" aria-hidden="true" />
              {job.salary}
            </span>
          </div>
        </Reveal>
      </header>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_20rem] lg:px-8">
          <div className="grid gap-10">
            <JobSection title="Bạn sẽ làm gì" items={job.responsibilities} />
            <JobSection title="Sonic tìm kiếm điều gì" items={job.requirements} />
            <JobSection title="Quyền lợi dành cho bạn" items={job.benefits} />
          </div>

          <Reveal variant="right">
            <aside className="sticky top-24 rounded-lg border border-slate-200 bg-stone-50 p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase text-teal-700">
                Ứng tuyển vị trí
              </p>
              <h2 className="mt-2 font-display text-lg font-semibold text-slate-950">{job.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Gửi CV hoặc portfolio, tiêu đề email ghi rõ tên vị trí ứng tuyển.
              </p>
              <a
                href={`mailto:${company.contactEmail}?subject=Ung%20tuyen%20${encodeURIComponent(job.title)}`}
                className="mt-5 inline-flex h-10 w-full items-center justify-center gap-2 rounded-full bg-teal-600 px-4 text-sm font-semibold text-white transition hover:bg-teal-700"
              >
                Gửi hồ sơ
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <p className="mt-3 text-center text-xs text-slate-500">
                {company.contactEmail} · {company.contactPhone}
              </p>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-stone-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-slate-950">Vị trí khác</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {relatedJobs.map((item, index) => (
              <Reveal key={item.id} delay={index * 100} variant="scale">
                <JobCard job={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

interface JobSectionProps {
  title: string;
  items: string[];
}

function JobSection({ title, items }: JobSectionProps) {
  return (
    <Reveal>
      <h2 className="font-display text-2xl font-semibold text-slate-950">{title}</h2>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-700">
            <CheckCircle2 className="mt-1.5 h-4 w-4 shrink-0 text-teal-600" aria-hidden="true" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
