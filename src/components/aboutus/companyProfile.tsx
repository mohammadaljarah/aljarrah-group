import { useTranslation } from "react-i18next";

export function CompanyProfile() {
  const { t } = useTranslation();

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
        {t("about.companyProfileTitle")}
      </h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {profile.map((item) => (
          <div
            key={item.label}
            className="relative overflow-hidden bg-white p-6 shadow-[0_10px_30px_-20px_rgba(0,71,136,0.2)]"
          >
            <div className="absolute top-0 start-0 h-1 w-full bg-gradient-to-r from-primary to-secondary" />
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6b8aa4]">
              {item.label}
            </h3>
            <p className="mt-4 text-2xl font-bold text-primary">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
