import { useLanguage } from "../i18n/LanguageProvider";
import type { ReactNode } from "react";
import { SiteHeader } from "./layout/SiteHeader";
import { SiteFooter } from "./layout/SiteFooter";
import { ScrollProgress } from "./ScrollProgress";
import { ScrollToTopButton } from "./ScrollToTopButton";
export function SiteShell({
  children,
  pathname,
}: {
  children: ReactNode;
  pathname: string;
}) {
  const { t } = useLanguage();
  return (
    <div className="site-shell">
      <a href="#main-content" className="skip-link">
        {t("Đến nội dung chính")}
      </a>
      <ScrollProgress />
      <ScrollToTopButton />
      <SiteHeader pathname={pathname} />
      <main id="main-content" tabIndex={-1}>
        {t(children)}
      </main>
      <SiteFooter />
    </div>
  );
}
