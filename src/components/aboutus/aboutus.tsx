import { HeroSection } from "@/components/aboutus/heroSection";
import { CompanyProfile } from "@/components/aboutus/companyProfile";
import { StorySection } from "@/components/aboutus/storySection";
import { ValuesPillars } from "@/components/aboutus/valuesPillars";
import { PartnershipApproach } from "@/components/aboutus/partnershipApproach";
import { ClosingStatement } from "@/components/aboutus/closingStatement";

export function AboutUs() {
  return (
    <section className="relative overflow-hidden">
      <HeroSection />

      <div className="bg-[linear-gradient(180deg,#f7fbff_0%,#edf4fb_55%,#e7eef7_100%)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <CompanyProfile />
          <StorySection />
          <ValuesPillars />
          <PartnershipApproach />
          <ClosingStatement />
        </div>
      </div>
    </section>
  );
}
