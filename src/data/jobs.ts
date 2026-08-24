import type { JobPosting } from "../types";
import jobsJson from "./jobs.json";

export const jobPostings = jobsJson as JobPosting[];

export const jobDepartments = [
  "Tất cả",
  ...Array.from(new Set(jobPostings.map((job) => job.department))),
];
