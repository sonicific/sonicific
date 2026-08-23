import { CalendarDays, Camera, Image, Images, MapPin, Sparkles } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
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

const activityTones = [
  "bg-rose-50 text-rose-700 ring-rose-100",
  "bg-amber-50 text-amber-700 ring-amber-100",
  "bg-indigo-50 text-indigo-700 ring-indigo-100",
  "bg-teal-50 text-teal-700 ring-teal-100",
];

export function ActivitiesPage() {
  return (
    <>
      <PageHero
        icon={Image}
        eyebrow="Hoạt động"
        title="Nhịp sống tại Sonic."
        description="Workshop, ngày vận hành và những khoảnh khắc đội ngũ cùng học từ công việc thật."
        aside={
          <div className="rounded-lg border border-slate-200 bg-stone-50 p-5">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-slate-950 text-white">
                <Image className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase text-slate-500">
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

      <section className="bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeader
              icon={Images}
              eyebrow="Album hoạt động"
              title="Những khoảnh khắc đang diễn ra tại Sonic."
              description="Ảnh workshop, ngày vận hành và các buổi kickoff được gom lại để người xem nắm nhanh không khí đội ngũ."
            />
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold text-white">
              <Camera className="h-3.5 w-3.5" aria-hidden="true" />
              {activities.length} album ảnh
            </div>
          </Reveal>

          <div className="mt-8 grid auto-rows-[240px] gap-4 md:grid-cols-4">
            {activities.map((activity, index) => {
              const tone = activityTones[index % activityTones.length];
              return (
                <Reveal
                  key={activity.id}
                  delay={index * 90}
                  variant="scale"
                  className={index === 0 ? "md:col-span-2 md:row-span-2" : ""}
                >
                  <article className="motion-card group relative h-full overflow-hidden rounded-lg border border-slate-200 bg-slate-950 shadow-sm">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/82 via-slate-950/15 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold ring-1 ${tone}`}>
                        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                        {activity.category}
                      </span>
                      <h2 className="mt-3 font-display text-xl font-semibold text-white">
                        {activity.title}
                      </h2>
                      <div className="mt-2 flex flex-wrap gap-2 text-xs font-medium text-slate-300">
                        <span>{formatDate(activity.date)}</span>
                        <span>{activity.location}</span>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {activities.map((activity, index) => (
            <Reveal key={activity.id} delay={index * 80} variant="lift">
              <article className="motion-card h-full rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg shadow-sm ring-1 ${activityTones[index % activityTones.length]}`}>
                    <Image className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase text-slate-500">{activity.category}</p>
                    <h2 className="mt-1 font-display text-xl font-semibold text-teal-700">{activity.title}</h2>
                  </div>
                </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex h-8 items-center gap-1.5 rounded-full bg-slate-100 px-3 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
                      <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                      {formatDate(activity.date)}
                    </span>
                    <span className="inline-flex h-8 items-center gap-1.5 rounded-full bg-slate-100 px-3 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
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
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
