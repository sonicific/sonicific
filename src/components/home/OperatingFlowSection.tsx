import {
  ArrowUpRight,
  Clapperboard,
  LineChart,
  ShieldCheck,
  Target,
} from "lucide-react";
import { Reveal } from "../Reveal";

const steps = [
  {
    title: "Bắt tín hiệu",
    description: "Thu thập insight, trend, dữ liệu kênh và nhu cầu thị trường.",
    icon: Target,
  },
  {
    title: "Sản xuất nhanh",
    description:
      "Content Media biến tín hiệu thành video, kịch bản và asset bán hàng.",
    icon: Clapperboard,
  },
  {
    title: "Vận hành đa kênh",
    description:
      "E-Comerce và Business Center chạy shop, affiliate, campaign và report.",
    icon: LineChart,
  },
  {
    title: "Tự động hóa",
    description:
      "Tech & Research biến thao tác lặp thành tool, dashboard và AI workflow.",
    icon: ShieldCheck,
  },
];

export function OperatingFlowSection() {
  return (
    <section className="flow-section section-space">
      <div className="site-container">
        <Reveal className="flow-heading">
          <p className="eyebrow">
            <span className="status-dot" /> 02 / Cách Sonic chuyển động
          </p>
          <h2>
            Từ tín hiệu.
            <br />
            Đến <span>kết quả.</span>
          </h2>
          <p>
            Content, commerce, business và tech cùng chạm vào một luồng tăng
            trưởng.
          </p>
        </Reveal>
        <div className="flow-steps">
          {steps.map((step, index) => (
            <Reveal delay={index * 80} key={step.title}>
              <article className="flow-step">
                <div className="flow-step-top">
                  <span>0{index + 1}</span>
                  <step.icon size={22} strokeWidth={1.4} aria-hidden="true" />
                </div>
                <div className="flow-line">
                  <i />
                  <ArrowUpRight size={17} aria-hidden="true" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
