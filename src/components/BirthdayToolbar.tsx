import { useLanguage } from "../i18n/LanguageProvider";
import { ArrowUpDown, ListFilter, Search } from "lucide-react";
import type { BirthdaySortMode, BirthdayStatusFilter } from "../lib/birthdays";
import { SelectPopover, type SelectOption } from "./SelectPopover";
interface BirthdayToolbarProps {
  query: string;
  sortMode: BirthdaySortMode;
  statusFilter: BirthdayStatusFilter;
  onQueryChange: (value: string) => void;
  onSortModeChange: (value: BirthdaySortMode) => void;
  onStatusFilterChange: (value: BirthdayStatusFilter) => void;
}
const statuses: SelectOption<BirthdayStatusFilter>[] = [
  { label: "Tất cả", value: "all" },
  { label: "Hôm nay", value: "today" },
  { label: "Sắp tới 30 ngày", value: "upcoming" },
  { label: "30 ngày vừa qua", value: "past" },
];
const sorts: SelectOption<BirthdaySortMode>[] = [
  { label: "Gần nhất", value: "nearest" },
  { label: "Sắp tới trước", value: "upcoming" },
  { label: "Vừa qua trước", value: "recent" },
  { label: "Tên A–Z", value: "name" },
];
export function BirthdayToolbar({
  query,
  sortMode,
  statusFilter,
  onQueryChange,
  onSortModeChange,
  onStatusFilterChange,
}: BirthdayToolbarProps) {
  const { t } = useLanguage();
  return (
    <div className="birthday-toolbar">
      <label className="birthday-search">
        <Search size={16} aria-hidden="true" />
        <span className="sr-only">{t("Tìm nhân sự theo tên")}</span>
        <input
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder={t("Tìm theo tên nhân sự")}
        />
      </label>
      <div className="birthday-toolbar-filters">
        <SelectPopover
          label={t("Trạng thái")}
          value={statusFilter}
          options={statuses}
          onValueChange={onStatusFilterChange}
          icon={ListFilter}
          allValue="all"
        />
        <SelectPopover
          label={t("Sắp xếp")}
          value={sortMode}
          options={sorts}
          displayValue={sorts.find((option) => option.value === sortMode)?.label}
          onValueChange={onSortModeChange}
          icon={ArrowUpDown}
          align="right"
        />
      </div>
    </div>
  );
}
