import { useTranslation } from "react-i18next";

export function PartnershipApproach() {
  const { t } = useTranslation();

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      {/* Left: Approach */}
      <div className="rounded-lg bg-white p-8 shadow-[0_10px_30px_-20px_rgba(0,71,136,0.2)]">
        <h2 className="text-2xl font-bold text-primary">{t("about.approachTitle")}</h2>
        <p className="mt-4 text-base leading-8 text-[#33506d]">
          {t("about.approachParagraphOne")}
        </p>
        <p className="mt-4 text-base leading-8 text-[#33506d]">
          {t("about.approachParagraphTwo")}
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <span className="text-xs font-bold text-primary">✓</span>
            </div>
            <span className="text-sm font-medium text-[#28517a]">{t("about.stageOne")}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <span className="text-xs font-bold text-primary">✓</span>
            </div>
            <span className="text-sm font-medium text-[#28517a]">{t("about.stageTwo")}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <span className="text-xs font-bold text-primary">✓</span>
            </div>
            <span className="text-sm font-medium text-[#28517a]">{t("about.stageThree")}</span>
          </div>
        </div>
      </div>

      {/* Right: Integration Benefits */}
      <div className="rounded-lg bg-gradient-to-br from-primary/5 via-white to-primary/10 p-8 shadow-[0_10px_30px_-20px_rgba(0,71,136,0.2)]">
        <h2 className="text-2xl font-bold text-primary">{t("about.integrationTitle")}</h2>
        <p className="mt-4 text-base leading-8 text-[#33506d]">
          {t("about.integrationParagraph")}
        </p>
        <div className="mt-6 space-y-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded bg-white/60 px-4 py-3 backdrop-blur-sm"
            >
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-[#28517a]">
                {t(`about.integrationBenefit${i === 1 ? "One" : i === 2 ? "Two" : "Three"}`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
