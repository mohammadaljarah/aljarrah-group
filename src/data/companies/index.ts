import alghadak from "@/data/companies/alghadak";
import alkafaat from "@/data/companies/alkafaat";
import rdc from "@/data/companies/rdc";
import type { CompanyData } from "@/types";

export const companies: CompanyData[] = [rdc, alghadak, alkafaat];

export function getCompanyById(id: string): CompanyData | undefined {
  return companies.find((company) => company.id === id);
}
