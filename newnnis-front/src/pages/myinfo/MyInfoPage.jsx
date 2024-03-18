import Footer from "@/components/common/Footer";
import { useAuth } from "@/context/AuthContext";
const MyInfoPage = () => {
  const { logout } = useAuth();
  return (
    <>
      <div className="wrap mypage">
        <div className="container">
          <section className="sec_box">
            <div className="infoBox">
              <div className="photo">
                {/* <input type="file" name="" id=""> Optional File Upload could go here */}
                <span className="icon"></span>
              </div>
              <div className="userInfo">
                <div>
                  <p className="user_name">김예슬</p>
                  <p className="star">
                    <img src="../asset/images/star_1.svg" alt="마스터-1" />
                    <span>엘리트</span>
                  </p>
                </div>
                <div className="boxst">
                  <div>
                    <p>구력</p>
                    <p>1년6개월</p>
                  </div>
                  <div>
                    <p>순위</p>
                    <p>1위</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cont_box game_box two_box">
              <div className="join">
                <p className="tit">참여한 게임</p>
                <p>
                  <span className="count">8</span>게임
                </p>
              </div>
              <div className="ramain">
                <p className="tit">남은 게임</p>
                <p>
                  <span className="count">8</span>게임
                </p>
              </div>
            </div>
          </section>
          <section className="sec_box roundBg">
            <div className="cont_box record_box">
              <div>
                <p className="tit">승</p>
                <p>
                  <span>2</span>
                </p>
              </div>
              <div>
                <p className="tit">패</p>
                <p>
                  <span>2</span>
                </p>
              </div>
              <div>
                <p className="tit">점수</p>
                <p>
                  <span>2</span>
                </p>
              </div>
              <div>
                <p className="tit">총점</p>
                <p>
                  <span>2</span>
                </p>
              </div>
              <div>
                <p className="tit">승률</p>
                <p>
                  <span>28</span>%
                </p>
              </div>
            </div>
            <div className="cont_box pair_box two_box">
              <div className="best">
                <p className="tit">환상의 짝꿍</p>
                <div className="who_box dp_f">
                  <p>
                    <span className="ft_c">R</span> {/*랭킹전*/}
                    <span className="pair_neme">김예슬</span>
                  </p>
                  <p>
                    <span className="ft_c">E</span> {/*이벤트전*/}
                    <span className="pair_neme">김예슬</span>
                  </p>
                </div>
              </div>
              <div className="worst">
                <p className="tit">환장의 짝꿍</p>
                <div className="who_box dp_f">
                  <p>
                    <span className="ft_c">R</span> {/*랭킹전*/}
                    <span className="pair_neme">김예슬</span>
                  </p>
                  <p>
                    <span className="ft_c">E</span> {/*이벤트전*/}
                    <span className="pair_neme">김예슬</span>
                  </p>
                </div>
              </div>
            </div>
            <button className="logout" onClick={logout}>
              로그아웃
            </button>
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default MyInfoPage;
