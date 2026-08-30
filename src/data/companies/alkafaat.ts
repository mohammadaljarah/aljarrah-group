import type { CompanyData } from "@/types";
import alkafaatLogo from "@/assets/alkafaat_logo_dark.png";

const alkafaat: CompanyData = {
  id: "alkafaat",
  route: "/companies/alkafaat",
  logo: alkafaatLogo,
  namePath: "companiesShowcase.alkafaat.name",
  summaryPath: "companiesShowcase.alkafaat.summary",
  descriptionPath: "companiesShowcase.alkafaat.description",
  pointsPaths: [
    "companiesShowcase.alkafaat.pointOne",
    "companiesShowcase.alkafaat.pointTwo",
    "companiesShowcase.alkafaat.pointThree",
    "companiesShowcase.alkafaat.pointFour",
  ],
};

export default alkafaat;
