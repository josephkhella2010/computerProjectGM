/* import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeSection from "../HomePage/HomeSection";
import NavigationSection from "../Navigation/NavigationSection";
import ContactUsPage from "../ContactUs/ContactUsPage";
import AboutUsPage from "../aboutUs/AboutUsPage";
import Footer from "../footer/Footer";
import ProductSection from "../../ProductPage/ProductSection";
import SingleProductSection from "../singlePorductPage/SingleProductSection";

export default function RouterPage() {
  return (
    <Router>
      <NavigationSection />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
        <Route path="/product" element={<ProductSection />} />
        <Route path="/product/:id" element={<SingleProductSection />} />
      </Routes>
      <Footer />
    </Router>
  );
}
 */
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomeSection from "../HomePage/HomeSection";
import NavigationSection from "../Navigation/NavigationSection";
import ContactUsPage from "../ContactUs/ContactUsPage";
import Footer from "../footer/Footer";
import RecyclePage from "../Recycle/RecyclePage";
import AboutUsMainPage from "../AboutUsPage/AboutUsMainPage";
import WhatAcceptPage from "../aboutUs/What Accept/WhatAcceptPage";
import DropOffPage from "../aboutUs/DropOff/DropOffPage";
import DataDestructionPage from "../aboutUs/DataDestruction/DataDestructionPage";
import GovernmentPage from "../Industry/GovernmentPage/GovernmentPage";
import EducationPage from "../Industry/EducationPage/EducationPage";
import MedicalPage from "../Industry/MedicalPage/MedicalPage";
import FinancePage from "../Industry/FinancePage/FinancePage";

function AppRoutes() {
  return (
    <>
      <NavigationSection />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
        <Route path="/aboutUs" element={<AboutUsMainPage />} />
        <Route path="/aboutUs" element={<AboutUsMainPage />} />
        <Route path="/what-we-accept" element={<WhatAcceptPage />} />
        <Route path="/recycle" element={<RecyclePage />} />
        <Route path="/drop-off" element={<DropOffPage />} />
        <Route path="/data-destruction" element={<DataDestructionPage />} />
        <Route path="/government-page" element={<GovernmentPage />} />
        <Route path="/education-page" element={<EducationPage />} />
        <Route path="/medical-page" element={<MedicalPage />} />
        <Route path="/finance-page" element={<FinancePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function RouterPage() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
