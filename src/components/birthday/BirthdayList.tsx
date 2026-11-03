import { useLanguage } from "../../i18n/LanguageProvider";
import { CalendarDays, Cake } from "lucide-react";
import {
  formatCalendarDate,
  isBirthdayWithinStatusWindow,
  type BirthdayEntry,
} from "../../lib/birthdays";
import { AvatarBadge } from "../AvatarBadge";
export function BirthdayList({ entries }: { entries: BirthdayEntry[] }) {
  const { t } = useLanguage();
  return (
    <div className="birthday-list-scroll">
      <div className="birthday-list-heading" aria-hidden="true">
        <span>{t("Thành viên")}</span>
        <span>{t("Ngày sinh")}</span>
        <span>{t("Thời điểm")}</span>
      </div>
      {entries.length ? (
        <ul className="birthday-list">
          {entries.map(({ employee, daysFromToday, status }) => (
            <li
              key={employee.id}
              className={`birthday-person-row ${daysFromToday === 0 ? "is-today" : ""}`}
            >
              <div className="birthday-person">
                <AvatarBadge
                  src={employee.avatar}
                  name={employee.name}
                  size="md"
                />
                <div>
                  <strong>{t(employee.name)}</strong>
                  <p>{t(employee.position)}</p>
                </div>
              </div>
              <span className="birthday-date">
                <CalendarDays size={13} aria-hidden="true" />
                {t(formatCalendarDate(employee.dob))}
              </span>
              <div className="birthday-person-status">
                {isBirthdayWithinStatusWindow(daysFromToday) ? (
                  <span
                    className={`birthday-status ${daysFromToday === 0 ? "status-today" : daysFromToday > 0 ? "status-upcoming" : "status-past"}`}
                  >
                    <i />
                    {t(status)}
                  </span>
                ) : (
                  <span
                    className="birthday-status-empty"
                    aria-label={t("Ngoài khoảng 30 ngày")}
                  >
                    {"—"}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="birthday-empty">
          <Cake size={30} strokeWidth={1.2} aria-hidden="true" />
          <h3>{t("Không có nhân sự phù hợp")}</h3>
          <p>{t("Hãy thử từ khóa hoặc bộ lọc khác.")}</p>
        </div>
      )}
    </div>
  );
}
