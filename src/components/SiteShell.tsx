import {
  Activity,
  BriefcaseBusiness,
  Home,
  Menu,
  Newspaper,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { company, socials } from "../data/company";
import { isActiveRoute, routes } from "../lib/router";
import { ScrollProgress } from "./ScrollProgress";

interface SiteShellProps {
  children: ReactNode;
  hash: string;
}

const navigation = [
  { label: "Trang chủ", href: routes.home, page: "home" as const, icon: Home },
  { label: "Tin tức", href: routes.news, page: "news" as const, icon: Newspaper },
  {
    label: "Tuyển dụng",
    href: routes.careers,
    page: "careers" as const,
    icon: BriefcaseBusiness,
  },
  { label: "Đội ngũ", href: routes.people, page: "people" as const, icon: Users },
  {
    label: "Hoạt động",
    href: routes.activities,
    page: "activities" as const,
    icon: Activity,
  },
];

function isNavigationActive(hash: string, page: (typeof navigation)[number]["page"]) {
  if (page === "people") {
    return hash.startsWith("#/nhan-su");
  }

  if (page === "news") {
    return hash.startsWith("#/tin-tuc");
  }

  if (page === "careers") {
    return hash.startsWith("#/tuyen-dung");
  }

  return isActiveRoute(hash, page);
}

export function SiteShell({ children, hash }: SiteShellProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [hash]);

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <ScrollProgress />
      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href={routes.home} className="flex items-center gap-2.5" aria-label="Sonic Group - Trang chủ">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-950 text-xs font-bold text-white shadow-sm">
              SG
            </span>
            <span className="text-sm font-semibold tracking-tight text-slate-950">{company.name}</span>
          </a>

          <div className="hidden items-center gap-2 lg:flex">
            <nav className="flex items-center gap-1" aria-label="Điều hướng chính">
              {navigation.map((item) => {
                const Icon = item.icon;
                const active = isNavigationActive(hash, item.page);

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`inline-flex h-9 items-center gap-1.5 rounded-full px-3 text-xs font-semibold transition ${
                      active
                        ? "bg-slate-950 text-white"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-white lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {isOpen ? (
          <div id="mobile-navigation" className="border-t border-slate-100 bg-white px-4 py-3 lg:hidden">
            <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Điều hướng mobile">
              {navigation.map((item) => {
                const Icon = item.icon;
                const active = isNavigationActive(hash, item.page);

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`inline-flex h-10 items-center gap-2 rounded-xl px-3 text-xs font-semibold ${
                      active ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-700"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto_auto] lg:px-8">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-950 text-xs font-bold text-white">
                SG
              </span>
              <span className="text-sm font-semibold text-slate-950">{company.name}</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Production, commerce và automation cùng vận hành tại TP. Hồ Chí Minh.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Khám phá</p>
            <div className="mt-3 grid gap-2 text-sm font-medium text-slate-700">
              <a href={routes.news} className="transition hover:text-teal-700">Tin tức</a>
              <a href={routes.careers} className="transition hover:text-teal-700">Tuyển dụng</a>
              <a href={routes.activities} className="transition hover:text-teal-700">Hoạt động</a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Kết nối</p>
            <div className="mt-3 flex flex-wrap gap-2 md:max-w-xs">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex h-8 items-center gap-1.5 rounded-full border border-slate-200 px-3 text-xs font-semibold text-slate-600 transition hover:border-teal-200 hover:text-teal-700"
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    {social.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
