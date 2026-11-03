import { ArrowUpRight } from "lucide-react";
import { companyValues } from "../../data/business";
import { ButtonLink } from "../ButtonLink";
import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";

export function CompanyValuesSection() {
  return (
    <section className="values-section section-space">
      <div className="site-container values-layout">
        <Reveal>
          <SectionHeader
            eyebrow="03 / Điều chúng tôi tin"
            title={"Giải pháp thực tế.\nQuan hệ bền lâu."}
            description="Sonic Group kết hợp hiểu biết thị trường, công nghệ và tư duy sáng tạo để xây dựng giải pháp dựa trên dữ liệu, phù hợp với mục tiêu của từng khách hàng."
          />
          <div className="mt-8">
            <ButtonLink href="/contact" icon={ArrowUpRight} variant="light">
              Trao đổi mục tiêu của bạn
            </ButtonLink>
          </div>
        </Reveal>
        <div>
          {companyValues.map((value, index) => (
            <Reveal key={value.title} delay={index * 70}>
              <article className="value-row">
                <span>0{index + 1}</span>
                <div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
                <ArrowUpRight size={22} aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
