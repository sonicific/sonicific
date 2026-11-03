export const navigation = [
  { label: "Trang chủ", href: "/", page: "home" },
  { label: "Dịch vụ", href: "/services", page: "services" },
  { label: "Tin tức", href: "/news", page: "news" },
  { label: "Tuyển dụng", href: "/careers", page: "careers" },
  { label: "Đội ngũ", href: "/people", page: "people" },
  { label: "Hoạt động", href: "/activities", page: "activities" },
  { label: "Liên hệ", href: "/contact", page: "contact" },
] as const;

export function isNavigationActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}
