import { Handshake } from "lucide-react";
import { partnerPlatforms } from "../../data/home";
import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";

export function PartnersSection() {
  return (
    <section className="border-y border-slate-200 bg-stone-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader icon={Handshake} eyebrow="Partner ecosystem" title="Hệ sinh thái nền tảng cùng tạo nên nhịp vận hành." description="Những nền tảng xuất hiện trong các luồng content, commerce và phát triển thương hiệu của Sonic." />
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
                <p className="mt-3 text-sm font-semibold text-slate-700">{partner.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
