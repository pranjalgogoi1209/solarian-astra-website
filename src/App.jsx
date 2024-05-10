import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
      </Routes>

      {/* footer */}
      <Footer />
    </BrowserRouter>
  );
}
