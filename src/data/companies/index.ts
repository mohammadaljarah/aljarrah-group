import alghadak from "@/data/companies/alghadak";
import alkafaat from "@/data/companies/alkafaat";
import rdc from "@/data/companies/rdc";
import bisculata from "@/data/companies/bisculata";
import agTiptop from "@/data/companies/agtiptop";
import thermostoneNajaf from "@/data/companies/thermostonenajaf";
import thermostoneKarbala from "@/data/companies/thermostonekarbala";
import alYousuf from "@/data/companies/alyousuf";
import alKhazerCity from "@/data/companies/alkhazercity";
import type { CompanyData } from "@/types";

export const companies: CompanyData[] = [
  rdc,
  alghadak,
  alkafaat,
  bisculata,
  agTiptop,
  thermostoneNajaf,
  thermostoneKarbala,
  alYousuf,
  alKhazerCity,
];

export interface SectorGroup {
  sector: string;
  companies: CompanyData[];
}

export const sectoredCompanies: SectorGroup[] = [
  {
    sector: "companiesShowcase.sectors.agricultural",
    companies: [rdc, alghadak],
  },
  {
    sector: "companiesShowcase.sectors.foodIndustry",
    companies: [bisculata, agTiptop],
  },
  {
    sector: "companiesShowcase.sectors.manufacturing",
    companies: [thermostoneNajaf, thermostoneKarbala],
  },
  {
    sector: "companiesShowcase.sectors.health",
    companies: [alkafaat, alYousuf],
  },
  {
    sector: "companiesShowcase.sectors.uncategorized",
    companies: [alKhazerCity],
  },
];

export function getCompanyById(id: string): CompanyData | undefined {
  return companies.find((company) => company.id === id);
}
