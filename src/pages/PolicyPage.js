// PolicyPage.js
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/PolicyPage/Footer";
import LanguageSelector from "./../components/PolicyPage/LanguageSelector";
import ContentAreaPP from "../components/PolicyPage/ContentAreaPP";

function PolicyPage() {
  const [language, setLanguage] = useState("English");

  return (
    <div>
      <Navbar />
      <div className="bg-custom-green-whitish text-custom-dark-blue p-8">
        <div dir={language === "Arabic" ? "rtl" : "ltr"} className="max-w-5xl mx-auto">
          <LanguageSelector language={language} setLanguage={setLanguage} />
          <ContentAreaPP language={language} />
        </div>
      </div>
      <Navbar />
      <Footer />
    </div>
  );
}

export default PolicyPage;
