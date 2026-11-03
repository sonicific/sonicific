# Site languages

Vietnamese content stays in the existing data files and components. Use `t(text)`
from `useLanguage()` at the point where text is rendered, including labels and
image descriptions. Add its English translation to `en.json`; keys use trimmed
text with consecutive whitespace collapsed to a single space.

Use `patterns.ts` for interpolated sentences, with numbered placeholders such as
`Còn {0} ngày`. Prefer translating a complete sentence or a data value before
adding punctuation. Personal names, registered legal names and destination URLs
stay unchanged.

`LanguageProvider` persists the selection in the `sonic-language` cookie. The
server reads the same cookie for the initial render and metadata. Missing or
unsupported preferences default to Vietnamese.

Run `node scripts/check-i18n.cjs` after editing content. It checks English coverage,
interpolation, the Vietnamese default and accent-insensitive name searches.
