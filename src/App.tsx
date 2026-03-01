/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  Navbar, 
  SocialSidebar, 
  Hero, 
  KeyEffects, 
  CompanyIntro, 
  ProductIntro, 
  TechnologyIntro, 
  ApplicableVehicles, 
  InstallationGallery, 
  Footer 
} from "./components/LandingPage";
import Admin from "./components/Admin";

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  if (path === "/admin") {
    return <Admin />;
  }

  return (
    <div className="min-h-screen">
      <SocialSidebar />
      <Navbar />
      <main>
        <Hero />
        <KeyEffects />
        <CompanyIntro />
        <ProductIntro />
        <TechnologyIntro />
        <ApplicableVehicles />
        <InstallationGallery />
        <Footer />
      </main>
    </div>
  );
}
