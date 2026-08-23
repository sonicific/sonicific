import { useEffect, useState } from "react";
import { SiteShell } from "./components/SiteShell";
import { parsePath } from "./lib/router";
import { applySeoMetadata } from "./lib/seo";
import { ActivitiesPage } from "./pages/ActivitiesPage";
import { CareerDetailPage } from "./pages/CareerDetailPage";
import { CareersPage } from "./pages/CareersPage";
import { EmployeeDetailPage } from "./pages/EmployeeDetailPage";
import { HomePageEnhanced } from "./pages/HomePageEnhanced";
import { NewsDetailPage } from "./pages/NewsDetailPage";
import { NewsPage } from "./pages/NewsPage";
import { PeoplePage } from "./pages/PeoplePage";
import type { RouteState } from "./types";

function getRoute(): RouteState {
  return parsePath(window.location.pathname);
}

export default function App() {
  const [pathname, setPathname] = useState(window.location.pathname);
  const route = getRoute();

  useEffect(() => {
    const updateRoute = () => {
      setPathname(window.location.pathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const onDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target as HTMLElement;
      const anchor = target.closest<HTMLAnchorElement>("a[href]");

      if (!anchor || anchor.target || anchor.hasAttribute("download")) {
        return;
      }

      const url = new URL(anchor.href, window.location.href);

      if (url.origin !== window.location.origin || !url.pathname.startsWith("/")) {
        return;
      }

      if (url.pathname === window.location.pathname && url.hash && !url.hash.startsWith("#/")) {
        return;
      }

      event.preventDefault();
      window.history.pushState({}, "", `${url.pathname}${url.search}${url.hash}`);
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
    applySeoMetadata(route);
  }, [pathname, route.page, route.employeeId, route.jobId, route.newsId]);

  return (
    <SiteShell pathname={pathname}>
      {route.page === "home" ? <HomePageEnhanced /> : null}
      {route.page === "people" ? <PeoplePage /> : null}
      {route.page === "employee" ? (
        <EmployeeDetailPage employeeId={route.employeeId} />
      ) : null}
      {route.page === "activities" ? <ActivitiesPage /> : null}
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
