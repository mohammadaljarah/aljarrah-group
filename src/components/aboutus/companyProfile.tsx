import { useTranslation } from "react-i18next";
import { Card } from "@/components/common/card";

export function CompanyProfile() {
  const { t } = useTranslation();

  const content = {
    title: t("about.companyProfileTitle"),
  };

  const profile = [
    {
      label: t("about.profileFoundedLabel"),
      value: t("about.profileFoundedValue"),
    },
    {
      label: t("about.profileSectorsLabel"),
      value: t("about.profileSectorsValue"),
    },
    {
      label: t("about.profileFounderLabel"),
      value: t("about.profileFounderValue"),
    },
    {
      label: t("about.profileBoardLabel"),
      value: t("about.profileBoardValue"),
    },
  ];

  return (
    <div className="mb-16">
      <h2 className="mb-8 text-2xl font-bold text-primary sm:text-3xl">
        {content.title}
      </h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {profile.map((item) => (
          <Card key={item.label}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6b8aa4]">
              {item.label}
            </h3>
            <p className="mt-4 text-2xl font-bold text-primary">{item.value}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
