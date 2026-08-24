import type { RouteState } from "../types";

export const routes = {
  home: "/",
  people: "/people",
  employee: (id: string) => `/people/${id}`,
  activities: "/activities",
  news: "/news",
  newsDetail: (id: string) => `/news/${id}`,
  careers: "/careers",
  careerDetail: (id: string) => `/careers/${id}`,
};

export function parsePath(pathname: string): RouteState {
  const normalized = pathname
    .replace(/^#?\/?/, "")
    .replace(/[?#].*$/, "")
    .replace(/\/$/, "");

  if (normalized.startsWith("people/")) {
    return {
      page: "employee",
      employeeId: normalized.replace("people/", ""),
    };
  }

  if (normalized === "people") {
    return { page: "people" };
  }

  if (normalized === "activities") {
    return { page: "activities" };
  }

  if (normalized.startsWith("news/")) {
    return { page: "news-detail", newsId: normalized.replace("news/", "") };
  }

  if (normalized === "news") {
    return { page: "news" };
  }

  if (normalized.startsWith("careers/")) {
    return {
      page: "career-detail",
      jobId: normalized.replace("careers/", ""),
    };
  }

  if (normalized === "careers") {
    return { page: "careers" };
  }

  return { page: "home" };
}

export function isActiveRoute(pathname: string, page: RouteState["page"]) {
  return parsePath(pathname).page === page;
}
