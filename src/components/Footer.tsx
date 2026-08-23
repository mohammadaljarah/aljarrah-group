import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-sm transition hover:text-[#0c4178] ${
      isActive ? "font-semibold text-[#0f4f92]" : "font-medium text-[#124d86]"
    }`;

  return (
    <footer className="mt-auto border-t border-[#0f4f92]/10 bg-[#f5f8fc]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr] lg:px-8">
        <div className="space-y-4">
          <img
            src="/logo_emblem.png"
            alt="Al Jarrah Group emblem"
            className="h-20 w-auto"
          />
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0f4f92]">
            {t("footer.companies")}
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-[#33506d]">
            <li>{t("footer.companyOne")}</li>
            <li>{t("footer.companyTwo")}</li>
            <li>{t("footer.companyThree")}</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0f4f92]">
            {t("footer.links")}
          </h2>
          <div className="mt-4 flex flex-col items-start gap-1 text-sm">
            <NavLink to="/" end className={navLinkClassName}>
              {t("nav.home")}
            </NavLink>
            <NavLink to="/aboutus" className={navLinkClassName}>
              {t("nav.about")}
            </NavLink>
            <NavLink to="/companies" className={navLinkClassName}>
              {t("nav.companies")}
            </NavLink>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0f4f92]">
            {t("footer.contact")}
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-[#33506d]">
            <li>{t("footer.email")}</li>
            <li>
              <span dir="ltr" className="inline-block">
                {t("footer.phone")}
              </span>
            </li>
            <li>{t("footer.address")}</li>
          </ul>
        </div>
      </div>
      <div className="bg-[#0f4f92] px-4 py-4 text-center text-sm text-white sm:px-6 lg:px-8">
        © {currentYear} Al-Jarrah Group, All Rights Reserved
      </div>
    </footer>
  );
}