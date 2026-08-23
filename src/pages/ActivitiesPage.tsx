import { CalendarDays, Image, MapPin, Sparkles } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import activitiesJson from "../data/activities.json";
import type { Activity } from "../types";

const activities = activitiesJson as Activity[];

const dateFormatter = new Intl.DateTimeFormat("vi-VN", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

function formatDate(value: string) {
  return dateFormatter.format(new Date(`${value}T00:00:00`));
}

export function ActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hoạt động"
        title="Nhịp sống tại Sonic."
        description="Workshop, ngày vận hành và những khoảnh khắc đội ngũ cùng học từ công việc thật."
        aside={
          <div className="rounded-2xl border border-slate-200 bg-stone-50 p-5">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-950 text-white">
                <Image className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Nhật ký Sonic
                </p>
                <p className="text-sm font-semibold text-slate-950">
                  {activities.length} hoạt động nổi bật
                </p>
              </div>
            </div>
          </div>
        }
      />

      <section className="bg-stone-50 py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:px-8">
          {activities.map((activity, index) => (
            <Reveal key={activity.id} variant={index % 2 === 1 ? "right" : "left"}>
              <article className="motion-card grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.92fr_1.08fr]">
                <div
                  className={`relative min-h-[260px] ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute left-3 top-3 inline-flex h-8 items-center gap-1.5 rounded-full bg-white/92 px-3 text-xs font-semibold text-slate-950 shadow-sm backdrop-blur">
                    <Sparkles className="h-3.5 w-3.5 text-teal-700" aria-hidden="true" />
                    {activity.category}
                  </div>
                </div>
                <div className="p-5 sm:p-7">
                  <h2 className="text-xl font-semibold text-slate-950">{activity.title}</h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex h-8 items-center gap-1.5 rounded-full bg-slate-100 px-3 text-xs font-semibold text-slate-600">
                      <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                      {formatDate(activity.date)}
                    </span>
                    <span className="inline-flex h-8 items-center gap-1.5 rounded-full bg-slate-100 px-3 text-xs font-semibold text-slate-600">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {activity.location}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{activity.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {activity.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full bg-teal-50 px-3 py-2 text-xs font-semibold text-teal-800 ring-1 ring-teal-100"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
