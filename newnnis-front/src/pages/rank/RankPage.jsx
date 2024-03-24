import Footer from "@/components/common/Footer";
import Header from "../../components/common/Header";
import { useState } from "react";
import { searchRankByGroup } from "../../api/newnnis";
useState;

const RankPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // 현재 날짜를 기본값으로 설정
  const [selectedGroup, setSelectedGroup] = useState("master");
  const [rankData, setRankData] = useState([]);
  const changeGroup = (e) => {
    console.log("changeGroup");
    let value = e.target.value;
    setSelectedGroup(value);
    setSelectedMember([]);
  };
  const onClickSearch = async () => {
    console.log("onClickSearch");
    const response = await searchRankByGroup({ userGroup: selectedGroup }); // await 사용하여 호출
    if (response.status === 200) {
      console.log(response);
      setRankData(response.data);
    }
  };
  return (
    <>
      <div className="wrap">
        <div className="container">
          <div className="header">
            <Header screenName="멤버순위">
              <div className="sel_box">
                <select className="selectBox" onChange={changeGroup}>
                  <option value="master">마스터</option>
                  <option value="tour">투어</option>
                  <option value="challenger">챌린저</option>
                  <option value="final">파이널</option>
                  <option value="elite">엘리트</option>
                </select>
              </div>
              <button
                className="btn btn-primary fm_GongGothic"
                onClick={onClickSearch}
              >
                {" "}
                조회
              </button>
            </Header>
          </div>
          <section className="sec_box">
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
                  {rankData &&
                    rankData.map((data, index) => (
                      // 여기서 화살표 함수에 대한 괄호를 사용하여 명시적인 return을 생략할 수 있습니다.
                      <tr key={index}>
                        <td>{index + 1}</td> <td>{data.name}</td>
                        <td>{data.matchCount}</td>
                        <td>{data.winPoints}</td>
                        <td>{data.winCount}</td>
                        <td>{data.loseCount}</td>
                        <td>{data.pointCount}</td> {/* 득점 */}
                        <td>{data.concedeCount}</td> {/* 실점 */}
                        <td>{data.pointCount - data.concedeCount}</td>{" "}
                      </tr>
                    ))}
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
