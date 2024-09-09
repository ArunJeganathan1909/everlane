import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/components/Header";
import Footer from "./layout/components/Footer";
import ScrollToTop from "./layout/components/ScrollToTop";
import LandingPage from "./layout/pages/LandingPage";
import Men from "./layout/pages/Men";
import Women from "./layout/pages/Women";
import AboutPage from "./layout/pages/AboutPage";
import Product from "./layout/pages/Product";
import AboutUsPage from "./layout/components/AboutUsPage";
import StoresPage from "./layout/components/StoresPage";
import EverworldStoriesPage from "./layout/components/EverworldStories";
import BlogsPage from "./layout/pages/BlogsPage";
import SearchPage from "./layout/pages/SearchPage";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/productWomen/:productname" element={<Product />} />
        <Route path="/productMen/:productname" element={<Product />} />
        <Route path="/about" element={<AboutPage />}>
          <Route index element={<AboutUsPage />} />
          <Route path="aboutUs" element={<AboutUsPage />} />
          <Route path="stores" element={<StoresPage />} />
          <Route path="everworldStories" element={<EverworldStoriesPage />} />
          <Route
            path="everworldStories/blogs/:blogTitle"
            element={<BlogsPage />}
          />
        </Route>
        <Route path="/search" element={<SearchPage/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
