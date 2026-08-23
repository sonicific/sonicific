import {
  Activity,
  ArrowUpRight,
  BriefcaseBusiness,
  Home,
  Mail,
  Menu,
  Newspaper,
  Phone,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { company, departments, socials, sourceHighlights } from "../data/company";
import { isActiveRoute, routes } from "../lib/router";
import { ScrollProgress } from "./ScrollProgress";
import { ScrollToTopButton } from "./ScrollToTopButton";

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
      <ScrollToTopButton />
      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href={routes.home} className="flex items-center gap-2.5" aria-label="Sonic Group - Trang chủ">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-slate-950 text-xs font-bold text-white shadow-sm">
              SG
            </span>
            <span className="font-display text-sm font-semibold text-slate-950">{company.name}</span>
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

      <footer className="relative overflow-hidden bg-slate-950 text-white">
        <div className="sonic-grid absolute inset-0 opacity-20" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/70 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-white text-sm font-bold text-slate-950">
                  SG
                </span>
                <div>
                  <p className="font-display text-xl font-semibold">{company.name}</p>
                  <p className="mt-1 text-sm text-teal-200">{company.slogan}</p>
                </div>
              </div>
              <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-300">
                {company.publicProfile} Đội ngũ vận hành tại TP. Hồ Chí Minh với các nhóm
                content, commerce, business, tech và human resources.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {sourceHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <span
                      key={item.label}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-semibold text-slate-200"
                    >
                      <Icon className="h-3.5 w-3.5 text-teal-200" aria-hidden="true" />
                      {item.value}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase text-slate-400">Khám phá</p>
                <div className="mt-4 grid gap-2 text-sm font-medium text-slate-200">
                  {navigation.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="inline-flex items-center gap-2 transition hover:text-teal-200"
                    >
                      {item.label}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase text-slate-400">Liên hệ</p>
                <div className="mt-4 grid gap-3 text-sm text-slate-300">
                  <a
                    href={`mailto:${company.contactEmail}`}
                    className="inline-flex items-center gap-2 transition hover:text-teal-200"
                  >
                    <Mail className="h-4 w-4 text-teal-200" aria-hidden="true" />
                    {company.contactEmail}
                  </a>
                  <a
                    href={`tel:${company.contactPhone.replace(/\./g, "")}`}
                    className="inline-flex items-center gap-2 transition hover:text-teal-200"
                  >
                    <Phone className="h-4 w-4 text-teal-200" aria-hidden="true" />
                    {company.contactPhone}
                  </a>
                  <p>{company.socialLocation}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 border-t border-white/10 pt-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">Phòng ban</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {departments.map((department) => {
                  const Icon = department.icon;
                  return (
                    <span
                      key={department.name}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-3 py-2 text-xs font-semibold text-slate-200 ring-1 ring-white/10"
                    >
                      <Icon className="h-3.5 w-3.5 text-teal-200" aria-hidden="true" />
                      {department.name}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 lg:justify-end">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex h-9 items-center gap-2 rounded-full border border-white/10 px-3 text-xs font-semibold text-slate-200 transition hover:border-teal-300/50 hover:text-teal-200"
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    {social.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 {company.name}. Built for internal clarity and public updates.</p>
            <p>Media · Commerce · Automation · People</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
