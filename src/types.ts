export type Department =
  | "Leadership"
  | "E-Comerce"
  | "Content Media"
  | "Business Center"
  | "Tech & Research"
  | "Human & Resources";

export interface Employee {
  id: string;
  name: string;
  avatar: string;
  position: string;
  department: Department;
  joinedAt: string;
  location: string;
  focus: string;
  bio?: string;
}

export interface Activity {
  id: string;
  title: string;
  date: string;
  category: string;
  location: string;
  image: string;
  summary: string;
  highlights: string[];
}

export interface NewsPost {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  readingMinutes: number;
  featured?: boolean;
  content: string[];
  highlights?: string[];
}

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  deadline: string;
  excerpt: string;
  salary: string;
  featured?: boolean;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export interface RouteState {
  page:
    | "home"
    | "people"
    | "employee"
    | "activities"
    | "news"
    | "news-detail"
    | "careers"
    | "career-detail";
  employeeId?: string;
  newsId?: string;
  jobId?: string;
}
