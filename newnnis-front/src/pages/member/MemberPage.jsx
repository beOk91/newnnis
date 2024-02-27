import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import StartIcon from "@/assets/images/star_1.svg";
import "./MemberPage.css";
const MemberPage = () => {
  const changeGroup = () => {};
  return (
    <>
      <div className="wrap">
        <div className="container">
          <div className="header">
            <Header screenName="멤버">
              <div className="sel_box">
                <select className="selectBox" onChange={changeGroup}>
                  <option value="a">땅</option>
                  <option value="b">불</option>
                  <option value="c">바람</option>
                  <option value="d">물</option>
                  <option value="e">마음</option>
                </select>
              </div>
              <button className="setBtn plus">+ 추가</button>
              <h3 className="gr_cl fm_GongGothic">멤버</h3>
              <button className="setBtn minus">- 삭제</button>
            </Header>
          </div>
          <section className="cont_box">
            <div>
              <div className="table">
                <ul className="thead">
                  <li>no</li>
                  <li>id/이름</li>
                  <li>그룹</li>
                  <li>가입일</li>
                  <li>승률</li>
                </ul>
                <ul className="tbody">
                  <li>
                    <ul>
                      <li className="photo">
                        <span className="num">01</span>
                        <p>{/* <img src="" alt="" /> */}</p>
                      </li>
                      <li className="idBox">
                        <p className="id">happy</p>
                        <p className="names">남아름</p>
                      </li>
                      <li className="group">
                        <p className="star">
                          <img src={StartIcon} alt="마스터-1" />
                        </p>

                        <select name="" id="">
                          <option value="">마스터</option>
                          <option value="">투어</option>
                          <option value="">챌린저</option>
                          <option value="">파이널</option>
                          <option value="">엘리트</option>
                        </select>
                      </li>
                      <li className="day">
                        <p>
                          2024
                          <br />
                          02.17
                        </p>
                      </li>
                      <li className="percent">
                        <p>100%</p>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <ul>
                      <li className="photo">
                        <span className="num">01</span>
                        <p>{/* <img src="" alt="" /> */}</p>
                      </li>
                      <li className="idBox">
                        <p className="id">
                          <input type="text" placeholder="ID" />
                        </p>
                        <p className="name">
                          <input type="text" placeholder="이름" />
                        </p>
                      </li>
                      <li className="group">
                        <p className="star">
                          <img src={StartIcon} alt="마스터-1" />
                        </p>
                        <select name="" id="">
                          <option value="">마스터</option>
                          <option value="">투어</option>
                          <option value="">챌린저</option>
                          <option value="">파이널</option>
                          <option value="">엘리트</option>
                        </select>
                      </li>
                      <li className="day">
                        <p>
                          2024
                          <br />
                          02.17
                        </p>
                      </li>
                      <li className="percent">
                        <p>100%</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default MemberPage;
