import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

export function Hero() {
  const { t } = useTranslation();

  const content = {
    title: t("hero.title"),
    primaryCta: t("hero.primaryCta"),
    secondaryCta: t("hero.secondaryCta"),
    stats: [
      {
        label: t("hero.statOneLabel"),
        value: t("hero.statOneValue"),
      },
      {
        label: t("hero.statTwoLabel"),
        value: t("hero.statTwoValue"),
      },
      {
        label: t("hero.statThreeLabel"),
        value: t("hero.statThreeValue"),
      },
    ],
  };

  return (
    <section className="relative overflow-hidden bg-primary px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero_background.png')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--color-primary)_94%,transparent)_0%,color-mix(in_srgb,var(--color-primary)_86%,transparent)_20%,color-mix(in_srgb,var(--color-primary)_66%,transparent)_38%,color-mix(in_srgb,var(--color-primary)_34%,transparent)_56%,transparent_65%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {content.title}
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <NavLink
              to="/companies"
              className="bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-[#eef4fb]"
            >
              {content.primaryCta}
            </NavLink>
            <NavLink
              to="/aboutus"
              className="border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/45 hover:text-white/90"
            >
              {content.secondaryCta}
            </NavLink>
          </div>

          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {content.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex min-h-32 flex-col border border-[#dce6f2]/80 bg-white px-5 py-4"
              >
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b86a2]">
                  {stat.label}
                </dt>
                <dd className="mt-auto pt-6 text-2xl font-semibold text-[#082847]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}