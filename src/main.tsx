import { StrictMode, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { BrowserRouter, NavLink, Outlet, Route, Routes } from "react-router";
import { useTranslation } from "react-i18next";
import "@/i18n.ts";

function App() {
  const { t, i18n } = useTranslation();
  const languageMenuRef = useRef<HTMLDetailsElement>(null);

  const handleLanguageChange = (language: "en" | "ar") => {
    void i18n.changeLanguage(language);
    languageMenuRef.current?.removeAttribute("open");
  };

  useEffect(() => {
    const isArabic = i18n.language === "ar";

    document.documentElement.lang = i18n.language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [i18n.language]);

  const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-sm transition hover:text-[#0c4178] ${
      isActive
        ? "font-semibold text-[#0f4f92]"
        : "font-medium text-[#124d86]"
    }`;

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#f7fbff_0%,_#edf4fb_55%,_#e7eef7_100%)] text-slate-900">
      <header className="w-full border-y border-white/75 bg-white/88 shadow-[0_24px_80px_-48px_rgba(3,57,116,0.55)] backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <nav className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="order-2 flex flex-wrap items-center gap-3 md:order-2 md:gap-4">
              <NavLink to="/" end className={navLinkClassName}>
                {t("nav.home")}
              </NavLink>
              <NavLink to="/aboutus" className={navLinkClassName}>
                {t("nav.about")}
              </NavLink>
              <NavLink to="/companies" className={navLinkClassName}>
                {t("nav.companies")}
              </NavLink>
              <details ref={languageMenuRef} className="group relative">
                <summary className="flex list-none cursor-pointer items-center justify-center p-2 text-[#124d86] transition hover:text-[#0d3e70] focus-visible:outline-none">
                  <span className="sr-only">{t("nav.language")}</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
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
                <div className="absolute left-0 top-full z-10 mt-3 min-w-36 border border-[#0f4f92]/12 bg-white py-2 shadow-[0_18px_50px_-30px_rgba(3,57,116,0.45)]">
                  <button
                    type="button"
                    onClick={() => {
                      handleLanguageChange("en");
                    }}
                    className={`block w-full px-4 py-2 text-left text-sm transition hover:bg-[#0f4f92]/6 ${
                      i18n.language === "en"
                        ? "font-semibold text-[#0f4f92]"
                        : "font-medium text-[#124d86]"
                    }`}
                  >
                    {t("nav.english")}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      handleLanguageChange("ar");
                    }}
                    className={`block w-full px-4 py-2 text-left text-sm transition hover:bg-[#0f4f92]/6 ${
                      i18n.language === "ar"
                        ? "font-semibold text-[#0f4f92]"
                        : "font-medium text-[#124d86]"
                    }`}
                  >
                    {t("nav.arabic")}
                  </button>
                </div>
              </details>
            </div>

            <NavLink to="/" className="order-1 shrink-0 md:order-1 md:mr-6">
              <img
                src="/logo_wide.png"
                alt="Al Jarrah Group"
                className="h-14 w-auto sm:h-16"
              />
            </NavLink>
          </nav>
        </div>
      </header>
      <Outlet />
    </main>
  );
}

function EmptyPage() {
  return null;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<EmptyPage />} />
          <Route path="aboutus" element={<EmptyPage />} />
          <Route path="companies" element={<EmptyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
