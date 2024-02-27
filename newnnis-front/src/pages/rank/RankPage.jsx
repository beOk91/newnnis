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
      <div className="wrap">
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
              <table className="table">
                <thead className="thead">
                  <tr>
                    <th>순위</th>
                    <th>이름</th>
                    <th>경기</th>
                    <th>승점</th>
                    <th>승</th>
                    <th>패</th>
                    <th>득점</th>
                    <th>실점</th>
                    <th>득실차</th>
                  </tr>
                </thead>
                <tbody className="tbody">
                  <tr>
                    <td>1</td>
                    <td>이태규</td>
                    <td>9</td>
                    <td>18</td>
                    <td>6</td>
                    <td>3</td>
                    <td>10</td>
                    <td>20</td>
                    <td>-10</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>정진호</td>
                    <td>9</td>
                    <td>18</td>
                    <td>6</td>
                    <td>3</td>
                    <td>10</td>
                    <td>20</td>
                    <td>-10</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>김정래</td>
                    <td>9</td>
                    <td>18</td>
                    <td>6</td>
                    <td>3</td>
                    <td>10</td>
                    <td>20</td>
                    <td>-10</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>한용진</td>
                    <td>9</td>
                    <td>18</td>
                    <td>6</td>
                    <td>3</td>
                    <td>10</td>
                    <td>20</td>
                    <td>-10</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>김승원</td>
                    <td>9</td>
                    <td>18</td>
                    <td>6</td>
                    <td>3</td>
                    <td>10</td>
                    <td>20</td>
                    <td>-10</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>김세호</td>
                    <td>9</td>
                    <td>18</td>
                    <td>6</td>
                    <td>3</td>
                    <td>10</td>
                    <td>20</td>
                    <td>-10</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>김성구</td>
                    <td>9</td>
                    <td>18</td>
                    <td>6</td>
                    <td>3</td>
                    <td>10</td>
                    <td>20</td>
                    <td>-10</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>황주현</td>
                    <td>9</td>
                    <td>18</td>
                    <td>6</td>
                    <td>3</td>
                    <td>10</td>
                    <td>20</td>
                    <td>-10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default RankPage;
