import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import logoEmblem from "@/assets/logo_emblem.png";
import rdc from "@/data/companies/rdc";
import alghadak from "@/data/companies/alghadak";
import alkafaat from "@/data/companies/alkafaat";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const showcaseCompanies = [rdc, alghadak, alkafaat];

  const content = {
    companiesTitle: t("footer.companies"),
    showcaseCompanies,
    viewAllCompanies: t("footer.viewAllCompanies"),
    linksTitle: t("footer.links"),
    links: [
      { to: "/", label: t("nav.home"), end: true },
      { to: "/aboutus", label: t("nav.about") },
      { to: "/companies", label: t("nav.companies") },
    ],
    contactTitle: t("footer.contact"),
    email: t("footer.email"),
    phone: t("footer.phone"),
    address: t("footer.address"),
  };

  const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
    `text-sm transition ${
      isActive ? "font-semibold text-primary opacity-60" : "font-medium text-[#124d86] opacity-100 hover:opacity-80"
    }`;

  return (
    <footer className="mt-auto border-t border-primary/10 bg-[#f5f8fc]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr] lg:px-8">
        <div className="space-y-4">
          <img
            src={logoEmblem}
            alt="Al Jarrah Group emblem"
            className="h-20 w-auto"
          />
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {content.companiesTitle}
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-[#33506d]">
            {content.showcaseCompanies.map((company) => (
              <li key={company.id}>
                <NavLink
                  to={company.route}
                  className="font-medium text-[#124d86] opacity-100 transition hover:opacity-80"
                >
                  {t(company.namePath)}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/companies"
                className="font-medium text-[#124d86] opacity-100 transition hover:opacity-80"
              >
                {content.viewAllCompanies}
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {content.linksTitle}
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-[#33506d]">
            {content.links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={navLinkClassName}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {content.contactTitle}
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-[#33506d]">
            <li>{content.email}</li>
            <li>
              <span dir="ltr" className="inline-block">
                {content.phone}
              </span>
            </li>
            <li>{content.address}</li>
          </ul>
        </div>
      </div>
      <div className="bg-primary px-4 py-4 text-center text-sm text-white sm:px-6 lg:px-8">
        © {currentYear} Al-Jarrah Group, All Rights Reserved
      </div>
    </footer>
  );
}
