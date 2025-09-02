import App from "./App";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Projects from "./assets/pages/Projects";
import ReactDOM from "react-dom/client";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function FaviconHandler() {
  useEffect(() => {
    const favicon = document.getElementById("favicon") as HTMLLinkElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateFavicon = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        favicon.setAttribute("href", "/src/assets/img/LogoWHI.png");
      } else {
        favicon.setAttribute("href", "/src/assets/img/Logo.png");
      }
    };

    // Checa inicial
    updateFavicon(mediaQuery);

    // Escuta mudanças
    mediaQuery.addEventListener("change", updateFavicon);

    return () => {
      mediaQuery.removeEventListener("change", updateFavicon);
    };
  }, []);

  return null;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <FaviconHandler />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
