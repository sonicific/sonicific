import {
  ArrowUpDown,
  BriefcaseBusiness,
  Building2,
  ListFilter,
  Search,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";
import { EmployeeCard } from "../components/EmployeeCard";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import {
  SelectPopover,
  type SelectOption,
} from "../components/SelectPopover";
import employeesJson from "../data/employees.json";
import type { Department, Employee } from "../types";

const employees = employeesJson as Employee[];

const departmentOrder: Department[] = [
  "Leadership",
  "E-Comerce",
  "Content Media",
  "Business Center",
  "Tech & Research",
  "Human & Resources",
];

const allOption = "Tất cả";
const collator = new Intl.Collator("vi", { sensitivity: "base" });
const positionOptions: SelectOption<string>[] = [
  { label: allOption, value: allOption },
  ...Array.from(new Set(employees.map((employee) => employee.position)))
    .sort(collator.compare)
    .map((position) => ({ label: position, value: position })),
];
const branchOptions: SelectOption<string>[] = [
  { label: allOption, value: allOption },
  ...Array.from(new Set(employees.map((employee) => employee.location)))
    .sort(collator.compare)
    .map((location) => ({ label: location, value: location })),
];
const departmentOptions: SelectOption<string>[] = [
  { label: allOption, value: allOption },
  ...departmentOrder.map((department) => ({
    label: department,
    value: department,
  })),
];

type SortMode =
  | "default"
  | "name-asc"
  | "name-desc"
  | "joined-desc"
  | "joined-asc";

const sortOptions: SelectOption<SortMode>[] = [
  { label: "Mặc định", value: "default" },
  { label: "Tên A–Z", value: "name-asc" },
  { label: "Tên Z–A", value: "name-desc" },
  { label: "Gia nhập gần đây", value: "joined-desc" },
  { label: "Gia nhập lâu nhất", value: "joined-asc" },
];

export function PeoplePage() {
  const [query, setQuery] = useState("");
  const [position, setPosition] = useState(allOption);
  const [branch, setBranch] = useState(allOption);
  const [department, setDepartment] = useState(allOption);
  const [sortMode, setSortMode] = useState<SortMode>("default");

  const filteredEmployees = useMemo(() => {
    const search = query.trim().toLowerCase();

    const matchingEmployees = employees.filter((employee) => {
      const matchPosition =
        position === allOption || employee.position === position;
      const matchBranch =
        branch === allOption || employee.location === branch;
      const matchDepartment =
        department === allOption || employee.department === department;
      const matchSearch =
        !search ||
        employee.name.toLowerCase().includes(search) ||
        employee.position.toLowerCase().includes(search) ||
        employee.department.toLowerCase().includes(search) ||
        employee.location.toLowerCase().includes(search);

      return (
        matchPosition && matchBranch && matchDepartment && matchSearch
      );
    });

    if (sortMode === "default") {
      return matchingEmployees;
    }

    return [...matchingEmployees].sort((first, second) => {
      if (sortMode === "name-desc") {
        return collator.compare(second.name, first.name);
      }

      if (sortMode === "joined-desc") {
        return second.joinedAt.localeCompare(first.joinedAt);
      }

      if (sortMode === "joined-asc") {
        return first.joinedAt.localeCompare(second.joinedAt);
      }

      return collator.compare(first.name, second.name);
    });
  }, [branch, department, position, query, sortMode]);

  const grouped = departmentOrder
    .map((departmentName) => ({
      department: departmentName,
      people: filteredEmployees.filter(
        (employee) => employee.department === departmentName,
      ),
    }))
    .filter((group) => group.people.length > 0);

  return (
    <>
      <PageHero
        icon={Users}
        tone="dark"
        eyebrow="Đội ngũ"
        title="Những người tạo nên nhịp Sonic."
        description="Tìm kiếm đồng đội theo tên, chức vụ, chi nhánh hoặc phòng ban."
        aside={
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-teal-50 text-teal-700">
                <Users className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="text-left">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Đội ngũ hiện tại
                </p>
                <p className="text-sm font-semibold text-slate-950">
                  {employees.length} thành viên
                </p>
              </div>
            </div>
          </div>
        }
      />

      <section className="bg-stone-50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="reveal-overflow-visible relative z-20 grid gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:grid-cols-[minmax(16rem,1fr)_auto] lg:items-center">
            <label className="flex h-9 items-center gap-2 rounded-full bg-slate-100 px-3 text-sm text-slate-600">
              <Search className="h-4 w-4 text-slate-400" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Tìm theo tên, chức vụ, phòng ban, chi nhánh"
                className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </label>
            <div className="flex flex-wrap gap-2" aria-label="Bộ lọc đội ngũ">
              <SelectPopover
                label="Chức vụ"
                value={position}
                options={positionOptions}
                onValueChange={setPosition}
                icon={BriefcaseBusiness}
                allValue={allOption}
              />
              <SelectPopover
                label="Chi nhánh"
                value={branch}
                options={branchOptions}
                onValueChange={setBranch}
                icon={Building2}
                allValue={allOption}
              />
              <SelectPopover
                label="Phòng ban"
                value={department}
                options={departmentOptions}
                onValueChange={setDepartment}
                icon={ListFilter}
                allValue={allOption}
              />
              <SelectPopover
                label="Sắp xếp"
                value={sortMode}
                options={sortOptions}
                onValueChange={setSortMode}
                icon={ArrowUpDown}
                align="right"
              />
            </div>
          </Reveal>

          <div className="mt-4 flex items-center justify-between gap-3 text-xs text-slate-500">
            <p>
              Hiển thị <strong className="text-slate-800">{filteredEmployees.length}</strong>/{employees.length} thành viên
            </p>
          </div>

          <div className="mt-6 grid gap-8">
            {grouped.map((group) => (
              <Reveal key={group.department}>
                <section>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h2 className="font-display text-base font-semibold text-slate-950">
                      {group.department}
                    </h2>
                    <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-slate-500 ring-1 ring-slate-200">
                      {group.people.length} người
                    </span>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {group.people.map((employee) => (
                      <EmployeeCard key={employee.id} employee={employee} />
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}

            {grouped.length === 0 ? (
              <div className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center">
                <p className="text-sm font-semibold text-slate-950">
                  Không có nhân sự phù hợp
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Hãy thử từ khóa khác hoặc chọn lại phòng ban.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
