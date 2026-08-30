import type { CompanyData } from "@/types";
import idkImage from "@/assets/idk.png";

const alYousuf: CompanyData = {
  id: "al-yousuf",
  route: "/companies/al-yousuf",
  logo: idkImage,
  namePath: "companiesShowcase.alyousuf.name",
  summaryPath: "companiesShowcase.alyousuf.summary",
  descriptionPath: "companiesShowcase.alyousuf.description",
  pointsPaths: [
    "companiesShowcase.alyousuf.pointOne",
    "companiesShowcase.alyousuf.pointTwo",
    "companiesShowcase.alyousuf.pointThree",
    "companiesShowcase.alyousuf.pointFour",
  ],
};

export default alYousuf;
