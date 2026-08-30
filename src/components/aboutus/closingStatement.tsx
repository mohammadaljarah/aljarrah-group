import { useTranslation } from "react-i18next";

export function ClosingStatement() {
  const { t } = useTranslation();

  const content = {
    paragraph: t("about.paragraphFive"),
  };

  return (
    <div className="mt-16 border-s-4 border-primary bg-white/80 p-8 sm:p-10">
      <p className="text-lg font-medium leading-8 text-[#33506d] sm:text-xl">
        {content.paragraph}
      </p>
    </div>
  );
}
