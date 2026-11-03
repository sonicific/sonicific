import { Layers3 } from "lucide-react";
import { partnerPlatforms } from "../../data/home";
import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";

export function PartnersSection() {
  return (
    <section className="partners-section border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            icon={Layers3}
            eyebrow="Nền tảng vận hành"
            title="Hiểu kênh, phối hợp đúng nhịp."
            description="Sonic triển khai nội dung, quảng cáo và thương mại trên các nền tảng khách hàng đang sử dụng."
          />
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {partnerPlatforms.map((partner, index) => (
            <Reveal key={partner.name} delay={index * 75} variant="pop">
              <div className="partner-tile group flex min-h-28 flex-col items-center justify-center rounded-lg border border-slate-200 bg-white p-4 text-center shadow-sm">
                <img
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  className="h-9 w-auto max-w-[7rem] object-contain transition duration-300 group-hover:-translate-y-1 group-hover:scale-105"
                  loading="lazy"
                />
                <p className="mt-3 text-sm font-semibold text-slate-700">
                  {partner.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
