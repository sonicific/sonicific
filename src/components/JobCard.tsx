import { ArrowUpRight, BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";
import { formatDate } from "../lib/format";
import { routes } from "../lib/router";
import type { JobPosting } from "../types";

interface JobCardProps {
  job: JobPosting;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <article className="motion-card group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-teal-50 text-teal-700 ring-1 ring-teal-100">
          <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
        </span>
        {job.featured ? (
          <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-semibold text-amber-800">
            Ưu tiên
          </span>
        ) : null}
      </div>
      <p className="mt-5 text-xs font-semibold uppercase text-teal-700">
        {job.department}
      </p>
      <h2 className="mt-2 font-display text-xl font-semibold leading-snug text-slate-950">
        <a href={routes.careerDetail(job.id)} className="transition hover:text-teal-700">
          {job.title}
        </a>
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">{job.excerpt}</p>
      <div className="mt-5 grid gap-2 text-xs font-medium text-slate-500">
        <span className="inline-flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
          {job.location}
        </span>
        <span className="inline-flex items-center gap-2">
          <CalendarDays className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
          Hạn nộp {formatDate(job.deadline)}
        </span>
      </div>
      <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
        <span className="text-xs font-semibold text-slate-700">{job.type}</span>
        <a
          href={routes.careerDetail(job.id)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700"
        >
          Xem vị trí
          <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
