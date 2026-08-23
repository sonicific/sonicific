import { Camera, Image, Images, Sparkles } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import activitiesJson from "../data/activities.json";
import type { Activity } from "../types";

const activities = activitiesJson as Activity[];

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
        tone="dark"
        eyebrow="Hoạt động"
        title="Nhịp sống tại Sonic."
        description="Workshop, ngày vận hành và những khoảnh khắc đội ngũ cùng học từ công việc thật."
        aside={
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-teal-50 text-teal-700">
                <Image className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="text-left">
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
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-xs font-semibold text-teal-800 ring-1 ring-teal-100">
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
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
}
