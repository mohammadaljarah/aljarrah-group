import { useTranslation } from "react-i18next";

export function HeroSection() {
  const { t } = useTranslation();

  return (
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
  );
}
