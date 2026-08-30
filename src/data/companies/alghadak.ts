import type { CompanyData } from "@/types";
import alghadakLogo from "@/assets/alghadak_logo.png";

const alghadak: CompanyData = {
  id: "alghadak",
  route: "/companies/alghadak",
  logo: alghadakLogo,
  namePath: "companiesShowcase.alghadak.name",
  summaryPath: "companiesShowcase.alghadak.summary",
  descriptionPath: "companiesShowcase.alghadak.description",
  pointsPaths: [
    "companiesShowcase.alghadak.pointOne",
    "companiesShowcase.alghadak.pointTwo",
    "companiesShowcase.alghadak.pointThree",
    "companiesShowcase.alghadak.pointFour",
  ],
};

export default alghadak;
