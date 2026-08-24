import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const Layout = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const isArabic = i18n.language === "ar";

    document.documentElement.lang = i18n.language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [i18n.language]);

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
