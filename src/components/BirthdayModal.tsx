import { Cake, CalendarDays, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  filterAndSortBirthdayEntries,
  formatCalendarDate,
  getBirthdayEntries,
  isBirthdayWithinStatusWindow,
  type BirthdaySortMode,
  type BirthdayStatusFilter,
} from "../lib/birthdays";
import type { Employee } from "../types";
import { AvatarBadge } from "./AvatarBadge";
import { BirthdayToolbar } from "./BirthdayToolbar";

interface BirthdayModalProps {
  employees: Employee[];
  onClose: () => void;
}

function getStatusTone(daysFromToday: number) {
  if (daysFromToday === 0) {
    return "bg-teal-50 text-teal-800 ring-teal-200";
  }

  if (daysFromToday > 0) {
    return "bg-indigo-50 text-indigo-700 ring-indigo-200";
  }

  return "bg-slate-100 text-slate-600 ring-slate-200";
}

export function BirthdayModal({ employees, onClose }: BirthdayModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] =
    useState<BirthdayStatusFilter>("all");
  const [sortMode, setSortMode] = useState<BirthdaySortMode>("nearest");
  const entries = useMemo(() => getBirthdayEntries(employees), [employees]);
  const visibleEntries = useMemo(
    () =>
      filterAndSortBirthdayEntries(entries, query, statusFilter, sortMode),
    [entries, query, sortMode, statusFilter],
  );

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (modalRef.current?.querySelector('[role="menu"]')) {
          return;
        }

        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input:not([disabled]), select:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements?.length) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-slate-950/50 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="birthday-modal-title"
        aria-describedby="birthday-modal-description"
        className="flex max-h-[min(46rem,calc(100vh-2rem))] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200"
      >
        <header className="flex items-start justify-between gap-4 border-b border-teal-100 bg-gradient-to-r from-white via-teal-50/60 to-indigo-50/70 px-5 py-5 sm:px-6">
          <div className="flex items-start gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-teal-700 shadow-sm ring-1 ring-teal-100">
              <Cake className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h2
                id="birthday-modal-title"
                className="font-display text-lg font-semibold text-slate-950"
              >
                Sinh nhật nhân sự
              </h2>
              <p
                id="birthday-modal-description"
                className="mt-1 text-xs leading-5 text-slate-500"
              >
                Toàn bộ nhân sự, sắp xếp theo sinh nhật gần nhất. Badge trạng
                thái chỉ hiển thị trong khoảng ±30 ngày.
              </p>
            </div>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Đóng danh sách sinh nhật"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </header>

        <BirthdayToolbar
          query={query}
          resultCount={visibleEntries.length}
          sortMode={sortMode}
          statusFilter={statusFilter}
          totalCount={entries.length}
          onQueryChange={setQuery}
          onSortModeChange={setSortMode}
          onStatusFilterChange={setStatusFilter}
        />

        <div className="overflow-auto">
          {visibleEntries.length > 0 ? (
            <table className="w-full min-w-[40rem] border-collapse text-left">
              <thead className="sticky top-0 z-10 bg-slate-50/95 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500 backdrop-blur">
                <tr>
                  <th className="px-5 py-3 sm:px-6">Tên nhân sự</th>
                  <th className="px-5 py-3">Ngày sinh</th>
                  <th className="px-5 py-3 sm:pr-6">Tình trạng</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {visibleEntries.map(({ employee, daysFromToday, status }) => (
                  <tr
                    key={employee.id}
                    className="transition hover:bg-slate-50/80"
                  >
                    <td className="px-5 py-3 sm:px-6">
                      <div className="flex items-center gap-3">
                        <AvatarBadge
                          src={employee.avatar}
                          name={employee.name}
                          size="sm"
                        />
                        <div className="min-w-0">
                          <p className="truncate font-semibold text-slate-950">
                            {employee.name}
                          </p>
                          <p className="mt-0.5 truncate text-xs text-slate-500">
                            {employee.position}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-5 py-3 text-slate-600">
                      <span className="inline-flex items-center gap-2">
                        <CalendarDays
                          className="h-4 w-4 text-slate-400"
                          aria-hidden="true"
                        />
                        {formatCalendarDate(employee.dob)}
                      </span>
                    </td>
                    <td className="px-5 py-3 sm:pr-6">
                      {isBirthdayWithinStatusWindow(daysFromToday) ? (
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${getStatusTone(daysFromToday)}`}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                          {status}
                        </span>
                      ) : (
                        <span className="text-sm text-slate-300" aria-label="Ngoài khoảng 30 ngày">
                          —
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="grid min-h-64 place-items-center px-6 py-12 text-center">
              <div>
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-slate-100 text-slate-500">
                  <Cake className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-4 text-sm font-semibold text-slate-950">
                  Không có nhân sự phù hợp
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Hãy thử từ khóa, bộ lọc hoặc cách sắp xếp khác.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
