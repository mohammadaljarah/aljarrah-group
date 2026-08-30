import { useTranslation } from "react-i18next";
import {
  Wheat,
  Apple,
  Factory,
  Heart,
  Building,
} from "lucide-react";

export function SectorsSection() {
  const { t } = useTranslation();

  const content = {
    title: t("about.sectorsTitle"),
    subtitle: t("about.sectorsSubtitle"),
  };

  const sectors = [
    {
      title: t("about.sectorOneTitle"),
      description: t("about.sectorOneDescription"),
      Icon: Wheat,
    },
    {
      title: t("about.sectorTwoTitle"),
      description: t("about.sectorTwoDescription"),
      Icon: Apple,
    },
    {
      title: t("about.sectorThreeTitle"),
      description: t("about.sectorThreeDescription"),
      Icon: Factory,
    },
    {
      title: t("about.sectorFourTitle"),
      description: t("about.sectorFourDescription"),
      Icon: Heart,
    },
    {
      title: t("about.sectorFiveTitle"),
      description: t("about.sectorFiveDescription"),
      Icon: Building,
    },
  ];

  return (
    <div className="bg-[linear-gradient(180deg,#f7fbff_0%,#edf4fb_55%,#e7eef7_100%)] px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            {content.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#33506d]">
            {content.subtitle}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {sectors.map((sector) => (
            <div
              key={sector.title}
              className="flex flex-col items-center text-center"
            >
              {/* Icon Container */}
              <div className="mb-6 flex h-20 w-20 items-center justify-center bg-gradient-to-br from-secondary/20 to-secondary/5">
                <sector.Icon
                  size={40}
                  strokeWidth={1.5}
                  className="text-primary"
                />
              </div>

              {/* Content */}
              <div className="space-y-4 flex-1">
                <div className="flex items-center justify-center gap-2">
                  <div className="h-1 w-1 bg-secondary" />
                  <h3 className="text-lg font-bold text-primary">
                    {sector.title}
                  </h3>
                  <div className="h-1 w-1 bg-secondary" />
                </div>
                <p className="text-sm leading-6 text-[#355779]">
                  {sector.description}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="mt-6 h-1 w-16 bg-gradient-to-r from-primary to-secondary" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
