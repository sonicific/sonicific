import type { NewsPost } from "../types";
import newsJson from "./news.json";

const posts = newsJson as NewsPost[];

export const newsPosts = [...posts].sort((first, second) =>
  (second.date ?? "").localeCompare(first.date ?? ""),
);

export const newsCategories = [
  "Tất cả",
  ...Array.from(new Set(newsPosts.map((post) => post.category))),
];
