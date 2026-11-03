import { useLanguage } from "../../i18n/LanguageProvider";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navigation, isNavigationActive } from "../../data/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
export function SiteHeader({ pathname }: { pathname: string }) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => setIsOpen(false), [pathname]);
  useEffect(() => {
    if (!isOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    window.addEventListener("keydown", close);
    window.addEventListener("pointerdown", closeOutside);
    return () => {
      window.removeEventListener("keydown", close);
      window.removeEventListener("pointerdown", closeOutside);
    };
  }, [isOpen]);
  return (
    <header ref={headerRef} className="site-header">
      <div className="site-header-bar">
        <a
          href="/"
          className="site-brand"
          aria-label={t("Sonic Group - Trang chủ")}
        >
          <img
            className="brand-logo-light"
            src="/icons/light.png"
            alt={""}
            width="42"
            height="42"
          />
          <img
            className="brand-logo-dark"
            src="/icons/dark.png"
            alt={""}
            width="42"
            height="42"
          />
          <span>
            {"Sonic"}
            <span className="brand-suffix">{" Group"}</span>
            <small>{"Connect. Creative. Grow."}</small>
          </span>
        </a>
        <nav className="desktop-navigation" aria-label={t("Điều hướng chính")}>
          {navigation.slice(0, -1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={
                isNavigationActive(pathname, item.href) ? "page" : undefined
              }
            >
              {t(item.label)}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            href="/contact"
            className="header-contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
          >
            {t("Cùng kết nối ")}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={t(isOpen ? "Đóng menu" : "Mở menu")}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav
          id="mobile-navigation"
          className="mobile-navigation"
          aria-label={t("Điều hướng mobile")}
        >
          {navigation.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              style={{ animationDelay: `${index * 35}ms` }}
              onClick={() => setIsOpen(false)}
              aria-current={
                isNavigationActive(pathname, item.href) ? "page" : undefined
              }
            >
              <span>
                <small>
                  {"0"}
                  {index + 1}
                </small>
                {t(item.label)}
              </span>
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          ))}
          <p>{t("Chiến lược · Sáng tạo · Tăng trưởng")}</p>
        </nav>
      )}
    </header>
  );
}
