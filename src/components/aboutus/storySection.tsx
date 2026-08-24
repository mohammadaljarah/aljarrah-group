import { useTranslation } from "react-i18next";

export function StorySection() {
  const { t } = useTranslation();

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-primary sm:text-3xl">
        {t("about.ourStoryTitle")}
      </h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="space-y-4 text-base leading-8 text-[#33506d] sm:text-lg">
            <p>{t("about.paragraphTwo")}</p>
            <p>{t("about.paragraphThree")}</p>
            <p>{t("about.paragraphFour")}</p>
          </div>
        </div>
        <div className="rounded-lg bg-gradient-to-br from-primary/8 to-primary/12 p-6 shadow-[0_8px_20px_-15px_rgba(0,71,136,0.2)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#587b9d]">
            {t("about.legacy")}
          </p>
          <p className="mt-4 text-base font-medium leading-7 text-[#28517a]">
            {t("about.legacyText")}
          </p>
        </div>
      </div>
    </div>
  );
}
