import { useLanguage } from "../i18n/LanguageProvider";
import { Cake, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  filterAndSortBirthdayEntries,
  getBirthdayEntries,
  type BirthdaySortMode,
  type BirthdayStatusFilter,
} from "../lib/birthdays";
import type { Employee } from "../types";
import { BirthdayToolbar } from "./BirthdayToolbar";
import { BirthdaySidebar } from "./birthday/BirthdaySidebar";
import { BirthdayList } from "./birthday/BirthdayList";
export function BirthdayModal({
  employees,
  onClose,
}: {
  employees: Employee[];
  onClose: () => void;
}) {
  const { t } = useLanguage();
  const modalRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<BirthdayStatusFilter>("all");
  const [sort, setSort] = useState<BirthdaySortMode>("nearest");
  const entries = useMemo(() => getBirthdayEntries(employees), [employees]);
  const visible = useMemo(
    () => filterAndSortBirthdayEntries(entries, query, status, sort),
    [entries, query, status, sort],
  );
  const todayCount = entries.filter(
    (entry) => entry.daysFromToday === 0,
  ).length;
  const upcomingCount = entries.filter(
    (entry) => entry.daysFromToday > 0 && entry.daysFromToday <= 30,
  ).length;
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (document.querySelector("[data-popover-menu]")) return;
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const nodes = Array.from(
        modalRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), a[href], [tabindex="0"]',
        ) ?? [],
      ).filter((element) => element.offsetParent !== null);
      const first = nodes[0],
        last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);
  return createPortal(
    <div
      className="birthday-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="birthday-modal-title"
        aria-describedby="birthday-modal-description"
        className="birthday-dialog"
      >
        <header className="birthday-header">
          <span className="birthday-header-icon">
            <Cake size={24} strokeWidth={1.3} aria-hidden="true" />
          </span>
          <div className="birthday-heading">
            <p className="eyebrow">{t("SONIC PEOPLE / CÙNG NHAU GẮN KẾT")}</p>
            <h2 id="birthday-modal-title">{t("Sinh nhật nhân sự")}</h2>
            <p id="birthday-modal-description">
              {t("Những ngày đặc biệt của những người tạo nên Sonic.")}
            </p>
          </div>
          <div className="birthday-header-stats">
            <span>
              <strong>{todayCount}</strong>
              {t(" Hôm nay")}
            </span>
            <span>
              <strong>{upcomingCount}</strong>
              {t(" Trong 30 ngày tới")}
            </span>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="birthday-close"
            onClick={onClose}
            aria-label={t("Đóng danh sách sinh nhật")}
          >
            <X size={19} />
          </button>
        </header>
        <div className="birthday-body">
          <BirthdaySidebar entries={entries} />
          <div className="birthday-main">
            <BirthdayToolbar
              query={query}
              sortMode={sort}
              statusFilter={status}
              onQueryChange={setQuery}
              onSortModeChange={setSort}
              onStatusFilterChange={setStatus}
            />
            <BirthdayList entries={visible} />
            <footer className="birthday-footer">
              <span>
                {t("Hiển thị ")}
                <strong>
                  {visible.length}
                  {"/"}
                  {entries.length}
                </strong>
                {t(" thành viên")}
              </span>
              <span>
                <i />
                {t(" Trạng thái trong ±30 ngày")}
              </span>
            </footer>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
