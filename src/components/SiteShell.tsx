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
  return (
    <div className="site-shell">
      <a href="#main-content" className="skip-link">
        Đến nội dung chính
      </a>
      <ScrollProgress />
      <ScrollToTopButton />
      <SiteHeader pathname={pathname} />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
