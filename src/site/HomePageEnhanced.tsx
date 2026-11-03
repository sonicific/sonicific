import { ArrowUpRight, BriefcaseBusiness, ChevronDown } from "lucide-react";
import { ButtonLink } from "../components/ButtonLink";
import { BusinessServicesSection } from "../components/home/BusinessServicesSection";
import { CompanyIntro } from "../components/home/CompanyIntro";
import { CompanyValuesSection } from "../components/home/CompanyValuesSection";
import { HomeHero } from "../components/home/HomeHero";
import { OperatingFlowSection } from "../components/home/OperatingFlowSection";
import { PartnersSection } from "../components/home/PartnersSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { JobCard } from "../components/JobCard";
import { NewsCard } from "../components/NewsCard";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { company, departments, faqs } from "../data/company";
import { openJobPostings } from "../data/jobs";
import { newsPosts } from "../data/news";

export function HomePageEnhanced() {
  return (
    <>
      <HomeHero />
      <CompanyIntro />
      <BusinessServicesSection />
      <OperatingFlowSection />
      <CompanyValuesSection />
      <PartnersSection />
      <TestimonialsSection />
      <section className="departments-section section-space">
        <div className="site-container">
          <Reveal className="section-topline">
            <SectionHeader
              eyebrow="Những người phía sau"
              title="Khác chuyên môn. Cùng một nhịp."
              description="Năm đội ngũ kết nối sáng tạo, thương mại và công nghệ trong từng công việc."
            />
            <ButtonLink href="/people" icon={ArrowUpRight} variant="light">
              Gặp đội ngũ Sonic
            </ButtonLink>
          </Reveal>
          <div className="department-list">
            {departments.map((department, index) => (
              <Reveal key={department.name} delay={index * 50}>
                <a href="/people" className="department-row">
                  <span className="department-number">0{index + 1}</span>
                  <department.icon
                    size={26}
                    strokeWidth={1.2}
                    aria-hidden="true"
                  />
                  <h3>{department.name}</h3>
                  <p>{department.summary}</p>
                  <span className="round-arrow">
                    <ArrowUpRight size={21} aria-hidden="true" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="home-news section-space">
        <div className="site-container">
          <Reveal className="section-topline">
            <SectionHeader
              eyebrow="Nhịp sống & cập nhật"
              title="Mới ở Sonic."
              description="Thông báo và câu chuyện từ bên trong đội ngũ."
            />
            <ButtonLink href="/news" icon={ArrowUpRight} variant="light">
              Tất cả bài viết
            </ButtonLink>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {newsPosts.slice(0, 3).map((post, index) => (
              <Reveal key={post.id} delay={index * 80} className="h-full">
                <NewsCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="home-careers section-space">
        <div className="site-container home-careers-layout">
          <Reveal>
            <p className="eyebrow">
              <BriefcaseBusiness size={15} /> Hành trình tiếp theo của bạn
            </p>
            <h2>
              Tạo điều mới.
              <br />
              <span>Cùng Sonic.</span>
            </h2>
            <p className="section-description">
              Chọn một vị trí phù hợp và bắt đầu cuộc trò chuyện với đội ngũ.
            </p>
            <div className="mt-8">
              <ButtonLink href="/careers" icon={ArrowUpRight}>
                {openJobPostings.length
                  ? `Xem ${openJobPostings.length} vị trí đang mở`
                  : "Khám phá cơ hội tại Sonic"}
              </ButtonLink>
            </div>
          </Reveal>
          <div className="grid gap-5">
            {openJobPostings.length ? (
              openJobPostings.slice(0, 2).map((job, index) => (
                <Reveal key={job.id} delay={index * 80}>
                  <JobCard job={job} />
                </Reveal>
              ))
            ) : (
              <Reveal>
                <div className="careers-open-note">
                  <span className="eyebrow">Luôn sẵn lòng kết nối</span>
                  <span className="careers-note-art" aria-hidden="true">
                    ↗
                  </span>
                  <h3>
                    Cơ hội bắt đầu
                    <br />
                    từ một lời chào.
                  </h3>
                  <p>
                    Hiện chưa có vị trí đang mở. Bạn vẫn có thể gửi hồ sơ để
                    Sonic liên hệ khi có cơ hội phù hợp.
                  </p>
                  <a
                    href={`mailto:${company.contactEmail}`}
                    className="text-link"
                  >
                    Gửi lời chào đến Sonic <ArrowUpRight size={17} />
                  </a>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>
      <section className="home-faq section-space">
        <div className="site-container faq-layout">
          <Reveal>
            <SectionHeader
              eyebrow="Một vài giải đáp"
              title={"Bạn muốn\nbiết thêm?"}
              description="Những thông tin giúp bạn hiểu Sonic hơn trước khi bắt đầu."
            />
          </Reveal>
          <div>
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 45}>
                <details className="faq-item group">
                  <summary>
                    <span>
                      <small>0{index + 1}</small>
                      {faq.question}
                    </span>
                    <ChevronDown size={19} aria-hidden="true" />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
