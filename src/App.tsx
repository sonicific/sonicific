import { useEffect, useState } from "react";
import { SiteShell } from "./components/SiteShell";
import { parseHash } from "./lib/router";
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
  return parseHash(window.location.hash || "#/");
}

export default function App() {
  const [hash, setHash] = useState(window.location.hash || "#/");
  const route = getRoute();

  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash || "#/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", onHashChange);

    if (!window.location.hash) {
      window.location.hash = "/";
    }

    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const titles: Record<RouteState["page"], string> = {
      home: "Sonic Group · Production, Commerce & Automation",
      people: "Đội ngũ · Sonic Group",
      employee: "Hồ sơ nhân sự · Sonic Group",
      activities: "Hoạt động · Sonic Group",
      news: "Tin tức · Sonic Group",
      "news-detail": "Tin tức · Sonic Group",
      careers: "Tuyển dụng · Sonic Group",
      "career-detail": "Cơ hội nghề nghiệp · Sonic Group",
    };

    document.title = titles[route.page];
  }, [hash, route.page]);

  return (
    <SiteShell hash={hash}>
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
