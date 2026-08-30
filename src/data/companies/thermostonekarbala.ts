import type { CompanyData } from "@/types";
import idkImage from "@/assets/idk.png";

const ThermoStoneKarbala: CompanyData = {
  id: "thermostone-karbala",
  route: "/companies/thermostone-karbala",
  logo: idkImage,
  namePath: "companiesShowcase.thermostonekarbala.name",
  summaryPath: "companiesShowcase.thermostonekarbala.summary",
  descriptionPath: "companiesShowcase.thermostonekarbala.description",
  pointsPaths: [
    "companiesShowcase.thermostonekarbala.pointOne",
    "companiesShowcase.thermostonekarbala.pointTwo",
    "companiesShowcase.thermostonekarbala.pointThree",
    "companiesShowcase.thermostonekarbala.pointFour",
  ],
};

export default ThermoStoneKarbala;
