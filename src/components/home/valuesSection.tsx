import { useTranslation } from "react-i18next";

export function ValuesSection() {
  const { t } = useTranslation();

  const values = [
    {
      title: t("values.oneTitle"),
      description: t("values.oneDescription"),
    },
    {
      title: t("values.twoTitle"),
      description: t("values.twoDescription"),
    },
    {
      title: t("values.threeTitle"),
      description: t("values.threeDescription"),
    },
  ];

  return (
    <section className="bg-[linear-gradient(180deg,#f7fbff_0%,#edf4fb_55%,#e7eef7_100%)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            {t("values.eyebrow")}
          </p>
          <h2 className="mt-3 text-4xl font-bold text-primary sm:text-5xl">
            {t("values.title")}
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-[#33506d]">
            {t("values.subtitle")}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, idx) => (
            <div
              key={value.title}
              className="group relative overflow-hidden bg-white p-8 shadow-[0_10px_30px_-20px_rgba(0,71,136,0.2)] transition hover:shadow-[0_20px_50px_-25px_rgba(0,71,136,0.35)]"
            >
              <div className="absolute top-0 start-0 h-full w-1 bg-primary transition" />
              
              <div className="relative">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-secondary/15 text-2xl font-bold text-secondary">
                  {idx + 1}
                </div>
                
                <h3 className="mt-4 text-xl font-bold text-primary">
                  {value.title}
                </h3>
                
                <p className="mt-3 text-base leading-7 text-[#355779]">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
