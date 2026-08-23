import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const content = {
    companiesTitle: t("footer.companies"),
    companies: [
      t("footer.companyOne"),
      t("footer.companyTwo"),
      t("footer.companyThree"),
    ],
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
    `px-3 py-2 text-sm transition hover:text-primary-dark ${
      isActive ? "font-semibold text-primary" : "font-medium text-[#124d86]"
    }`;

  return (
    <footer className="mt-auto border-t border-primary/10 bg-[#f5f8fc]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr] lg:px-8">
        <div className="space-y-4">
          <img
            src="/logo_emblem.png"
            alt="Al Jarrah Group emblem"
            className="h-20 w-auto"
          />
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {content.companiesTitle}
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-[#33506d]">
            {content.companies.map((company) => (
              <li key={company}>{company}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {content.linksTitle}
          </h2>
          <div className="mt-4 flex flex-col items-start gap-1 text-sm">
            {content.links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={navLinkClassName}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
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