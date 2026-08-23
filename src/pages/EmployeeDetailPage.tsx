import {
  ArrowLeft,
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  Users,
} from "lucide-react";
import { AvatarBadge } from "../components/AvatarBadge";
import { ButtonLink } from "../components/ButtonLink";
import { EmployeeCard } from "../components/EmployeeCard";
import employeesJson from "../data/employees.json";
import { routes } from "../lib/router";
import type { Employee } from "../types";

const employees = employeesJson as Employee[];

interface EmployeeDetailPageProps {
  employeeId?: string;
}

const dateFormatter = new Intl.DateTimeFormat("vi-VN", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

function formatDate(value: string) {
  return dateFormatter.format(new Date(`${value}T00:00:00`));
}

export function EmployeeDetailPage({ employeeId }: EmployeeDetailPageProps) {
  const employee = employees.find((person) => person.id === employeeId);

  if (!employee) {
    return (
      <section className="bg-stone-50 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-teal-700">
            Không tìm thấy nhân sự
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">
            Hồ sơ này chưa có trong dữ liệu
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Kiểm tra lại đường dẫn hoặc cập nhật file employees.json nếu đây là
            nhân sự mới.
          </p>
          <div className="mt-6 flex justify-center">
            <ButtonLink href={routes.people} icon={ArrowLeft} variant="dark">
              Về danh sách
            </ButtonLink>
          </div>
        </div>
      </section>
    );
  }

  const colleagues = employees
    .filter(
      (person) =>
        person.department === employee.department && person.id !== employee.id,
    )
    .slice(0, 3);

  return (
    <>
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ButtonLink href={routes.people} icon={ArrowLeft} variant="light">
            Danh sách nhân sự
          </ButtonLink>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="rounded-lg border border-slate-200 bg-stone-50 p-5">
              <AvatarBadge
                src={employee.avatar}
                name={employee.name}
                size="lg"
              />
              <h1 className="mt-5 text-3xl font-semibold text-slate-950">
                {employee.name}
              </h1>
              <p className="mt-2 text-sm font-semibold text-teal-700">
                {employee.position}
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {employee.bio}
              </p>
            </aside>

            <div className="grid gap-4">
              <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="text-base font-semibold text-slate-950">
                  Thông tin chi tiết
                </h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <DetailItem
                    icon={BriefcaseBusiness}
                    label="Phòng ban"
                    value={employee.department}
                  />
                  <DetailItem
                    icon={CalendarDays}
                    label="Gia nhập"
                    value={formatDate(employee.joinedAt)}
                  />
                  <DetailItem
                    icon={MapPin}
                    label="Chi nhánh"
                    value={employee.location}
                  />
                  <DetailItem
                    icon={Users}
                    label="Vai trò"
                    value={employee.position}
                  />
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="text-base font-semibold text-slate-950">
                  Trọng tâm công việc
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {employee.focus}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {colleagues.length > 0 ? (
        <section className="bg-stone-50 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="text-base font-semibold text-slate-950">
                Cùng phòng ban
              </h2>
              <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-slate-500 ring-1 ring-slate-200">
                {employee.department}
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {colleagues.map((colleague) => (
                <EmployeeCard key={colleague.id} employee={colleague} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

interface DetailItemProps {
  icon: typeof BriefcaseBusiness;
  label: string;
  value: string;
}

function DetailItem({ icon: Icon, label, value }: DetailItemProps) {
  return (
    <div className="flex min-h-[72px] items-start gap-3 rounded-lg bg-slate-50 p-3 ring-1 ring-slate-100">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-950 text-white">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
          {label}
        </p>
        <p className="mt-1 text-sm font-semibold text-slate-950">{value}</p>
      </div>
    </div>
  );
}
