import { NavLink, useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { getCompanyById } from "@/data/companies";

export function CompanyDetailPage() {
  const { id } = useParams();
  const { t } = useTranslation();
  const company = id ? getCompanyById(id) : undefined;

  if (!company) {
    return (
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl border border-[#d6e3f2] bg-white p-8 text-center">
          <h1 className="text-3xl font-bold text-primary">Company not found</h1>
          <NavLink to="/companies" className="mt-6 inline-block text-primary underline">
            Back to companies
          </NavLink>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[linear-gradient(180deg,#f7fbff_0%,#edf4fb_55%,#e7eef7_100%)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl border border-[#d6e3f2] bg-white p-6 sm:p-8">
        <div className="grid gap-6 sm:grid-cols-[180px_1fr] sm:items-start">
          <div className="h-24 sm:h-28">
            <img
              src={company.logo}
              alt={`${t(company.namePath)} logo`}
              className="h-full w-full object-contain object-center"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-primary sm:text-4xl">
              {t(company.namePath)}
            </h1>
            <p className="mt-4 text-base leading-7 text-[#355779]">
              {t(company.summaryPath)}
            </p>
          </div>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-primary">Highlights</h2>
        <ul className="mt-4 space-y-3">
          {company.pointsPaths.map((pointPath) => (
            <li key={pointPath} className="border border-[#dbe7f5] bg-[#f8fbff] px-4 py-3 text-sm leading-6 text-[#33506d]">
              {t(pointPath)}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <NavLink
            to="/companies"
            className="inline-flex items-center gap-2 border border-primary bg-white px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
          >
            {t("nav.companies")}
          </NavLink>
        </div>
      </div>
    </section>
  );
}
