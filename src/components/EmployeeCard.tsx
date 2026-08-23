import { routes } from "../lib/router";
import type { Employee } from "../types";
import { AvatarBadge } from "./AvatarBadge";

interface EmployeeCardProps {
  employee: Employee;
}

export function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <a
      href={routes.employee(employee.id)}
      className="group flex min-h-[100px] flex-col justify-between rounded-lg border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-4 shadow-sm transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-soft"
    >
      <div className="flex h-full items-start gap-3">
        <AvatarBadge src={employee.avatar} name={employee.name} size="md" />

        <div className="flex h-full min-w-0 flex-1 flex-col">
          <div className="flex space-x-1.5">
            <h3 className="truncate font-display text-sm font-semibold text-slate-950 transition group-hover:text-teal-700">
              {employee.name}
            </h3>
            <p className="mt-1 text-xs font-semibold text-teal-700">
              ({employee.position})
            </p>
          </div>

          <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
            {employee.focus}
          </p>
        </div>
      </div>
    </a>
  );
}
