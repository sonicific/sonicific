"use client";

import { useEffect, useState } from "react";
import { SiteShell } from "./components/SiteShell";
import { parsePath } from "./lib/router";
import { applySeoMetadata } from "./lib/seo";
import { ActivitiesPage } from "./site/ActivitiesPage";
import { ActivityDetailPage } from "./site/ActivityDetailPage";
import { CareerDetailPage } from "./site/CareerDetailPage";
import { CareersPage } from "./site/CareersPage";
import { EmployeeDetailPage } from "./site/EmployeeDetailPage";
import { HomePageEnhanced } from "./site/HomePageEnhanced";
import { NewsDetailPage } from "./site/NewsDetailPage";
import { NewsPage } from "./site/NewsPage";
import { PeoplePage } from "./site/PeoplePage";
import type { RouteState } from "./types";

function getRoute(pathname: string): RouteState {
  return parsePath(pathname);
}

export default function App() {
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    const initialPath =
      typeof window !== "undefined" ? window.location.pathname : "/";
    setPathname(initialPath);
  }, []);

  const route = getRoute(pathname || "/");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateRoute = () => {
      const nextPathname = window.location.pathname;
      setPathname(nextPathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const onDocumentClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as HTMLElement;
      const anchor = target.closest<HTMLAnchorElement>("a[href]");

      if (!anchor || anchor.target || anchor.hasAttribute("download")) {
        return;
      }

      const url = new URL(anchor.href, window.location.href);

      if (
        url.origin !== window.location.origin ||
        !url.pathname.startsWith("/")
      ) {
        return;
      }

      if (
        url.pathname === window.location.pathname &&
        url.hash &&
        !url.hash.startsWith("#/")
      ) {
        return;
      }

      event.preventDefault();
      window.history.pushState(
        {},
        "",
        `${url.pathname}${url.search}${url.hash}`,
      );
      updateRoute();
    };

    if (window.location.hash.startsWith("#/")) {
      const cleanPath = window.location.hash.slice(1);
      window.history.replaceState({}, "", cleanPath);
      setPathname(window.location.pathname);
    }

    window.addEventListener("popstate", updateRoute);
    document.addEventListener("click", onDocumentClick);

    return () => {
      window.removeEventListener("popstate", updateRoute);
      document.removeEventListener("click", onDocumentClick);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    applySeoMetadata(route);
  }, [
    pathname,
    route.page,
    route.activityId,
    route.employeeId,
    route.jobId,
    route.newsId,
  ]);

  return (
    <SiteShell pathname={pathname}>
      {route.page === "home" ? <HomePageEnhanced /> : null}
      {route.page === "people" ? <PeoplePage /> : null}
      {route.page === "employee" ? (
        <EmployeeDetailPage employeeId={route.employeeId} />
      ) : null}
      {route.page === "activities" ? <ActivitiesPage /> : null}
      {route.page === "activity-detail" ? (
        <ActivityDetailPage activityId={route.activityId} />
      ) : null}
      {route.page === "news" ? <NewsPage /> : null}
      {route.page === "news-detail" ? (
        <NewsDetailPage newsId={route.newsId} />
      ) : null}
      {route.page === "careers" ? <CareersPage /> : null}
      {route.page === "career-detail" ? (
        <CareerDetailPage jobId={route.jobId} />
      ) : null}
    </SiteShell>
  );
}
