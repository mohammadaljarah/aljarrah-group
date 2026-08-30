import { useTranslation } from "react-i18next";

export function PartnershipApproach() {
  const { t } = useTranslation();

  const content = {
    approachTitle: t("about.approachTitle"),
    approachParagraphOne: t("about.approachParagraphOne"),
    approachParagraphTwo: t("about.approachParagraphTwo"),
    stageOne: t("about.stageOne"),
    stageTwo: t("about.stageTwo"),
    stageThree: t("about.stageThree"),
    integrationTitle: t("about.integrationTitle"),
    integrationParagraph: t("about.integrationParagraph"),
    integrationBenefitOne: t("about.integrationBenefitOne"),
    integrationBenefitTwo: t("about.integrationBenefitTwo"),
    integrationBenefitThree: t("about.integrationBenefitThree"),
  };

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      {/* Left: Approach */}
      <div className="rounded-lg bg-white p-8 shadow-[0_10px_30px_-20px_rgba(0,71,136,0.2)]">
        <h2 className="text-2xl font-bold text-primary">{content.approachTitle}</h2>
        <p className="mt-4 text-base leading-8 text-[#33506d]">
          {content.approachParagraphOne}
        </p>
        <p className="mt-4 text-base leading-8 text-[#33506d]">
          {content.approachParagraphTwo}
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <span className="text-xs font-bold text-primary">✓</span>
            </div>
            <span className="text-sm font-medium text-[#28517a]">{content.stageOne}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <span className="text-xs font-bold text-primary">✓</span>
            </div>
            <span className="text-sm font-medium text-[#28517a]">{content.stageTwo}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <span className="text-xs font-bold text-primary">✓</span>
            </div>
            <span className="text-sm font-medium text-[#28517a]">{content.stageThree}</span>
          </div>
        </div>
      </div>

      {/* Right: Integration Benefits */}
      <div className="rounded-lg bg-white from-primary/5 via-white to-primary/10 p-8 shadow-[0_10px_30px_-20px_rgba(0,71,136,0.2)]">
        <h2 className="text-2xl font-bold text-primary">{content.integrationTitle}</h2>
        <p className="mt-4 text-base leading-8 text-[#33506d]">
          {content.integrationParagraph}
        </p>
        <div className="mt-6 space-y-3">
          {[
            { key: 1, text: content.integrationBenefitOne },
            { key: 2, text: content.integrationBenefitTwo },
            { key: 3, text: content.integrationBenefitThree },
          ].map((item) => (
            <div
              key={item.key}
              className="flex items-center gap-3 rounded bg-black/10 px-4 py-3 backdrop-blur-sm"
            >
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-[#28517a]">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
