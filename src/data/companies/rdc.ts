import type { CompanyData } from "@/types";
import rdcLogo from "@/assets/rdc_logo.png";

const rdc: CompanyData = {
  id: "rdc",
  route: "/companies/rdc",
  logo: rdcLogo,
  namePath: "companiesShowcase.rdc.name",
  summaryPath: "companiesShowcase.rdc.summary",
  descriptionPath: "companiesShowcase.rdc.description",
  pointsPaths: [
    "companiesShowcase.rdc.pointOne",
    "companiesShowcase.rdc.pointTwo",
    "companiesShowcase.rdc.pointThree",
    "companiesShowcase.rdc.pointFour",
  ],
};

export default rdc;
