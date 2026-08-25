import { useTranslation } from "react-i18next";
import { Card } from "@/components/common/card";

export function ValuesPillars() {
  const { t } = useTranslation();

  const pillars = [
    {
      title: t("about.pillarOneTitle"),
      description: t("about.pillarOneDescription"),
    },
    {
      title: t("about.pillarTwoTitle"),
      description: t("about.pillarTwoDescription"),
    },
    {
      title: t("about.pillarThreeTitle"),
      description: t("about.pillarThreeDescription"),
    },
  ];

  return (
    <div className="mb-16">
      <h2 className="mb-8 text-2xl font-bold text-primary sm:text-3xl">
        {t("about.valuesTitle")}
      </h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {pillars.map((pillar, idx) => (
          <Card key={pillar.title} withHover borderPosition="left">
            <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
              {idx + 1}
            </div>
            <h3 className="mt-4 text-lg font-bold text-primary">{pillar.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#355779]">{pillar.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
