import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { sectoredCompanies } from "@/data/companies";
import { ChevronRight } from "lucide-react";

export function CompaniesPage() {
  useEffect(() => {
    document.title = "Al-Jarrah Group | Companies";
  }, []);
  const { t } = useTranslation();

  const content = {
    eyebrow: t("companies.eyebrow"),
    title: t("companies.title"),
    description: t("companies.description"),
    viewDetails: t("companies.viewDetails"),
    ctaTitle: t("companies.ctaTitle"),
    ctaDescription: t("companies.ctaDescription"),
    getInTouch: t("companies.getInTouch"),
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[linear-gradient(180deg,#f7fbff_0%,#edf4fb_55%,#e7eef7_100%)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            {content.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-bold text-primary sm:text-5xl lg:text-6xl">
            {content.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#355779]">
            {content.description}
          </p>
        </div>
      </section>

      {/* Companies by Sector */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {sectoredCompanies.map((sectorGroup, idx) => (
            <div key={sectorGroup.sector} className={idx > 0 ? "mt-16 pt-16 border-t border-[#d6e3f2]" : ""}>
              {/* Sector Title */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary md:text-4xl">
                  {t(sectorGroup.sector)}
                </h2>
                <div className="mt-2 h-1 w-16 bg-secondary rounded"></div>
              </div>

              {/* Companies Grid for this Sector */}
              <div className="grid gap-8 md:gap-10 lg:grid-cols-1 xl:grid-cols-1">
                {sectorGroup.companies.map((company) => (
                  <div
                    key={company.id}
                    className="group overflow-hidden rounded-lg border border-[#d6e3f2] bg-white shadow-[0_4px_20px_rgba(0,71,136,0.08)] transition-all duration-300 hover:shadow-[0_20px_45px_-24px_rgba(0,71,136,0.5)]"
                  >
                    <div className="grid gap-8 md:grid-cols-[1fr_1fr] lg:grid-cols-[300px_1fr]">
                      {/* Left: Logo Section */}
                      <div className="flex items-center justify-center bg-linear-to-br from-[#f0f7ff] to-[#e8f2ff] p-8 md:p-10">
                        <div className="h-32 w-full md:h-40">
                          <img
                            src={company.logo}
                            onError={(e) => {
                              const img = e.target as HTMLImageElement;
                              img.src = "/idk.png";
                            }}
                            alt={`${t(company.namePath)} logo`}
                            className="h-full w-full object-contain object-center"
                          />
                        </div>
                      </div>

                      {/* Right: Content Section */}
                      <div className="flex flex-col justify-between p-6 md:p-8 lg:p-10">
                        <div>
                          <h3 className="text-2xl font-bold text-primary md:text-3xl">
                            {t(company.namePath)}
                          </h3>
                          <p className="mt-4 text-base leading-7 text-[#355779]">
                            {t(company.summaryPath)}
                          </p>

                          {/* Full Description */}
                          <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#33506d]">
                            {t(company.descriptionPath)}
                          </p>

                          {/* Key Points */}
                          <div className="mt-8 space-y-3">
                            {company.pointsPaths.map((pointPath, pointIdx) => (
                              <div key={pointPath} className="flex gap-3">
                                <div className="mt-1 shrink-0">
                                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0047882f]">
                                    <span className="text-sm font-semibold text-primary">
                                      {pointIdx + 1}
                                    </span>
                                  </div>
                                </div>
                                <p className="text-sm leading-6 text-[#33506d]">
                                  {t(pointPath)}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* View Details Button */}
                        <div className="mt-8">
                          <a
                            href={company.route}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-200 hover:gap-3"
                          >
                            {content.viewDetails}
                            <ChevronRight className="h-4 w-4" data-flip-rtl />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-[#0047881f] via-[#0047881a] to-[#0047881a] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            {content.ctaTitle}
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#355779]">
            {content.ctaDescription}
          </p>
          <a
            href="mailto:info@aljarrahgroup.com"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-all duration-200 hover:shadow-lg"
          >
            {content.getInTouch}
          </a>
        </div>
      </section>
    </div>
  );
}
