import { useTranslation } from "react-i18next";

export function ClosingStatement() {
  const { t } = useTranslation();

  return (
    <div className="mt-16 border-s-4 border-primary bg-white/80 p-8 sm:p-10">
      <p className="text-lg font-medium leading-8 text-[#33506d] sm:text-xl">
        {t("about.paragraphFive")}
      </p>
    </div>
  );
}
