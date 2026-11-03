import { Languages } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";
import { SelectPopover } from "../SelectPopover";
export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  return (
    <SelectPopover
      label={t("Ngôn ngữ")}
      value={language}
      options={[
        { label: "Tiếng Việt", value: "vi" },
        { label: "English", value: "en" },
      ]}
      onValueChange={setLanguage}
      icon={Languages}
      align="right"
      displayValue={t(language.toUpperCase())}
      triggerClassName="language-trigger"
    />
  );
}
