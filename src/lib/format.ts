const dateFormatter = new Intl.DateTimeFormat("vi-VN", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

export function formatDate(value: string) {
  return dateFormatter.format(new Date(`${value}T00:00:00`));
}

export function formatOptionalDate(value?: string, fallback = "Không ghi ngày") {
  return value ? formatDate(value) : fallback;
}

export function isRecent(value?: string, days = 14) {
  if (!value) {
    return false;
  }

  const publishedAt = new Date(`${value}T00:00:00`).getTime();
  const age = Date.now() - publishedAt;

  return age >= 0 && age <= days * 24 * 60 * 60 * 1000;
}
