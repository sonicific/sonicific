import { ArrowUpRight, Cake } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";
import { formatCalendarDate, type BirthdayEntry } from "../../lib/birthdays";
import { AvatarBadge } from "../AvatarBadge";
export function BirthdaySidebar({ entries }: { entries: BirthdayEntry[] }) {
  const { language, t } = useLanguage();
  const today = new Date();
  const next = entries
    .filter((entry) => entry.daysFromToday >= 0)
    .sort((a, b) => a.daysFromToday - b.daysFromToday)
    .slice(0, 3);
  return (
    <aside className="birthday-sidebar">
      <div className="birthday-calendar-art" aria-hidden="true">
        <Cake size={25} strokeWidth={1.3} />
        <span>{t(String(today.getDate()).padStart(2, "0"))}</span>
        <p>
          {t(
            new Intl.DateTimeFormat(language === "en" ? "en-GB" : "vi-VN", {
              month: "long",
              year: "numeric",
            }).format(today),
          )}
        </p>
        <i>{"+"}</i>
      </div>
      <p className="birthday-sidebar-eyebrow">
        {t("Sắp tới trong đội ngũ ")}
        <ArrowUpRight size={14} />
      </p>
      <div className="birthday-upcoming">
        {next.map(({ employee, daysFromToday }) => (
          <div className="birthday-upcoming-person" key={employee.id}>
            <AvatarBadge src={employee.avatar} name={employee.name} size="sm" />
            <div>
              <strong>{t(employee.name)}</strong>
              <p>{t(formatCalendarDate(employee.dob))}</p>
              <span>
                {t(
                  daysFromToday === 0 ? "Hôm nay" : `Còn ${daysFromToday} ngày`,
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
      <p className="birthday-sidebar-note">
        {t("Một lời chúc nhỏ.")}
        <br />
        {t("Thêm một chút gắn kết.")}
      </p>
    </aside>
  );
}
