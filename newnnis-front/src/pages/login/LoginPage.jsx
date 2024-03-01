import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const onClickLogin = () => {
    console.log(id, "id");
    console.log(pwd, "pwd");
    if (id === "admin" && pwd === "1234") {
      login(
        "token_" +
          Math.random().toString(36).substr(2) +
          Date.now().toString(36)
      );
      navigate("/");
      alert("로그인 성공!");
    } else {
      alert("비밀번호가 틀렸습니다!");
    }
  };
  return (
    <>
      <div id="wrap" className="wrap main">
        <main className="container">
          <div className="kv"></div>

          <section className="sec_box roundBg">
            <div className="loginBox">
              <div className="logo"></div>
              <div className="login_cont">
                <div className="idBox">
                  <input
                    type="text"
                    name="userId"
                    placeholder="이름"
                    autocomplete="off"
                    onChange={(e) => setId(e.target.value)}
                  />
                </div>
                <div className="pwBox">
                  <input
                    type="Password"
                    name="userPw"
                    placeholder="비밀번호"
                    autocomplete="off"
                    onChange={(e) => setPwd(e.target.value)}
                  />
                </div>
                <div className="autologin">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="autologin"
                  />
                  <label for="">자동로그인</label>
                </div>
                <button className="goBtn" onClick={onClickLogin}>
                  로그인
                </button>
              </div>
              <div className="BtnBox">
                <button id="joinBtn" className="joinBtn">
                  회원가입
                </button>
                <button id="findBtn" className="findBtn">
                  비밀번호 찾기
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
export default LoginPage;
