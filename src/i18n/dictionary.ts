import text from "./en.json";
import { dynamicEnglish } from "./patterns";

export const english: Record<string, string> = { ...text, ...dynamicEnglish };
