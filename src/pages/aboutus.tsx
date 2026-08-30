import { useEffect } from "react";
import { AboutUs } from "@/components/aboutus";

export function AboutUsPage() {
  useEffect(() => {
    document.title = "Al-Jarrah Group | About Us";
  }, []);
  return <AboutUs />;
}
