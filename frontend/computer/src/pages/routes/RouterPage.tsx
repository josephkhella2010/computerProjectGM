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
import AboutUsPage from "../aboutUs/AboutUsPage";
import Footer from "../footer/Footer";
import RecyclePage from "../Recycle/RecyclePage";

function AppRoutes() {
  return (
    <>
      <NavigationSection />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
        <Route path="/recycle" element={<RecyclePage />} />
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
