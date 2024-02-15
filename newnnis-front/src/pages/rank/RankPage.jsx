import Footer from "@/components/common/Footer";
import Header from "../../components/common/Header";
import { useState } from "react";
useState;

const RankPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // 현재 날짜를 기본값으로 설정
  const changeGroup = (e) => {
    console.log("changeGroup");
    let value = e.target.value;
    setSelectedGroup(value);
    setSelectedMember([]);
  };

  return (
    <>
      <div className="wrap score">
        <div className="container">
          <div className="header">
            <Header screenName="멤버순위">
              <div className="sel_box">
                <select className="selectBox" onChange={changeGroup}>
                  <option value="a">땅</option>
                  <option value="b">불</option>
                  <option value="c">바람</option>
                  <option value="d">물</option>
                  <option value="e">마음</option>
                </select>
              </div>
            </Header>
          </div>
          <section className="cont_box">
            <div className="rankBox">
              <div>
                <div className="table">
                  <div className="thead">
                    <li>
                      <p>순위</p>
                      <p>이름</p>
                      <p>경기</p>
                      <p>승점</p>
                      <p>승</p>
                      <p>패</p>
                      <p>득점</p>
                      <p>실점</p>
                      <p>득실차</p>
                    </li>
                  </div>
                  <ul className="tbody">
                    <li>
                      <p>1</p>
                      <p>이태규</p>
                      <p>9</p>
                      <p>18</p>
                      <p>6</p>
                      <p>3</p>
                      <p>10</p>
                      <p>20</p>
                      <p>-10</p>
                    </li>
                    <li>
                      <p>2</p>
                      <p>정진호</p>
                      <p>9</p>
                      <p>18</p>
                      <p>6</p>
                      <p>3</p>
                      <p>10</p>
                      <p>20</p>
                      <p>-10</p>
                    </li>
                    <li>
                      <p>3</p>
                      <p>김정래</p>
                      <p>9</p>
                      <p>18</p>
                      <p>6</p>
                      <p>3</p>
                      <p>10</p>
                      <p>20</p>
                      <p>-10</p>
                    </li>
                    <li>
                      <p>4</p>
                      <p>한용진</p>
                      <p>9</p>
                      <p>18</p>
                      <p>6</p>
                      <p>3</p>
                      <p>10</p>
                      <p>20</p>
                      <p>-10</p>
                    </li>
                    <li>
                      <p>5</p>
                      <p>김승원</p>
                      <p>9</p>
                      <p>18</p>
                      <p>6</p>
                      <p>3</p>
                      <p>10</p>
                      <p>20</p>
                      <p>-10</p>
                    </li>
                    <li>
                      <p>6</p>
                      <p>김세호</p>
                      <p>9</p>
                      <p>18</p>
                      <p>6</p>
                      <p>3</p>
                      <p>10</p>
                      <p>20</p>
                      <p>-10</p>
                    </li>
                    <li>
                      <p>7</p>
                      <p>김성구</p>
                      <p>9</p>
                      <p>18</p>
                      <p>6</p>
                      <p>3</p>
                      <p>10</p>
                      <p>20</p>
                      <p>-10</p>
                    </li>
                    <li>
                      <p>8</p>
                      <p>황주현</p>
                      <p>9</p>
                      <p>18</p>
                      <p>6</p>
                      <p>3</p>
                      <p>10</p>
                      <p>20</p>
                      <p>-10</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default RankPage;
