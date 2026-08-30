import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { getCompanyById } from "@/data/companies";
import { ArrowLeft, MapPin, Briefcase } from "lucide-react";
import { PhotoCarousel } from "@/components/common/photoCarousel";

export function CompanyDetailPage() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const company = id ? getCompanyById(id) : undefined;
  const isRTL = i18n.language === "ar";

  const content = {
    backToCompanies: t("companyDetail.backToCompanies"),
    companyNotFound: t("companyDetail.companyNotFound"),
    notFoundMessage: t("companyDetail.notFoundMessage"),
    about: t("companyDetail.about"),
    gallery: t("companyDetail.gallery"),
    exploreOperations: t("companyDetail.exploreOperations"),
    keyHighlights: t("companyDetail.keyHighlights"),
    keyHighlightsDescription: t("companyDetail.keyHighlightsDescription"),
    partOfGroup: t("companyDetail.partOfGroup"),
    operatingStandards: t("companyDetail.operatingStandards"),
    specialized: t("companyDetail.specialized"),
    specializedDescription: t("companyDetail.specializedDescription"),
    local: t("companyDetail.local"),
    localDescription: t("companyDetail.localDescription"),
    quickFacts: t("companyDetail.quickFacts"),
    companyType: t("companyDetail.companyType"),
    specializedProvider: t("companyDetail.specializedProvider"),
    coverage: t("companyDetail.coverage"),
    nationwideOperations: t("companyDetail.nationwideOperations"),
    partOfGroupLabel: t("companyDetail.partOfGroupLabel"),
    alJarrahGroup: t("companyDetail.alJarrahGroup"),
  };

  if (!company) {
    return (
      <section className="min-h-screen bg-[linear-gradient(180deg,#f7fbff_0%,#edf4fb_55%,#e7eef7_100%)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-primary">{content.companyNotFound}</h1>
          <p className="mt-4 text-lg text-[#355779]">
            {content.notFoundMessage}
          </p>
          <a
            href="/companies"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-all duration-200 hover:shadow-lg"
          >
            <ArrowLeft className="h-5 w-5" />
            {content.backToCompanies}
          </a>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-white" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="bg-[linear-gradient(180deg,#f7fbff_0%,#edf4fb_55%,#e7eef7_100%)] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <a
            href="/companies"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-200 hover:gap-3"
          >
            <ArrowLeft className="h-4 w-4" />
            {content.backToCompanies}
          </a>

          <div className={`grid gap-8 md:items-center lg:gap-12 ${isRTL ? "md:grid-cols-[1fr_280px]" : "md:grid-cols-[280px_1fr]"}`}>
            {/* Logo */}
            <div className="flex items-center justify-center rounded-lg bg-white p-6 shadow-sm md:h-64">
              <img
                src={company.logo}
                alt={`${t(company.namePath)} logo`}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Company Info */}
            <div>
              <h1 className="text-4xl font-bold text-primary md:text-5xl">
                {t(company.namePath)}
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#355779]">
                {t(company.summaryPath)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="bg-linear-to-b from-[#f9fcff] to-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-primary md:text-5xl">
              {content.about} {t(company.namePath)}
            </h2>
            <div className="mt-2 h-1 w-20 bg-primary"></div>
          </div>

          <div className={`grid gap-8 ${isRTL ? "lg:grid-cols-[300px_1fr]" : "lg:grid-cols-[1fr_300px]"}`}>
            {/* Main Description Content */}
            <div className="space-y-6">
              <p className="text-base leading-8 text-[#33506d]">
                {t(company.descriptionPath)}
              </p>
            </div>

            {/* Sidebar Stats */}
            <div className="space-y-4 lg:sticky lg:top-8 lg:h-fit">
              <div className="rounded-lg border-2 border-primary bg-linear-to-br from-primary/5 to-primary/10 p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary">
                  {content.quickFacts}
                </h3>
                <div className="mt-6 space-y-4 border-t border-primary/20 pt-6">
                  <div>
                    <p className="text-xs font-semibold uppercase text-primary/70">
                      {content.companyType}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-primary">
                      {content.specializedProvider}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-primary/70">
                      {content.coverage}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-primary">
                      {content.nationwideOperations}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-primary/70">
                      {content.partOfGroupLabel}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-primary">
                      {content.alJarrahGroup}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-linear-to-b from-white to-[#f9fcff] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">
              {content.gallery}
            </h2>
            <p className="mt-3 text-lg text-[#355779]">
              {content.exploreOperations} {t(company.namePath)}
            </p>
          </div>
          <PhotoCarousel imageCount={20} autoPlayInterval={5000} showThumbnails={true} />
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">
              {content.keyHighlights}
            </h2>
            <p className="mt-4 text-lg text-[#355779]">
              {content.keyHighlightsDescription}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {company.pointsPaths.map((pointPath, idx) => (
              <div
                key={pointPath}
                className="rounded-lg border border-[#d6e3f2] bg-linear-to-br from-[#f9fcff] to-[#f0f7ff] p-6 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,71,136,0.1)]"
              >
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <p className="leading-7 text-[#33506d]">
                      {t(pointPath)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats Section */}
      <section className="bg-[linear-gradient(135deg,#0047881f_0%,#0047881a_100%)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-primary md:text-4xl">
            {content.partOfGroup}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[#355779]">
            {content.operatingStandards}
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg bg-white p-8 text-center shadow-sm">
              <Briefcase className="mx-auto h-10 w-10 text-primary" />
              <h3 className="mt-4 text-xl font-bold text-primary">{content.specialized}</h3>
              <p className="mt-2 text-sm text-[#355779]">
                {content.specializedDescription}
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 text-center shadow-sm">
              <MapPin className="mx-auto h-10 w-10 text-primary" />
              <h3 className="mt-4 text-xl font-bold text-primary">{content.local}</h3>
              <p className="mt-2 text-sm text-[#355779]">
                {content.localDescription}
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 text-center shadow-sm">
              <Briefcase className="mx-auto h-10 w-10 text-primary" />
              <h3 className="mt-4 text-xl font-bold text-primary">Integrated</h3>
              <p className="mt-2 text-sm text-[#355779]">
                Part of a diversified portfolio of complementary services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            Interested in Working With {t(company.namePath)}?
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#355779]">
            Connect with our team to explore partnership opportunities and learn more about our services.
          </p>
          <div className="mt-8 rounded-lg bg-linear-to-br from-[#f0f7ff] to-[#e8f2ff] p-8 border border-[#d6e3f2]">
            <p className="text-lg text-[#355779] font-semibold">
              Send us a message at:
            </p>
            <a
              href="mailto:info@aljarrahgroup.com"
              className="mt-3 inline-block text-2xl font-bold text-primary transition-all duration-200 hover:underline"
            >
              info@aljarrahgroup.com
            </a>
          </div>
          <div className="mt-8">
            <a
              href="/companies"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary px-8 py-3 font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-white"
            >
              View Other Companies
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
