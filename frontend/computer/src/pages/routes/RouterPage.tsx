import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeSection from "../HomePage/HomeSection";
import NavigationSection from "../Navigation/NavigationSection";
import ContactUsPage from "../ContactUs/ContactUsPage";
import AboutUsPage from "../aboutUs/AboutUsPage";
import Footer from "../footer/Footer";
export default function RouterPage() {
  return (
    <Router>
      <NavigationSection />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
