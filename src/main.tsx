import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import "@/i18n.ts";
import { Layout } from "@/components/layout";

// eslint-disable-next-line react-refresh/only-export-components
function EmptyPage() {
  return null;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<></>} />
          <Route path="aboutus" element={<EmptyPage />} />
          <Route path="companies" element={<EmptyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
