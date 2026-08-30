import type { CompanyData } from "@/types";
import idkImage from "@/assets/idk.png";

const Bisculata: CompanyData = {
  id: "bisculata",
  route: "/companies/bisculata",
  logo: idkImage,
  namePath: "companiesShowcase.bisculata.name",
  summaryPath: "companiesShowcase.bisculata.summary",
  descriptionPath: "companiesShowcase.bisculata.description",
  pointsPaths: [
    "companiesShowcase.bisculata.pointOne",
    "companiesShowcase.bisculata.pointTwo",
    "companiesShowcase.bisculata.pointThree",
    "companiesShowcase.bisculata.pointFour",
  ],
};

export default Bisculata;
