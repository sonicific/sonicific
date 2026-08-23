import type { RouteState } from "../types";

export const routes = {
  home: "#/",
  people: "#/nhan-su",
  employee: (id: string) => `#/nhan-su/${id}`,
  activities: "#/hoat-dong",
  news: "#/tin-tuc",
  newsDetail: (id: string) => `#/tin-tuc/${id}`,
  careers: "#/tuyen-dung",
  careerDetail: (id: string) => `#/tuyen-dung/${id}`,
};

export function parseHash(hash: string): RouteState {
  const normalized = hash.replace(/^#\/?/, "");

  if (normalized.startsWith("nhan-su/")) {
    return {
      page: "employee",
      employeeId: normalized.replace("nhan-su/", ""),
    };
  }

  if (normalized === "nhan-su") {
    return { page: "people" };
  }

  if (normalized === "hoat-dong") {
    return { page: "activities" };
  }

  if (normalized.startsWith("tin-tuc/")) {
    return { page: "news-detail", newsId: normalized.replace("tin-tuc/", "") };
  }

  if (normalized === "tin-tuc") {
    return { page: "news" };
  }

  if (normalized.startsWith("tuyen-dung/")) {
    return {
      page: "career-detail",
      jobId: normalized.replace("tuyen-dung/", ""),
    };
  }

  if (normalized === "tuyen-dung") {
    return { page: "careers" };
  }

  return { page: "home" };
}

export function isActiveRoute(hash: string, page: RouteState["page"]) {
  return parseHash(hash).page === page;
}
