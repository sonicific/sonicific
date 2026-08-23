import { MessageSquareQuote } from "lucide-react";
import { testimonials } from "../../data/landing";
import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";

const initials = ["MA", "HL", "GB"];
const tones = ["bg-teal-100 text-teal-800", "bg-rose-100 text-rose-800", "bg-indigo-100 text-indigo-800"];

export function TestimonialsSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader icon={MessageSquareQuote} eyebrow="Góc nhìn đội ngũ" title="Tốc độ đến từ cách mọi người cùng chuyển động." description="Những chia sẻ nội bộ về cách dữ liệu, công cụ và sự phối hợp tạo nên trải nghiệm làm việc tại Sonic." />
        </Reveal>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 120} variant={index === 1 ? "pop" : "lift"} className="h-full">
              <figure className="motion-card relative flex h-full flex-col rounded-lg border border-slate-200 bg-stone-50 p-5 shadow-sm">
                <span className="font-display text-4xl leading-none text-teal-500/20">“</span>
                <blockquote className="-mt-1 flex-1 text-sm font-medium leading-7 text-slate-700">{testimonial.quote}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-4">
                  <span className={`grid h-10 w-10 place-items-center rounded-full text-xs font-bold ${tones[index]}`}>{initials[index]}</span>
                  <span>
                    <span className="block text-sm font-semibold text-slate-950">{testimonial.name}</span>
                    <span className="mt-1 block text-xs text-slate-500">{testimonial.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
