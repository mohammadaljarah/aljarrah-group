import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import { Diamond } from "lucide-react";
import { companies as companyData } from "@/data/companies";

export function CompaniesShowcaseSection() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-[#eef4fb] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(131,150,193,0.24),transparent_42%),radial-gradient(circle_at_88%_78%,rgba(0,71,136,0.17),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl">
        <header className="mx-auto mb-10 max-w-4xl text-center sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-secondary">
            {t("companiesShowcase.eyebrow")}
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-primary sm:text-5xl">
            {t("companiesShowcase.title")}
          </h2>
          <p className="mt-5 text-base leading-7 text-[#355779] sm:text-lg">
            {t("companiesShowcase.subtitle")}
          </p>
        </header>

        <div className="space-y-6 sm:space-y-7">
          {companyData.map((company, idx) => (
            <article
              key={company.id}
              className="group relative overflow-hidden border border-[#d4e2f2] bg-white transition duration-300 hover:shadow-[0_30px_60px_-30px_rgba(0,71,136,0.4)]"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-primary via-[#2f6ba3] to-secondary" />
              <span className="pointer-events-none absolute top-4 right-4 z-10 text-5xl leading-none font-bold text-[#e4eef9] transition duration-300 group-hover:text-[#d8e7f7] sm:right-6 sm:text-6xl">
                0{idx + 1}
              </span>

              <div className="relative z-20 grid gap-6 p-6 sm:grid-cols-[210px_1fr] sm:items-start sm:p-7">
                <div className="h-24 px-2 py-1 sm:h-28 sm:px-3">
                  <img
                    src={company.logo}
                    alt={`${t(company.namePath)} logo`}
                    className="h-full w-full object-contain object-center"
                    loading="lazy"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold leading-snug text-primary sm:text-[1.72rem]">
                    {t(company.namePath)}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#355779]">
                    {t(company.summaryPath)}
                  </p>
                </div>
              </div>

              <div className="relative z-20 border-t border-[#dbe7f5] bg-[linear-gradient(180deg,#f8fbff_0%,#f2f7fd_100%)] px-6 py-5 sm:px-7 sm:py-6">
                <ul className="relative z-10 mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
                  {company.pointsPaths.map((pointPath) => (
                    <li
                      key={pointPath}
                      className="group/point relative flex overflow-hidden border border-[#e2ecf7] bg-white transition-all duration-300 hover:border-primary/30 hover:shadow-[0_14px_30px_-18px_rgba(0,71,136,0.4)]"
                    >
                      <div
                        aria-hidden="true"
                        className="flex w-14 shrink-0 items-center justify-center border-e border-[#e2ecf7] bg-[#f5f9fd] transition-colors duration-300 group-hover/point:border-primary group-hover/point:bg-primary sm:w-16"
                      >
                        <Diamond
                          className="h-5 w-5 text-primary transition-colors duration-300 group-hover/point:text-white"
                          strokeWidth={2.2}
                        />
                      </div>
                      <p className="flex-1 self-center px-4 py-4 text-sm leading-6 text-[#33506d] sm:px-5 sm:py-5">
                        {t(pointPath)}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="mt-5">
                  <NavLink
                    to={company.route}
                    className="inline-flex items-center gap-2 border border-primary bg-white px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
                  >
                    {t("companiesShowcase.learnMore")}
                    <span aria-hidden="true">→</span>
                  </NavLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}