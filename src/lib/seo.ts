import employeesJson from "../data/employees.json";
import { activities } from "../data/activities";
import { company } from "../data/company";
import { jobPostings } from "../data/jobs";
import { newsPosts } from "../data/news";
import type { Employee, RouteState } from "../types";

const employees = employeesJson as Employee[];

interface SeoEntry {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article" | "profile";
}

const pageSeo: Record<
  Exclude<
    RouteState["page"],
    "news-detail" | "career-detail" | "employee" | "activity-detail"
  >,
  SeoEntry
> = {
  home: {
    title: "Sonic Group | Media, E-commerce & Automation tại TP.HCM",
    description:
      "Sonic Group kết nối media content, thương mại điện tử và automation thành một hệ vận hành tăng trưởng tại TP. Hồ Chí Minh.",
    image: "/og.png",
  },
  people: {
    title: "Đội ngũ Sonic Group | 5 phòng ban cùng một nhịp",
    description:
      "Khám phá đội ngũ Sonic Group thuộc E-Comerce, Content Media, Business Center, Tech & Research và Human & Resources.",
  },
  activities: {
    title: "Hoạt động tại Sonic Group | Workshop & văn hóa đội ngũ",
    description:
      "Album hình ảnh workshop, ngày vận hành và những khoảnh khắc làm việc của đội ngũ Sonic Group tại TP. Hồ Chí Minh.",
  },
  news: {
    title: "Tin tức Sonic Group | Thông báo và cập nhật mới nhất",
    description:
      "Theo dõi thông báo công ty, hoạt động nội bộ, tin công nghệ và các cập nhật mới nhất từ Sonic Group.",
  },
  careers: {
    title: "Tuyển dụng Sonic Group | Cơ hội nghề nghiệp tại TP.HCM",
    description:
      "Khám phá các vị trí đang tuyển tại Sonic Group và gia nhập đội ngũ media, e-commerce, business, tech và nhân sự.",
  },
};

function getSeoEntry(route: RouteState): SeoEntry {
  if (route.page === "activity-detail") {
    const activity = activities.find((item) => item.id === route.activityId);

    return activity
      ? {
          title: `${activity.title} | Hoạt động Sonic Group`,
          description: activity.summary,
          image: activity.image,
          type: "article",
        }
      : pageSeo.activities;
  }

  if (route.page === "news-detail") {
    const post = newsPosts.find((item) => item.id === route.newsId);

    return post
      ? {
          title: `${post.title} | Sonic Group`,
          description: post.excerpt,
          image: post.image,
          type: "article",
        }
      : pageSeo.news;
  }

  if (route.page === "career-detail") {
    const job = jobPostings.find((item) => item.id === route.jobId);

    return job
      ? {
          title: `Tuyển ${job.title} | Sonic Group`,
          description: `${job.excerpt} Làm việc tại ${job.location}.`,
        }
      : pageSeo.careers;
  }

  if (route.page === "employee") {
    const employee = employees.find((item) => item.id === route.employeeId);

    return employee
      ? {
          title: `${employee.name} - ${employee.position} | Sonic Group`,
          description: `${employee.name} thuộc ${employee.department} tại Sonic Group. ${employee.bio}`,
          type: "profile",
        }
      : pageSeo.people;
  }

  return pageSeo[route.page];
}

function upsertMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
}

export function applySeoMetadata(route: RouteState) {
  const seo = getSeoEntry(route);
  const canonicalUrl = new URL(window.location.pathname, window.location.origin).toString();
  const imageUrl = seo.image ? new URL(seo.image, window.location.origin).toString() : "";

  document.title = seo.title;
  upsertMeta('meta[name="description"]', "name", "description", seo.description);
  upsertMeta('meta[name="robots"]', "name", "robots", "index, follow, max-image-preview:large");
  upsertMeta('meta[property="og:locale"]', "property", "og:locale", "vi_VN");
  upsertMeta('meta[property="og:site_name"]', "property", "og:site_name", company.name);
  upsertMeta('meta[property="og:type"]', "property", "og:type", seo.type ?? "website");
  upsertMeta('meta[property="og:title"]', "property", "og:title", seo.title);
  upsertMeta('meta[property="og:description"]', "property", "og:description", seo.description);
  upsertMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
  upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", imageUrl ? "summary_large_image" : "summary");
  upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", seo.title);
  upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", seo.description);

  const imageSelectors = [
    ['meta[property="og:image"]', "property", "og:image"],
    ['meta[name="twitter:image"]', "name", "twitter:image"],
  ] as const;

  imageSelectors.forEach(([selector, attribute, key]) => {
    const existing = document.head.querySelector<HTMLMetaElement>(selector);

    if (imageUrl) {
      upsertMeta(selector, attribute, key, imageUrl);
    } else {
      existing?.remove();
    }
  });

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }

  canonical.href = canonicalUrl;

  const structuredData = document.getElementById("sonic-structured-data") ?? document.createElement("script");
  structuredData.id = "sonic-structured-data";
  structuredData.setAttribute("type", "application/ld+json");
  structuredData.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    legalName: company.legalName,
    taxID: company.taxCode,
    url: company.websiteUrl,
    email: company.contactEmail,
    telephone: company.contactPhone,
    slogan: company.slogan,
    sameAs: [company.linkedInUrl, company.facebookUrl],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hồ Chí Minh",
      addressCountry: "VN",
    },
  });

  if (!structuredData.parentNode) {
    document.head.appendChild(structuredData);
  }
}
