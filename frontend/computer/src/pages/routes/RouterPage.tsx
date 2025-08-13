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
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomeSection from "../HomePage/HomeSection";
import NavigationSection from "../Navigation/NavigationSection";
import ContactUsPage from "../ContactUs/ContactUsPage";
import AboutUsPage from "../aboutUs/AboutUsPage";
import Footer from "../footer/Footer";
import ProductSection from "../../ProductPage/ProductSection";
import SingleProductSection from "../singlePorductPage/SingleProductSection";
import LoadingSection from "../LoadingPage/LoadingSection";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

function AppRoutes() {
  const location = useLocation();
  const { isLoading } = useSelector(
    (state: RootState) => state.isLoadingReducer
  );
  const currentPath = isLoading ? "/loading" : location.pathname;

  return (
    <>
      <NavigationSection />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
        <Route path="/product" element={<ProductSection />} />
        <Route path="/product/:id" element={<SingleProductSection />} />
        <Route path="/loading" element={<LoadingSection />} />
      </Routes>
      {currentPath !== "/loading" ? <Footer /> : null}
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
