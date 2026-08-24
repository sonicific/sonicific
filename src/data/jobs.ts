import type { JobPosting } from "../types";
import jobsJson from "./jobs.json";

export const jobPostings = jobsJson as JobPosting[];

function getLocalDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function isJobOpen(job: JobPosting, referenceDate = new Date()) {
  return job.deadline >= getLocalDateKey(referenceDate);
}

export const openJobPostings = jobPostings.filter((job) => isJobOpen(job));

export const jobDepartments = [
  "Tất cả",
  ...Array.from(new Set(openJobPostings.map((job) => job.department))),
];
