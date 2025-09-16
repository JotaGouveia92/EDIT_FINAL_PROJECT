import { BrowserRouter, Routes, Route } from "react-router-dom";
import Work from "./pages/work.jsx";
import "./assets/scss/main.scss";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AboutMe from "./pages/aboutMe.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/ContactPage" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
