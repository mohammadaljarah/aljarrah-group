import { useTranslation } from "react-i18next";

export function AboutUs() {
  const { t } = useTranslation();

  const profile = [
    {
      label: t("about.profileFoundedLabel"),
      value: t("about.profileFoundedValue"),
    },
    {
      label: t("about.profileSectorsLabel"),
      value: t("about.profileSectorsValue"),
    },
    {
      label: t("about.profileFounderLabel"),
      value: t("about.profileFounderValue"),
    },
    {
      label: t("about.profileBoardLabel"),
      value: t("about.profileBoardValue"),
    },
  ];

  const pillars = [
    {
      title: t("about.pillarOneTitle"),
      description: t("about.pillarOneDescription"),
    },
    {
      title: t("about.pillarTwoTitle"),
      description: t("about.pillarTwoDescription"),
    },
    {
      title: t("about.pillarThreeTitle"),
      description: t("about.pillarThreeDescription"),
    },
  ];

  const engagementStages = [
    t("about.stageOne"),
    t("about.stageTwo"),
    t("about.stageThree"),
  ];

  const integrationBenefits = [
    t("about.integrationBenefitOne"),
    t("about.integrationBenefitTwo"),
    t("about.integrationBenefitThree"),
  ];

  return (
    <section className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#dbe9f8_0%,transparent_42%),radial-gradient(circle_at_90%_80%,#d7e7fa_0%,transparent_40%)]" />

      <div className="mx-auto max-w-6xl">
        <div className="border border-primary/15 bg-white/90 p-7 shadow-[0_30px_90px_-50px_rgba(0,71,136,0.45)] sm:p-9 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#587b9d]">
            {t("about.eyebrow")}
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl">
            {t("about.title")}
          </h1>

          <div className="mt-8 grid gap-6 text-base leading-8 text-[#2a4967] sm:text-lg">
            <p>{t("about.paragraphOne")}</p>
            <p>{t("about.paragraphTwo")}</p>
            <p>{t("about.paragraphThree")}</p>
            <p>{t("about.paragraphFour")}</p>
            <p>{t("about.paragraphFive")}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profile.map((item) => (
            <article
              key={item.label}
              className="border border-primary/12 bg-white p-5 shadow-[0_20px_50px_-38px_rgba(0,71,136,0.35)]"
            >
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6a89a6]">
                {item.label}
              </h2>
              <p className="mt-3 text-base font-semibold leading-7 text-primary">
                {item.value}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 border border-primary/15 bg-white/95 p-7 shadow-[0_30px_90px_-55px_rgba(0,71,136,0.45)] sm:p-9">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            {t("about.approachTitle")}
          </h2>
          <p className="mt-4 text-base leading-8 text-[#2a4967] sm:text-lg">
            {t("about.approachParagraphOne")}
          </p>
          <p className="mt-4 text-base leading-8 text-[#2a4967] sm:text-lg">
            {t("about.approachParagraphTwo")}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {engagementStages.map((stage) => (
              <div
                key={stage}
                className="border border-primary/10 bg-[#f7fbff] px-4 py-3 text-sm font-semibold text-[#28517a]"
              >
                {stage}
              </div>
            ))}
          </div>

          <h3 className="mt-8 text-xl font-bold text-primary">
            {t("about.integrationTitle")}
          </h3>
          <p className="mt-3 text-base leading-8 text-[#2a4967] sm:text-lg">
            {t("about.integrationParagraph")}
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {integrationBenefits.map((benefit) => (
              <div
                key={benefit}
                className="border border-primary/10 bg-[#f3f8fd] px-4 py-3 text-sm font-medium text-[#2f577d]"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="border border-primary/12 bg-white p-6 shadow-[0_20px_50px_-38px_rgba(0,71,136,0.42)]"
            >
              <h2 className="text-xl font-bold text-primary">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#355779] sm:text-base">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
