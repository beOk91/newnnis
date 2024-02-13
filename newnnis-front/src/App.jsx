import { useState } from "react";
import MatchPage from "./pages/match/MatchPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScorePage from "./pages/score/ScorePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MatchPage />} />
          <Route path="/score" element={<ScorePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
