import type { NewsPost } from "../types";
import newsJson from "./news.json";

export const newsPosts = newsJson as NewsPost[];

export const newsCategories = [
  "Tất cả",
  ...Array.from(new Set(newsPosts.map((post) => post.category))),
];
