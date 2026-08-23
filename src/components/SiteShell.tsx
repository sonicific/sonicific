import {
  Activity,
  ArrowUpRight,
  BriefcaseBusiness,
  FileText,
  Home,
  Mail,
  Menu,
  Newspaper,
  Phone,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { company, socials } from "../data/company";
import { isActiveRoute, routes } from "../lib/router";
import { ScrollProgress } from "./ScrollProgress";
import { ScrollToTopButton } from "./ScrollToTopButton";

interface SiteShellProps {
  children: ReactNode;
  pathname: string;
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

function isNavigationActive(pathname: string, page: (typeof navigation)[number]["page"]) {
  if (page === "people") {
    return pathname.startsWith("/nhan-su");
  }

  if (page === "news") {
    return pathname.startsWith("/tin-tuc");
  }

  if (page === "careers") {
    return pathname.startsWith("/tuyen-dung");
  }

  return isActiveRoute(pathname, page);
}

export function SiteShell({ children, pathname }: SiteShellProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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
                const active = isNavigationActive(pathname, item.page);

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`group relative inline-flex h-10 items-center gap-1.5 px-3 text-xs font-semibold transition-colors after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:origin-left after:rounded-full after:bg-teal-500 after:transition-transform after:duration-300 ${
                      active
                        ? "text-slate-950 after:scale-x-100"
                        : "text-slate-600 after:scale-x-0 hover:text-slate-950 hover:after:scale-x-100"
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
                const active = isNavigationActive(pathname, item.page);

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`inline-flex h-10 items-center gap-2 border-b-2 px-3 text-xs font-semibold transition-colors ${
                      active ? "border-teal-500 text-slate-950" : "border-transparent text-slate-600 hover:border-teal-300 hover:text-slate-950"
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
        <div className="sonic-grid absolute inset-0 opacity-[0.16]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/70 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.7fr_0.8fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-white text-sm font-bold text-slate-950">
                  SG
                </span>
                <div>
                  <p className="font-display text-lg font-semibold">{company.name}</p>
                  <p className="mt-0.5 text-sm text-teal-200">{company.slogan}</p>
                </div>
              </div>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">
                {company.publicProfile} Đội ngũ vận hành tại TP. Hồ Chí Minh.
              </p>
              <div className="mt-4 flex max-w-xl items-start gap-3 rounded-lg border border-white/10 bg-white/[0.05] p-3">
                <FileText className="mt-0.5 h-4 w-4 shrink-0 text-teal-200" aria-hidden="true" />
                <div className="text-xs leading-5 text-slate-400">
                  <p className="font-semibold text-slate-200">{company.legalName}</p>
                  <p>Mã số thuế: {company.taxCode}</p>
                </div>
              </div>
            </div>

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
                <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1">
                  {socials.slice(1, 4).map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target={social.href.startsWith("http") ? "_blank" : undefined}
                        rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 transition hover:text-teal-200"
                      >
                        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                        {social.label}
                      </a>
                    );
                  })}
                </div>
              </div>
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
