import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import "@/i18n.ts";
import { Layout } from "@/components/layout/layout";
import { HomePage } from "@/pages/home";
import { AboutUsPage } from "@/pages/aboutus";
import { CompaniesPage } from "@/pages/companies";
import { CompanyDetailPage } from "@/pages/companyDetail";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="aboutus" element={<AboutUsPage />} />
          <Route path="companies" element={<CompaniesPage />} />
          <Route path="companies/:id" element={<CompanyDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
