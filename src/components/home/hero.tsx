import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

export function Hero() {
  const { i18n, t } = useTranslation();
  const isRtl = i18n.dir() === "rtl";

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
        style={{
          backgroundImage: "url('/hero_background.png')",
          transform: isRtl ? "scaleX(-1)" : undefined,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: isRtl
            ? "linear-gradient(270deg, var(--color-primary) 0%, var(--color-primary) 40%, color-mix(in srgb, var(--color-primary) 72%, transparent) 52%, color-mix(in srgb, var(--color-primary) 18%, transparent) 60%, color-mix(in srgb, var(--color-primary) 8%, transparent) 72%, transparent 100%)"
            : "linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary) 40%, color-mix(in srgb, var(--color-primary) 72%, transparent) 52%, color-mix(in srgb, var(--color-primary) 18%, transparent) 60%, color-mix(in srgb, var(--color-primary) 8%, transparent) 72%, transparent 100%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            {content.title}
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <NavLink
              to="/companies"
              className="bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:opacity-80 active:opacity-60"
            >
              {content.primaryCta}
            </NavLink>
            <NavLink
              to="/aboutus"
              className="border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-80 active:opacity-60"
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
                <dt className="text-sm font-bold uppercase tracking-[0.2em] text-[#6b86a2]">
                  {stat.label}
                </dt>
                <dd className="mt-auto pt-6 text-3xl font-bold text-primary sm:text-4xl">
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
