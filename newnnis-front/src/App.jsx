import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MatchPage from "@/pages/match/MatchPage";
import ScorePage from "@/pages/score/ScorePage";
import MemberPage from "@/pages/member/MemberPage";
import MyInfoPage from "@/pages/myinfo/MyInfoPage";
import RankPage from "@/pages/rank/RankPage";
import LoginPage from "@/pages/login/LoginPage";
// import Loading from "./components/common/Loading";
import ProtectedRoute from "@/components/ProtectedRoute";
import AuthProvider from "@/context/AuthContext";
import { UserProvider } from "@/context/UserContext"; // 경로는 실제 구조에 맞게 조정
function App() {
  return (
    <>
      <AuthProvider>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/"
                element={<ProtectedRoute element={<MatchPage />} />}
              />
              <Route
                path="/score"
                element={<ProtectedRoute element={<ScorePage />} />}
              />
              <Route
                path="/rank"
                element={<ProtectedRoute element={<RankPage />} />}
              />{" "}
              <Route
                path="/member"
                element={<ProtectedRoute element={<MemberPage />} />}
              />
              <Route
                path="/myinfo"
                element={<ProtectedRoute element={<MyInfoPage />} />}
              />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </AuthProvider>
    </>
  );
}

export default App;
