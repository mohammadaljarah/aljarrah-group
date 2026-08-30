import { useTranslation } from "react-i18next";
import { Card } from "@/components/common/card";

export function WhyChooseSection() {
  const { t } = useTranslation();

  const content = {
    eyebrow: t("whyChoose.eyebrow"),
    title: t("whyChoose.title"),
    subtitle: t("whyChoose.subtitle"),
  };

  const reasons = [
    {
      title: t("whyChoose.reasonOneTitle"),
      description: t("whyChoose.reasonOneDescription"),
    },
    {
      title: t("whyChoose.reasonTwoTitle"),
      description: t("whyChoose.reasonTwoDescription"),
    },
    {
      title: t("whyChoose.reasonThreeTitle"),
      description: t("whyChoose.reasonThreeDescription"),
    },
  ];

  return (
    <section className="bg-[linear-gradient(180deg,#f7fbff_0%,#edf4fb_55%,#e7eef7_100%)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            {content.eyebrow}
          </p>
          <h2 className="mt-3 text-4xl font-bold text-primary sm:text-5xl">
            {content.title}
          </h2>
          <p className="mt-4 mx-auto max-w-3xl text-lg text-[#33506d]">
            {content.subtitle}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, idx) => (
            <Card key={reason.title} withHover>
              <div className="inline-flex h-11 min-w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                0{idx + 1}
              </div>

              <h3 className="mt-5 text-xl font-bold text-primary">{reason.title}</h3>

              <p className="mt-3 text-base leading-7 text-[#355779]">
                {reason.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}