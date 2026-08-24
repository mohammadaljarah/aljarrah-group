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

  return (
    <section className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-primary px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/hero_background.png')" }} />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            {t("about.eyebrow")}
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            {t("about.title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium text-white/90">
            {t("about.paragraphOne")}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-[linear-gradient(180deg,#f7fbff_0%,#edf4fb_55%,#e7eef7_100%)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          {/* Company Profile Grid */}
          <div className="mb-16">
            <h2 className="mb-8 text-2xl font-bold text-primary sm:text-3xl">
              {t("about.companyProfileTitle")}
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {profile.map((item) => (
                <div
                  key={item.label}
                  className="relative overflow-hidden bg-white p-6 shadow-[0_10px_30px_-20px_rgba(0,71,136,0.2)]"
                >
                  <div className="absolute top-0 start-0 h-1 w-full bg-gradient-to-r from-primary to-secondary" />
                  <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6b8aa4]">
                    {item.label}
                  </h3>
                  <p className="mt-4 text-2xl font-bold text-primary">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Story Section */}
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

          {/* Core Values / Pillars */}
          <div className="mb-16">
            <h2 className="mb-8 text-2xl font-bold text-primary sm:text-3xl">
              {t("about.valuesTitle")}
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {pillars.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className="group relative bg-white p-7 shadow-[0_10px_30px_-20px_rgba(0,71,136,0.2)] transition hover:shadow-[0_20px_50px_-25px_rgba(0,71,136,0.35)]"
                >
                  <div
                    className="absolute top-0 start-0 w-1 h-full bg-primary transition"
                  />
                  <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                    {idx + 1}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-primary">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#355779]">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership Approach */}
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

          {/* Closing Statement */}
          <div className="mt-16 border-s-4 border-primary bg-white/80 p-8 sm:p-10">
            <p className="text-lg font-medium leading-8 text-[#33506d] sm:text-xl">
              {t("about.paragraphFive")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
