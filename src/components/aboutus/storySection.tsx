import { useTranslation } from "react-i18next";

export function StorySection() {
  const { t } = useTranslation();

  const content = {
    title: t("about.ourStoryTitle"),
    paragraphTwo: t("about.paragraphTwo"),
    paragraphThree: t("about.paragraphThree"),
    paragraphFour: t("about.paragraphFour"),
    legacy: t("about.legacy"),
    legacyText: t("about.legacyText"),
  };

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-primary sm:text-3xl">
        {content.title}
      </h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="space-y-4 text-base leading-8 text-[#33506d] sm:text-lg">
            <p>{content.paragraphTwo}</p>
            <p>{content.paragraphThree}</p>
            <p>{content.paragraphFour}</p>
          </div>
        </div>
        <div className="rounded-lg bg-gradient-to-br from-primary/8 to-primary/12 p-6 shadow-[0_8px_20px_-15px_rgba(0,71,136,0.2)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#587b9d]">
            {content.legacy}
          </p>
          <p className="mt-4 text-base font-medium leading-7 text-[#28517a]">
            {content.legacyText}
          </p>
        </div>
      </div>
    </div>
  );
}
