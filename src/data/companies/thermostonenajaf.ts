import type { CompanyData } from "@/types";
import idkImage from "@/assets/idk.png";

const ThermoStoneNajaf: CompanyData = {
  id: "thermostone-najaf",
  route: "/companies/thermostone-najaf",
  logo: idkImage,
  namePath: "companiesShowcase.thermostonenajaf.name",
  summaryPath: "companiesShowcase.thermostonenajaf.summary",
  descriptionPath: "companiesShowcase.thermostonenajaf.description",
  pointsPaths: [
    "companiesShowcase.thermostonenajaf.pointOne",
    "companiesShowcase.thermostonenajaf.pointTwo",
    "companiesShowcase.thermostonenajaf.pointThree",
    "companiesShowcase.thermostonenajaf.pointFour",
  ],
};

export default ThermoStoneNajaf;
