import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const languageMenuRef = useRef<HTMLDetailsElement>(null);
  const isRtl = i18n.dir() === "rtl";

  const content = {
    links: [
      { to: "/", label: t("nav.home"), end: true },
      { to: "/aboutus", label: t("nav.about") },
      { to: "/companies", label: t("nav.companies") },
    ],
    language: t("nav.language"),
    english: t("nav.english"),
    arabic: t("nav.arabic"),
  };

  const handleLanguageChange = (language: "en" | "ar") => {
    void i18n.changeLanguage(language);
    languageMenuRef.current?.removeAttribute("open");
  };

  const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
    `px-2 py-1 text-xs whitespace-nowrap transition hover:text-primary-dark sm:px-3 sm:py-2 sm:text-sm ${
      isActive ? "font-semibold text-primary" : "font-medium text-[#124d86]"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-y border-[#e0e9f5] bg-white shadow-[0_24px_80px_-48px_rgba(3,57,116,0.55)]">
      <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 sm:py-3 lg:px-8">
        <nav className="flex items-center gap-2 md:gap-4">
          <NavLink to="/" className="order-1 shrink-0 md:mr-6">
            <img
              src="/logo_emblem.png"
              alt="Al Jarrah Group"
              className="h-9 w-9 sm:hidden"
            />
            <img
              src="/logo_wide.png"
              alt="Al Jarrah Group"
              className="hidden h-12 w-auto sm:block sm:h-14"
            />
          </NavLink>

          <div className="order-2 ms-auto flex min-w-0 items-center gap-1 md:gap-4">
            <div className="flex max-w-[calc(100vw-7.5rem)] min-w-0 items-center gap-1 overflow-x-auto whitespace-nowrap md:max-w-none md:gap-4">
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

            <details ref={languageMenuRef} className="group relative z-30 shrink-0">
              <summary className="flex list-none cursor-pointer items-center justify-center p-1.5 text-[#124d86] transition hover:opacity-80 active:opacity-60 focus-visible:outline-none sm:p-2">
                <span className="sr-only">{content.language}</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18" />
                  <path d="M12 3a14.5 14.5 0 0 1 0 18" />
                  <path d="M12 3a14.5 14.5 0 0 0 0 18" />
                </svg>
              </summary>
              <div
                className={`absolute top-full z-10 mt-3 min-w-36 border border-primary/12 bg-white py-2 shadow-[0_18px_50px_-30px_rgba(3,57,116,0.45)] ${
                  isRtl ? "left-0" : "right-0"
                }`}
              >
                <button
                  type="button"
                  onClick={() => {
                    handleLanguageChange("en");
                  }}
                  className={`block w-full px-4 py-2 text-left text-sm transition hover:opacity-80 active:opacity-60 ${
                    i18n.language === "en"
                      ? "font-semibold text-primary"
                      : "font-medium text-[#124d86]"
                  }`}
                >
                  {content.english}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleLanguageChange("ar");
                  }}
                  className={`block w-full px-4 py-2 text-left text-sm transition hover:opacity-80 active:opacity-60 ${
                    i18n.language === "ar"
                      ? "font-semibold text-primary"
                      : "font-medium text-[#124d86]"
                  }`}
                >
                  {content.arabic}
                </button>
              </div>
            </details>
          </div>
        </nav>
      </div>
    </header>
  );
}
