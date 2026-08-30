import { useTranslation } from "react-i18next";
import idkImage from "@/assets/idk.png";

interface CompanyItem {
  name: string;
  logo: string;
  summary: string;
  points: string[];
}

export function CompaniesShowcaseSection() {
  const { t } = useTranslation();

  const content = {
    eyebrow: t("companiesShowcase.eyebrow"),
    title: t("companiesShowcase.title"),
    subtitle: t("companiesShowcase.subtitle"),
  };

  const companies: CompanyItem[] = [
    {
      name: t("companiesShowcase.rdc.name"),
      logo: "/rdc_logo.png",
      summary: t("companiesShowcase.rdc.summary"),
      points: [
        t("companiesShowcase.rdc.pointOne"),
        t("companiesShowcase.rdc.pointTwo"),
        t("companiesShowcase.rdc.pointThree"),
        t("companiesShowcase.rdc.pointFour"),
      ],
    },
    {
      name: t("companiesShowcase.alghadak.name"),
      logo: "/alghadak_logo.png",
      summary: t("companiesShowcase.alghadak.summary"),
      points: [
        t("companiesShowcase.alghadak.pointOne"),
        t("companiesShowcase.alghadak.pointTwo"),
        t("companiesShowcase.alghadak.pointThree"),
        t("companiesShowcase.alghadak.pointFour"),
      ],
    },
    {
      name: t("companiesShowcase.alkafaat.name"),
      logo: "/alkafaat_logo_dark.png",
      summary: t("companiesShowcase.alkafaat.summary"),
      points: [
        t("companiesShowcase.alkafaat.pointOne"),
        t("companiesShowcase.alkafaat.pointTwo"),
        t("companiesShowcase.alkafaat.pointThree"),
        t("companiesShowcase.alkafaat.pointFour"),
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#eef4fb] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(131,150,193,0.24),transparent_42%),radial-gradient(circle_at_88%_78%,rgba(0,71,136,0.17),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl">
        <header className="mx-auto mb-10 max-w-4xl text-center sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-secondary">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-primary sm:text-5xl">
            {content.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-[#355779] sm:text-lg">
            {content.subtitle}
          </p>
        </header>

        <div className="space-y-6 sm:space-y-7">
            {companies.map((company, idx) => (
              <article
                key={company.name}
                className="group relative overflow-hidden border border-[#d7e5f4] bg-white p-6 shadow-[0_22px_54px_-34px_rgba(0,71,136,0.5)] transition duration-300 hover:shadow-[0_30px_60px_-30px_rgba(0,71,136,0.45)] sm:p-7"
              >
                <div className="absolute top-0 left-0 h-full w-1.5 bg-gradient-to-b from-primary via-[#2f6ba3] to-secondary" />
                <span className="pointer-events-none absolute top-3 right-3 z-20 text-6xl leading-none font-bold text-[#dfeaf8] transition duration-300 group-hover:text-[#d3e3f6] sm:right-7 sm:top-3 sm:z-0 sm:text-8xl">
                  0{idx + 1}
                </span>

                <div className="relative z-10 grid gap-5 sm:grid-cols-[190px_1fr] sm:items-start">
                  <div className="h-24 px-2 py-1 sm:h-28 sm:px-3">
                    <img
                      src={company.logo}
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.src = idkImage;
                      }}
                      alt={`${company.name} logo`}
                      className="h-full w-full object-contain object-center"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold leading-snug text-primary sm:text-[1.7rem]">
                      {company.name}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[#355779]">{company.summary}</p>
                  </div>
                </div>

                <ul className="relative z-10 mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4">
                  {company.points.map((point) => (
                    <li
                      key={point}
                      className="relative border-s-2 border-[#cfe0f4] bg-white/60 ps-4 pe-1 py-2 text-sm leading-6 text-[#33506d]"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute start-[-6px] top-3 h-2.5 w-2.5 rounded-full bg-primary/75"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}