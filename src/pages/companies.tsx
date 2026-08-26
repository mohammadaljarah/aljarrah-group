import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import { companies } from "@/data/companies";

export function CompaniesPage() {
  const { t } = useTranslation();

  return (
    <section className="bg-[linear-gradient(180deg,#f7fbff_0%,#edf4fb_55%,#e7eef7_100%)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 text-center sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            {t("nav.companies")}
          </p>
          <h1 className="mt-3 text-4xl font-bold text-primary sm:text-5xl">
            {t("companiesShowcase.title")}
          </h1>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => (
            <NavLink
              key={company.id}
              to={company.route}
              className="group border border-[#d6e3f2] bg-white p-5 shadow-[0_16px_36px_-26px_rgba(0,71,136,0.45)] transition hover:shadow-[0_20px_45px_-24px_rgba(0,71,136,0.5)]"
            >
              <div className="h-20 px-2 py-1">
                <img
                  src={company.logo}
                  alt={`${t(company.namePath)} logo`}
                  className="h-full w-full object-contain object-center"
                />
              </div>
              <h2 className="mt-4 text-xl font-bold text-primary">
                {t(company.namePath)}
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#355779]">
                {t(company.summaryPath)}
              </p>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}
