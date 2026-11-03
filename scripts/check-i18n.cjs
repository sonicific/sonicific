const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");

function loadModule(file, imports = {}) {
  const module = { exports: {} };
  const code = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  }).outputText;
  vm.runInNewContext(
    code,
    { module, exports: module.exports, require: (name) => imports[name] },
    { filename: file },
  );
  return module.exports;
}
const { dynamicEnglish } = loadModule("src/i18n/patterns.ts");
const english = { ...require("../src/i18n/en.json"), ...dynamicEnglish };
const { translate, normalizeText, resolveLanguage } = loadModule(
  "src/i18n/translate.ts",
  { "./dictionary": { english } },
);

assert.equal(resolveLanguage(), "vi");
assert.equal(resolveLanguage("de"), "vi");
assert.equal(translate("Trang chủ", "vi"), "Trang chủ");
assert.equal(translate("Trang chủ", "en"), "Home");
assert.equal(translate(" Còn 3 ngày ", "en"), " In 3 days ");
assert.equal(
  translate("Mở album Khen Thưởng Cuối Năm 2025", "en"),
  "Open album: 2025 Year-End Awards",
);
assert.equal(translate("Phùng Văn Tiến", "en"), "Phùng Văn Tiến");
assert.equal(translate("Xem 1 vị trí đang mở", "en"), "View the open position");
assert.equal(translate("1 người", "en"), "1 person");
const { normalizeSearch } = loadModule("src/lib/search.ts");
const { getBirthdayEntries, filterAndSortBirthdayEntries } = loadModule(
  "src/lib/birthdays.ts",
  { "./search": { normalizeSearch } },
);
const employees = require("../src/data/employees.json");
const birthdayEntries = getBirthdayEntries(employees, new Date(2026, 10, 3));
const searchResults = filterAndSortBirthdayEntries(
  birthdayEntries,
  "  dinh huy thai  ",
  "all",
  "nearest",
);
assert.equal(searchResults.length, 1);
assert.equal(searchResults[0].employee.name, "Đinh Huy Thái");
assert.equal(searchResults[0].daysFromToday, -3);

const required = new Set();
const add = (value) => {
  if (typeof value === "string" && /[À-ỹĐđ]/.test(value))
    required.add(normalizeText(value));
};
function literals(node) {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node))
    add(node.text);
  ts.forEachChild(node, literals);
}
function readFile(file) {
  return ts.createSourceFile(
    file,
    fs.readFileSync(file, "utf8"),
    ts.ScriptTarget.Latest,
    true,
    file.endsWith("tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  );
}
function scan(dir) {
  for (const name of fs.readdirSync(dir)) {
    const file = path.join(dir, name);
    if (fs.statSync(file).isDirectory()) scan(file);
    else if (file.endsWith(".tsx")) literals(readFile(file));
  }
}
scan("src/components");
scan("src/site");
for (const file of [
  "src/lib/seo.ts",
  "src/lib/format.ts",
  "src/lib/birthdays.ts",
  "src/data/navigation.ts",
])
  literals(readFile(file));
for (const [file, names] of [
  ["company", ["company", "departments", "faqs", "amenities"]],
  ["business", null],
  ["landing", ["testimonials"]],
]) {
  for (const statement of readFile(`src/data/${file}.ts`).statements) {
    if (ts.isVariableStatement(statement))
      for (const declaration of statement.declarationList.declarations)
        if (!names || names.includes(declaration.name.text))
          literals(declaration);
  }
}
const identityFields = new Set([
  "name",
  "id",
  "avatar",
  "email",
  "image",
  "images",
  "href",
  "date",
  "deadline",
  "dob",
  "joinedAt",
]);
function scanData(value, key) {
  if (identityFields.has(key)) return;
  if (typeof value === "string") add(value);
  else if (Array.isArray(value)) value.forEach((item) => scanData(item, ""));
  else if (value && typeof value === "object")
    Object.entries(value).forEach(([field, item]) => scanData(item, field));
}
for (const file of ["employees", "news", "activities", "jobs"])
  scanData(require(`../src/data/${file}.json`), "");
// Personal and registered legal names remain in their original form.
const names = new Set(
  require("../src/data/employees.json").map((employee) => employee.name),
);
names.add("CÔNG TY TNHH SONIC GROUP");
const missing = [...required].filter(
  (value) => !english[value] && !names.has(value),
);
assert.deepEqual(
  missing,
  [],
  `Missing English translations:\n${missing.join("\n")}`,
);
console.log(
  `Translation coverage passed: ${required.size} source strings, ${Object.keys(english).length} translations; interpolation and Vietnamese fallback verified.`,
);
