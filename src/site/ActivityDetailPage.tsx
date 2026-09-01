import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "../components/ButtonLink";
import { activities } from "../data/activities";
import { routes } from "../lib/router";

interface ActivityDetailPageProps {
  activityId?: string;
}

export function ActivityDetailPage({ activityId }: ActivityDetailPageProps) {
  const activity = activities.find((item) => item.id === activityId);

  if (!activity) {
    return (
      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold text-teal-700">
            Không tìm thấy hoạt động
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-slate-950">
            Album này chưa tồn tại
          </h1>
          <div className="mt-6 flex justify-center">
            <ButtonLink href={routes.activities} icon={ArrowLeft}>
              Về trang hoạt động
            </ButtonLink>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[60vh] bg-white py-0.5 sm:py-1">
      <div className="mx-auto grid max-w-6xl grid-cols-3 md:grid-cols-4 gap-0.5 sm:gap-1">
        {activity.images.map((image, index) => (
          <a
            key={`${image}-${index}`}
            href={image}
            target="_blank"
            rel="noreferrer"
            className="group relative block aspect-square overflow-hidden bg-slate-100 focus:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-inset"
            aria-label={`Mở ảnh ${index + 1} của ${activity.title}`}
          >
            <img
              src={image}
              alt=""
              className="h-full w-full rounded-md object-cover transition duration-500 group-hover:scale-[1.03] group-hover:brightness-90"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
