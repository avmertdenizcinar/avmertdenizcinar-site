import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BosanmaDavasiSayfasi from "./pages/BosanmaDavasiSayfasi";
import IcraTakibiSayfasi from "./pages/IcraTakibiSayfasi";
import KiraDavasiSayfasi from "./pages/KiraDavasiSayfasi";
import CezaSavunmasiSayfasi from "./pages/CezaSavunmasiSayfasi";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/bosanma-davasi-nasil-acilir" element={<BosanmaDavasiSayfasi />} />
        <Route path="/blog/icra-takibi-nasil-baslatilir" element={<IcraTakibiSayfasi />} />
        <Route path="/blog/kira-davasi-nasil-acilir" element={<KiraDavasiSayfasi />} />
        <Route path="/blog/ceza-sanigi-savunmasi-nasil-yapilir" element={<CezaSavunmasiSayfasi />} />
      </Routes>
    </Router>
  );
}

export default App;