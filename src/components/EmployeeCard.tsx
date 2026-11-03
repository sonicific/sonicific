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
      className="employee-card group relative z-0 flex min-h-[100px] flex-col justify-between border p-5 transition hover:z-10 focus-visible:z-10"
    >
      <div className="flex h-full items-start gap-3">
        <AvatarBadge src={employee.avatar} name={employee.name} size="md" />

        <div className="flex h-full min-w-0 flex-1 flex-col">
          <div>
            <h3 className="font-display text-sm font-semibold text-slate-950 transition group-hover:text-teal-700">
              {employee.name}
            </h3>
            <p className="mt-1 text-[11px] font-medium text-teal-700">
              {employee.position}
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
