import { ArrowUpRight, BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";
import { formatDate } from "../lib/format";
import { routes } from "../lib/router";
import type { JobPosting } from "../types";

interface JobCardProps {
  job: JobPosting;
}

const departmentTones: Record<string, { icon: string; text: string; line: string }> = {
  "E-Comerce": {
    icon: "bg-amber-50 text-amber-700 ring-amber-100",
    text: "text-amber-700",
    line: "from-amber-400",
  },
  "Content Media": {
    icon: "bg-rose-50 text-rose-700 ring-rose-100",
    text: "text-rose-700",
    line: "from-rose-400",
  },
  "Business Center": {
    icon: "bg-sky-50 text-sky-700 ring-sky-100",
    text: "text-sky-700",
    line: "from-sky-400",
  },
  "Tech & Research": {
    icon: "bg-indigo-50 text-indigo-700 ring-indigo-100",
    text: "text-indigo-700",
    line: "from-indigo-400",
  },
  "Human & Resources": {
    icon: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    text: "text-emerald-700",
    line: "from-emerald-400",
  },
};

export function JobCard({ job }: JobCardProps) {
  const tone = departmentTones[job.department] ?? {
    icon: "bg-teal-50 text-teal-700 ring-teal-100",
    text: "text-teal-700",
    line: "from-teal-400",
  };

  return (
    <article className="motion-card group relative flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${tone.line} to-transparent`} />
      <div className="flex items-start justify-between gap-4">
        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg shadow-sm ring-1 ${tone.icon}`}>
          <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
        </span>
        {job.featured ? (
          <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-semibold text-amber-800 ring-1 ring-amber-200">
            Ưu tiên
          </span>
        ) : null}
      </div>
      <p className={`mt-5 text-xs font-semibold uppercase ${tone.text}`}>
        {job.department}
      </p>
      <h2 className="mt-2 font-display text-xl font-semibold leading-snug text-slate-950">
        <a href={routes.careerDetail(job.id)} className={`transition hover:opacity-80 ${tone.text}`}>
          {job.title}
        </a>
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">{job.excerpt}</p>
      <div className="mt-5 grid gap-2 text-xs font-medium text-slate-500">
        <span className="inline-flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-slate-100 text-slate-500">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          {job.location}
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-slate-100 text-slate-500">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          Hạn nộp {formatDate(job.deadline)}
        </span>
      </div>
      <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
        <div className="grid gap-1">
          <span className="text-xs font-semibold text-slate-700">{job.type}</span>
          <span className={`text-xs font-semibold ${tone.text}`}>{job.salary}</span>
        </div>
        <a
          href={routes.careerDetail(job.id)}
          className={`inline-flex items-center gap-1.5 text-xs font-semibold ${tone.text}`}
        >
          Xem vị trí
          <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
