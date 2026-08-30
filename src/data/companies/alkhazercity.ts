import type { CompanyData } from "@/types";
import idkImage from "@/assets/idk.png";

const alKhazerCity: CompanyData = {
  id: "al-khazer-city",
  route: "/companies/al-khazer-city",
  logo: idkImage,
  namePath: "companiesShowcase.alkhazercity.name",
  summaryPath: "companiesShowcase.alkhazercity.summary",
  descriptionPath: "companiesShowcase.alkhazercity.description",
  pointsPaths: [
    "companiesShowcase.alkhazercity.pointOne",
    "companiesShowcase.alkhazercity.pointTwo",
    "companiesShowcase.alkhazercity.pointThree",
    "companiesShowcase.alkhazercity.pointFour",
  ],
};

export default alKhazerCity;
