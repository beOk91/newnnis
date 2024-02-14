import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MatchPage from "@/pages/match/MatchPage";
import ScorePage from "@/pages/score/ScorePage";
import MemberPage from "@/pages/member/MemberPage";
import MyInfoPage from "@/pages/myinfo/MyInfoPage";
import RankPage from "@/pages/rank/RankPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MatchPage />} />
          <Route path="/score" element={<ScorePage />} />
          <Route path="/rank" element={<RankPage />} />
          <Route path="/member" element={<MemberPage />} />
          <Route path="/myinfo" element={<MyInfoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
