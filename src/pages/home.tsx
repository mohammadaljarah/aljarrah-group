import { Hero } from "@/components/home/hero";
import { SectorsSection } from "@/components/aboutus/sectorsSection";
import { ValuesSection } from "@/components/home/valuesSection";

export function HomePage() {
  return (
    <>
      <Hero />
      <ValuesSection />
      <SectorsSection />
    </>
  );
}
