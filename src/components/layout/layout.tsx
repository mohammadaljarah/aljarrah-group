import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const Layout = () => {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const isArabic = i18n.language === "ar";

    document.documentElement.lang = i18n.language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [i18n.language]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen flex-col bg-[linear-gradient(180deg,#f7fbff_0%,#edf4fb_55%,#e7eef7_100%)] text-slate-900">
      <Navbar />
      <section className="min-h-screen flex-1">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};
