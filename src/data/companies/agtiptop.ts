import type { CompanyData } from "@/types";
import idkImage from "@/assets/idk.png";

const agTiptop: CompanyData = {
  id: "ag-tiptop",
  route: "/companies/ag-tiptop",
  logo: idkImage,
  namePath: "companiesShowcase.agtiptop.name",
  summaryPath: "companiesShowcase.agtiptop.summary",
  descriptionPath: "companiesShowcase.agtiptop.description",
  pointsPaths: [
    "companiesShowcase.agtiptop.pointOne",
    "companiesShowcase.agtiptop.pointTwo",
    "companiesShowcase.agtiptop.pointThree",
    "companiesShowcase.agtiptop.pointFour",
  ],
};

export default agTiptop;
