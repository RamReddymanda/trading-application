import React from "react"
import HomePage from "./landing_page/home/HomePage";
import { Routes,Route } from "react-router-dom";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
function App() {


  return (
    <Routes>
      
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/about" element={<AboutPage></AboutPage>}></Route>
      <Route path="/product" element={<ProductPage></ProductPage>}></Route>
      <Route path="/pricing" element={<PricingPage/>}></Route>
      <Route path="/support" element={<SupportPage/>}></Route>
      
    </Routes>
  )
}

export default App
