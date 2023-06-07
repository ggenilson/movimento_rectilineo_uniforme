import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Caso1 } from "./components/Caso-1.tsx";
import { Caso2 } from "./components/Caso-2.tsx";
import Index from "./App.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} />
        <Route path="caso-1" element={<Caso1 />} />
        <Route path="caso-2" element={<Caso2 />} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
