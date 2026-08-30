import { useEffect } from "react";
import { Hero } from "@/components/home/hero";
import { SectorsSection } from "@/components/aboutus/sectorsSection";
import { ValuesSection } from "@/components/home/valuesSection";
import { WhyChooseSection } from "@/components/home/whyChooseSection";
import { CompaniesShowcaseSection } from "@/components/home/companiesShowcaseSection";

export function HomePage() {
  useEffect(() => {
    document.title = "Al-Jarrah Group | Home";
  }, []);
  return (
    <>
      <Hero />
      <ValuesSection />
      <SectorsSection />
      <CompaniesShowcaseSection />
      <WhyChooseSection />
    </>
  );
}
