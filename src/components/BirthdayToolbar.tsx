import { ArrowUpDown, Cake, ListFilter, Search } from "lucide-react";
import type {
  BirthdaySortMode,
  BirthdayStatusFilter,
} from "../lib/birthdays";
import { SelectPopover, type SelectOption } from "./SelectPopover";

interface BirthdayToolbarProps {
  query: string;
  resultCount: number;
  sortMode: BirthdaySortMode;
  statusFilter: BirthdayStatusFilter;
  totalCount: number;
  onQueryChange: (value: string) => void;
  onSortModeChange: (value: BirthdaySortMode) => void;
  onStatusFilterChange: (value: BirthdayStatusFilter) => void;
}

const statusFilterOptions: SelectOption<BirthdayStatusFilter>[] = [
  { label: "Tất cả", value: "all" },
  { label: "Hôm nay", value: "today" },
  { label: "Sắp tới 30 ngày", value: "upcoming" },
  { label: "30 ngày vừa qua", value: "past" },
];

const sortOptions: SelectOption<BirthdaySortMode>[] = [
  { label: "Sinh nhật gần nhất", value: "nearest" },
  { label: "Sắp tới trước", value: "upcoming" },
  { label: "Vừa qua trước", value: "recent" },
  { label: "Tên A–Z", value: "name" },
];

export function BirthdayToolbar({
  query,
  resultCount,
  sortMode,
  statusFilter,
  totalCount,
  onQueryChange,
  onSortModeChange,
  onStatusFilterChange,
}: BirthdayToolbarProps) {
  return (
    <div className="relative z-20 border-b border-slate-200 bg-white px-5 py-3 sm:px-6">
      <div className="grid gap-3 sm:grid-cols-[minmax(12rem,1fr)_auto] sm:items-center">
        <label className="flex h-9 items-center gap-2 rounded-full bg-slate-100 px-3 text-sm text-slate-600 ring-1 ring-transparent transition focus-within:bg-white focus-within:ring-teal-400">
          <Search className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
          <span className="sr-only">Tìm nhân sự theo tên</span>
          <input
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Tìm theo tên nhân sự"
            className="min-w-0 flex-1 bg-transparent text-sm text-slate-950 outline-none placeholder:text-slate-400"
          />
        </label>

        <div className="flex flex-wrap gap-2">
          <SelectPopover
            label="Trạng thái"
            value={statusFilter}
            options={statusFilterOptions}
            onValueChange={onStatusFilterChange}
            icon={ListFilter}
            allValue="all"
          />
          <SelectPopover
            label="Sắp xếp"
            value={sortMode}
            options={sortOptions}
            onValueChange={onSortModeChange}
            icon={ArrowUpDown}
            align="right"
          />
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
        <p>
          Hiển thị <strong className="text-slate-800">{resultCount}</strong>/
          {totalCount} nhân sự
        </p>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-2.5 py-1 font-semibold text-teal-700">
          <Cake className="h-3.5 w-3.5" aria-hidden="true" />
          Badge trong khoảng ±30 ngày
        </span>
      </div>
    </div>
  );
}
